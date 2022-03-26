/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useMemo, useState } from 'react';
import { FETCH_SIZE } from '@Global/constrant';
import { CarListType } from '@Global/interface';

import CarBox from './CarBox';

/*
    페이지네이션은 원래 서버에 fetch/axios 요청을 보내서 list 뒤에 덧붙이는 식으로 구현이 가능한데
    프론트에서만 구현하려다보니
    mocking해서 구현했습니다.
*/
export default function CarCatalog({ data }: { data: CarListType[] }): JSX.Element {
  const [count, setCount] = useState(FETCH_SIZE);
  const [currentDataList, setDataList] = useState(data.slice(0, FETCH_SIZE));

  // image preload
  useEffect(() => {
    for (let i = count; i < count + FETCH_SIZE && i < data.length; i += 1) {
      const img = new Image();
      img.src = data[i].image;
    }
  }, [count]);

  const CarArrayList = () =>
    useMemo(() => {
      return currentDataList.map((carInformation: CarListType) => (
        <CarBox key={carInformation.carClassId} carInformation={carInformation} />
      ));
    }, [currentDataList]);

  const mockingFetchCarList = () => {
    if (count < data.length) {
      setDataList(data.slice(0, count + FETCH_SIZE));
      setCount(count + FETCH_SIZE);
    }
  };

  return (
    <main className="page-list__main">
      <div>{CarArrayList()}</div>
      <div className="car-box__bottom">
        {count < data.length && (
          <button className="button-blue" type="button" onClick={mockingFetchCarList}>
            더 보기
          </button>
        )}
      </div>
    </main>
  );
}
