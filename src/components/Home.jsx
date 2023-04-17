import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h4>This is Home{user && <span>{user.displayName}</span>}</h4>
        </div>
    );
};

export default Home;