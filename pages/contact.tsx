import Layout from "./Layout";
import Image from "next/image";
import cardContact from "public/cardContact.png";
import React from "react";
import Link from "next/link";


export default function Contact(){

    return(
        <Layout>
            <div className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>
            <section className=" dark:bg-gray-900 relative">
                <div className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                        <Image src={cardContact} alt={"decoration"} />
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                            Contactez-nous pour obtenir de des informations supplémentaires
                        </h1>
                        <p className="max-w-2xl mb-6  mt-5 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Contactez notre équipe pour en savoir plus sur la façon dont
                            nous pouvons vous aider à atteindre vos objectifs.
                        </p>

                    </div>

                </div>
            </section>
            <section className={"p-20 z-10 relative grid gap-6"}>
                <h1 className={"block text-xl font-bold text-gray-800 sm:text-2xl dark:text-white"}>Bonjour! En quoi pouvons-nous vous aider aujourd'hui?</h1>
                <div className={"grid place-content-stretch gap-4 w-full h-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white"}>
                    <div className={"grid rounded-xl p-6 h-full w-full bg-cardTransparent "}>
                        <ul className={"gap-6 grid"}>
                            <li>
                                <label htmlFor="demandeType"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choisissez un type de demande</label>
                                <select name="demandeType" id="demandeType"
                                       className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required={true}>
                                    <option  className={"text-gray-150"} selected>Demande générale</option>
                                    <option>
                                        Immobilier
                                    </option>
                                    <option>
                                        Crypto / NFT
                                    </option>
                                    <option>
                                        Startup
                                    </option>
                                    <option>
                                        Aide
                                    </option>
                                    <option>
                                        Autre
                                    </option>

                                </select>
                            </li>
                            <li>
                                <label htmlFor="subject"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sujet de la demande</label>
                                <input type="text" name="subject" id="subject"
                                       className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="" required={true}/>
                            </li>
                            <li>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse mail</label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="exemple@mail.com" required={true}/>
                            </li>
                            <li>
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom Prénom</label>
                                <input type="text" name="name" id="name"
                                       className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="John Doe" required={true}/>
                            </li>
                            <li>
                                <label htmlFor="detail"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Détail</label>
                                <textarea name="detail" id="detail"
                                       className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="" required={true}/>
                            </li>
                            <li>
                                <div className=" items-center justify-center w-full">
                                    <label htmlFor="detail"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pièces jointes (valeur facultative)</label>
                                    <label htmlFor="dropzone-file"
                                           className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold text-primary">Ajouter un fichier</span> ou faites le glisser ici</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden"/>
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <div className={"grid place-content-center pt-6"}>
                            <button className="grid w-fit place-content-center px-5 py-3 my-3 mr-3 text-base  text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Envoyer

                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}