import { withStyles } from '@hedtech/react-design-system/core/styles';
import {
    spacingLarge,
    spacingSmall,
} from '@hedtech/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React from 'react';
import JavaScriptExample from '../JavaScriptExample';
import TypeScriptExample from '../TypeScriptExample';
import Paper from '@hedtech/react-design-system/core/Paper';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@material-ui/core';

const styles = (/* theme */) => ({
    root: {
        'padding': spacingLarge,
        'width': '100%',
    },
    content: {
        marginTop: spacingSmall,
        padding: spacingLarge,
    },
});

const Home = ({ classes }) => (
    <div className={classes.root}>
        <Typography variant="h1">
            <FormattedMessage id="homePageTitle" />
        </Typography>
        <Paper className={classes.content}>
            <JavaScriptExample />
            <TypeScriptExample />
        </Paper>
    </div>
);

Home.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Home);
