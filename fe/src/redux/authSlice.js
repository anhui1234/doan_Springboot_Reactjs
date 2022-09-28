import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name: "auth",
    initialState:{
        login:{
            currentUser:null,
            isFetching: false,
             error: false
        },
        add:{
            isFetching:false,
            error:false,
            success:false
        },
        edit:{
            isFetching:false,
            error: false,
            success:false
        }
        
       
    },
    reducers:{
        loginStart:(state)=>{
            state.login.isFetching=true;
           
        },
        loginSuccess: (state,action)=>{
            state.login.isFetching=false;
            state.login.currentUser=action.payload;
            state.login.error=false;
            
        },
        loginFailed: (state)=>{
            state.login.isFetching=false;
            state.login.error=true;
        },
        addStart:(state)=>{
            state.add.isFetching=true;
        },
        addSuccess: (state)=>{
            state.add.isFetching=false;
            state.add.error=false;
            state.add.success=true;
        },
        addFailed: (state)=>{
            state.add.isFetching=false;
            state.add.error=true;
            state.add.success=true;
        },
        editStart:(state)=>{
            state.edit.isFetching=true;
        },
        editSuccess: (state)=>{
            state.edit.isFetching=false;
            state.edit.error=false;
            state.edit.success=true;
        },
        editFailed: (state)=>{
            state.edit.isFetching=false;
            state.edit.error=true;
            state.edit.success=true;
        },
       
       
       

    }
})
export const {
    loginStart,
    loginFailed,
    loginSuccess,
    addStart,
    addSuccess,
    addFailed,
    editStart,
    editSuccess,
    editFailed
    
}= authSlice.actions;
export default authSlice.reducer;