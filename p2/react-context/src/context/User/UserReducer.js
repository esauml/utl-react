import { GET_PROFILE, GET_USERS } from "./types";

const UserReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            };

        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            };

        default:
            return state;
    }
};

export default UserReducer;