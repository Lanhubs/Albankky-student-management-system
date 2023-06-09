import {
  FaRegAddressBook,
  FaUserPlus,
  FaUsers,
  FaUserEdit,
  FaRegUser,
  FaSignOutAlt,
  FaSignInAlt,
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
    link: "/attendances",
    icon: <FaRegAddressBook />,
  },

  {
    title: "course info",
    link: "",
    icon: <MdMenuBook />,
  },
  {
    title: "log out",
    link: "/login",
    icon: <FaSignOutAlt />,
  },
];
export const STUDENT__SIDBAR_DATA = [
  { title: "profile", link: "/", icon: <FaRegUser /> },
  { title: "Attend class", link: "/attendances", icon: <FaRegAddressBook /> },

  {
    title: "log out",
    link: "/login",
    icon: <FaSignOutAlt />,
  },
];
const FLEX =
  "flex" || "-ms-flex" || "flexbox" || "-webkit-flexbox" || "-webkit-flex";

const DEPTS = ["Information technology", "cyberscurity", "computer science", "software engineering"];
const LEVELS = ["100Level", "200Level", "300Level", "400Level"];

export const API_KEY = "wiYL19lefHaXzBnaeBAA";
const COOKIE_SECRET = "ALBANKKY_SYS_SECRET";

export { SIDEBAR_DATA, FLEX, DEPTS, COOKIE_SECRET, LEVELS };
