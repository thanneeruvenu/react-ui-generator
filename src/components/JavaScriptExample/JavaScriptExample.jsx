import { withStyles } from '@hedtech/react-design-system/core/styles';
import PropTypes from 'prop-types';
import Typography from '@hedtech/react-design-system/core/Typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { spacingSmall } from '@hedtech/react-design-system/core/styles/tokens';
const styles = (/* theme */) => ({
    title: {
        marginBottom: spacingSmall,
    },
});
const JavaScriptExample = props => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h2">
                <FormattedMessage id="javaScriptExampleTitle" />
            </Typography>
            <Typography>
                <FormattedMessage id="javaScriptExampleText" />
            </Typography>
        </React.Fragment>
    );
};
JavaScriptExample.propTypes = {
    classes: PropTypes.shape({
        title: PropTypes.string,
    }),
};
export default withStyles(styles)(JavaScriptExample);
