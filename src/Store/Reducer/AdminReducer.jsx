import actiontypes from "../Action/ActionType";
const INITIAL_STATE = {};

const AdminReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    default: // need this for default case
      return state;
  }
};

export default AdminReducer;
