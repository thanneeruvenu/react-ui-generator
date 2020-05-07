/* eslint-disable react/prop-types */
import React from 'react';
import ExtractComponents from './ExtractComponents';
import Typography from '@hedtech/react-design-system/core/Typography';
import {PBContextProvider} from '../PbContextProvider';

const BodyComponent = (props) => {
    return (
        <PBContextProvider>
            <div id="content"  className="customPage container-fluid">
                { props.label &&  
             <Typography variant="h1" id={`pbid-${props.name}label`}>
                 {props.label}
             </Typography>}
                { ExtractComponents(props.components) }
            </div>
        </PBContextProvider>

    );
};



export default BodyComponent;
