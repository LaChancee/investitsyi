import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import logo from "public/logoNEW.png"




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
                      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5.375C15 6.26502 14.7361 7.13504 14.2416 7.87507C13.7471 8.61509 13.0443 9.19186 12.2221 9.53246C11.3998 9.87305 10.495 9.96217 9.62209 9.78853C8.74918 9.6149 7.94736 9.18632 7.31802 8.55698C6.68868 7.92764 6.2601 7.12582 6.08647 6.25291C5.91283 5.37999 6.00195 4.47519 6.34254 3.65292C6.68314 2.83066 7.25991 2.12785 7.99993 1.63339C8.73996 1.13892 9.60998 0.875 10.5 0.875C11.6935 0.875 12.8381 1.34911 13.682 2.19302C14.5259 3.03693 15 4.18153 15 5.375ZM13.875 14.375H7.125C5.63316 14.375 4.20242 14.9676 3.14752 16.0225C2.09263 17.0774 1.5 18.5082 1.5 20V20C1.5 20.2984 1.61853 20.5845 1.82951 20.7955C2.04048 21.0065 2.32663 21.125 2.625 21.125H18.375C18.6734 21.125 18.9595 21.0065 19.1705 20.7955C19.3815 20.5845 19.5 20.2984 19.5 20C19.5 18.5082 18.9074 17.0774 17.8525 16.0225C16.7976 14.9676 15.3668 14.375 13.875 14.375Z" stroke="#100688" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

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
                            href="/Login"
                            className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        >

                      <button className="relative text-sm font-semibold px-3 rounded-full py-2 text-white dark:text-gray-900">
                        Découvrir
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
