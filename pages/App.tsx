import Image from 'next/image'
import landingPage from 'public/image_landing_page.png'
import wallet from 'public/step/wallet-bitcoin.png'
import creditCard from 'public/step/credit-card.png'
import balance from 'public/step/balance-crypto.png'
import dollar from 'public/step/dolar-crypto.png'
import cardDeco from 'public/cards-deco.png'
import clientGars from 'public/customers/client1.jpg'

import { GoogleFonts } from 'next-google-fonts'
export default function App() {
  return (
    <main className={"p-12 bg-white relative overflow-hidden"}>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" />
        <section className=" dark:bg-gray-900 relative">
            <div className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>

            <div className="grid relative z-10 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                        Votre guide pour des investissements réussis
                    </h1>
                    <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Découvrez les tendances du marché, apprenez les astuces des investisseurs les plus prospères et investissez en toute confiance avec notre plateforme.
                    </p>
                    <a href="#"
                       className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Nous découvrir dès maintenant
                        <svg className="w-5 h-5 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#"
                       className="inline-flex items-center transition justify-center px-5 py-3 text-base font-medium text-center text-primary underline underline-offset-4  rounded-lg hover:decoration-2 focus:ring-4 focus:ring-gray-100 ">
                        Comment ça marche
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src={landingPage} alt={"Image décorative"}/>
                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900  ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 relative z-10">
                    <div className="relative pl-16">
                        <dt className=" font-semibold leading-7 text-black">
                            <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full shadow-xl ">
                                <svg className="w-5 h-5 text-black"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            Investir dans l'avenir,
                            c'est maintenant
                        </dt>
                        <dd className="mt-2  leading-7 text-gray-900">Découvrez comment investir dans l'immobilier, la crypto et les NFT avec notre plateforme éducative.</dd>
                    </div>

                    <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-black">
                            <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full shadow-xl ">
                                <svg className="w-5 h-5 text-black"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                            </div>
                            Des investissements
                            réussis à portée de main
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">Rejoignez la communauté Investytsiyi et apprenez
                            à investir comme un pro pour préparer votre
                            avenir financier.</dd>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="grid justify-items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md  lg:mb-12">
                    <h2 className="mb-4 text-5xl tracking-tight font-semibold text-gray-900 dark:text-white">Comment investir avec <span className={"text-transparent bg-gradient-to-r bg-clip-text from-primary to-orange"}>
                        Investytsiyi
                    </span> </h2>
                </div>
                {/* Steps*/}
                <div className={"grid grid-cols-4 gap-4 xs:grid-cols-1 max-lg:grid-cols-2 max-w-screen relative z-10"}>
                    <div className={"grid gap-2 max-w-sm "}>
                        <div className={"grid place-items-center"}>
                            <Image src={wallet} alt={"wallet-crypto"} width={155} height={167} className={"mb-9 place-item-center "}/>
                        </div>
                        <div className={" grid place-content-center"}>
                            <h2 className={"grid w-fit place-content-center font-semibold text-lg py-3 px-6 bg-grey rounded-full"}>
                                Étape 1
                            </h2>
                        </div>



                        <h2 className={"text-xl font-semibold text-center"}>
                            Évaluer votre
                            profil d'investisseur
                        </h2>
                        <p className={"max-w-sm text-center"}>
                            Commencez par évaluer votre
                            profil d'investisseur pour
                            déterminer votre tolérance au
                            risque et vos objectifs financiers.
                        </p>
                    </div>

                    <div className={"grid gap-2 max-w-sm"}>
                        <div className={"grid place-items-center"}>
                            <Image src={creditCard} alt={"wallet-crypto"} width={155} height={167} className={"mb-9 place-item-center "}/>
                        </div>
                        <div className={"grid place-content-center"}>
                            <h2 className={"grid justify-items-center font-semibold text-lg py-3 px-6 bg-grey rounded-full"}>
                                Étape 2
                            </h2>
                        </div>


                        <h2 className={"text-xl font-semibold text-center"}>
                            Étudier les options
                            d'investissement
                        </h2>
                        <p className={"max-w-sm text-center"}>
                            Étudiez attentivement les options
                            d'investissement dans l'immobilier,
                            la crypto et les NFT pour choisir
                            les investissements les plus adaptés.
                        </p>
                    </div>

                    <div className={"grid gap-2 max-w-sm"}>
                        <div className={"grid place-items-center"}>
                            <Image src={balance} alt={"wallet-crypto"} width={155} height={167} className={"mb-9 place-item-center "}/>
                        </div>
                        <div className={"grid place-content-center"}>
                            <h2 className={"grid justify-items-center font-semibold text-lg py-3 px-6 bg-grey rounded-full"}>
                                Étape 3
                            </h2>
                        </div>


                        <h2 className={"text-xl font-semibold text-center"}>
                            Planifier et gérer
                            votre portefeuille
                        </h2>
                        <p className={"max-w-sm text-center"}>
                            Planifiez et gérez votre portefeuille
                            d'investissement en utilisant les
                            outils et les ressources disponibles
                            pour maximiser votre rendement.
                        </p>
                    </div>
                    <div className={"grid gap-2 max-w-sm"}>
                        <div className={"grid place-items-center"}>
                            <Image src={dollar} alt={"wallet-crypto"} width={155} height={167} className={"mb-9 place-item-center "}/>
                        </div>
                        <div className={"grid place-content-center"}>
                            <h2 className={"grid justify-items-center font-semibold text-lg py-3 px-6 bg-grey rounded-full"}>
                                Étape 4
                            </h2>
                        </div>


                        <h2 className={"text-xl font-semibold text-center"}>
                            Surveiller et ajuster
                            vos investissements
                        </h2>
                        <p className={"max-w-sm text-center"}>
                            Surveillez régulièrement vos
                            investissements et ajustez votre
                            portefeuille en fonction
                            des changements de marché.
                        </p>
                    </div>

                </div>
                <div className={"absolute -inset-y-26 -left-52  z-0 w-1/3 h-1/3 bg-orange/30 rounded-full filter blur-3xl "}></div>

            </div>
        </section>
        <section>
            <div className={"absolute inset-y-56 -right-48  z-0 w-1/2 h-1/3 bg-orange/25 rounded-full filter blur-3xl "}></div>
            {/* Partie orange */}
            <div className={"grid relative z-10 justify-items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"}>
                <div className="max-w-screen-md  lg:mb-16">
                    <h2 className="mb-4 text-5xl tracking-tight font-semibold text-gray-900 dark:text-white">Nos objectifs et missions </h2>
                </div>
                <p className={'text-center text-lg max-w-5xl'}>
                    Soutenir votre réussite financière à long terme en vous fournissant les outils, les ressources et l'éducation
                    nécessaires pour faire des investissements judicieux dans l'immobilier, la crypto et les NFT : notre
                    engagement chez Investytsiyi.
                </p>
            </div>
            <div className={"grid grid-cols-2 grid-flow-dense relative z-10"}>
                <div  className={"grid"}>
                    <Image src={cardDeco} alt={"Cards and decoration"}/>
                </div>
                <div className={"grid grid-rows-3 py-12"}>
                    <div className={"flex items-center row-auto  inline-block gap-6"}>
                        <div className={"h-20 bg-primary min-w-2 w-2 rounded-full shadow-primary shadow-2xl "}></div>
                        <p className={" ml-2 p-4 -mr-6 text-justify inline-block"}>
                            Notre mission est de rendre les investissements accessibles à tous,
                            quel que soit leur niveau d'expertise, afin que chacun puisse réaliser
                            son potentiel financier.
                        </p>
                    </div>
                    <div className={"flex items-center row-auto  inline-block gap-6"}>
                        <div className={"h-20 min-h-20 bg-primary min-w-2  w-2 rounded-full shadow-primary shadow-2xl "}></div>
                        <p className={" ml-2 p-4 -mr-6 text-justify inline-block"}>
                            Nous nous engageons à vous aider à atteindre vos objectifs financiers à
                            long terme en vous proposant des ressources pédagogiques de qualité
                            supérieure pour vous guider dans vos investissements.
                        </p>
                    </div>
                    <div className={"flex  items-center row-auto inline-block gap-6"}>
                        <div className={"h-20 bg-primary min-w-2 w-2 rounded-full shadow-primary shadow-2xl "}></div>
                        <p className={" ml-2 p-4 -mr-6 text-justify inline-block"}>
                            Chez Investytsiyi, notre engagement est de vous aider à atteindre vos
                            objectifs financiers à long terme grâce à des ressources pédagogiques
                            de qualité supérieure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className={"relative z-10 pb-8"}>
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
        <section>
            <div className={"absolute bottom-92 -right-72 z-0 w-1/2 h-1/2 bg-orange/25 rounded-full filter blur-3xl "}></div>
            <div className={"grid relative z-10 justify-items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"}>
                <div className="  lg:mb-12">
                    <h2 className=" text-5xl tracking-tight font-semibold text-gray-900 dark:text-white">Les avis de nos clients </h2>
                </div>
                <p className={'text-center text-lg max-w-5xl'}>
                    Les histoires inspirantes de nos clients qui ont réussi dans l'investissement.
                </p>
            </div>

            <div className={"flex items-center md:flex-cols-3 relative z-10"}>
                <div className={"flex-none bg-grey-100 px-4"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={"self-center"} height="48" width="48"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg>
                </div>
                <div className={"grid grid-cols-4 gap-6 col-span-2 place-items-center "}>
                    <div className={"grid place-items-center rounded-xl w-full h-full shadow-lightblue/30 shadow-xl gap-5 p-5 bg-lightblue"}>
                        <div className={"relative h-3 w-24 inline-block"}>
                            <Image src={clientGars} alt={"Image de faux client"} className={"absolute z-0 w-250 h-250 -top-20 w-full rounded-full"} width={250} height={250}/>
                        </div>
                        <h3 className={"text-lg text-primary font-semibold"}>THOMAS DUPONT</h3>
                        <p className={"text-justify"}>Je suis très satisfait des résultats que j'ai obtenus avec Investytsiyi.
                            J'ai utilisé la plateforme pour investir dans l'immobilier et
                            j'ai pu obtenir un flux de revenus passif très intéressant.
                        </p>
                    </div>

                    <div className={"grid place-items-center rounded-xl w-full h-full shadow-lightblue/30 shadow-xl gap-5 p-5 bg-lightblue"}>
                        <div className={"relative h-3 w-24 inline-block"}>
                            <Image src={clientGars} alt={"Image de faux client"} className={"absolute z-0 w-250 h-250 -top-20 w-full rounded-full"} width={200} height={200}/>
                        </div>
                        <h3 className={"text-lg text-primary  font-semibold"}>SARAH MARTIN</h3>
                        <p className={"text-justify"}>Grâce à Investytsiyi, j'ai réussi à investir dans des NFT et j'ai obtenu des rendements incroyables en peu de temps. Je recommande vivement cette plateforme.
                        </p>
                    </div>
                    <div className={"grid place-items-center rounded-xl w-full h-full shadow-lightblue/30 shadow-xl gap-5 p-5 bg-lightblue"}>
                        <div className={"relative h-3 w-24 inline-block"}>
                            <Image src={clientGars} alt={"Image de faux client"} className={"absolute z-0 w-250 h-250 -top-20 w-full rounded-full"} width={200} height={200}/>
                        </div>
                        <h3 className={"text-lg text-primary font-semibold"}>PIERRE DURANT</h3>
                        <p className={"text-justify"}>Je cherchais une plateforme qui me permettrait d'investir dans l'immobilier de manière simple et efficace,
                            et j'ai trouvé Investytsiyi.
                            J'ai été impressionné par la qualité des informations proposés.
                        </p>
                    </div>

                        <div className={"grid place-items-center rounded-xl w-full h-full shadow-lightblue/30 shadow-xl gap-5 p-5 bg-lightblue"}>
                            <div className={"relative h-3 w-24 inline-block"}>
                                <Image src={clientGars} alt={"Image de faux client"} className={"absolute z-0 w-250 h-4/8 -top-20 w-full bg-center object-scale-down rounded-full"} width={200} height={100}/>
                            </div>
                            <h3 className={"text-lg text-primary font-semibold"}>MARIE LEBLANC</h3>
                            <p className={"text-justify"}>Investytsiyi m'a permis de me lancer dans l'investissement dans la crypto-monnaie, même si je n'avais pas d'expérience dans ce domaine.
                                J'ai réussi à obtenir des rendements impressionnants.
                            </p>
                        </div>
                </div>
                <div className={"flex-none items-center px-4"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={"self-center "} height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
                </div>


            </div>

        </section>
        <section className={"relative z-10"}>
            <div className={"grid relative z-10 justify-items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"}>
                <div className="  lg:mb-12">
                    <h2 className=" text-5xl tracking-tight font-semibold text-gray-900 dark:text-white">Vos questions les plus fréquentes</h2>
                </div>
                <p className={'text-center text-lg max-w-2xl'}>
                    Nous nous basons sur vos nombreux retours pour essayer de répondre à vos interrogations et attentes.
                </p>
            </div>
            <div className={"flex flex-col px-12 gap-4"}>
                <div className={"flex bg-white p-4 px-12 justify-between rounded-xl shadow-xl shadow-circle/30"}>
                    <p className={"self-center text-lg font-semibold"}>Comment créer un compte sur votre plateforme ?</p>
                    <div className={" self-center bg-orange p-1 rounded-lg h-22 w-22"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={"fill-white h-22 w-22"} height="24" width="24"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>
                    </div>
                </div>
                <div className={"flex bg-white p-4 px-12 justify-between rounded-xl shadow-xl shadow-circle/30"}>
                    <p className={"self-center text-lg font-semibold"}>Quel est le montant minimum pour investir ?</p>
                    <div className={" self-center bg-orange p-1 rounded-lg h-22 w-22"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={"fill-white h-22 w-22"} height="24" width="24"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>
                    </div>
                </div>
                <div className={"flex bg-white p-4 px-12 justify-between rounded-xl shadow-xl shadow-circle/30"}>
                    <p className={"self-center text-lg font-semibold"}>Comment puis-je contacter le service client d'Investytsiyi en cas de problème ?</p>
                    <div className={" self-center bg-orange p-1 rounded-lg h-22 w-22"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={"fill-white h-22 w-22"} height="24" width="24"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>
                    </div>
                </div>
                <div className={"flex bg-white p-4 px-12 justify-between rounded-xl shadow-xl shadow-circle/30"}>
                    <p className={"self-center text-lg font-semibold"}>Quels sont les types d'investissements disponibles sur la plateforme ?</p>
                    <div className={" self-center bg-orange p-1 rounded-lg h-22 w-22"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={"fill-white h-22 w-22"} height="24" width="24"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>
                    </div>
                </div>
                <div className={"grid place-content-center"}>
                    <a className={" w-fit  rounded-full border transition hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/30  border-primary text-primary border-2 text-md mt-5 px-6 py-2"}> Voir plus </a>
                </div>
            </div>
        </section>
    </main>

  );
}
