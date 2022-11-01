
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/User';

const UserList = ({ }) => {

    const { users, getUsers, getProfile } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='list-group h-100'>
            {
                users.map(user => (
                    <div
                        key={user.id}
                        className='list-group-item list-group-item-action d-flex flex-row justify-content-start'
                        onClick={() => getProfile(user.id)}
                    >
                        <img src={user.avatar} alt={user.first_name}
                            className='img-fluid mr-4 rounded-circle'
                            style={{ width: '70px' }} />
                        <p>
                            {user.first_name} {user.last_name}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default UserList;