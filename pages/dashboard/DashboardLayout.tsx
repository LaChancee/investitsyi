import {ReactNode} from 'react';
import user from "public/customers/client1.jpg"
import Image from "next/image";
import {useSession} from "next-auth/react";
import Link from "next/link";


interface LayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({children}: LayoutProps) => {
    const {data: session} = useSession()

    return (

        <body className="bg-white h-screen dark:bg-gray-900">
        <aside
            className="fixed top-0 z-10 ml-[-100%] flex h-screen w-fit flex-col justify-between border-r bg-dark px-8 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[15%] xl:w-[10%] 2xl:w-[5%] dark:bg-gray-800 dark:border-gray-700"
        >
            <div>
                <div className="py-4">
                    <Link href="/" title="home">
                                <span className="text-base font-bold text-white dark:text-white">
                        LOGO
                      </span>
                    </Link>
                </div>

                <div className="  mt-8 text-center ">
                    <div className={"grid place-items-center"}>
                        <Image src={user} alt={"user picture w-full"} className={"rounded-full "} width={150}
                               height={150}
                        ></Image>
                    </div>
                </div>

                <ul className="mt-8 space-y-2 tracking-wide">
                    ?

                </ul>
            </div>

            <div className="  border-t pt-4 dark:border-gray-700">
                <button
                    className="group space-x-4 rounded-md py-3 text-white dark:text-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>

                </button>
            </div>
        </aside>
        <div className="ml-auto mb-6 lg:w-[85%] xl:w-[90%] 2xl:w-[95%]">
            <div className="sticky top-0 h-16 border-b bg-lightblue dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
                <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
                    <div className={"flex gap-6"}>
                                <span hidden
                                      className="text-md  text-primary lg:block dark:text-white">Blog</span>
                        <span hidden
                              className="text-md  text-primary lg:block dark:text-white">Webinaire</span>
                        <span hidden
                              className="text-md  text-primary lg:block dark:text-white">Communauté</span>
                    </div>

                    <button className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="my-auto h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <div className="flex space-x-4">
                        {/*// <!--search bar -->*/}
                        <div hidden className="md:block">
                            <div className="relative flex items-center text-gray-400 focus-within:text-orange">
                  <span
                      className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                    <svg
                        xmlns="http://ww50w3.org/2000/svg"
                        className="w-4 fill-current"
                        viewBox="0 0 35.997 36.004"
                    >
                      <path
                          id="Icon_awesome-search"
                          data-name="search"
                          d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                                <input
                                    type="search"
                                    name="leadingIcon"
                                    id="leadingIcon"
                                    placeholder="Search here"
                                    className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-orange dark:bg-gray-900 dark:border-gray-700"
                                />
                            </div>
                        </div>
                        {/*// <!--/search bar -->*/}
                        <button
                            aria-label="search"
                            className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
                        >
                            <svg
                                xmlns="http://ww50w3.org/2000/svg"
                                className="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                                viewBox="0 0 35.997 36.004"
                            >
                                <path
                                    id="Icon_awesome-search"
                                    data-name="search"
                                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                ></path>
                            </svg>
                        </button>
                        <button>
                            <Link
                                href={"/dashboard/abonnement"}
                                className={"text-primary"}>
                                Abonnement
                            </Link>
                        </button>
                        <button
                            aria-label="notification"
                            className="rounded-full text-white text-sm px-3 bg-purple"
                        >
                            15 jours gratuit

                        </button>
                    </div>
                </div>
            </div>

            <div className="px-6 pt-6 2xl:container">
                <div
                    className=" h-[80vh]  rounded-xl "
                >
                    <main>{children}</main>

                    <button
                        className={"absolute z-100 bottom-0 right-0  rounded-full bg-primary m-6 shadow shadow-lg shadow-primary/50"}>
                        <span
                            className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full bg-primary text-white">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                               fill="currentColor"
                               viewBox="0 0 16 16">
                            <path
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                          </svg>


                        </span>

                    </button>
                </div>
            </div>
        </div>
        </body>
    );
};
export default DashboardLayout;