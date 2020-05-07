import {PBContext} from '../PbContextProvider';
import {useContext} from 'react';

export let usePbDataSet = (props) => {
    const { pbData,pbResourceData,setPbData } = useContext(PBContext);

    function getTextFiledOnUpdate() {
        let updatedPbData = pbData[`${props.name}_onUpdate`].prototype.updatedPbData; 
        if(props.onUpdate){
            let code = props.onUpdate.includes('$') ? 
                props.onUpdate.replace(/\$/g,'pbData.') :
                props.onUpdate;
            const tempPbData = {...updatedPbData};
            Function('pbData', code)(tempPbData);
            setPbData({...pbData, ...tempPbData});
        }
    }
     
    function getContentBody() {
        return {
            componentId: props.name,
            data: getResourceStaticData(props,pbResourceData),
            resource : props.sourceModel ? pbData[props.sourceModel] : pbData[props.model] ,
            queryParams: props.sourceParameters?props.sourceParameters:props.parameters,
            autoPopulate: props.loadInitially,
            selectValueKey: props.valueKey,
            selectInitialValue: null,
            onUpdate: function(item){
                if(props.onUpdate){
                    let code = props.onUpdate;
                    if(code.includes('$') && code.includes('.$')) {
                        code = code.replace(/\.\$/g,'DS.');
                    }
                    code = code.includes('$') ?
                        code.replace(/\$/g,'pbData.') :
                        code;
                    const tempPbData = pbData[`${props.name}DS`].onUpdate.prototype.updatedPbData;
                    setGlobalData(tempPbData);
                    Function('pbData','item', code)(tempPbData,item);
                    setPbData({...pbData, ...tempPbData});
                    setGlobalData({});

                }
            },
            postQuery: function(data,response){
                // TODO
            },
            onError: function(response){
                //TODO
            },
            load: function(){
               //console.log(this.queryParams);
                let tempPbData = pbData[`${props.name}DS`].load.prototype.updatedPbData;
                tempPbData = tempPbData == undefined ? getGlobalData() : tempPbData
                let tempqueryParams = this.queryParams != undefined ? {...this.queryParams}  : this.queryParams;
               if(tempqueryParams != undefined && tempqueryParams != null){
                   Object.keys(tempqueryParams).forEach(function(key) {
                       if(tempqueryParams != undefined && tempqueryParams != null) {
                           if(tempqueryParams[key]!= null && tempqueryParams[key] != undefined && typeof  tempqueryParams[key]  === 'string' && tempqueryParams[key].includes('$')){
                                     let tempParamValue = tempqueryParams[key];
                                     tempParamValue = tempParamValue.replace(/\$/g,'');
                                     tempqueryParams[key] = tempPbData[tempParamValue];
                             }
                       }
                   });
               }
               // setPbData({...pbData, ...getGlobalData()});
            //   console.log(tempPbData)
              //  console.log(tempqueryParams);
                this.resource &&  this.resource.list(tempqueryParams)
          .then(result => {
              this.data = result;
             // const tempPbData = pbData[`${props.name}DS`].load.prototype.updatedPbData;
             // setPbData({...pbData, ...tempPbData});
             // console.log(tempPbData)
              setPbData({...pbData, ...tempPbData});
             // console.log(pbData)

          })
          .catch(e => {
              console.log(e);
          }); 
          
            }
        };
    }

    let getContentCode = ()=> getContentBody();
    //let getTextContentCode = ()=> getTextFiledOnUpdate();
    return {getContentCode,getTextFiledOnUpdate};
 
};

let getResourceStaticData = (props,pbResourceData) => {
    let content = pbResourceData[props.sourceModel];
    return content && content.staticData ?  content.staticData:  [];
};

let globalData = {};
function setGlobalData(data) {
    globalData = data;
}

function  getGlobalData() {
    return globalData;
}
