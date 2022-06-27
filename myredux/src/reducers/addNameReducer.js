
import { createSlice } from "@reduxjs/toolkit"
import {teamData} from '../fakeData'
export const addNameSlice = createSlice({
name: "action",
initialState: {value:teamData},
initialState: {value: [{id:null,team:''}]},
reducers: {
 addTeam: (state,action) => {
     state.value = action.payload
 },
 deleteTeam: (state,action)=> {
     state.value = state.value.filter((t)=>t.id !== action.payload.id )
 },
 updateTeam: (state,action) => {
    
 }
}
})
export const{addTeam,deleteTeam} = addNameSlice.actions
export default addNameSlice.reducer