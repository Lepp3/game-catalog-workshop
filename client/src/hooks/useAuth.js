import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import request from "../utils/request";

export default function useAuth(){
    const authData = useContext(UserContext);

    

    const requestWrapper = (method,url,data,options={}) => {
        const optionWrapper = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options.headers

            }
        }

        return request.baseRequest(method,url,data,optionWrapper)
    }

    return{
        ...authData,
        accessToken,
        request: {
            get: requestWrapper.bind('GET'),
            post: requestWrapper.bind('POST'),
            put: requestWrapper.bind('PUT'),
            delete: requestWrapper.bind('DELETE'),

        }
    }
}