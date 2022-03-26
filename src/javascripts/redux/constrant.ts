export const START_LOADING = 'loading/START_LOADING';
export const FAIL_LOADING = 'loading/FAIL_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

export const GET_CAR = 'GET_CAR';
export const GET_CAR_LIST = 'GET_CAR_LIST';

export const CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';

export const RESPONSE_STATUS = {
  REQUEST: {
    data: undefined,
    error: false,
    empty: false,
    loading: true,
  },
  FAILURE: {
    data: undefined,
    error: true,
    empty: false,
    loading: false,
  },
  SUCCESS: {
    error: false,
    loading: false,
  },
} as const;
