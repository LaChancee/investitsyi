import React, {FormEvent, useState} from "react";


import Image from "next/image";
import cardDeco from "public/cards-deco.png";
import google from "public/Google.png";
import twitter from "public/twitter-logo.png";
import facebook from "public/logo-facebook.svg";

import { signIn, signOut, useSession} from 'next-auth/react'

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        name: "",
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
            const response = await fetch('/api/register', {
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
                localStorage.setItem('token', data.token);

                // Redirect to homepage
                window.location.href = '/';
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
                        <Image src={cardDeco} alt={"Decoration picture of credit card"}/>
                    </div>
                    <div className={"grid col-span-2 content-start p-8 gap-4 px-40"}>
                        <div className={"flex justify-center pb-30"}>
                            <h1 className={"text-5xl justify-center"}>Créez votre compte <span className={"font-semibold"}> Investytsiyi </span></h1>
                        </div>
                        <div>
                            <div>
                                {status === 'loading' && <div>Loading...</div>}
                                {status === 'authenticated' && (
                                    <div>
                                        <span className={"text-2xl font-semibold"}>Signed in as {session.user?.email}</span>
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
                        <form className={"grid content-center gap-3 "} onSubmit={handleSubmit}>
                            <div className={"flex justify-between gap-5"}>
                                <div className={"w-full"}>
                                    <label htmlFor="firstname"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                                    <input type="text" name="first_name" id="first_name"
                                           value={formData.first_name}
                                           onChange={handleInputChange}
                                           className="bg-gray-50 border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-lightblue focus:border-lightblue block w-full p-2.5"
                                           placeholder="" required={true}/>
                                </div>
                                <div className={"w-full"}>
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                    <input type="text" name="name" id="name"
                                           value={formData.name}
                                           onChange={handleInputChange}
                                           className="bg-gray-50 border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="" required={true}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email"
                                       value={formData.email}
                                       onChange={handleInputChange}
                                       className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="" required={true}/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                <input type="password" name="password" id="password"
                                       className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="" required={true}/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmation de mot de passe</label>
                                <input type="password" name="password" id="password"
                                       className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="" required={true}/>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox"
                                           className="w-4 h-4 border border-grey rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-grey dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                           required={true}/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-grey">La création d'un compte signifie que vous acceptez
                                        nos conditions d'utilisation, notre politique de
                                        <a
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="#"> confidentialité </a>
                                          et nos paramètres de notification par défaut.</label>
                                </div>
                            </div>
                            <div className={"flex gap-2"}>
                                <button type="submit" className={"inline-flex w-fit items-center justify-center px-6 py-2 mr-3 text-base font-medium text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"}>
                                    Valider l'inscription
                                </button>
                                <a href={"/"} className={"text-lg text-primary self-center hover:underline"}>Annuler </a>
                            </div>
                            <span>Vous avez déjà un compte? <a href={"/login"} className={"text-primary underline underline-offset-2"}>Connectez-vous </a> </span>

                        </form>
                    </div>
                </main>


    );
};

export default Register;
