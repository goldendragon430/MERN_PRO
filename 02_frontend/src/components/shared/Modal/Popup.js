import React, { useEffect, useRef, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import ReactDOM from 'react-dom'

/**
 * Component to manage login behavior without UI component
 */
export const Popup = (props) => {
  const {
    UIComponent,
    open,
    backdropClassName,
    closeOnBackdrop,
    onClose
  } = props

  const modalRef = useRef(null)

  const [root, setRoot] = useState()
  const [defaultOverflow, setDefaultOverflow] = useState()
  const [defaultPaddingRight, setDefaultPaddingRight] = useState()
  const [isFirst, setIsFirst] = useState(false)

  /**
   * Use onClose function when esc key was pressed
   * @param {Event} e Event when keydown
   */
  const handleKeyDown = (e) => {
    e.keyCode === 27 && e.target.classList.contains('popup-component') && onClose && onClose()
  }

  /**
   * Use onClose function when backdrop was clicked
   * @param {Event} e Event when click in backdrop
   */
  const handleClick = (e) => {
    closeOnBackdrop && e.target.classList.contains('popup-component') && onClose && onClose()
  }

  /**
   * Check backdrop on close or unmount
   */
  const checkRemoveBackdrop = () => {
    const modals = document.querySelectorAll('.popup-component')
    /**
     * Focus next popup when close a popup
     */
    if (!open && modals.length > 1) {
      modals.length > 1 && modals[modals.length - 1].focus()
    }
    /**
     * Remove backdrop when close popup and modals quantity is 0
     * Remove backdrop when unmount and modals quantity is 1
     */

    if (isFirst) {
      const modalRoot = window.document.getElementById('app-modals')
      if (modalRoot) {
        modalRoot.remove()
      }
      window.document.body.style.overflow = defaultOverflow
      window.document.body.style.paddingRight = defaultPaddingRight
    }
  }

  useEffect(() => {
    if (open) {
      let modalRoot = window.document.getElementById('app-modals')
      if (!modalRoot) {
        modalRoot = window.document.createElement('div')
        modalRoot.id = 'app-modals'
        modalRoot.className = 'popup-component-backdrop popup-backdrop' + (backdropClassName ? ` ${backdropClassName}` : '')
        document.body.append(modalRoot)
        setRoot(modalRoot)
        setIsFirst(true)
        setDefaultOverflow(window.document.body.style.overflow)
        setDefaultPaddingRight(window.document.body.style.paddingRight)
      } else {
        setRoot(modalRoot)
      }
      if (modalRef.current) {
        modalRef.current.focus()
      }
    }
    /**
     * Remove backdrop
     */
    return checkRemoveBackdrop
  }, [open, isFirst, defaultOverflow, defaultPaddingRight])

  const popupStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 2001,
    outline: 'none'
  }

  return (
    <>
      {
        open && root && ReactDOM.createPortal(
          <div className='popup-component' style={popupStyles} onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={-1} autoFocus ref={modalRef}>
            {
              UIComponent && <UIComponent {...props} />
            }
          </div>,
          root
        )
      }
    </>
  )
}

Popup.propTypes = {
  UIComponent: PropTypes.elementType,
  /**
   * Show or hide popup
   */
  open: PropTypes.bool,
  /**
   * Close popup when backdrop was clicked
   */
  closeOnBackdrop: PropTypes.bool,
  /**
   * Close popup when ESC key was pressed
   */
  closeWithKeyboard: PropTypes.bool,
  /**
   * Title of popup
   */
  title: PropTypes.string,
  /**
   * Content of popup
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(string),
    PropTypes.elementType,
    PropTypes.element
  ]),
  /**
   * Function when accept popup
   */
  onAccept: PropTypes.func,
  /**
   * Function when cancel popup
   */
  onCancel: PropTypes.func,
  /**
   * Function when close popup
   */
  onClose: PropTypes.func
}

Popup.defaultProps = {
  open: false,
  closeOnBackdrop: true,
  closeWithKeyboard: true
}