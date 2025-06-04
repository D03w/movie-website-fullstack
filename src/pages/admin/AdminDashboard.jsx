import { Clapperboard, Eye, User, UserRoundCog, UsersRound } from "lucide-react"

export const AdminDashboard = () => {
    const stats = [
        {
            name: "Kinolar",
            value: 0,
            icon: <Clapperboard size={45}/>
        },
        {
            name: "Userlar",
            value: 0,
            icon: <UsersRound size={45}/>
        },
        {
            name: "Adminlar",
            value: 0,
            icon: <UserRoundCog size={45}/>
        },
        {
            name: "Umumiy ko'rishlar",
            value: 0,
            icon: <Eye size={45}/>
        }
        
        
    ]
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 w-full">
            {
                stats.map(item => (
                    <div className="p-3 rounded bg-gray-900 flex cursor-pointer hover:shadow-lg border border-gray-800 shadow-white transition duration-300">
                        <div>{item.icon}</div>
                        <div className="ms-3">
                            <h1 className="text-[13px]">{item.name}</h1>
                            <p className="text-[18px]">{item.value}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}