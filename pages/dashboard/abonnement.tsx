import React from "react";
import DashboardLayout from "./DashboardLayout";
import Link from "next/link";



const Abonnement = () => {

    return (
        <DashboardLayout>
            {/*bread crumbs*/}
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
                                    className="ml-1 text-sm font-bold text-primary md:ml-2 dark:text-gray-400">Abonnement </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </section>
            <section className={"py-7"}>
                <h5 className={"font-semibold text-primary text-xl"}>Gérer vos abonnements </h5>
                <div className="space-y-8 my-4 px-7 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/*// <!-- Pricing Card -->*/}
                    <div
                        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-2 border-circle/30  transition hover:shadow-xl hover:shadow-circle/30 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className=" text-4xl font-semibold">Intro</h3>
                        <div className="flex justify-center items-baseline my-4">
                            <span className="mr-2 text-xl text-purple font-semibold">Gratuit</span>
                        </div>
                        <p className="font-light mb-4 text-gray-500 sm:text-lg dark:text-gray-400">Illimité</p>
                        {/*// <!-- List -->*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span
                                    className={"text-lg"}>Accès gratuit à notre plateforme d'investissement.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Éducation de base pour apprendre les bases de l'investissement.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Investissement à petite échelle pour les portefeuilles limités.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Étape de préparation pour les débutants.</span>
                            </li>
                        </ul>
                        <Link href="/Register"
                              className="text-grey-100 bg-lightblue py-4 transition focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Abonnement courant</Link>

                    </div>
                    {/*// <!-- Pricing Card -->*/}
                    <div
                        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border-2 border-circle/30 hover:shadow-lg hover:shadow-circle/30 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="text-4xl font-semibold">Base</h3>
                        <div className="flex justify-center items-baseline my-4">
                            <span className="mr-2  text-xl text-primary font-semibold">€15 / mois</span>

                        </div>
                        <p className="font-light mb-4 text-gray-500 sm:text-lg dark:text-gray-400">Ou facturé
                            annuellement</p>

                        {/*// <!-- List -->*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Outils de gestion de portefeuille avancés.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Ressources éducatives avancées pour améliorer vos compétences.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Investissement à grande échelle pour les portefeuilles plus importants.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Support client prioritaire pour résoudre rapidement les problèmes.</span>
                            </li>
                        </ul>
                        <Link href="/Register"
                              className="text-white bg-primary py-4 transition hover:bg-lightblue hover:text-gray-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Changer mon abonnement</Link>


                    </div>
                    {/*// <!-- Pricing Card -->*/}
                    <div
                        className="flex relative flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-2 border-circle/30 hover:shadow-lg hover:shadow-circle/30 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className=" text-4xl font-semibold">Pro</h3>
                        <div className="flex justify-center items-baseline my-4">
                            <span className="mr-2 text-xl text-orange font-semibold">25€ / mois</span>
                        </div>
                        <p className="font-light mb-4 text-gray-500 sm:text-lg dark:text-gray-400">Ou facturé
                            annuellement</p>
                        {/*// <!-- List -->*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Investissement diversifié dans l'immobilier, la crypto et les NFT.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Gestion de portefeuille avancée pour les portefeuilles complexes.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Analyse de marché approfondie pour prendre des décisions plus éclairées.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className={"text-lg"}>Outils de recherche avancés pour identifier les meilleures opportunités.</span>
                            </li>
                        </ul>
                        <Link href="/Register"
                              className="text-white bg-primary py-4 transition hover:bg-lightblue hover:text-gray-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Changer mon abonnement</Link>

                    </div>
                </div>
            </section>
            <section >
                <Link href="/"
                      className="text-white bg-gray-300 py-4
                       transition hover:bg-primary  focus:ring-4 focus:ring-primary-200
                       font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white
                       dark:focus:ring-primary-900"
                >Se désabonner</Link>

            </section>
        </DashboardLayout>
    )
}
export default Abonnement