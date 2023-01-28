import React from "react";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const DropdownPopover = () => {
    setDropdownPopoverShow(!dropdownPopoverShow);
  };
  return (
    <>
      <a
        className="bg-green-700 active:bg-lightBlue-600 rounded shadow hover:shadow-lg outline-none focus:outline-none hover:text-blueGray-700 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={DropdownPopover}
      >
        Menu
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-gray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Blog
        </span>
        <span
          className="text-sm py-2 px-4 cursor-pointer font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Blog Posts
        </span>
        <span
          to="/admin/settings"
          className="text-sm py-2 px-4 cursor-pointer font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Create Blog
        </span>
        <span
          className="text-sm py-2 px-4 cursor-pointer font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          User Profile
        </span>
        
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          About Us
        </span>
        <span
          className="text-sm py-2 px-4 cursor-pointer font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Who we're and what we do!
        </span>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Other Pages
        </span>
        <span
          className="text-sm py-2 px-4 cursor-pointer font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Contact Us
        </span>
        <span
          className="text-sm py-2 px-4 cursor-pointer font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Home page
        </span>
      </div>
    </>
  );
};

export default IndexDropdown;
