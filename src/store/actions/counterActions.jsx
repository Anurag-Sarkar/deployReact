import axios from "axios"
import {incrementByAmount} from '../reducers/counterSlice'

export const incrementAsync = (amount) => (dispatch,getState) => { 
    console.log(getState().counter.value)
    setTimeout(()=>{
        dispatch(incrementByAmount(amount))
    },2000)
}