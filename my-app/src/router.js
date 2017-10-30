import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Layouts
import MainLayout from './App/components/layouts/main-layout';
import SearchLayoutContainer from './App/components/containers/search-layout-container';

// Pages
import Home from './App/components/home';
import UserListContainer from './App/components/containers/user-list-container';
import UserProfileContainer from './App/components/containers/user-profile-container';
import WidgetListContainer from './App/components/containers/widget-list-container';

export default (
    <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="users">
                            <Route component={SearchLayoutContainer}>
                                <Route component={UserListContainer}/>
                            </Route>
                            <Route path=":userId" component={UserProfileContainer}/>
                    </Route>
                    <Route path="widgets">
                        <SearchLayoutContainer>
                            <WidgetListContainer></WidgetListContainer>
                        </SearchLayoutContainer>
                        {/*<Route component={SearchLayoutContainer}>
                            <Route component={WidgetListContainer}/>
                        </Route>*/}
                    </Route>
                </Switch>
            </MainLayout>
    </BrowserRouter>
);
