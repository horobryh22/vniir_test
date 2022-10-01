import React from 'react';

import './index.css';
import { Header, RoutesApp } from 'components';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <>
            <Header />
            <RoutesApp />
        </>
    );
};

export default App;
