import { createSlice } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_REQ_URL;
console.log(url)

const EmployeSlice = createSlice({
    name: 'employe',
    initialState: {
        loading: false,
        employe: [],
        msg: ''
    },
    reducers: {
        //---------- Stuff to storing the employe fetched data
        fetchEmployeRequest(state) {
            state.loading = true;
        },
        fetchEmploye(state, action) {
            state.loading = false;
            state.employe = action.payload
        },
        fetchEmployeError(state, action) {
            state.loading = false,
                state.msg = action.payload;
        },

        //-------- Stuff, where we create new employe
        createEmployeRequest(state) {
            state.loading = true;
        },
        createEmploye(state, action) {
            state.loading = false;
            state.employe.push(action.payload)
        },
        createEmployeError(state, action) {
            state.loading = false,
                state.msg = action.payload;
        },

        //--------- Now deleting the employe data
        deleteEmployeRequest(state) {
            state.loading = true;
        },
        deleteEmploye(state, action) {
            state.loading = false;
            state.employe = action.payload
        },
        deleteEmployeError(state, action) {
            state.loading = false,
                state.msg = action.payload;
        },

        //------- Clear all the stuffs from the state
        clearAll(state) {
            state.loading = false,
                state.employe = [],
                state.msg = "";
        }

    }
});

export const { fetchEmploye, fetchEmployeError, fetchEmployeRequest, clearAll, createEmploye, createEmployeError, createEmployeRequest, deleteEmploye, deleteEmployeError, deleteEmployeRequest } = EmployeSlice.actions;

export default EmployeSlice.reducer

//--------Now we write the api calls here
//-------Fetch all the users from the api
export const FetchEmployes = () => async dispatch => {
    dispatch(fetchEmployeRequest());

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.status === "success"){
            localStorage.setItem('data',JSON.stringify(data.data));
            dispatch(fetchEmploye(data.data));
        }
        else dispatch(fetchEmployeError(data.message));

    } catch (error) {
        console.log(error);
        dispatch(fetchEmployeError(error.message));
    }
}