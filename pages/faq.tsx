import Layout from "./Layout";
import Image from "next/image";
import pinkCreditCard from 'public/pink-credit-card.png'
import React from "react";
import Link from "next/link";

const Faq = ()=> {

    return(
        <Layout>
            <div className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>

            <section className=" dark:bg-gray-900 relative">
                <div className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                        <Image src={pinkCreditCard} alt={"decoration"} />
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                            Vos question les plus fréquentes
                        </h1>
                        <p className="max-w-2xl mb-6  mt-5 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Nous nous basons sur vos nombreux retours
                            pour essayer de répondre à vos interrogations et attentes.
                        </p>

                    </div>

                </div>
            </section>
            <div className={"absolute bottom-92 -right-72 z-0 w-1/2 h-full bg-orange/25 rounded-full filter blur-3xl "}></div>

            <div className={"grid gap-20 px-20 py-10"}>
                <section className={"relative z-10"}>
                    <h2 className={"px-12 text-3xl mb-4"}>Fonctionnement</h2>
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
                            <p className={"self-center text-lg font-semibold"}>Comment puis-je contacter le service client d'Investissy en cas de problème ?</p>
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
                    </div>
                </section>
                {/*Section Marketplace*/}
                <section className={"relative z-10"}>
                    <div className={"absolute -left-48 z-0 -top-48 z-0 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>
                    <h2 className={"px-12 text-3xl mb-4"}>Marketplace</h2>
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
                            <p className={"self-center text-lg font-semibold"}>Comment puis-je contacter le service client d'Investissy en cas de problème ?</p>
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
                    </div>
                </section>

                {/*Section Financier*/}
                <section className={"relative z-10"}>
                    <h2 className={"px-12 text-3xl mb-4"}>Financier</h2>
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
                            <p className={"self-center text-lg font-semibold"}>Comment puis-je contacter le service client d'Investissy en cas de problème ?</p>
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
                    </div>
                </section>
                {/*Section Légal*/}
                <section className={"relative z-10"}>
                    <h2 className={"px-12 text-3xl mb-4"}>Légal</h2>
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
                            <p className={"self-center text-lg font-semibold"}>Comment puis-je contacter le service client d'Investissy en cas de problème ?</p>
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
                    </div>
                </section>
                {/*Section Gestion des biens immobilier*/}
                <section className={"relative z-10"}>
                    <h2 className={"px-12 text-3xl mb-4"}>Gestion des biens immobilier</h2>
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
                            <p className={"self-center text-lg font-semibold"}>Comment puis-je contacter le service client d'Investissy en cas de problème ?</p>
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
                    </div>
                </section>
            </div>

        </Layout>
    )
}
export default Faq