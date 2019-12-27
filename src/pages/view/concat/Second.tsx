import React from 'react';
import { TopNav, Main } from 'common/Aside';
import navList from 'routes/Concat/index';

const Second = () => {
    return (
        <React.Fragment>
            <div>
                <TopNav routeData={navList} />
            </div>
                <Main routeData={navList} />
                <h1>系统栏</h1>
        </React.Fragment>
    )
}

export default Second;