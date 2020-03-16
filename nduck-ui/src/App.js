import React, { Component } from 'react';
import { Layout } from 'antd';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
    renderRoute = route => <Route key={route.path} exact strict path={route.path} component={route.component} />

    renderRoutes = routes => routes.reduce((prev, route) => prev.concat(
        <React.Fragment key={route.path}>
            {this.renderRoute(route)}
            {route.subRoutes && route.subRoutes.length ? this.renderRoutes(route.subRoutes) : null}
        </React.Fragment>,
    ), []);


    render() {
        return (
            <Layout className="cublet-app-container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta
                        name="description"
                        content="React Design Editor has started to developed direct manipulation of editable design tools like Powerpoint, We've developed it with react.js, ant.design, fabric.js "
                    />
                    <link rel="manifest" href="./manifest.json" />
                    <link rel="shortcut icon" href="./favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
                    <title>Nduck</title>
                </Helmet>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            // render={() => <Redirect to="/dashboard" />}
                            render={()=>(<h3>Please select any post</h3>)}
                        />
                        <Container routes={routes}>
                            {this.renderRoutes(routes)}
                        </Container>
                    </Switch>
                </BrowserRouter>
            </Layout>
        );
    }
}

export default App;
