/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { GET_CAR } from '@Redux/constrant';
import { calDist } from '@Global/util';
import { CarListType } from '@Global/interface';

interface Props {
  carInformation: CarListType;
}

export default function CarBox({ carInformation }: Props): JSX.Element {
  const {
    carClassId,
    image,
    carClassName,
    year,
    price,
    drivingDistance,
    discountPercent,
    regionGroups,
    carTypeTags,
  } = carInformation;

  const disPatch = useDispatch();

  const calPrice = useMemo(
    () => price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
    [price],
  );

  const calDistance = useMemo(() => calDist(drivingDistance), [drivingDistance]);

  return (
    <div
      onClick={() => {
        disPatch({ type: GET_CAR, id: carClassId });
      }}
      className="car-box"
    >
      <img className="car-box__image" src={image} alt={carClassName} />

      <div className="car-box__container">
        <div className="car-box__text-container">
          <div className="car-box__content">{carClassName}</div>
          <div className="car-box__content">
            {`${calPrice}원`} {discountPercent > 0 && <span>{` (-${discountPercent}%)`}</span>}
          </div>
        </div>
        <div className="car-box__button-container">
          {carTypeTags?.map((buttonName) => (
            <button
              className="button-blue car-box__button"
              key={`${carClassId}${buttonName}`}
              type="button"
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>

      <div className="car-box__content">
        <div>{`${year}년 | ${calDistance}km | ${regionGroups.join(', ')}`}</div>
      </div>
    </div>
  );
}
