import { FC } from "react";

import NavigationItem, { NavigationItemType } from "./NavigationItem";
import Searchbar from "./Searchbar";

import { FaReddit } from "react-icons/fa";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineStar,
  AiFillStar,
  AiOutlineRead,
  AiFillRead,
  AiOutlineSetting,
  AiFillSetting,
} from "react-icons/Ai";

import { VscAccount } from "react-icons/vsc";

const nav: NavigationItemType[] = [
  {
    id: ":n1:",
    Icon: AiOutlineHome,
    ActiveIcon: AiFillHome,
    text: "Home",
    url: "/",
  },
  {
    id: ":n2:",
    Icon: AiOutlineStar,
    ActiveIcon: AiFillStar,
    text: "Popular",
    url: "/popular",
  },
  {
    id: ":n3:",
    Icon: AiOutlineRead,
    ActiveIcon: AiFillRead,
    text: "News",
    url: "/news",
  },
  {
    id: ":n4:",
    Icon: AiOutlineSetting,
    ActiveIcon: AiFillSetting,
    text: "Settings",
    url: "/settings",
  },
];

const Header: FC = () => {
  return (
    <header className="h-24 bg-white px-5 md:px-20 md:custom_grid flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaReddit className="w-10 h-10" color="#fd4300" />

        <h1 className="text-2xl font-medium">reddit</h1>
      </div>
      <div className="col-span-3 items-center justify-between flex gap-5">
        <nav className="items-center gap-5 xl:gap-10 hidden md:flex">
          {nav.map((navItem) => {
            return <NavigationItem key={navItem.id} {...navItem} />;
          })}
        </nav>
        <Searchbar />
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <VscAccount className="h-8 w-8 cursor-pointer" />
          <div className="flex flex-col items-start">
            <div className="font-medium">whoyoux</div>
            <div className="text-xs text-primary">43k karma</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
