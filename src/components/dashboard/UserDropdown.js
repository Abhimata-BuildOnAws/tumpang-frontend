import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const UserDropdown = () => {

    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {

        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
          placement: "bottom-end"
        });

        setDropdownPopoverShow(true);
      };

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    return (
      <>
        {/* Profile Picture */}
        <a
          className="text-blueGray-500 block"
          href="#pablo"
          ref={btnDropdownRef}
          onClick={e => {
            e.preventDefault();
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          }}
        >
          <div className="relative w-12 h-12">
            <img
              alt="..."
              className="rounded-full rounded-full border border-gray-100 shadow-sm h-12 w-12 "
              src={require("../../assets/mock/arvin.jpeg").default}
            />
          </div>
        </a>

        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          }
          style={{ minWidth: "12rem" }}
        >
          <Link to="/dashboard/settings"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Settings
          </Link>
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Messages
          </a>
          <div className="h-0 my-2 border border-solid border-blueGray-100" />
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Log Out
          </a>
        </div>
      </>
    );
  };

export default UserDropdown;
