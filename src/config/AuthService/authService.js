import { toast } from "react-toastify"
import { APP_API, BASE_CONFIG } from "../BaseConfig"
import { jwtDecode } from "jwt-decode"

export const login = async (api, data, navigate) => {
    try{
        const res = await BASE_CONFIG.doPost(`${api}/login`, data)

        localStorage.setItem('token', res.data.token)

        if(res.data.user.role === "user"){
            navigate('/dashboard')
        }

        if(res.data.user.role === "admin"){
            navigate('/admin')
        }

        return res.data
    }catch(err){
        toast.error(err.response?.data?.message ? err.response.data.message : err.message)
    }
}

export const Registers = async (api, data) => {
    try{
        const res = await BASE_CONFIG.doPost(`${api}/register`, data)

        localStorage.setItem('token', res.data.token)

        return res.data
    }catch(err){
        toast.error(err.response?.data?.message ? err.response.data.message : err.message)
    }
}

export const getMe = async (setUser, navigate) => {
    try{
        const token = localStorage.getItem('token')

        if(!token){
            return navigate('/')
        }

        const decode = jwtDecode(token)

        const res = await BASE_CONFIG.doGet(`${APP_API.auth}/get-me/${decode.id}`)

        if(res.data.success){
            return setUser(res.data.user)
        }

        navigate('/')
        toast.error(res.data.message)
    }catch(err){
        toast.error(err.message)
    }
}

export const getMeAdmin = async (setUser, navigate) => {
    try{
        const token = localStorage.getItem('token')

        if(!token){
            return navigate('/')
        }

        const decode = jwtDecode(token)

        const res = await BASE_CONFIG.doGet(`${APP_API.auth}/get-me/${decode.id}`)

        if(res.data.success && res.data.user.role === 'admin'){
            return setUser(res.data.user)
        }

        navigate('/')
        toast.error(res.data.message)
    }catch(err){
        toast.error(err.message)
    }
}

export const logOut = () => {
    try{
        localStorage.clear()
    }catch(err){
        toast.error(err.message)
    }
}