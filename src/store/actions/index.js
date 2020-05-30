import {ADD_REMINDER, DELETE_REMINDER} from '../types';

export const addReminder=(text,date)=>{
  return{
      type: ADD_REMINDER,
      payload:text,date
  }
}
export const deleteReminder=(id)=>{
  return{
      type: DELETE_REMINDER,
      payload:id
  }
}