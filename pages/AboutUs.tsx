import Layout from "./Layout";
import React from "react";
import { GoogleFonts } from 'next-google-fonts'
import Image from "next/image";
import boy from 'public/boyOnPhone.png'
import pinkCreditCard from 'public/pink-credit-card.png'
import cardDeco from "public/bars.png";

export default function AboutUs() {
    return (
        <Layout>
            <main className={"overflow-x-hidden"}>
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" />
                <section className=" dark:bg-gray-900 relative">
                    <div className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>

                    <div className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                                Notre mission pour les investisseurs débutants
                            </h1>
                            <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Plongez au cœur de notre entreprise, laissez-vous porter par notre histoire et
                                découvrez notre mission passionnée, celle qui nous pousse à accompagner les
                                investisseurs pour les aider à réussir pleinement et sereinement leurs
                                projets d'investissement.
                            </p>

                        </div>
                        <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                            <Image src={boy} alt={"Boy on his phone"} className={"mt-24 top-1/3 h-full scale-150 "} />
                        </div>
                    </div>
                </section>
                <section className={"px-32  pb-6 opacity-100"}>
                    <div className={"absolute -inset-y-18 -right-48 -z-50 w-1/2 h-full bg-orange/30 rounded-full filter blur-3xl "}></div>
                    <div className={" rounded-xl bg-gradient-to-r from-greenGradient/50 via-midGradient/30 to-endGradient/60 shadow-2xl shadow-lightblue "}>
                        <div className={" grid place-items-center gap-3 pt-14 "}>
                            <h2 className={"text-4xl font-semibold"}>
                                Notre histoire
                            </h2>
                            <p className={"max-w-xl md:text-lg lg:text-xl text-center"}>
                                Découvrez comment Investissy est devenu un leader de
                                l'investissement en ligne
                            </p>
                        </div>
                        <div className={"grid grid-cols-2 gap-8 px-10"}>
                            <Image src={pinkCreditCard} alt={"Boy on his phone"} className={"mt-6 h-full"} />
                            <div className={"self-center md:text-lg lg:text-xl "}>
                                <p className={"pb-5"}>
                                    Chez Investissy, nous avons une histoire riche qui remonte à nos débuts.
                                    Nous avons commencé comme une petite start-up qui cherchait à démocratiser l'investissement en ligne,
                                    offrant des outils et des ressources innovants aux investisseurs débutants.</p>

                                <p>
                                    Avec le temps, nous avons grandi pour devenir un leader de l'investissement en ligne,
                                    offrant des solutions pour les investisseurs de tous niveaux d'expérience.
                                    Notre engagement envers la transparence,
                                    la sécurité et l'innovation nous a aidés à devenir l'un des meilleurs choix
                                    pour les investisseurs cherchant à atteindre leurs objectifs financiers.
                                </p>
                            </div>
                        </div>
                        <div className={"grid place-content-center pb-6"}>
                            <div>
                                <a href="#"
                                   className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                    Nous découvrir dès maintenant

                                </a>
                                <a href="#"
                                   className="inline-flex items-center transition justify-center px-5 py-3 text-base font-medium text-center text-primary underline underline-offset-4  rounded-lg hover:decoration-2 focus:ring-4 focus:ring-gray-100 ">
                                    Comment ça marche ?
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"px-32 py-6"}>
                    <div className={"grid relative z-10 justify-items-center  px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"}>
                        <div className="max-w-screen-md  lg:mb-16">
                            <h2 className="mb-4 text-5xl tracking-tight font-semibold text-gray-900 dark:text-white">Quelques chiffres sur Investissy </h2>
                        </div>
                        <p className={'text-center text-lg max-w-xl'}>
                            Découvrez pourquoi Investissy est la plateforme d'investissement
                            en ligne préférée des investisseurs
                        </p>
                    </div>
                    <div className={"grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4  gap-6 px-8"}>
                        <div className={"grid place-content-stretch gap-4 w-full h-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white"}>
                            <div className={"grid rounded-xl p-1 h-full w-full bg-cardTransparent "}>
                                <h4 className={"text-6xl  p-3 place-self-center font-bold"}>
                                    +20
                                </h4>
                                <p className={"text-lg p-4 text-center"}>
                                    Experts en investissement
                                </p>
                            </div>
                        </div>
                        <div className={"grid place-content-stretch gap-4 w-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white"}>
                            <div className={"grid rounded-xl p-1 h-full w-full bg-cardTransparent "}>
                                <h4 className={"text-6xl  p-3 place-self-center font-bold"}>
                                    +10k
                                </h4>
                                <p className={"text-lg p-4 text-center"}>
                                    Utilisateurs satisfaits
                                </p>
                            </div>
                        </div>
                        <div className={"grid place-content-stretch gap-4 w-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white"}>
                            <div className={"grid rounded-xl p-1 h-full w-full bg-cardTransparent "}>
                                <h4 className={"text-6xl  p-3 place-self-center font-bold"}>
                                    96%
                                </h4>
                                <p className={"text-lg p-4 text-center"}>
                                    Un taux de satisfaction client
                                </p>
                            </div>
                        </div>
                        <div className={"grid place-content-stretch gap-4 w-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white"}>
                            <div className={"grid rounded-xl p-1 h-full w-full bg-cardTransparent "}>
                                <h4 className={"text-6xl  p-3 place-self-center font-bold"}>
                                    +8k
                                </h4>
                                <p className={"text-lg p-4 text-center"}>
                                    Articles publiés sur notre blog
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={"grid relative z-10 justify-items-center  px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"}>
                        <div className="max-w-screen-md  lg:mb-8">
                            <h2 className=" text-5xl tracking-tight font-semibold text-gray-900 dark:text-white">Notre mission </h2>
                        </div>
                        <p className={'text-center text-lg max-w-xl'}>
                            Pourquoi nous faisons ce que nous faisons
                        </p>
                    </div>
                    <div className={"grid grid-cols-2 grid-flow-dense px-6 relative z-10 " +
                        ""}>
                        <div  className={"grid relative z-10"}>
                            <Image src={cardDeco} alt={"Cards and decoration"}/>
                        </div>
                        <div className={"flex flex-col py-6 gap-9 justify-center "}>
                            <div className={"flex items-center row-auto  inline-block gap-6"}>
                                <div className={"h-20 bg-primary min-w-2 w-2 rounded-full shadow-primary shadow-3xl "}></div>
                                <p className={"max-w-xl: ml-2 p-9  -mr-6 text-justify inline-block"}>
                                    Chez Investissy, notre mission est d'aider les gens à prendre le contrôle de leur avenir financier
                                    en
                                    leur fournissant les connaissances et les outils dont ils ont besoin pour réussir dans l'investissement.
                                </p>
                            </div>
                            <div className={"flex items-center row-auto  inline-block gap-6"}>
                                <div className={"h-20 min-h-20 bg-primary min-w-2  w-2 rounded-full shadow-primary shadow-2xl "}></div>
                                <p className={" ml-2 p-4 -mr-6 p-9 text-justify inline-block"}>
                                    Nous croyons que l'investissement est une compétence qui peut être apprise,
                                    et que tout le monde peut réussir à investir s'ils ont accès à la bonne formation
                                    et aux bons outils.
                                </p>
                            </div>
                            <div className={"flex  items-center row-auto inline-block gap-6"}>
                                <div className={"h-20 bg-primary min-w-2 w-2 rounded-full shadow-primary shadow-2xl "}></div>
                                <p className={" ml-2 p-4 -mr-6 p-9 text-justify inline-block"}>
                                    C'est pourquoi nous avons créé une plateforme éducative complète
                                    qui est accessible à tous, quelle que soit leur expérience
                                    ou leur niveau de connaissances.
                                </p>
                            </div>
                            <div className={"absolute top-0 mt-20 -left-48 -z-50 w-1/2 h-full bg-circle rounded-full filter blur-3xl"}></div>
                        </div>
                    </div>
                </section>
                <section className={"px-32  pb-6 opacity-100"}>
                    <div className={"absolute -inset-y-18 -right-48 -z-50 w-1/2 h-full bg-orange/30 rounded-full filter blur-3xl "}></div>
                    <div className={" rounded-xl bg-cardTransparent gap-4 shadow-2xl shadow-lightblue "}>
                        <div className={" grid place-items-center gap-4 pt-14 "}>
                            <h2 className={"text-4xl font-semibold"}>
                                Notre équipe
                            </h2>
                            <p className={"max-w-xl md:text-lg lg:text-xl text-center"}>
                                Les personnes qui rendent Investissy possible
                            </p>
                            <div className={"self-center gap-6 max-w-lg md:text-lg lg:text-xl "}>
                            <p className={"pb-5 text-center"}>
                                Notre équipe est composée de professionnels de l'investissement,
                                de développeurs, de spécialistes du marketing et de l'éducation, qui travaillent
                                tous ensemble pour offrir à nos utilisateurs une expérience de qualité supérieure.
                            </p>

                            <p className={"pb-5 text-center"}>
                                Nous sommes passionnés par l'investissement et nous croyons en l'importance
                                de partager nos connaissances avec les autres.
                            </p>
                            <p className={"pb-5 text-center"}>
                                Chez Investissy, nous sommes fiers de la culture que nous avons créée et de
                                l'impact que nous avons sur la vie de nos utilisateurs.
                            </p>
                        </div>
                        </div>




                    </div>
                </section>
                <section>
                    <div className={"grid relative z-10 justify-items-center  px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"}>
                        <div className="max-w-screen-lg gap-4 lg:mb-8">
                            <h2 className=" text-5xl tracking-tight font-semibold text-gray-900 dark:text-white">Vous souhaitez prendre contact avec nous ? </h2>
                        </div>
                        <span className={'text-center text-xl mb-8 max-w-xl'}>
                            Nous sommes la pour vous
                        </span>
                        <p className={"max-w-xl text-center"}>
                            Nous sommes heureux de vous aider avec toutes vos questions et de recevoir vos commentaires.
                            Que ce soit pour discuter de nos offres, devenir partenaire ou simplement discuter de votre
                            expérience d'investissement, n'hésitez pas à nous contacter.
                        </p>
                    </div>
                    <div className={"grid place-items-center py-4 mb-12"}>
                        <div>
                            <a href="#"
                               className="inline-flex items-center justify-center px-6 py-2 mr-3 text-base font-medium text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Nous contacter
                            </a>
                            <a className={" w-fit  rounded-full border transition hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/30  border-primary text-primary border-2 text-md mt-5 px-6 py-2"}> Créer un compte </a>
                        </div>

                    </div>
                </section>
            </main>

        </Layout>
    )
}