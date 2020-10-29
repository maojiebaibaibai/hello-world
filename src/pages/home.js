import React from 'react';
import TopComponent from './top';
import Middle1Component from './middle1';
import Middle2Component from './middle2';

function Home() {
    return (
        <div className="home">
            <TopComponent/>
            <Middle1Component/>
            <Middle2Component/>
        </div>
    )
}

export default Home;