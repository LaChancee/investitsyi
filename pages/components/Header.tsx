import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import logo from "public/Logo-investitsiyi.svg"




export default function Header() {

  const {data:session} = useSession()
  return (
    <>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer"
          hidden
          aria-hidden="true"
        />  {/* shadow ici*/}
        <nav className="fixed z-20  bg-white w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative  dark:shadow-none">
          <div className="xl:container m-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div className="w-full flex justify-between lg:w-fit">
                <Link href={"/"} >
                  <Image src={logo} alt={"Logo Investytsiyi"} width={150}/>
                </Link>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <Link
                        href="/"
                        className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Accueil</span>
                      </Link>
                    </li><li>
                      <Link
                        href="/AboutUs"
                        className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>A propos</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Fonctionnement"
                        className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Fonctionnement</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Pricing"
                        className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Tarif</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Contact</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Blog</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {
                  session?.user ? (
                      <div className="w-full  gap-2 space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                        <a
                            href="#"
                            className="relative flex h-9 ml-auto items-center justify-center sm:px-4 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        ><Link href="/dashboard/profile">
                    <span className="relative text-sm font-semibold text-primary hover:text-blue-600 dark:text-primaryLight hover:text-blue-700">
                      Dashboard
                    </span>
                        </Link>
                        </a>
                        <a
                            href="#"
                            className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        >

                      <button onClick={() => signOut()} className="relative text-sm font-semibold px-3 rounded-full py-2 text-white dark:text-gray-900">
                        Logout
                      </button>

                        </a>
                      </div>
                  ) :(
                      <div className="w-full  gap-2 space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                        <a
                            href="#"
                            className="relative flex h-9 ml-auto items-center justify-center sm:px-4 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        ><Link href="/Register">
                    <span className="relative text-sm font-semibold text-primary hover:text-blue-600 dark:text-primaryLight hover:text-blue-700">
                      Sign Up
                    </span>
                        </Link>
                        </a>
                        <Link
                            href="/Login/Login"
                            className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        >

                      <button className="relative text-sm font-semibold px-3 rounded-full py-2 text-white dark:text-gray-900">
                        Login
                      </button>

                        </Link>
                      </div>
                  )

                }





              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
