import React from 'react';

//!  imports all components from the components folder 

import Container from '../components/containers/Container';
import NavBar from '../components/views/NavBar';
import Sidebar from '../components/views/Sidebar';


const Dashboard = () => {

    return (
        <>
            <NavBar />
            <Container>
                <Sidebar />
                <Sidebar />
            </Container>
        </>
    );
};

export default Dashboard;