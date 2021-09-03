import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-red-500 bg-white shadow-md p-5 md:px-10">
      {/* Left header  */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle header  */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-500"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right header  */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer hover:text-gray-900">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:text-gray-900" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer hover:text-gray-900" />
          <UserCircleIcon className="h-6 cursor-pointer hover:text-gray-900" />
        </div>
      </div>
    </header>
  );
}

export default Header;