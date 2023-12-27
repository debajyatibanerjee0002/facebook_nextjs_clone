import Image from "next/image";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Squares2X2Icon,
  HomeIcon,
  ChevronDownIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  PlayCircleIcon,
  ShoppingCartIcon,
  FlagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md ">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          alt="Facebook"
          width={40}
          height={40}
          fixed="true"
        />
        <div className="flex items-center ml-2 mr-4 rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden lg:inline-flex ml-2 items-center  bg-transparent focus:outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayCircleIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile pic */}
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer bg-slate-500"
          src={session.user.image}
          alt={session.user.name}
          width={40}
          height={40}
          fixed="true"
        />

        <p className="hidden lg:inline-flex whitespace-nowrap font-semibold">
          {session.user.name}
        </p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
