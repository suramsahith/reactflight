/* eslint-disable no-case-declarations */

import { BOOKING ,DELETE } from "./actionTypes";

const initialstate={
    data:[],
};
const bookingReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case BOOKING:
            
            const newData=[...state.data];
            newData.push(action.payload);
            return{data:newData};
         
            case DELETE:
            const filteredData=state.data.filter((d)=>d.id !==action.payload);
            
            return{data:filteredData}; 
        default:
       return state;
    }
};

export default bookingReducer;