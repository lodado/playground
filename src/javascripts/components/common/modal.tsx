/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const portal = document.getElementById('portal');

export default function Modal({ isOpen, onClose, children }: Props): JSX.Element {
  const modalVisible = isOpen ? 'modal__container-visible' : 'modal__container-invisible';

  return createPortal(
    <div className={modalVisible}>
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__content">{children}</div>
    </div>,
    portal,
  );
}
