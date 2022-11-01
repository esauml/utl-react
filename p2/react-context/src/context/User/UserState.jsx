
import React from 'react';
import { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = ({ children }) => {

    const initialState = {
        users: [],
        selectedUser: null,
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        const response = await axios.get('https://reqres.in/api/users');
        console.log(response);
    };

    const getProfile = async (id) => {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log(response);
    };

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile,
        }} >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;