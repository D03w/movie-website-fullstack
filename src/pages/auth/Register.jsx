import { ArrowLeft, Eye, User } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Registers } from "../../config/AuthService/authService"
import { APP_API } from "../../config/BaseConfig"
import { toast } from "react-toastify"

export const Register = () => {
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const registerUser = async () => {
        const data = new FormData()
        data.append('name', name)
        data.append('surname', surname)
        data.append('username', username)
        data.append('email', email)
        data.append('password', password)

        const res = await Registers(`${APP_API.auth}`, data)

        if(res.success){
            return toast.success(res.message)
        }

        toast.error(res.message)
    }
    return (
        <div className="bg-gray-950 text-white flex justify-center overflow-auto p-10">
            <Link to='/' className="fixed top-4 left-4">
                <ArrowLeft className="cursor-pointer" />
            </Link>
            <div className="p-4 bg-gray-900 rounded-[16px] w-120">
                <div className="flex justify-center">
                    <h1 className="text-5xl font-bold text-red-600">Register</h1>
                </div>
                <p className="text-center mt-8 mb-8 font-bold text-xl">Hisob yaratish</p>
                <label>
                    <span>Ismingiz</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="text" className="outline-none w-full" placeholder="Ismingiz..." value={name} onChange={(e) => setName(e.target.value)} required/>
                        <User />
                    </div>
                </label>
                <br />
                <label>
                    <span>Familiyangiz</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="text" className="outline-none w-full" placeholder="Familiyangiz..." value={surname} onChange={(e) => setSurname(e.target.value)} required/>
                        <User />
                    </div>
                </label>
                <br />
                <label>
                    <span>Username</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="text" className="outline-none w-full" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <User />
                    </div>
                </label>
                <br />
                <label>
                    <span>Email</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="email" className="outline-none w-full" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <User />
                    </div>
                </label>
                <br />
                <label className="pt-9">
                    <span>Password</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="text" className="outline-none w-full" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <Eye />
                    </div>
                </label>
                <br />
                <button className="mt-8 w-full p-2 rounded bg-red-600 cursor-pointer hover:bg-red-700 transition duration-300" onClick={() => registerUser()}>Register</button>
                <div className="mt-6 flex justify-center">
                    <p>
                        <span>Sizda allaqachon <Link to='/login' className="text-blue-500 decoration-fuchsia-400 hover:text-blue-600">Akkount bormi?</Link></span>
                    </p>
                </div>
            </div>
        </div>
    )
}