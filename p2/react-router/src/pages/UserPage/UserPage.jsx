import React from 'react'
import { useParams } from 'react-router-dom';

const UserPage = ({ }) => {
    const { id } = useParams();
    return (
        <div>
            UserPage {id}
        </div>
    );
};

export default UserPage;