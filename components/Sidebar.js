import { useSession } from "next-auth/react";

import {
  ChevronDownIcon,
  UsersIcon,
  ClockIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import {
  ShoppingBagIcon,
  UserGroupIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import SidebarRows from "./SidebarRows";

const Sidebar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRows src={session.user.image} title={session.user.name} />
      <SidebarRows Icon={UsersIcon} title="Friends" />
      <SidebarRows Icon={UserGroupIcon} title="Groups" />
      <SidebarRows Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRows Icon={TvIcon} title="Watch" />
      <SidebarRows Icon={CalendarIcon} title="Events" />
      <SidebarRows Icon={ClockIcon} title="Memories" />
      <SidebarRows Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
