import React, { useState } from "react";

import Layout from "./Layout";
import Image from "next/image";
import cardDeco from "public/cards-deco.png";
import google from "public/Google.png";

import { signIn, signOut, useSession} from 'next-auth/react'

const Register = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        name: "",
        password: "",

    });
    const { data: session, status } = useSession()




    return (
        <Layout>
                <main className={"grid grid-cols-3 "}>
                    <div className={"grid cols-span-1 h-screen place-content-center bg-circle/30"}>
                        <Image src={cardDeco} alt={"Decoration picture of credit card"}/>
                    </div>
                    <div className={"grid cols-span-2 p-8 "}>
                        <h1 className={"text-5xl self-center"}>Créez votre compte <span className={"font-semibold"}> Investytsiyi </span></h1>
                        <div>
                            <div>
                                {status === 'loading' && <div>Loading...</div>}
                                {status === 'authenticated' && (
                                    <div>
                                        Signed in as {session.user?.email} <br />
                                        <button
                                            className="flex px-2 font-semibold  items-center justify-center transition hover:bg-grey border rounded-xl border-white shadow shadow-3xl shadow-lightblue/30 "
                                            onClick={() => signOut()}>Sign out</button>
                                    </div>
                                )}
                                {status === 'unauthenticated' && (
                                    <div>
                                        <div className={"grid grid-cols-3 gap-3"}>

                                        </div>
                                        <button
                                            className="flex px-2 font-semibold  items-center justify-center transition hover:bg-grey border rounded-xl border-white shadow shadow-3xl shadow-lightblue/30 "
                                            onClick={() => signIn('google')}

                                        >
                                            Se connecter avec Google

                                            <Image src={google} alt={"Logo google"} width={50}/>
                                        </button>

                                        <button
                                            className="flex px-2 font-semibold  items-center justify-center transition hover:bg-grey border rounded-xl border-white shadow shadow-3xl shadow-lightblue/30 "
                                        >
                                            Twitter
                                        </button>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
        </Layout>

    );
};

export default Register;
