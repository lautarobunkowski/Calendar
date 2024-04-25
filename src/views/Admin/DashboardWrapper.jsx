import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../../components/DropdownMenu";
import { useAuth } from "../../context/authContext";

const DropdownItemsInfo = [
  "Profile",
  "Branding",
  "My Link",
  "Calendar sync",
  "All settings",
  "Getting started guide",
  "Community",
];

const DashboardWrapper = (props) => {
  const [active, setActive] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (auth.user === null) {
        navigate("/login");
      }
    };
    checkAuth();
  }, [auth, navigate]);

  return (
    auth.user && (
      <div className="min-h-screen ">
        <div className="flex">
          {/* <div className="w-[65px]">
          <nav className="w-[65px] fixed z-10 top-0 flex flex-col gap-1 h-screen bg-gray-300">
            <div className="flex justify-between h-[72px] p-5">
              <button className="w-[28px] h-[28px] rounded-sm flex items-center justify-center">
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14
                    5H2C1.44772 5 1 4.55228 1 4Z" fill="currentColor"></path><path d="M1 8C1 7.44772 1.44772 7 2 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H2C1.44772 9 1 8.55228
                    1 8Z" fill="currentColor"></path><path d="M1 12C1 11.4477 1.44772 11 2 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1
                    12.5523 1 12Z" fill="currentColor"></path></svg>
                </span>
              </button>
            </div>
          </nav>
        </div> */}
          <div className="flex flex-1 min-h-screen flex-col">
            <div className="sticky top-0 z-10 flex flex-col">
              <header className="flex justify-center items-center w-full h-[72px] py-3 ">
                {/* Mobile menu button and logo container */}
                <div className="py-2 px-5">
                  <div className="flex gap-3">
                    <button className="relative flex self-center w-4 h-4 rounded-sm">
                      <span className="w-full h-full">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M1 4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14
    5H2C1.44772 5 1 4.55228 1 4Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M1 8C1 7.44772 1.44772 7 2 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H2C1.44772 9 1 8.55228
    1 8Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M1 12C1 11.4477 1.44772 11 2 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1
    12.5523 1 12Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                    <Link
                      to={`#`}
                      className="flex items-center h-8 w-8 rounded-sm mr-0"
                    >
                      <img
                        src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg"
                        alt="calendly"
                        className="w-full h-full"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex px-4 grow justify-end max-w-[1264px]">
                  <div className="flex gap-2 items-center">
                    {/* invite user button */}
                    {/* <button></button> */}
                    <div>
                      <DropdownMenu
                        open={active}
                        onOpenChange={() => setActive(!active)}
                      >
                        <DropdownMenuTrigger asChild>
                          <div className="rounded-full bg-gray-400 w-8 h-8">
                            <div className="w-full h-full flex items-center justify-center">
                              <span>L</span>
                            </div>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="shadow-xl">
                          <DropdownMenuLabel className="w-[280px] px-0">
                            <div className="flex flex-col items-start w-full text-left px-3 gap-[2px]">
                              <h3 className="text-xl font-bold w-full text-left">
                                LautaroB
                              </h3>
                              <div className="flex items-center w-full">
                                <p className="font-normal leading-[1.4] text-gray-400 text-left text-sm">
                                  Teams free trial
                                </p>
                                <button className="w-full min-h-[20px] ml-1">
                                  <span className="flex items-center justify-center">
                                    Upgrade
                                  </span>
                                </button>
                              </div>
                              <div>
                                <span className="h-6 flex items-center rounded bg-[#CCCCCC] px-2 text-xs uppercase tracking-widest ">
                                  0 days left
                                </span>
                              </div>
                            </div>
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator className="border-t border-gray-400 mb-2" />
                          <DropdownMenuLabel className="uppercase text-left text-xs tracking-widest text-gray-500">
                            account settings
                          </DropdownMenuLabel>
                          <DropdownMenuGroup>
                            {DropdownItemsInfo.slice(0, 5).map(
                              (item, index) => {
                                return (
                                  <DropdownMenuItem
                                    key={`Dropdown-item-info-${index}`}
                                    onClick={() => setActive(false)}
                                  >
                                    <Link
                                      to={`/#`}
                                      className="flex h-10 w-full hover:bg-zinc-700 items-center px-4"
                                    >
                                      <img
                                        src="/icons/Alert.svg"
                                        alt=""
                                        className="w-6 h-6 mr-4"
                                      />
                                      <p className="">{item}</p>
                                    </Link>
                                  </DropdownMenuItem>
                                );
                              }
                            )}
                          </DropdownMenuGroup>
                          <DropdownMenuLabel className="uppercase text-left text-xs tracking-widest text-gray-500">
                            resources
                          </DropdownMenuLabel>
                          <DropdownMenuGroup>
                            {DropdownItemsInfo.slice(5).map((item, index) => {
                              return (
                                <DropdownMenuItem
                                  key={`Dropdown-item-info-${index}`}
                                  onClick={() => setActive(false)}
                                >
                                  <Link
                                    to={`/#`}
                                    className="flex h-10 w-full hover:bg-zinc-700 items-center px-4"
                                  >
                                    <img
                                      src="/icons/Alert.svg"
                                      alt=""
                                      className="w-6 h-6 mr-4"
                                    />
                                    <p className="">{item}</p>
                                  </Link>
                                </DropdownMenuItem>
                              );
                            })}
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator className="border-t border-gray-400 my-2" />
                          <DropdownMenuItem onClick={() => setActive(false)}>
                            <Link
                              to={`/#`}
                              className="flex h-10 w-full hover:bg-zinc-700 items-center px-4"
                            >
                              <img
                                src="Alert.svg"
                                alt=""
                                className="w-6 h-6 mr-4"
                              />
                              <p className="">Logout</p>
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    )
  );
};

export default DashboardWrapper;
