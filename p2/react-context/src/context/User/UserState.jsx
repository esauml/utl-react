
import axios from 'axios';
import React, { useReducer } from 'react';
import { GET_PROFILE, GET_USERS } from './types';
import UserContext from './UserContext';
import UserReducer from './UserReducer';

const UserState = ({ children }) => {

    const initialState = {
        users: [],
        selectedUser: null,
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        const response = await axios.get('https://reqres.in/api/users');

        dispatch({
            type: GET_USERS,
            payload: response.data.data,
        });
    };

    const getProfile = async (id) => {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);

        dispatch({
            type: GET_PROFILE,
            payload: response.data.data,
        });
    };

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile,
        }} >
            {children}
        </UserContext.Provider>
    );
};

export default UserState;