import React, { useState } from "react";
import Header from "./components/Header";
import Link from "next/link";


const Register = async () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        name: "",
        password: "",
        pseudo_name: "",
        address: "",
        town: "",
        zipcode: "",
        subtype: false,
        usertype: ""
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const bcrypt = require('bcryptjs');
            const hashedPassword = await bcrypt.hash(formData.password, 10);
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    password: hashedPassword,
                }),
            });
            const user = await response.json();
            console.log(user);
        } catch (err) {
            console.error(err);
        }
    };
    switch (step) {
        case 1:
            return (
                <>
                    <Header></Header>
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div
                            className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <a href="#"
                               className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            </a>
                            <div
                                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <div>
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Rejoignez investitsiyi !
                                        </h1>
                                        <h2 className="text-lg leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                                            Étape 1
                                        </h2>
                                    </div>

                                    <form className=" md:space-y-6" onSubmit={handleSubmit}>
                                        <div id="part1" className="space-y-4">
                                            <div>
                                                <label htmlFor="pseudo_name"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                    Pseudo</label>
                                                <input type="text" name="pseudo_name" id="pseudo_name"
                                                       value={formData.pseudo_name} onChange={handleChange}
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                       placeholder="Lachance" required/>
                                            </div>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                    email</label>
                                                <input type="email" name="email" id="email"
                                                       value={formData.email} onChange={handleChange}
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                       placeholder="name@example.com" required/>
                                            </div>
                                            <div>
                                                <label htmlFor="password"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">        Entrez
                                                    votre mot de passe</label>
                                                <input type="password" name="password" id="password"
                                                       placeholder="••••••••"
                                                       value={formData.password} onChange={handleChange}
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="confirm-password"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformez
                                                    votre mot de passe</label>
                                                <input type="password" name="confirm-password" id="confirm-password"
                                                       onChange={handleChange}
                                                       placeholder="••••••••"
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                />
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="terms" aria-describedby="terms" type="checkbox"
                                                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="terms"
                                                           className="font-light text-gray-500 dark:text-gray-300">I
                                                        accept the <a
                                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                            href="#">Terms and Conditions</a></label>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="button" onClick={() => {
                                            setStep(2)
                                        }}
                                                className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Suivant
                                        </button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account? <a href="#"
                                                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login
                                            here</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>

            )
        case 2:
            return (
                <>
                    <Header></Header>
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div
                            className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <a href="#"
                               className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            </a>
                            <div
                                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Rejoignez investitsiyi !
                                    </h1>
                                    <form className=" md:space-y-6" onSubmit={handleSubmit}>
                                        <div id="part1" className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4 ">
                                                <div>
                                                    <label htmlFor="first_name"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                        Prénom</label>
                                                    <input type="text" name="first_name" id="first_name"
                                                           value={formData.first_name} onChange={handleChange}
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Pierre"/>
                                                </div>
                                                <div>
                                                    <label htmlFor="name"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                        Nom</label>
                                                    <input type="text" name="name" id="name"
                                                           value={formData.name} onChange={handleChange}
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Dupont" required/>

                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="address"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                    adresse</label>
                                                <input type="text" name="address" id="address"
                                                       value={formData.address} onChange={handleChange}
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                       placeholder="Dupont" required/>
                                            </div>
                                            <div className={"grid grid-cols-2 gap-4"}>
                                                <div>
                                                    <label htmlFor="town"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                        ville</label>
                                                    <input type="text" name="town" id="town"
                                                           value={formData.town} onChange={handleChange}
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Dupont" required/>
                                                </div>
                                                <div>
                                                    <label htmlFor="zipcode"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                        code postal</label>
                                                    <input type="text" name="zipcode" id="zipcode"
                                                           value={formData.zipcode} onChange={handleChange}
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Dupont" required/>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="usertype"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                    métier</label>
                                                <input type="text" name="usertype" id="usertype"
                                                       value={formData.usertype} onChange={handleChange}
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                       placeholder="Dupont" required/>
                                            </div>
                                        </div>

                                        <button type="submit">S'inscrire</button>

                                        <div className={"grid place-content-center"}>
                                            <Link href={""}
                                                  className={"  font-bold text-gray-500 hover:underline dark:text-primary-400"}
                                                  onClick={() => setStep(1)}>Retour</Link>
                                        </div>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account? <a href="#"
                                                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login
                                            here</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </>
            )
    }

    return (
        <>
            <Header></Header>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    </a>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Rejoignez investitsiyi !
                            </h1>
                            <form className=" md:space-y-6" onSubmit={handleSubmit}>
                                <div id="part1" className="space-y-4">
                                    <div className="grid grid-cols-2 gap-5 ">
                                        <div>
                                            <label htmlFor="first_name"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                Prénom</label>
                                            <input type="text" name="first_name" id="first_name"
                                                   value={formData.first_name} onChange={handleChange}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="Pierre" required/>
                                        </div>
                                        <div>
                                            <label htmlFor="name"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                                Nom</label>
                                            <input type="text" name="name" id="name"
                                                   value={formData.name} onChange={handleChange}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="Dupont" required/>

                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="address"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                            adresse</label>
                                        <input type="text" name="address" id="address"
                                               value={formData.address} onChange={handleChange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Dupont" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="town"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                            ville</label>
                                        <input type="text" name="town" id="town"
                                               value={formData.town} onChange={handleChange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Dupont" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="zipcode"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                            code postal</label>
                                        <input type="text" name="zipcode" id="zipcode"
                                               value={formData.zipcode} onChange={handleChange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Dupont" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="usertype"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                            métier</label>
                                        <input type="text" name="usertype" id="usertype"
                                               value={formData.usertype} onChange={handleChange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Dupont" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                            email</label>
                                        <input type="email" name="email" id="email"
                                               value={formData.email} onChange={handleChange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="name@example.com" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="password"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Entrez
                                            votre mot de passe</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                               value={formData.password} onChange={handleChange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="confirm-password"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformez
                                            votre mot de passe</label>
                                        <input type="password" name="confirm-password" id="confirm-password"
                                               onChange={handleChange}
                                               placeholder="••••••••"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox"
                                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms"
                                                   className="font-light text-gray-500 dark:text-gray-300">I
                                                accept the <a
                                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                    href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit"
                                        className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Suivant
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#"
                                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                    here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Register;
