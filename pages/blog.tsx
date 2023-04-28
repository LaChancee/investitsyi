import Layout from "./Layout";
import Image from "next/image";
import phone from "public/phoneBlog.png";
import React from "react";
import Link from "next/link";


export default function Blog(){

    return(
        <Layout>
            <div className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>
            <section className=" dark:bg-gray-900 relative">
                <div className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                        <Image src={phone} alt={"decoration"} />
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                            Actualités & Analyses
                        </h1>
                        <p className="max-w-2xl mb-6  mt-5 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Restez informé des dernières actualités du marché financier et
                            accédez à des analyses approfondies pour vous aider à prendre les bonnes décisions d'investissement en temps réel.
                            Explorez notre vaste collection d'articles détaillés rédigés par des experts en finance pour vous aider à investir intelligemment
                            et à mieux comprendre le monde de la finance, et restez au courant des dernières tendances et stratégies de l'investissement.
                        </p>

                    </div>

                </div>
            </section>

        </Layout>
    )
}