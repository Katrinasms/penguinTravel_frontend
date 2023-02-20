import {
    PAYMENT_REQUEST,
    PAYMENT_SUCCESS,
    PAYMENT_FAIL,
    CREDIT_ORDER_REQUEST,
    CREDIT_ORDER_SUCCESS,
    CREDIT_ORDER_FAIL
} from "./../Constants/PaymentConstant.js"


export const paymentReducer = (
    state = { loading: true, data: {}  },
    action
  ) => {
    switch (action.type) {
      case PAYMENT_REQUEST:
        return { ...state, loading: true };
      case PAYMENT_SUCCESS:
        return { loading: false, data: action.payload };
      case PAYMENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const createCreditOrderReducer = (
    state = { loading: true, credit_order: {}  },
    action
  ) => {
    switch (action.type) {
      case CREDIT_ORDER_REQUEST:
        return { ...state, loading: true };
      case CREDIT_ORDER_SUCCESS:
        return { loading: false, credit_order: action.payload };
      case CREDIT_ORDER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  