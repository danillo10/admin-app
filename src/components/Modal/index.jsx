import React from 'react'
import Modal from './Component'

const Component = ({
  id = 'modal',
  visibleModal,
  setVisibleModal,
  children
}) => {
  const onClose = () => setVisibleModal(!visibleModal)
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <Modal
      id={id}
      children={children}
      visibleModal={visibleModal}
      onClick={handleOutsideClick}
    />
  )
}

export default Component
