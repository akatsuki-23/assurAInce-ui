import routesPath from "../../routes/RoutesPath";
import {
  ReferIcon,
  AiToolsIcon,
  DashboardIcon,
  EmployeeDetailsIcon,
} from "../icons";

export const navItems = [
  {
    id: "home",
    name: "Dashboard",
    icon: DashboardIcon,
    path: routesPath.AITOOLS,
  },
  {
    id: "employee-details",
    name: "Employee Details",
    icon: EmployeeDetailsIcon,
    path: routesPath.EMPLOYEES,
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    icon: AiToolsIcon,
    path: routesPath.AITOOLS,
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: ReferIcon,
    path: routesPath.PRODUCTIVITY,
  },
  { id: "give-back", name: "Give back", icon: ReferIcon, path: "/give-back" },
];
