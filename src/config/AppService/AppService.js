import { toast } from "react-toastify"
import { BASE_CONFIG } from "../BaseConfig"

export const AutoGet = async (api) => {
    try{
        const res = await BASE_CONFIG.doGet(api)

        return res.data
    }catch(err){
        toast.error(err.response?.data?.message ? err.response.data.message : err.message)
    }
}

export const AutoPost = async (api, data) => {
    try{
        const res = await BASE_CONFIG.doPost(api, data)

        return res
    }catch(err){
        toast.error(err.response?.data?.message ? err.response.data.message : err.message)
    }
}

export const AutoDelete = async (api, id) => {
    try{
        const res = await BASE_CONFIG.doDelete(api, id)

        return res
    }catch(err){
        toast.error(err.response?.data?.message ? err.response.data.message : err.message)
    }
}

export const AutoUpdate = async (api, id, data) => {
    try{
        const res = await BASE_CONFIG.doPut(api, id, data)

        return res
    }catch(err){
        toast.error(err.response?.data?.message ? err.response.data.message : err.message)
    }
}