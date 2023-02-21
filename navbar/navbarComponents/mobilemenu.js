import { Disclosure } from "@headlessui/react";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";

export default function Mobilemenu(props) {
  return (
    <>
      <Disclosure className="lg:hidden">
        {({ open }) => (
          <>
            <div className="absolute inset-y-0 top-1 right-0 flex items-start lg:hidden">
              <Disclosure.Button>
                {open ? (
                  <HiMenuAlt3 className="h-6 w-6 text-black" />
                ) : (
                  <HiMenu className="h-6 w-6 text-black" />
                )}
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {props.menu
                  .map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={props.classNameMenu(
                        item.current
                          ? "bg-[#ACCBF8] text-white"
                          : " text-black hover:bg-[#ACCBF8] hover:text-white",
                        "block px-4 py-2 rounded-lg text-sm font-medium font-[Poppins]"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))
                  .reverse()}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
