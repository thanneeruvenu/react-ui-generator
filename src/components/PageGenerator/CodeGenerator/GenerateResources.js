import { get, list } from '../PBResources';

export const pbResource = (resourceName) =>  ({
    list : async (params) => {
        const data = await list(resourceName,params)
        .then(function (response) {
            //console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        })
        .finally(function () {
            // always executed
        }); 
        return data;
    },
    get : async () => {
        const data = await get(resourceName)
        .then(function (response) {
            //console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        })
        .finally(function () {
            // always executed
        }); 
        return data;
    }
}); 