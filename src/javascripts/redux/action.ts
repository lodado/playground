import { START_LOADING, FAIL_LOADING, FINISH_LOADING, GET_CAR, GET_CAR_LIST } from './constrant';

export const LOADING_STATUS = {
  GET_CAR,
  GET_CAR_LIST,
} as const;

export type LoadingStatusType = typeof LOADING_STATUS[keyof typeof LOADING_STATUS];

function getVaildRequestType(requestType: string): LoadingStatusType {
  return LOADING_STATUS[requestType];
}

/* action */
export const action = (type: string, payload = undefined) => ({ type, payload });

export const startLoading = (requestType: string) => ({
  type: START_LOADING,
  payload: getVaildRequestType(requestType),
});

export const failLoading = (requestType: string) => ({
  type: FAIL_LOADING,
  payload: getVaildRequestType(requestType),
});

export const finishLoading = (requestType: string, response: []) => {
  return {
    type: FINISH_LOADING,
    payload: getVaildRequestType(requestType),
    response,
  };
};
