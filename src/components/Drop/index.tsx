import React, { useState } from 'react'

import { Container, DropFiles, SubmitButton, DropFilesZone } from './styles'
import Dropzone from 'react-dropzone'
import api from '../../services/api'

export interface Props {
  challengeName?: string;
}
interface BodyRequest {
  [key: string]: any
}

interface Challenge {
  name: string;
  content: string;
}

const Drop: React.FC<Props> = ({ challengeName }) => {
  const [fileName, setFileName] = useState('')
  const [currentChallengeName, setCurrentChallengeName] = useState<string>('challenge')
  const [bodyRequest, setBodyRequest] = useState <BodyRequest | null >(null)

  if (challengeName && challengeName !== currentChallengeName) {
    setCurrentChallengeName(challengeName)
    setFileName('')
    setBodyRequest(null)
  }

  const handleDrop = (acceptedFile: any) => {
    setFileName(acceptedFile.map((file: any) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', async () => {
        if (reader) {
          const result = (reader.result as string).split(',')[1]

          const bodyRequest: BodyRequest = {
            message: `Upload file ${challengeName}/${file.name}`,
            committer: {
              name: 'minecodebot',
              email: 'minecode.geral@gmail.com'
            },
            content: `${result}`
          }

          try {
            const fileAlreadyExist = await api.get(`/contents/files/${challengeName}/${file.name}`)
            bodyRequest.sha = `${fileAlreadyExist.data.sha}`
          } catch (error) {
            console.log(error)
          }
          setBodyRequest(bodyRequest)
        }
      }, false)
      return file.name
    }))
  }

  const submitFile = async (bodyRequest: BodyRequest, fileName: string) => {
    console.log(bodyRequest)
    console.log(fileName)
    const config = {
      headers: { Authorization: `token ${process.env.REACT_APP_TOKEN}` }
    }
    console.log(config)

    await api.put(`/contents/files/${challengeName}/${fileName}`, bodyRequest, config)
  }

  return (
    <Container>
      {challengeName
        ? <Dropzone
          onDrop={handleDrop}
        >
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragReject
          }) => {
            return (
              <DropFiles>
                <DropFilesZone {...getRootProps()}>
                  <input {...getInputProps()} />
                  <span>{isDragActive ? '📂' : '📁'}</span>
                  <p>
                    {fileName ? <>{fileName}</> : isDragReject ? <> Invalid file </> : <>Drag & drop images, or click to select files</>}
                  </p>
                </DropFilesZone>
                {bodyRequest ? <SubmitButton onClick={() => submitFile(bodyRequest, fileName)}>Submit</SubmitButton> : <></>}
              </DropFiles>
            )
          }}
        </Dropzone> : <></>
      }
    </Container>
  )
}

export default Drop
