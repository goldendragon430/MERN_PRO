import React from 'react'
import MdClose from '@meronex/icons/md/MdClose'
import { Popup } from './Popup'
import {
  ModalDialog,
  ModalTitle,
  ModalIcon,
  ModalHeader,
  ModalBackHeader
} from './styles'

const ModalUI = (props) => {
  const {
    title,
    children,
    onClose,
    isTransparent,
    hideCloseDefault,
    isProductForm,
    type
  } = props

  return (
    <ModalDialog
      className='popup-dialog'
      width={props.width}
      height={props.height}
      padding={props.padding}
      isTransparent={isTransparent}
    >
      {isProductForm && (
        <ModalBackHeader />
      )}
      {!hideCloseDefault && (
        <ModalIcon>
          { type && <MdClose style = {{fill : 'black'}} onClick={() => onClose()} />}
          { !type && <MdClose onClick={() => onClose()} />}
        </ModalIcon>
      )}
      <ModalHeader>
        {title && (
          <ModalTitle>
            {title}
          </ModalTitle>
        )}
      </ModalHeader>
      {children}
    </ModalDialog>
  )
}

export const Modal = (props) => {
  const ModalProps = {
    ...props,
    UIComponent: ModalUI
  }

  return (
    <Popup {...ModalProps} />
  )
}
