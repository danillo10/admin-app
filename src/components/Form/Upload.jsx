import React from 'react'
import Dropzone from 'react-dropzone'
import { InputLabel, Label } from './styled'

import { DropContainer, UploadMessage, DropBox } from './styled'

const Component = (props) => {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Escolha um arquivo ou arraste aqui!</UploadMessage>
    }
    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>
    }
    return <UploadMessage type="success">Solte os arquivos aqui!</UploadMessage>
  }

  const maxSize = 2 * 1024 * 1024
  const error = {
    'file-too-large': `O Tamanho do arquivo deve ser menor que ${maxSize} bytes`,
    'file-invalid-type': `O arquivo deve ser uma imagem`
  }

  return (
    <InputLabel className={props.flexGrow ? props.flexGrow : null}>
      <Label>
        <label htmlFor={props.name}>{props.label}</label>
      </Label>
      <DropBox>
        <Dropzone
          accept="image/*"
          maxSize={maxSize}
          onDropAccepted={props.onUpload}
        >
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragReject,
            fileRejections
          }) => {
            fileRejections.map((item) => props.setErrors(item.errors))
            return (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                {renderDragMessage(isDragActive, isDragReject)}
              </DropContainer>
            )
          }}
        </Dropzone>

        {props.errors.map((item, idx) => (
          <UploadMessage type="error" key={idx}>
            {error[item.code]}
          </UploadMessage>
        ))}

        {props.done ? (
          <p>Aguarde...</p>
        ) : (
          props.fileUrl && (
            <div>
              <img src={props.fileUrl} alt="analyticdbi" />
            </div>
          )
        )}
      </DropBox>
    </InputLabel>
  )
}

export default Component
