import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Connect from '../components/Connect';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/connect" component={Connect} />
                    <Route component={NotFound} />                    
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
