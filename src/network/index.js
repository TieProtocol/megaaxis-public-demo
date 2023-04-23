import axios from "axios";
import config from "../../package.json";
const API_GETBY_TYPE = '/tools/getByType';
const API_GETBY_KEY = '/prompt/getByKey';
const ADDRESS = config.address['dev'];

function axiosPost(url, params){
    return axios.post(url,params).then((response)=>{
        console.log(response);
        if(response.status === 200){
            return response.data;
        }
        return null;
    }).catch(err=>{
        console.error(err);
        return null;
    });
}

async function netToolsGetAllByPage(invokeParams){
    const { offset, page = 1, pagecount = 20 } = invokeParams;
    const requestParams = {
        type: 1,
        offset,
        limit: pagecount
    };
    return axiosPost(ADDRESS + API_GETBY_TYPE, requestParams).then((response)=>{
        if(response){
            return {
                ...response,
                requestParams,
                invokeParams,
                list: response.data.ToolInfos
            }
        }
        return null;
    });
}

async function netPromptGetByKey(invokeParams){
    const { key='', offset, page = 1, pagecount = 20 } = invokeParams;
    const requestParams = {
        key,
        offset,
        limit: pagecount
    };
    return await axios.post(ADDRESS + API_GETBY_KEY, requestParams).then((response)=>{
        if(response){
            /// 数据聚合
            return {
                ...response,
                requestParams,
                invokeParams,
                list: response.data.ToolInfos
            }
        }
        return null;
    });
}

export default {
    netToolsGetAllByPage,
    netPromptGetByKey
}
