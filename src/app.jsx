import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EDSApplication from '@hedtech/react-design-system/core/EDSApplication';
import Home from './components/Home';
import { IntlProvider } from 'react-intl';
import messages from './resources';
import UserContext from './components/UserContext';
import Header from './components/Header/Header';
import { withStyles } from '@hedtech/react-design-system/core/styles';
import PropTypes from 'prop-types';
import { spacingXxLarge } from '@hedtech/react-design-system/core/styles/tokens';
import PageGenerator from './components/PageGenerator';
const styles = () => ({
    content: {
        margin: `${spacingXxLarge} auto`,
        maxWidth: '1280px',
    },
});
const userCtxValue = {
    principle: 'Example User\'s Name',
    signOut: () => {
        console.log('User attempted to sign out via this mocked context function');
    },
};
const App = props => {
    const { classes } = props;
    return (
        <React.Fragment>
            <UserContext.Provider value={userCtxValue}>
                <IntlProvider locale={navigator.language} messages={messages}>
                    <EDSApplication>
                        <Router>
                            <div>
                                <Header />
                                <div className={classes.content}>
                                    <Route exact path="/about" component={Home} />
                                    <Route  path="/customPage/page/:name" component={PageGenerator}/>
                                </div>
                            </div>
                        </Router>
                    </EDSApplication>
                </IntlProvider>
            </UserContext.Provider>
        </React.Fragment>
    );
};
App.propTypes = {
    classes: PropTypes.shape({
        content: PropTypes.string,
    }),
};
export default withStyles(styles)(App);
