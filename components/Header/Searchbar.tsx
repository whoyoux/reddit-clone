import { useRef } from "react";

import { AiOutlineSearch } from "react-icons/Ai";

const Searchbar = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmitSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(searchRef && searchRef.current?.value);

    // !TODO: Make search functionality
  };
  return (
    <form className="hidden xl:flex" onSubmit={onSubmitSearch}>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiOutlineSearch className="w-5 h-5" color="#fd4300" />
        </div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Find a community or post"
          className="pl-10 pr-5 py-3 w-64  bg-[#f1eff1]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
          ref={searchRef}
        />
      </div>
    </form>
  );
};

export default Searchbar;
