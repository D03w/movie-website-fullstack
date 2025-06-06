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