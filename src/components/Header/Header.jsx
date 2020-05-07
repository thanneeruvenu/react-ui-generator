import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import HeaderBar from '@hedtech/react-design-system/core/HeaderBar/HeaderBar';
import Button from '@hedtech/react-design-system/core/Button/Button';
import { HeaderBarLogo, HeaderBarItem } from '@hedtech/react-design-system/core/HeaderBar';
import HeaderUtilityBar from '@hedtech/react-design-system/core/HeaderBar/HeaderUtilityBar';
import Icon from '@eui/ds-icons/lib/es6/Icon';
import withStyles from '@hedtech/react-design-system/core/styles/withStyles';
import Tooltip from '@hedtech/react-design-system/core/Tooltip';
import { useIntl } from 'react-intl';
import UserContext from '../UserContext';
import Typography from '@hedtech/react-design-system/core/Typography';
import { spacingSmall } from '@hedtech/react-design-system/core/styles/tokens';
const styles = theme => ({
    root: {
        left: 0,
        position: 'fixed',
        top: 0,
    },
    signOut: {
        display: 'flex',
    },
    username: {
        color: theme.palette.common.white,
        marginRight: spacingSmall,
        marginTop: '4px',
    },
});
const Header = props => {
    const {
        classes,
        history,
    } = props;
    const intl = useIntl();
    const userCtx = useContext(UserContext);
    const signOut = () => {
        userCtx.signOut();
    };
    return (
        <HeaderBar
            classes={{ root: classes.root }}
            logo={
                <HeaderBarLogo id="HeaderBarLogo">
                    <Button onClick={() => history.push('/')} variant="text">
                        <svg
                            aria-label={intl.formatMessage({ id: 'ellucianLogo' })}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 431.49 88.05"
                            width="90"
                            height="20"
                        >
                            <path
                                fill="#ffffff"
                                d="M135.2,124a44,44,0,1,0,24.33,57.3A44,44,0,0,0,135.2,124Zm14.1,53.17a33,33,0,1,1-23.69-44.59,31,31,0,0,1,10.54,4.26l-4.3,10.64-10.11,25-10.53-4.25,10.1-25A21.78,21.78,0,1,0,139,156.94l5.26-13A33,33,0,0,1,149.3,177.14Z"
                                transform="translate(-74.69 -120.75)"
                            />
                            <path
                                fill="#ffffff"
                                d="M506.18,191.09a4.38,4.38,0,1,1-4.37-4.26A4.29,4.29,0,0,1,506.18,191.09Zm-7.67,0a3.31,3.31,0,0,0,3.33,3.41,3.41,3.41,0,0,0,0-6.81A3.31,3.31,0,0,0,498.51,191.09Zm2.63,2.24h-1v-4.27a9.4,9.4,0,0,1,1.64-.13,2.58,2.58,0,0,1,1.48.32,1.19,1.19,0,0,1,.42.93,1.1,1.1,0,0,1-.89,1v.05a1.26,1.26,0,0,1,.78,1,3.47,3.47,0,0,0,.31,1.07h-1.06a3.73,3.73,0,0,1-.34-1c-.08-.47-.34-.68-.88-.68h-.47Zm0-2.42h.47c.55,0,1-.18,1-.62s-.29-.65-.91-.65a2.26,2.26,0,0,0-.55.05Z"
                                transform="translate(-74.69 -120.75)"
                            />
                            <path
                                fill="#ffffff"
                                d="M235,172.54H200.62a17.9,17.9,0,0,0,4.7,12.2,12.17,12.17,0,0,0,8.94,3.46c3.84,0,7-1.06,9-3.17a10.29,10.29,0,0,0,2.88-5.28h8a17.85,17.85,0,0,1-7.49,12,22.36,22.36,0,0,1-12.39,3.66,20.76,20.76,0,0,1-16.14-7.3c-4-4.71-6.05-11.14-6.05-18.06,0-5.86,1.05-11.05,3.75-15.57a20.81,20.81,0,0,1,18.34-10.18,19.61,19.61,0,0,1,14.8,6.25,25.1,25.1,0,0,1,6.15,17.09Zm-11.24-16.9a11.55,11.55,0,0,0-9.61-4.42c-8.84,0-13.16,7.2-13.35,14.31h25.94A17,17,0,0,0,223.77,155.64Zm93.59,38.52-.67-7.4c-2.5,5.57-8.74,8.55-14.41,8.55-11,0-16.62-6.63-16.62-17.87V145.55h8.17v30.74c0,7.3,2.69,11.63,10.37,11.63a11,11,0,0,0,8.07-3.65c3.07-3.17,4-8.46,4-13.45V145.55h8.16v48.61Zm51.73-4c-3.46,3.36-8.07,5.29-14,5.29-8.74,0-14.31-4-17.77-9.13-2.6-3.84-4-9.12-4-16.42s1.43-12.59,4-16.43c3.46-5.09,8.93-9.13,17.67-9.13a19.33,19.33,0,0,1,13.84,5.19A18.7,18.7,0,0,1,374.57,162h-8.26a12.18,12.18,0,0,0-3.46-7.59,11.37,11.37,0,0,0-7.88-3,12.25,12.25,0,0,0-8.45,3.17c-3.84,3.27-4.9,9.32-4.9,15.28s1.06,12,4.9,15.27a12.29,12.29,0,0,0,8.45,3.16,11.34,11.34,0,0,0,8.26-3.26,11.9,11.9,0,0,0,3.27-7.2h8.26A18.23,18.23,0,0,1,369.09,190.12Zm14.16-51.57V130.1h8.88v8.45Zm.26,55.61V145.55h8.36v48.61Zm56.25.67c-4.32,0-7-3.27-7-7.4h-.19c-2.78,4.9-8.83,8-15.66,8-11.14,0-16.71-7.49-16.71-15,0-6.25,4-14.41,17.29-15.17l14.8-.87v-3.56c0-2.4-.29-5.37-2.5-7.39-1.64-1.54-4-2.5-8-2.5-4.41,0-7.2,1.25-8.84,2.88a8,8,0,0,0-2.4,5.86h-8a14.39,14.39,0,0,1,4.23-10.18c3.27-3.46,9-5.19,15-5.19,9.42,0,14.8,4,17.1,9.32a18.63,18.63,0,0,1,1.44,7.49v23.54c0,2.59,1.06,3.27,2.69,3.27a11.79,11.79,0,0,0,2.12-.29v6.05A11.36,11.36,0,0,1,439.76,194.83Zm-7.49-24.11-13.07.77c-4.9.29-10.66,2.59-10.66,8.74,0,4.32,2.69,8.35,9.6,8.35a13.67,13.67,0,0,0,10-3.93,15.72,15.72,0,0,0,4.14-11.05Zm51.63,23.44V163.32c0-7.3-3-11.62-10.66-11.62-4.71,0-8.46,3.07-10.57,7.49-1.63,3.56-1.73,8.64-1.73,12.39v22.58h-8.16V145.55h7.1l.68,7.3c2.5-5.57,9.22-8.55,14.7-8.55,11,0,16.8,6.63,16.8,17.87v32Zm-231.45,0V124.8h-8.16v69.36Zm22.27,0V124.8h-8.17v69.36Z"
                                transform="translate(-74.69 -120.75)"
                            />
                        </svg>
                    </Button>
                </HeaderBarLogo>
            }
            position="static"
            showSearch={false}
            UtilityBar={(
                <HeaderUtilityBar>
                    <HeaderBarItem
                        itemKey="signout-utility"
                        onClick={signOut}
                    >
                        <Tooltip title={intl.formatMessage({ id: 'signout' })}>
                            <div className={classes.signOut}>
                                <Typography classes={{ root: classes.username }}>{userCtx.principle}</Typography>
                                <Icon name="sign-out" />
                            </div>
                        </Tooltip>
                    </HeaderBarItem>
                </HeaderUtilityBar>
            )}
        />
    );
};
Header.propTypes = {
    classes: PropTypes.object,
    history: PropTypes.object,
};
export default withStyles(styles)(withRouter(Header));
