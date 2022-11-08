import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Home, NotFound, UserPage, Users } from './pages';

const RoutesConfig = ({ }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/redirect' element={<Navigate replace to='/About' />} />

            {/* Params */}
            <Route path="/users/:id" element={<UserPage />} />
        </Routes>
    );
};

// export default memo(RoutesConfig);
export default RoutesConfig;