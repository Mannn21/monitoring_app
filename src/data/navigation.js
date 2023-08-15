import { AiOutlineHistory, AiOutlineHome, AiOutlineFileDone, AiOutlineUserAdd } from "react-icons/ai";
import {PiUsers} from "react-icons/pi"
import {BsCardChecklist} from "react-icons/bs"
import { RiFileUserLine } from "react-icons/ri"

export const Navigation = [
    {
        id: 1,
        title: "Home",
        icon: <AiOutlineHome size={25}/>,
        location: "/dashboard"
    },
    {
        id: 2,
        title: "History",
        icon: <AiOutlineHistory size={25}/>,
        location: "/dashboard/history"
    },
    {
        id: 3,
        title: "Users",
        icon: <PiUsers size={25}/>,
        location: "/dashboard/users"
    },
    {
        id: 5,
        title: "Attendances",
        icon: <AiOutlineFileDone size={25}/>,
        location: "/dashboard/attendances"
    },
    {
        id: 6,
        title: "Monthly Reports",
        icon: <BsCardChecklist size={25}/>,
        location: "/dashboard/monthly-reports"
    },
    {
        id: 7,
        title: "Users Reports",
        icon: <RiFileUserLine size={25}/>,
        location: "/dashboard/users-reports"
    },
    {
        id: 8,
        title: "Add User",
        icon: <AiOutlineUserAdd size={25}/>,
        location: "/dashboard/add-user"
    },
];
