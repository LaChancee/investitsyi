import Layout from "./Layout";
import Image from "next/image";
import phone from "public/phoneBlog.png";
import React, {useEffect, useState} from "react";
import {Articles} from "@prisma/client";
import axios from "axios";
import purple from "public/purpleBackground.png";
import Link from "next/link";




export default function Blog() {

    const [articles, setArticles] = useState<Articles[]>([]);
    function formatDate(dateISO: Date) {
        const date = new Date(dateISO);
        const day = String(date.getDate()).padStart(2, "0"); // Ajoute un zéro devant si le jour est inférieur à 10
        const month = getMonthName(date.getMonth());
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    function getMonthName(month: number) {
        const months = [
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre",
        ];

        return months[month];
    }


    useEffect(() => {
            axios.get("https://investissy.vercel.app/api/article/getArticles")
                .then((response) => {
                    setArticles(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching articles:", error);
                });
        }, []);

    return (
        <Layout>
            <div
                className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>
            <section className=" dark:bg-gray-900 relative">
                <div
                    className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                        <Image src={phone} alt={"decoration"}/>
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                            Actualités & Analyses
                        </h1>
                        <p className="max-w-2xl mb-6  mt-5 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Restez
                            informé des dernières actualités du marché financier et
                            accédez à des analyses approfondies pour vous aider à prendre les bonnes décisions
                            d'investissement en temps réel.
                            Explorez notre vaste collection d'articles détaillés rédigés par des experts en finance pour
                            vous aider à investir intelligemment
                            et à mieux comprendre le monde de la finance, et restez au courant des dernières tendances
                            et stratégies de l'investissement.
                        </p>

                    </div>

                </div>
            </section>
            <section className={"py-6 grid content-center relative z-10 px-24"}>
                <ul className={"w-fit place-self-center grid grid-cols-5 gap-5"}>
                    <li className={"bg-white text-center text-primary text-xl px-4 py-3 rounded-xl shadow shadow-xl shadow-circle/30 hover:bg-grey "}>
                        #Finances
                    </li>
                    <li className={"bg-white text-center text-primary text-xl px-4 py-3 rounded-xl shadow shadow-xl shadow-circle/30 hover:bg-grey "}>
                        #NFT
                    </li>
                    <li className={"bg-white text-center text-primary text-xl px-4 py-3 rounded-xl shadow shadow-xl shadow-circle/30 hover:bg-grey"}>
                        #Crypto Currencies
                    </li>
                    <li className={"bg-white text-center text-primary text-xl px-4 py-3 rounded-xl shadow shadow-xl shadow-circle/30 hover:bg-grey"}>
                        #Immobilier
                    </li>
                    <li className={"bg-white text-center text-primary text-xl px-4 py-3 rounded-xl shadow shadow-xl shadow-circle/30 hover:bg-grey"}>
                        #Start up
                    </li>
                </ul>
            </section>
            <section className={"relative z-10 "}>
                <div className={"px-20 py-5 grid  gap-4 grid-cols-3"}>
                    {

                        articles.map((article) =>(

                            <Link

                                href={{
                                    pathname: '/article/[articleId]',
                                    query: {
                                        articleId: article.id,

                                    }
                                }}
                                key={article.id} className={"grid gap-4 bg-white/50  rounded-2xl hover:bg-white shadow shadow-xl shadow-purple/30 p-4"}>
                                <div className="w-full h-1/2 flex items-center">
                                    <Image src={purple} alt="Violet Image" className="w-full h-full rounded-2xl object-cover" />
                                </div>
                                <div className={"-mt-48 grid gap-1"}>
                                    <div className={"bg-purple/40 px-3 py-1 w-fit h-fit rounded-xl  mb-0"}>
                                        <span>{article.category}</span>
                                    </div>
                                    <span className={"font-semibold"}>{article.title}</span>
                                    <span>{article.description}</span>
                                    <span className={"text-gray-400"}>{formatDate(article.createdAt)}</span>
                                </div>


                            </Link>

                        ))
                    }
                </div>

            </section>

        </Layout>
    )
}