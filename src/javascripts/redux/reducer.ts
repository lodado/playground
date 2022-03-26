import { isEmpty } from '@Global/util';
import { LOADING_STATUS } from './action';
import {
  FINISH_LOADING,
  FAIL_LOADING,
  START_LOADING,
  RESPONSE_STATUS,
  CHANGE_MODAL_STATUS,
} from './constrant';

function setInitState() {
  const init = {};

  const { REQUEST } = RESPONSE_STATUS;
  // eslint-disable-next-line no-return-assign
  Object.keys(LOADING_STATUS).map((key) => (init[LOADING_STATUS[key]] = REQUEST));
  return init;
}

interface LoadingActionType {
  type: string;
  payload: string;
  response?: [];
}

export function asyncLoadingReducer(state = setInitState(), action: LoadingActionType) {
  const { type, payload, response } = action;
  const { REQUEST, FAILURE, SUCCESS } = RESPONSE_STATUS;

  switch (type) {
    case START_LOADING:
      return {
        ...state,
        [payload]: REQUEST,
      };

    case FAIL_LOADING:
      return {
        ...state,
        [payload]: FAILURE,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [payload]: { ...SUCCESS, data: response, empty: isEmpty(response) },
      };
    default:
      return state;
  }
}

const modalState = {
  iscarDescriptionModalOpened: false,
};

export function modalReducer(state = modalState, action: { type: string; payload: boolean }) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_MODAL_STATUS:
      return { ...state, iscarDescriptionModalOpened: payload };
    default:
      return state;
  }
}
