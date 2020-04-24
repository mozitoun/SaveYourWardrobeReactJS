export default (state, action) => {
    switch(action.type) {
      case 'GET_IMGS_TO_CLASSIFY':
        return {
          ...state,
          loading: false,
          imgs_to_clissify: action.payload
        }
      case 'GET_ITEMS':
          return {
            ...state,
            loading: false,
            items:  action.payload
        }
      case 'TRANSACTION_ERROR':
          return {
            ...state,
            error: action.payload
        }
      default:
          return state;
    }
  }