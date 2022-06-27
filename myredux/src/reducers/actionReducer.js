import { createSlice } from "@reduxjs/toolkit"
//import {teamData} from '../fakeData'
export const actionSlice = createSlice({
name: "action",
//initialState: {value:teamData},
//initialState: {value: []},
initialState: {value: [{id:null,team:'',score:'',action:''}]},
reducers: {
 addTeam: (state,action) => {
     state.value.push(action.payload)
 },
 deleteTeam: (state,action)=> {
     state.value = state.value.filter((t)=>t.id !== action.payload.id )
 }
}
})
export const{addTeam,deleteTeam} = actionSlice.actions
export default actionSlice.reducer