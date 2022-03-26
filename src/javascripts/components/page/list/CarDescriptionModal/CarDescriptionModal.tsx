import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import { CHANGE_MODAL_STATUS } from '@Redux/constrant';
import { action } from '@Redux/action';
import Modal from '@Component/common/modal';

import CarDescriptionContent from './CarDescriptionContent';

export default function CarDescriptionModal(): JSX.Element {
  const { modalReducer } = useSelector((state: RootStoreType) => state);
  const disPatch = useDispatch();

  const { iscarDescriptionModalOpened } = modalReducer;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [iscarDescriptionModalOpened]);

  return (
    <Modal
      isOpen={iscarDescriptionModalOpened}
      onClose={() => disPatch(action(CHANGE_MODAL_STATUS, false))}
    >
      <div className="modal-car-discription__header">
        <button
          onClick={() => {
            disPatch(action(CHANGE_MODAL_STATUS, false));
          }}
          className="modal-car-discription__cancel-button"
          type="button"
        >
          X
        </button>
      </div>
      <CarDescriptionContent />
    </Modal>
  );
}
