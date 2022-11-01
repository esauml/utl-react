
import React, { useContext } from 'react';
import { UserContext } from '../../context/User';

const Profile = ({ }) => {
    const { selectedUser } = useContext(UserContext);

    return (
        <>
            {
                selectedUser ? (
                    <div className='card card-body text-center'>
                        <img src={selectedUser.avatar} alt={selectedUser.first_name}
                            className='card-img-top rounded-circle m-auto img-fluid'
                            style={{ width: '200px' }} />
                        <h1>{selectedUser.first_name} {selectedUser.last_name}</h1>
                        <p>{selectedUser.email}</p>
                    </div>
                ) : (
                    <div className='card card-body text-center'>
                        <h1>No user selected</h1>
                    </div>
                )
            }
        </>
    );
};

export default Profile;