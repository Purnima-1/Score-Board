import { createSlice } from "@reduxjs/toolkit"
//import {teamData} from '../fakeData'
export const actionSlice = createSlice({
name: "action",
//initialState: {value:teamData},
//initialState: {value: []},
//initialState: localStorage.getItem("value") ? JSON.parse(localStorage.getItem("value")) : [{id:null,team:'',score:'',action:''}],
initialState: {value: localStorage.getItem('value')?JSON.parse(localStorage.getItem('value'))
    :[{id:null,team:'',score:'',action:''}]},
reducers: {
 addTeam: (state,action) => {
     state.value.push(action.payload)
     localStorage.setItem('value',JSON.stringify(state.value))
 },
 deleteTeam: (state,action)=> {
     state.value = state.value.filter((t)=>t.id !== action.payload.id )
     localStorage.removeItem('value',JSON.stringify(state.value))
 }
}
})
export const{addTeam,deleteTeam} = actionSlice.actions
export default actionSlice.reducer