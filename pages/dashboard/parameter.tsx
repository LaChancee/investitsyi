import DashboardLayout from "./DashboardLayout";
import Link from "next/link";
import React from "react";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";

const Parameter = () => {
    return(
        <DashboardLayout>
            <section>
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li>
                            <div className="flex items-center">
                                <Link href="/dashboard/profile"
                                      className="ml-1 text-sm font-medium text-primary hover:text-orange md:ml-2 dark:text-gray-400 dark:hover:text-white">Mon
                                    profile</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-primary" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span
                                    className="ml-1 text-sm font-bold text-primary md:ml-2 dark:text-gray-400">Paramètres </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </section>
            <section className={"py-7"}>
                <h5 className={"font-semibold text-primary text-xl"}>Paramètrez votre compte </h5>
                <div >
                    <form className={"bg-white grid gap-4 shadow shadow-xl shadow-circle/30  my-5 max-w-lg rounded-2xl p-4"}>
                        <h6 className={"font-semibold text-primary text-xl"}>Modifier vos informations personnelles</h6>
                        <div className={"grid gap-1.5"}>
                            <div className={"flex justify-between gap-3"}>
                                <div className={"grid gap-2 w-full"}>
                                    <label className={"font-medium "}>Prénom</label>
                                    <input name=" prenom" type={"text"} className={"bg-grey focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-circle rounded-lg py-2 p-1"}/>
                                </div>
                                <div className={"grid gap-2 w-full"}>
                                    <label className={"font-medium "}>Nom</label>
                                    <input name="nom" type={"text"} className={"bg-grey focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-circle py-2 rounded-lg p-1"}/>
                                </div>
                            </div>
                            <div className={"grid gap-2 w-full"}>
                                <label className={"font-medium "}>E-mail</label>
                                <input name="email" type={"email"} className={"bg-grey focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-circle rounded-lg py-2 p-1"}/>
                            </div>
                            <div className={"grid gap-2 w-full"}>
                                <label className={"font-medium "}>Numéro de téléphone</label>
                                <input name="tel" type={"tel"} className={"bg-grey focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-circle rounded-lg py-2 p-1"}/>
                            </div>
                        </div>
                        <ButtonPrimary text={"Enregistrer les modifications"} className={`hover:bg-lightblue hover:text-gray-900 hover:shadow-none`}/>

                    </form>
                </div>
            </section>
        </DashboardLayout>
    )
}
export default Parameter