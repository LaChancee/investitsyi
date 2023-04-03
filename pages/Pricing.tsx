import Layout from "./Layout";
import Image from "next/image";
import cardDeco from "public/bars.png";
import React from "react";


export default function Pricing(){

    return(
        <Layout>
            <div className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>
            <section className=" dark:bg-gray-900 relative">
                <div className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                        <Image src={cardDeco} alt={"decoratio,n"} />
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                            Choisissez le tarif
                            qui convient le
                            mieux à vos besoins
                        </h1>
                        <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Découvrez nos différentes options de tarification et
                            choisissez celle qui correspond à votre profil
                            d'investisseur.
                        </p>

                    </div>

                </div>
            </section>
            <section className={"relative z-10 pb-8 px-20"}>
                <div className={"absolute bottom-22 -right-48  z-0 w-1/2 h-1/2 bg-circle/30 rounded-full filter blur-3xl "}></div>
                {/* Partie orange */}
                <div className={"grid relative z-10 justify-items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"}>
                    <div className="  lg:mb-12">
                        <h2 className="mb-4 text-5xl tracking-tight font-semibold text-gray-900 dark:text-white">Commencez l’aventure avec Investytsiyi  </h2>
                    </div>
                    <p className={'text-center text-lg max-w-5xl'}>
                        Nous sommes fiers de proposer des frais compétitifs, afin que vous puissiez maximiser vos rendements
                        en investissant avec notre plateforme.
                    </p>
                </div>
                <div className="space-y-8 px-14 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
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
                                <span className={"text-lg"}>Accès gratuit à notre plateforme d'investissement.</span>
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
                        <a href="#"
                           className="text-grey-100 bg-lightblue transition py-4 hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">S'inscrire pour la version d'essai</a>
                        <a href={'#'} className={"text-primary my-4 hover:underline hover:underline-offset-2"}> Voir les caractéristiques</a>
                    </div>
                    {/*// <!-- Pricing Card -->*/}
                    <div
                        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border-2 border-circle/30 hover:shadow-lg hover:shadow-circle/30 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="text-4xl font-semibold">Base</h3>
                        <div className="flex justify-center items-baseline my-4">
                            <span className="mr-2  text-xl text-primary font-semibold">€15 / mois</span>

                        </div>
                        <p className="font-light mb-4 text-gray-500 sm:text-lg dark:text-gray-400">Ou facturé annuellement</p>

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
                                <span  className={"text-lg"}>Outils de gestion de portefeuille avancés.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/*// <!-- Icon -->*/}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span  className={"text-lg"}>Ressources éducatives avancées pour améliorer vos compétences.</span>
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
                                <span  className={"text-lg"}>Support client prioritaire pour résoudre rapidement les problèmes.</span>
                            </li>
                        </ul>
                        <a href="#"
                           className="text-grey-100 bg-lightblue transition py-4 hover:bg-primary hover:text-white  focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">S'inscrire pour la version d'essai</a>
                        <a href={'#'} className={"text-primary my-4 hover:underline hover:underline-offset-2"}> Voir les caractéristiques</a>

                    </div>
                    {/*// <!-- Pricing Card -->*/}
                    <div
                        className="flex relative z-10 flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-2 border-circle/30 hover:shadow-lg hover:shadow-circle/30 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className=" text-4xl font-semibold">Pro</h3>
                        <div className="flex justify-center items-baseline my-4">
                            <span className="mr-2 text-xl text-orange font-semibold">25€ / mois</span>
                        </div>
                        <p className="font-light mb-4 text-gray-500 sm:text-lg dark:text-gray-400">Ou facturé annuellement</p>
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
                                <span  className={"text-lg"}>Investissement diversifié dans l'immobilier, la crypto et les NFT.</span>
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
                        <a href="#"
                           className="text-grey-100 bg-lightblue py-4 transition hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">S'inscrire pour la version d'essai</a>
                        <a href={'#'} className={"text-primary my-4 hover:underline hover:underline-offset-2"}> Voir les caractéristiques</a>
                    </div>
                </div>
                <div/>
            </section>

        </Layout>)
}