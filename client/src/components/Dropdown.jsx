import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



export default function Dropdown({ email }) {
  
  const profileImg = localStorage.getItem("profileImage");

  return (
    <Menu as="div" className="relative inline-block text-left mr-3">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-gray-50 text-md font-semibold text-gray-900  hover:drop-shadow-xl transition-all ease-in-out">
          <img
            src={profileImg}
            alt="profileimage"
            className="w-10 h-10 rounded-full"
          />
          <div className="mt-3 mr-1 text-black text-xl">
            <FiChevronDown />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-md font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[14rem]"
                )}
                title={email}
              >
                {email}
              </div>
              
              )}
            </Menu.Item>
            <hr />
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/dashboard"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium"
                  )}
                >
                  Dashboard
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/mybookings"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium"
                  )}
                >
                  My Bookings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/property"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium"
                  )}
                >
                  My Properties
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    
                    localStorage.clear();
                    window.location = "/";
                    toast.success("logged out successfully");
                   
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm font-medium"
                  )}
                >
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}