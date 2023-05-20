import {
  FaRegAddressBook,
  FaUserPlus,
  FaUsers,
  FaUserEdit,
  FaRegUser,
} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

const SIDEBAR_DATA = [
  {
    title: "student enrollment",
    link: "/enrol",
    icon: <FaUserPlus />,
  },
  {
    title: "Attendance",
    link: "",
    icon: <FaRegAddressBook />,
  },
  {
    title: "Students",
    link: "",
    icon: <FaUsers />,
  },
  

  {
    title: "course info",
    link: "",
    icon: <MdMenuBook/>
  },
  { title: "profile", link: "/profile", icon : <FaRegUser/> },
];
const FLEX =
  "flex" || "-ms-flex" || "flexbox" || "-webkit-flexbox" || "-webkit-flex";


const DEPTS =["100Level", "200Level", "300Level", "400Level"]
export const API_KEY = "wiYL19lefHaXzBnaeBAA";
const COOKIE_SECRET = "ALBANKKY_SYS_SECRET"

export { SIDEBAR_DATA, FLEX, DEPTS, COOKIE_SECRET };
