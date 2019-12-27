import React, {lazy} from 'react';
import { TopNav, Main } from 'common/Aside';
// import { Switch, Route, Redirect } from 'react-router-dom';
import navList from 'routes/Main/index';

const MainCenter = () => {
  
    
    return (
        <React.Fragment>
            {/* 传值的方式还是跟不使用hook的方式一致的 */}
            <div>
                <TopNav routeData={navList} />
            </div>
            {/* 展示渲染的内容 */}
            {/* <Switch>
                <Route path={'/main/cancat/details/des'} component={firstCon} />
                <Route path={'/main/cancat/details/info'} component={secCon} />
                <Redirect exact from='/main/cancat/details' to={'/main/cancat/details/des'} ></Redirect>
            </Switch> */}

            <Main routeData={navList} />
        </React.Fragment>
    )
}

export default MainCenter;
