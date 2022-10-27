import React from 'react'
import { Modal } from './styled'

const Component = (props) => {
  return (
    props.visibleModal && (
      <Modal id={props.id} onClick={props.onClick}>
        {props.children}
      </Modal>
    )
  )
}

export default Component
