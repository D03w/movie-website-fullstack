import { ArrowLeft, Eye, User } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../config/AuthService/authService"
import { APP_API } from "../../config/BaseConfig"
import { toast } from "react-toastify"

export const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()

    const loginUser = async () => {
        const data = new FormData()
        data.append('username', username)
        data.append('password', password)

        const res = await login(`${APP_API.auth}`, data, navigate)

        if(res.success){
            return toast.success(res.message)
        }
        
        toast.error(res.message)
    }
    return (
        <div className="bg-gray-950 h-[100vh] text-white flex items-center justify-center">
            <Link to='/' className="fixed top-4 left-4">
                <ArrowLeft className="cursor-pointer" />
            </Link>
            <div className="p-4 bg-gray-900 rounded-[16px] w-120">
                <div className="flex justify-center">
                    <h1 className="text-5xl font-bold text-red-600">Login</h1>
                </div>
                <p className="text-center mt-8 mb-8 font-bold text-xl">Hisobga Kirish</p>
                <label>
                    <span>Username</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="text" className="outline-none w-full" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <User />
                    </div>
                </label>
                <br />
                <label className="pt-9">
                    <span>Password</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="password" className="outline-none w-full" placeholder="Username..." value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <Eye />
                    </div>
                </label>
                <button className="mt-8 w-full p-2 rounded bg-red-600 cursor-pointer hover:bg-red-700 transition duration-300" onClick={loginUser}>Login</button>
                <div className="mt-6 flex justify-center">
                    <p>
                        <span>Sizda hali <Link to='/register' className="text-blue-500 decoration-fuchsia-400 hover:text-blue-600">Akkount yo'qmi?</Link></span>
                    </p>
                </div>
            </div>
        </div>
    )
}