import {
  FaRegAddressBook,
  FaUserPlus,
  FaUsers,
  FaUserEdit,
} from "react-icons/fa";

const SIDEBAR_DATA = [
  {
    title: "student enrollment",
    link: "/enrol",
    icon: <FaUserPlus />,
  },
  {
    title: "courses info",
    link: "",
    icon: <FaRegAddressBook />,
  },
  {
    title: "Stdents",
    link: "",
    icon: <FaUsers />,
  },
  {
    title: "manage students",
    link: "",
    icon: <FaUserEdit />,
  },

  {
    title: "course info",
    link: "",
  },
];
const FLEX =
  "flex" || "-ms-flex" || "flexbox" || "-webkit-flexbox" || "-webkit-flex";
const MOCK_STUDENTS_DETAILS = [
  { dept: "100L", amount: 200, bgColor: "rgba(0, 255, 0, 0.3)" },
  { dept: "200L", amount: 150, bgColor: "rgba(0, 0, 255, 0.3)" },
  { dept: "300L", amount: 120, bgColor: "rgba(255, 0, 0, 0.3)" },
  { dept: "400L", amount: 125, bgColor: "rgba(0, 255, 250, 0.3)" },
];
export const API_KEY ="wiYL19lefHaXzBnaeBAA"
export { SIDEBAR_DATA, FLEX , MOCK_STUDENTS_DETAILS};
