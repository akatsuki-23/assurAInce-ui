import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ChevronRightIcon,
  DonateIcon,
  UsersIcon,
} from "../../../../components/icons";
import MainCard from "../../../../components/main-card/MainCard";
import MainCardHeader from "../../../../components/main-card/MainCardHeader";

const data = [
  {
    title: "Add New Project",
    desc: "Match AI tools and employees.",
    icon: CalendarIcon,
    path: "/test",
  },
  {
    title: "Add More Employees",
    desc: "List out employees Details",
    icon: UsersIcon,
    path: "/test",
  },
  {
    title: "Give Back",
    desc: "Find closest hospitals",
    icon: DonateIcon,
    path: "/give-back",
  },
  {
    title: "Onboard AI",
    desc: "Share invite and Earn $500 ",
    icon: () => <div className="font-medium">AI</div>,
    path: "",
  },
];

const QuickActions = ({className}) => {
  return (
    <MainCard className={className}>
      <MainCardHeader title="Quick Actions"></MainCardHeader>
      <div className="p-6"> 
        {data.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="flex items-center cursor-pointer py-3 first:pt-0 last:pb-0 border-b last:border-0"
          >
            <div className="rounded-full w-12 h-12 bg-gray-200 flex items-center justify-center">
              {item.icon && <item.icon className="w-6" />}
            </div>
            <div className="ml-5">
              <div className="font-bold">{item.title}</div>
              <div className="text-gray-500">{item.desc}</div>
            </div>
            <ChevronRightIcon className="ml-auto" />
          </Link>
        ))}
      </div>
    </MainCard>
  );
};

export default QuickActions;
