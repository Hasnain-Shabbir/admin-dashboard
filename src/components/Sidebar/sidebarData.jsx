/* eslint-disable react/react-in-jsx-scope */
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const sidebarData = {
  main: [
    {
      id: 1,
      title: "Dashboard",
      link: "/",
      icon: <DashboardIcon />,
    },
  ],
  lists: [
    {
      id: 2,
      title: "Users",
      link: "/users",
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      id: 3,
      title: "Products",
      link: "/products",
      icon: <StoreIcon />,
    },
    {
      id: 4,
      title: "Order",
      link: "/products",
      icon: <CreditCardIcon />,
    },
    {
      id: 5,
      title: "Delivery",
      link: "/products",
      icon: <LocalShippingIcon />,
    },
  ],
  useful: [
    {
      id: 6,
      title: "Stats",
      link: "/products",
      icon: <InsertChartIcon />,
    },
    {
      id: 7,
      title: "Notifications",
      link: "/products",
      icon: <NotificationsNoneIcon />,
    },
  ],
  service: [
    {
      id: 10,
      title: "System Health",
      link: "/products",
      icon: <SettingsSystemDaydreamOutlinedIcon />,
    },
    {
      id: 11,
      title: "Logs",
      link: "/products",
      icon: <PsychologyOutlinedIcon />,
    },
    {
      id: 12,
      title: "Settings",
      link: "/products",
      icon: <SettingsApplicationsIcon />,
    },
  ],
  user: [
    {
      id: 13,
      title: "Profile",
      link: "/products",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      id: 14,
      title: "Logout",
      link: "/products",
      icon: <ExitToAppIcon />,
    },
  ],
};
