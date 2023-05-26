import Layout from "./Layout";
import Image from "next/image";
import card from "public/cardFunc.png";
import folder from "public/dossier.png"
import React from "react";
import girl from "public/girl.png";
import folderIcon from "public/icon/folder-icone.png";
import phone from "public/icon/lock-phone.png";
import shield from "public/icon/shield.png";
import lock from "public/icon/lock.png";
import Link from "next/link";



export default function Fonctionnement() {

    return (
        <Layout>
            <div className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>
            <section className=" dark:bg-gray-900 relative">


                <div className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                    <Image src={card} alt={"Boy on his phone"} className={" "} />
                </div>
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                            Investir avec Investytsiyi : une expérience fluide
                            et intuitive
                        </h1>
                        <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Apprenez comment notre plateforme vous aide à investir dans les
                            domaines les plus porteurs, avec des conseils d'experts, des analyses
                            de marché en temps réel et des outils de gestion de portefeuille.
                        </p>

                    </div>

                </div>
            </section>
            <section className=" dark:bg-gray-900 relative">
                <div className={"absolute -inset-y-26 -right-52 w-1/2 h-full z-0  bg-orange/30 rounded-full filter blur-3xl "}></div>



                <div className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7 ">
                        <h1 className="max-w-2xl mb-6 text-4xl font-bold tracking-tight leading-loose md:text-4xl xl:text-5xl dark:text-white">
                            Comment Investytsiyi
                            fonctionne-t-il ?
                        </h1>
                        <ul className={"grid grid-rows-3 gap-5"}>
                            <li className={"flex gap-6"}>
                                <h1 className={"text-primary text-7xl w-fit font-bold"}>1</h1>
                                <div>
                                    <h3 className={"text-xl font-semibold"}>
                                        Support personnalisé
                                    </h3>
                                    <span>
                                        Nous offrons un support clientèle à la fois par chat bot et par téléphone,
                                        avec un assistant personnel dédié pour répondre à toutes vos questions sur la plateforme.
                                    </span>
                                </div>
                            </li>
                            <li className={"flex gap-6"}>
                                <h1 className={"text-primary text-7xl w-fit font-bold"}>2</h1>
                                <div>
                                    <h3 className={"text-xl font-semibold"}>
                                        Centre de connaissances
                                    </h3>
                                    <span>
                                        Notre blog couvre toutes les tendances actuelles en matière d'investissement.
                                        Vous pouvez également trouver des conseils de nos experts et des tutoriels pour vous aider à mieux comprendre les subtilités de l'investissement.
                                    </span>
                                </div>
                            </li>
                            <li className={"flex gap-6"}>
                                <h1 className={"text-primary text-7xl w-fit font-bold"}>3</h1>
                                <div>
                                    <h3 className={"text-xl font-semibold"}>
                                        Communauté active
                                    </h3>
                                    <span>
                                        Notre communauté est un lieu de rencontre pour
                                        les investisseurs de toutes niveaux d'expérience pour discuter des tendances actuelles du marché, partager des connaissances, et des stratégies.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                        <Image src={folder} alt={"Boy on his phone"} className={""} />
                    </div>
                </div>
            </section>
            <section className={"px-32  pb-6 opacity-100"}>
                <div className={"absolute -inset-y-18 -right-48 -z-50 w-1/2 h-full bg-orange/30 rounded-full filter blur-3xl "}></div>
                <div className={" rounded-xl bg-gradient-to-r from-greenGradient/50 via-midGradient/30 to-endGradient/60 shadow-2xl shadow-lightblue "}>

                    <div className={"grid grid-cols-2 gap-8 px-10 p-8"}>
                        <div className={"grid place-self-center place-content-center p-12 bg-white/50 w-fit h-fit shadow shadow-circle/30 shadow-4xl rounded-full "}>
                            <span className={"text-center max-w-sm p-12"}>
                                “C'est incroyable de trouver une communauté d'investisseurs aussi engagée et
                                passionnée que celle d'Investytsiyi.
                                Grâce à leurs conseils et leur soutien,
                                j'ai pu prendre des décisions d'investissement plus éclairées et augmenter mes bénéfices.”
                            </span>
                            <span className={"text text-primary place-self-center"}>
                              - John Smith
                            </span>

                        </div>
                        <div className={"grid self-center md:text-lg lg:text-xl gap-6"}>
                            <h3 className={"text-4xl font-bold"}>Rejoignez notre communauté
                                d'investisseurs passionnés</h3>
                            <div className={" grid gap-5"}>
                                <p className={"text-lg"}>
                                    Chez Investytsiyi, nous croyons que le partage de connaissances et d'expériences est essentiel pour réussir dans l'investissement. C'est
                                    pourquoi nous avons créé une communauté active où les investisseurs
                                    peuvent se connecter, partager des connaissances, des stratégies,
                                    et des astuces pour réussir.</p>

                                <p className={"text-lg"}>
                                    Rejoignez notre communauté pour interagir avec des gens partageant les
                                    mêmes idées, des experts de l'industrie, et des investisseurs chevronnés.
                                </p>
                                <p className={"text-lg"}>
                                    Vous pourrez poser des questions, trouver des idées d'investissement,
                                    et apprendre des autres membres de la communauté.
                                </p>
                            </div>
                            <div className={"grid place-content-center pb-6"}>
                                <div>
                                    <Link href="/Register"
                                       className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base  text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                        Créer un compte

                                    </Link>
                                    <a href="/contact"
                                       className=" w-fit  rounded-full border transition hover:bg-primary hover:text-white   border-primary text-primary border-2  mt-5 px-6 py-2 ">
                                        Nous contacter
                                    </a>
                                </div>
                            </div>

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
                        <Image src={girl} alt={"Cards and decoration"}/>
                    </div>
                    <div className={"flex flex-col py-6 gap-9 justify-center"}>
                        <div className={"flex items-center row-auto h-fit inline-block "}>
                            <div className={"h-20 bg-primary min-w-2 w-2 rounded-full shadow-primary shadow-3xl "}></div>
                            <p className={"max-w-xl: ml-2 p-3  -mr-6 text-justify inline-block"}>
                                Accès à un chatbot et à un assistant téléphonique pour obtenir
                                des réponses à vos questions.
                            </p>
                        </div>
                        <div className={"flex items-center row-auto  h-fit inline-block "}>
                            <div className={"h-20 min-h-20 bg-primary min-w-2  w-2 rounded-full shadow-primary shadow-2xl "}></div>
                            <p className={" ml-2 -mr-6 p-3 text-justify inline-block"}>
                                Un blog avec des articles et des guides sur l'investissement, les tendances du marché et les astuces pour maximiser vos bénéfices.
                            </p>
                        </div>
                        <div className={"flex  items-center row-auto h-fit inline-block"}>
                            <div className={"h-20 bg-primary min-w-2 w-2 rounded-full shadow-primary shadow-2xl "}></div>
                            <p className={" ml-2  -mr-6 p-3 text-justify inline-block"}>
                                Une communauté d'investisseurs qui partagent leurs expériences
                                et leurs conseils.

                            </p>
                        </div>
                        <div className={"absolute top-0 mt-20 -left-48 z-0 w-1/2 h-full bg-circle rounded-full filter blur-3xl"}></div>
                    </div>
                </div>
            </section>
            <section className={"px-32 py-6"}>
                <div className={"grid relative z-10 justify-items-center  px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"}>
                    <div className="max-w-screen-md  lg:mb-16">
                        <h2 className="mb-4 text-5xl text-center tracking-tight font-semibold text-gray-900 dark:text-white">Protégez vos investissements grâce à notre
                            sécurité renforcée </h2>
                        <span className={"text-center"}>
                            Notre engagement en matière de confidentialité : comment nous nous assurons que vos informations restent privées
                        </span>
                    </div>
                </div>
                <div className={"grid grid-cols-4 gap-6 px-8"}>
                    <div className={"grid place-content-stretch gap-4 w-full h-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white"}>
                        <div className={"grid rounded-xl p-1 h-full w-full bg-cardTransparent "}>
                            <h4 className={"text-6xl  p-3 place-self-center font-bold"}>
                                <Image src={folderIcon} alt={"folder icon"} width={50}/>
                            </h4>
                            <p className={"text-md p-4 text-center"}>
                                Nous utilisons une
                                technologie de cryptage de
                                pointe pour protéger vos
                                informations et vos
                                transactions
                            </p>
                        </div>
                    </div>
                    <div className={"grid place-content-stretch gap-4 w-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white"}>
                        <div className={"grid rounded-xl p-1 h-full w-full bg-cardTransparent "}>
                            <h4 className={"text-6xl  p-3 place-self-center font-bold"}>
                                <Image src={phone} alt={"folder icon"} width={50}/>
                            </h4>
                            <p className={"text-lg p-4 text-center"}>
                                Nous stockons vos
                                informations de manière
                                sécurisée et ne les partageons
                                jamais avec des tiers
                                non autorisés
                            </p>
                        </div>
                    </div>
                    <div className={"grid place-content-stretch gap-4 w-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white "}>
                        <div className={"grid rounded-xl p-1 h-full w-full bg-cardTransparent "}>
                            <h4 className={"text-6xl  p-3 place-self-center font-bold"}>
                                <Image src={lock} alt={"folder icon"} width={50}/>
                            </h4>
                            <p className={"text-lg p-4 text-center"}>
                                Nous nous conformons aux
                                normes de sécurité et de
                                confidentialité les plus
                                strictes pour garantir la sécurité
                                de vos investissements
                            </p>
                        </div>
                    </div>
                    <div className={"grid place-content-stretch gap-4 w-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white"}>
                        <div className={"grid rounded-xl p-1 h-full w-full bg-cardTransparent "}>
                            <h4 className={"text-6xl  p-3 place-self-center font-bold"}>
                                <Image src={shield} alt={"folder icon"} width={50}/>
                            </h4>
                            <p className={"text-lg p-4 text-center"}>
                                Nous avons mis en place des
                                mesures de sécurité
                                supplémentaires pour protéger
                                votre compte, notamment
                                l'authentification à deux facteurs
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"grid place-content-center pt-6"}>
                <Link href="/Register"
                      className="grid w-fit place-content-center px-5 py-3 my-3 mr-3 text-base  text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Créer un compte

                </Link>
                </div>


            </section>

        </Layout>
    )
}
