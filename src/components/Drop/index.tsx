import React, { useState } from 'react'

import { Container, DropFiles } from './styles'
import Dropzone from 'react-dropzone'
import api from '../../services/api'

interface BodyRequest {
  [key: string]: any
}

const Drop: React.FC = () => {
  const [fileName, setFileName] = useState()
  const handleDrop = (acceptedFile: any) => {
    setFileName(acceptedFile.map((file: any) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', async () => {
        const config = {
          headers: { Authorization: `token ${process.env.REACT_APP_TOKEN}` }
        }
        if (reader) {
          const result = (reader.result as string).split(',')[1]

          const bodyRequest: BodyRequest = {
            message: `Upload file ${file.name}`,
            committer: {
              name: 'minecodebot',
              email: 'minecode.geral@gmail.com'
            },
            content: `${result}`
          }

          try {
            const fileAlreadyExist = await api.get(`/contents/files/${file.name}`)
            bodyRequest.sha = `${fileAlreadyExist.data.sha}`
          } catch (error) {
            console.log(error)
          }

          console.log(bodyRequest)
          const apiPut = await api.put(`/contents/files/${file.name}`, bodyRequest, config)
          console.log(apiPut)
          
        }
      }, false)
      return file.name
    }))
  }
  return (
    <Container>
      <Dropzone
        onDrop={handleDrop}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        }) => {
          return (
            <DropFiles {...getRootProps()}>
              <input {...getInputProps()} />
              <span>{isDragActive ? '📂' : '📁'}</span>
              <p>
                {fileName ? <>{fileName}</> : <>Drag & drop images, or click to select files</>}</p>
            </DropFiles>
          )
        }}
      </Dropzone>
    </Container>
  )
}

export default Drop
