import userEvent from "@testing-library/user-event";
import * as actionTypes from "./Types";
import {auth} from '../../firebase/firebase'

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

//AUTH
const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START,
  };
};

const registerSuccess = (user) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: user,
  };
};


const registerFail = (error) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    payload: error,
  };
};

export const registerInitiate = (email, password, displayName )=>{
  return function(dispatch){
    dispatch(registerStart());
    auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
      user.updateProfile({
        displayName,
      });
      dispatch(registerSuccess(user));
    }).catch((error)=>dispatch(registerFail(error.message)))
  }
}