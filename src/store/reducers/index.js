import {ADD_REMINDER, DELETE_REMINDER} from '../types';
import { v4 as uuidv4 } from 'uuid';

const initialState={
    reminders:[]
};

export const reducer = (state = initialState, action)=>{
  switch(action.type){
        case ADD_REMINDER:
            return{
                ...state,
                reminders:[...state.reminders, action.payload]
            
        } 
        case DELETE_REMINDER:
            return{
                ...state,
                reminders:state.reminders.filter(reminder=>reminder.id!==action.payload)

            }
            default:
                return state
    }
}