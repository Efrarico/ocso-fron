import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar () {
return (
    <nav className="w-[10vw] h-[90vh] bg-orange-200 flex flex-col items-center py-20">
     <NavItem icon={<LuStore className="text-4xl"/>} path="/dashboard"/>
     <LuTruck className="text-4xl"/>
     <LuWheat className="text-4xl"/>
     <LuUser className="text-4xl"/>
     <LuUsers className="text-4xl"/>
    </nav>
)
}