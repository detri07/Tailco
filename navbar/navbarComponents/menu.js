export default function Menu(props) {
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex space-x-4 items-center">
          {props.menu.map((item) => {
            return (
              <a
                key={item.name}
                href={item.href}
                className={props.classNameMenu(
                  item.current
                    ? "bg-[#ACCBF8] text-white"
                    : " text-black hover:bg-[#ACCBF8] hover:text-white",
                  "px-4 py-2 rounded-lg text-sm font-medium font-[Poppins]"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
