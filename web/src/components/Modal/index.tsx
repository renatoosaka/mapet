import React, { useState, useEffect} from 'react';
import ReactDom from 'react-dom'

import {
  Overlay,
  Wrapper,
  Container,
  Header,
  ButtonClose,
  Body,
  Footer,
} from './styles'

interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
}

const Modal: React.FC<ModalProps> = ({ isShowing, toggle, children }) => {
  useEffect(() => {
    const listner = function (e: KeyboardEvent ) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        isShowing && toggle();
      }
    }

    window.addEventListener('keyup', listner)

    return (() => {
      window.removeEventListener('keyup', listner)
    })

  }, [isShowing, toggle])

  return (
    isShowing ? ReactDom.createPortal(
      <Overlay>
        <Wrapper>
          <Container>
            {children}
          </Container>
        </Wrapper>
      </Overlay>, document.body
    ) : null
  )
}

interface ModalHeaderProps {
  toggle: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ toggle, children }) => (
	<Header>
		{children || 'Title'}
    <ButtonClose data-dismiss="modal" aria-label="Close" onClick={toggle}>
      &times;
    </ButtonClose>
	</Header>
)

export const ModalBody: React.FC = ({ children }) => (
	<Body>
		{children}
	</Body>
)

export const ModalFooter: React.FC = ({ children }) => (
	<Footer>
		{children}
  </Footer>
)

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  }
}

export default Modal;
