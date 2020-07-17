import React, { useState } from 'react'

import { Container, DropFiles, SubmitButton, DropFilesZone } from './styles'
import Dropzone from 'react-dropzone'
import apiCodeContest from '../../services/apiCodeContest'

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

interface Push {
  data: {
    commit: {
      sha: string
    }
  }
  id: number
}

interface Run {
  data: {
    // eslint-disable-next-line camelcase
    check_runs: [{
      status: string,
      conclusion: string
    }],
    total_count: number
  }
}

const Drop: React.FC<Props> = ({ challengeName }) => {
  const [fileName, setFileName] = useState('')
  const [solution, setSolution] = useState('')
  const [inProgress, setInProgress] = useState(false)
  const [sendedFile, setSendedFile] = useState(false)
  const [currentChallengeName, setCurrentChallengeName] = useState<string>('challenge')
  const [bodyRequest, setBodyRequest] = useState <BodyRequest | null >(null)

  const config = {
    headers: {
      Authorization: `token ${process.env.REACT_APP_TOKEN}`,
      Accept: 'application/vnd.github.antiope-preview+json'
    }
  }

  if (challengeName && challengeName !== currentChallengeName) {
    setCurrentChallengeName(challengeName)
    setFileName('')
    setBodyRequest(null)
    setSendedFile(false)
    setSolution('')
    setInProgress(false)
  }

  const handleDrop = (acceptedFile: any) => {
    setSendedFile(false)
    setFileName(acceptedFile.map((file: any) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', async () => {
        if (reader) {
          const result = (reader.result as string).split(',')[1]

          const bodyRequest: BodyRequest = {
            message: `${challengeName}/user1`,
            committer: {
              name: 'minecodebot',
              email: 'minecode.geral@gmail.com'
            },
            content: `${result}`
          }

          try {
            const fileAlreadyExist = await apiCodeContest.get(`/contents/${challengeName}/user1/resolution.py`, config)
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

  const submitFile = async (bodyRequest: BodyRequest) => {
    setSolution('')
    setInProgress(true)
    const push: Push = await apiCodeContest.put(`/contents/${challengeName}/user1/resolution.py`, bodyRequest, config)
    // eslint-disable-next-line no-var
    let run: Run = await apiCodeContest.get(`/commits/${push.data.commit.sha}/check-runs`, config)
    while (run.data.total_count === 0) {
      run = await apiCodeContest.get(`/commits/${push.data.commit.sha}/check-runs`, config)
    }
    let runState = run.data.check_runs[0].status
    while (runState !== 'completed') {
      run = await apiCodeContest.get(`/commits/${push.data.commit.sha}/check-runs`, config)
      runState = run.data.check_runs[0].status
    }
    setSolution(run.data.check_runs[0].conclusion)
    setInProgress(false)
    setSendedFile(true)
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
                {inProgress ? <p>Testing your solution. Wait a moment, please!</p> : bodyRequest && !sendedFile ? <SubmitButton onClick={() => submitFile(bodyRequest)}>Submit</SubmitButton> : sendedFile && solution ? <p>{solution}</p> : <></>}
              </DropFiles>
            )
          }}
        </Dropzone> : <></>
      }
    </Container>
  )
}

export default Drop
