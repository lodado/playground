import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import { GET_CAR } from '@Redux/constrant';
import { LOADING_STATUS } from '@Redux/action';
import LoadingSpinner from '@Component/common/LoadingSpinner';
import AlarmPage from '@Component/common/AlarmPage';

export default function CarDescriptionContent(): JSX.Element {
  const pageRef = useRef(undefined);
  const { asyncLoadingReducer } = useSelector((state: RootStoreType) => state);

  const carRequest = asyncLoadingReducer[LOADING_STATUS[GET_CAR]];
  const { data, empty, loading, error } = carRequest;

  if (loading) return <LoadingSpinner />;
  if (empty) return <AlarmPage text="해당 데이터가 없습니다." />;
  if (error) return <AlarmPage text="오류가 발생했습니다.. 나중에 시도해보세요!" />;

  const {
    carClassId,
    carClassName,
    carImage,
    maker,
    carModel,
    capacity,
    fuel,
    gearbox,
    additionalOption,
    safetyOption,
  } = data[0];

  return (
    <div ref={pageRef} className="modal-car-discription-background">
      <div className="align-middle">
        <img className="car-box__image" src={carImage} alt={carClassName} />
      </div>
      <div className="modal-car-discription__title">{carClassName}</div>
      <div className="modal-car-discription__option__container">
        <div>{`제조사 : ${maker}`}</div>
        <div>{`분류 : ${carModel}`}</div>
        <div>{`연료 : ${fuel}`}</div>
        <div>{`변속방식 : ${gearbox}`}</div>
        <div>{`승차정원 : ${capacity}`}</div>
      </div>
      <div className="modal-car-discription__sub__title">안전 옵션</div>

      <div className="modal-car-discription__option__container">
        {safetyOption?.map((option: string) => (
          <div key={`${carClassId}${option}`}>{`- ${option}`}</div>
        ))}
      </div>

      <div className="modal-car-discription__sub__title">편의 옵션</div>
      <div className="modal-car-discription__option__container">
        {additionalOption?.map((option: string) => (
          <div key={`${carClassId}${option}`}>{`- ${option}`}</div>
        ))}
      </div>
    </div>
  );
}
