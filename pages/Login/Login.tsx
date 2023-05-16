import React, {FormEvent, useState} from "react";

import loader from "public/loader.svg"
import Image from "next/image";
import cardDeco from "public/cards-deco.png";
import google from "public/Google.png";
import twitter from "public/twitter-logo.png";
import facebook from "public/logo-facebook.svg";
import cardLogin from "public/card-login.png";

import { signIn, signOut, useSession} from 'next-auth/react'
import Link from "next/link";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",

    });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                // Store JWT token in local storage
                // localStorage.setItem('token', data.token);


                // Redirect to homepage
                window.location.href = '/dashboard/Profile';
            }
        } catch (error) {

            console.error(error);
        }
    };

// // Check if user is logged in
//     const token = localStorage.getItem('token');
//     if (token) {
//         try {
//             const decodedToken = jwt_decode(token);
//             // User is logged in
//         } catch (error) {
//             console.error(error);
//             // Invalid token, redirect to login page
//             window.location.href = '/login';
//         }
//     } else {
//         // User is not logged in, redirect to login page
//         window.location.href = '/';
//     }
    const { data: session, status } = useSession()




    return (

        <main className={"grid grid-cols-3 bg-white "}>
            <div className={"grid  h-screen place-content-center bg-circle/30"}>
                <Image src={cardLogin} alt={"Decoration picture of credit card"}/>
            </div>
            <div className={"grid col-span-2 content-start p-8 gap-4 px-40"}>
                <div className={"flex justify-center pb-30"}>
                    <h1 className={"text-5xl justify-center"}>Connexion via les <span className={"font-semibold"}> résaux sociaux </span></h1>
                </div>
                <div>
                    <div>
                        {status === 'loading' && <div className={"flex"}>
                            <Image src={loader} alt={loader} className={"flex justify-center "} width={30}/>
                        </div>}
                        {status === 'authenticated' && (
                            <div>
                                <span className={"flex text-2xl justify-center font-semibold"}>Signed in as {session.user?.email}</span>
                                <button
                                    className="flex px-2 font-semibold  items-center justify-center transition hover:bg-grey border rounded-xl border-white shadow shadow-3xl shadow-lightblue/30 "
                                    onClick={() => signOut()}>Sign out</button>
                            </div>
                        )}
                        {status === 'unauthenticated' && (
                            <div>
                                <div className={"flex gap-3 py-10 justify-center"}>


                                    <button
                                        className="flex px-2 w-fit font-semibold  items-center justify-center transition hover:bg-grey border rounded-xl border-white shadow shadow-4xl shadow-lightblue/30 "
                                        onClick={() => signIn('google')}

                                    >
                                        Se connecter avec Google

                                        <Image src={google} alt={"Logo google"} width={50}/>
                                    </button>

                                    <button
                                        className="flex p-2 px-4 bg-grey font-semibold  items-center justify-center transition hover:bg-grey border rounded-xl border-white  hover:shadow hover:shadow-3xl hover:shadow-lightblue/30  "
                                    >
                                        <Image src={twitter} alt={"Logo twitter"} width={40} className={"grayscale hover:grayscale-0"}/>
                                    </button>

                                    <button
                                        className="flex bg-grey  font-semibold  items-center justify-center transition hover:bg-grey border rounded-xl border-white hover:shadow hover:shadow-3xl hover:shadow-lightblue/30 "
                                    >
                                        <Image src={facebook} alt={"Logo facebook"} width={90} className={"grayscale hover:grayscale-0"}/>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-300">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                </div>
                <form className={"grid content-center gap-4 "} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email"
                               value={formData.email}
                               onChange={handleInputChange}
                               className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="" required={true}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                        <input type="password" name="password" id="password"
                               className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="" required={true}/>
                    </div>
                    <div className={"flex gap-2"}>
                        <button type="submit" className={"inline-flex w-fit items-center justify-center px-6 py-2 mr-3 text-base font-medium text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"}>
                            Se connecter
                        </button>
                        <a href={"/"} className={"text-md text-primary self-center hover:underline"}>Annuler </a>
                    </div>
                    <span>Vous n'avez pas de compte ? <Link href={"/Register"} className={"text-primary underline underline-offset-2"}>Inscrivez-vous </Link> </span>

                </form>
            </div>
        </main>


    );
};

export default Login;
