import { ArrowLeft, Eye, User } from "lucide-react"
import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <div className="bg-gray-950 h-[100vh] text-white flex items-center justify-center">
            <Link to='/' className="fixed top-4 left-4">
                <ArrowLeft className="cursor-pointer" />
            </Link>
            <div className="p-4 bg-gray-900 rounded-[16px] w-120">
                <div className="flex justify-center">
                    <h1 className="text-5xl font-bold text-red-600">Register</h1>
                </div>
                <p className="text-center mt-8 mb-8 font-bold text-xl">Hisobga yaratish</p>
                <label>
                    <span>Username</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="text" className="outline-none w-full" placeholder="Username..." />
                        <User />
                    </div>
                </label>
                <br />
                <label className="pt-9">
                    <span>Password</span><br />
                    <div className="flex items-center border-2 rounded w-full mt-2 p-2 border-red-600/20">
                        <input type="text" className="outline-none w-full" placeholder="Username..." />
                        <Eye />
                    </div>
                </label>
                <button className="mt-8 w-full p-2 rounded bg-red-600 cursor-pointer hover:bg-red-700 transition duration-300">Login</button>
                <div className="mt-6 flex justify-center">
                    <p>
                        <span>Sizda allaqachon <Link to='/login' className="text-blue-500 decoration-fuchsia-400 hover:text-blue-600">Akkount bormi?</Link></span>
                    </p>
                </div>
            </div>
        </div>
    )
}