import DashboardLayout from "./DashboardLayout";
import React, { ChangeEvent, FormEvent, useState } from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>
});

const AdminArticle = () => {
    const [formData, setFormData] = useState({
        title: '',
        subTitle: '',
        coverPicture: '',
        description: '',
        category: '',
        content: '',
    });

    const {title,subTitle,coverPicture, description, category, content } = formData;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };




    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/createArticle', {
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
                window.location.href = '/article';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <DashboardLayout>
            <section className="w-full grid gap-6">
                <h1 className="w-full text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">Quel article voulez-vous poster ?</h1>
                <div className="grid place-content-stretch gap-4 w-full h-full rounded-xl p-0.5 bg-gradient-to-r from-transparent to-white">
                    <div className="grid rounded-xl p-6 h-full w-full bg-cardTransparent">
                        <form onSubmit={handleFormSubmit}>
                            <ul className="gap-6 grid">
                                <li>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre de l'article</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        required
                                        value={title}
                                        onChange={handleInputChange}
                                    />
                                </li>
                                <li>
                                    <label htmlFor="subTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sous-titre de l'article</label>
                                    <input
                                        type="text"
                                        name="subTitle"
                                        id="subTitle"
                                        className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        required
                                        value={subTitle}
                                        onChange={handleInputChange}
                                    />
                                </li>
                                <li>
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        className="bg-gray-50 w-full h-20 border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        required
                                        value={description}
                                        onChange={handleInputChange}
                                    />
                                </li>
                                <li>
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select
                                        name="category"
                                        id="category"
                                        required
                                        value={category}
                                        onChange={handleSelectChange}
                                        className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option disabled selected>Choisissez une categorie</option>
                                        <option>Nft</option>
                                        <option>Immobilier</option>
                                        <option>Start-up</option>
                                        <option>Crypto-currency</option>
                                        <option>Finances</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contenu</label>
                                    <QuillNoSSRWrapper
                                        id="content"
                                        value={content}
                                        onChange={(value) => setFormData((prevData) => ({ ...prevData, content: value }))}
                                        theme="snow"
                                        className="bg-gray-50 w-full border border-grey text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </li>
                                <li>
                                    <div className="items-center justify-center w-full">
                                        <label htmlFor="dropzone-file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image de couverture</label>
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-58 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold text-primary">Ajouter un fichier</span> ou faites le glisser ici</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>
                                </li>
                            </ul>
                            <div className="grid place-content-center pt-6">
                                <button type="submit" className="grid w-fit place-content-center px-5 py-3 my-3 mr-3 text-base text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                    Poster
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
};

export default AdminArticle;
