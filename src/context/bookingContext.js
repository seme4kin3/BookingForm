export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TOWER":
      return {
        ...state,
        tower: action.payload,
      };
    case "CHANGE_FLOOR":
      return {
        ...state,
        floor: action.payload,
      };
    case "CHANGE_ROOM":
      return {
        ...state,
        room: action.payload,
      };
    case "CHANGE_DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "CHANGE_TIMESTART":
      return {
        ...state,
        timeStart: action.payload,
      };
    case "CHANGE_TIMEEND":
      return {
        ...state,
        timeEnd: action.payload,
      };
    case "CHANGE_COMMENT":
      return {
        ...state,
        comment: action.payload,
      };
    case "RESET_STATE": {
      return {
        tower: "",
        room: "",
        floor: "",
        date: "",
        timeStart: "",
        timeEnd: "",
        comment: "",
      };
    }
    default:
      return state;
  }
};
