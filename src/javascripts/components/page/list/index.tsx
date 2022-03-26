/* eslint-disable implicit-arrow-linebreak */
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import { GET_CAR_LIST } from '@Redux/constrant';
import { action, LOADING_STATUS } from '@Redux/action';
import LoadingSpinner from '@Component/common/LoadingSpinner';
import AlarmPage from '@Component/common/AlarmPage';

import CarCatalog from './CarCatalog';
import CarDescriptionModal from './CarDescriptionModal/CarDescriptionModal';

export function CarListPage(): JSX.Element {
  const { asyncLoadingReducer, modalReducer } = useSelector((state: RootStoreType) => state);
  const disPatch = useDispatch();

  const carRequest = asyncLoadingReducer[LOADING_STATUS[GET_CAR_LIST]];
  const { data, empty, loading, error } = carRequest;
  const { iscarDescriptionModalOpened } = modalReducer;

  useLayoutEffect(() => {
    disPatch(action(GET_CAR_LIST));
  }, []);

  return (
    <>
      <div className="page-list-body">
        <header className="page-list__header">차량 리스트</header>

        {loading && <LoadingSpinner />}
        {empty && <AlarmPage text="해당 데이터가 없습니다." />}
        {error && <AlarmPage text="오류가 발생했습니다.. 나중에 시도해보세요!" />}
        {data && !error && <CarCatalog data={data} />}
      </div>
      {iscarDescriptionModalOpened && <CarDescriptionModal />}
    </>
  );
}
