import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Button from '../Button/Button'
import './Modal.scss'

const customStyles = {
  content: {
    width: '50%',
    padding: '80px 48px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    maxHeight: '100%'
  }
}

class Modal extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal () {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00'
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  render () {
    return (
      <span>
        <Button modal={this.openModal}>{this.props.ButtonLabel}</Button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
          overlayClassName='modal-overlay'
        >
          <a onClick={this.closeModal} className='close-button'><span className='ti-close close-modal' /></a>
          {this.props.children}
        </ReactModal>
      </span>
    )
  }
}

export default Modal
