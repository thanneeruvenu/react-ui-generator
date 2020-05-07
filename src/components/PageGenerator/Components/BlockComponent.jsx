/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react';
import ExtractComponents from './ExtractComponents';
import Typography from '@hedtech/react-design-system/core/Typography';
import {PBContext} from '../PbContextProvider';

const BlockComponent = (props) => {
    const { pbData, addPbDataContent } = useContext(PBContext);

    useEffect(()=>{
        addPbDataContent(`${props.name}_visible`,props.showInitially); 
    },[]);

    return (  
        <>
            <div id={`pbid-${props.name}`}  className='samplePage_child_1_style , pb-block' style={{ display: pbData[`${props.name}_visible`] ? 'block' : 'none' }} > 
                { props.label &&
              <Typography variant="h2" className="pb-block-label" id={`pbid-${props.name}-label`}>
                  {props.label}
              </Typography>}
                { props.components && ExtractComponents(props.components) }
            </div> 
            <br/>
        </>
    );
};

export default BlockComponent;
