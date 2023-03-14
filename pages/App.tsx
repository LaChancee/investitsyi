import Image from 'next/image'
import landingPage from 'public/image_landing_page.png'
import { GoogleFonts } from 'next-google-fonts'
export default function App() {
  return (
    <div className={"p-12 bg-white relative"}>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" />
        <section className=" dark:bg-gray-900 relative">
            <div className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>

            <div className="grid relative z-10 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                        Votre guide pour des investissements réussis
                    </h1>
                    <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Découvrez les tendances du marché, apprenez les astuces des investisseurs les plus prospères et investissez en toute confiance avec notre plateforme.
                    </p>
                    <a href="#"
                       className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-primary transition duration-300 hover:shadow-xl hover:shadow-primary/30  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Nous découvrir dès maintenant
                        <svg className="w-5 h-5 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#"
                       className="inline-flex items-center transition justify-center px-5 py-3 text-base font-medium text-center text-primary underline underline-offset-4  rounded-lg hover:decoration-2 focus:ring-4 focus:ring-gray-100 ">
                        Comment ça marche
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src={landingPage} alt={"Image décorative"}/>
                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 relative z-10">
                    <div className="relative pl-16">
                        <dt className=" font-semibold leading-7 text-black">
                            <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full shadow-xl ">
                                <svg className="w-5 h-5 text-black"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            Investir dans l'avenir,
                            c'est maintenant
                        </dt>
                        <dd className="mt-2  leading-7 text-gray-900">Découvrez comment investir dans l'immobilier, la crypto et les NFT avec notre plateforme éducative.</dd>
                    </div>

                    <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-black">
                            <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full shadow-xl ">
                                <svg className="w-5 h-5 text-black"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                            </div>
                            Des investissements
                            réussis à portée de main
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">Rejoignez la communauté Investytsiyi et apprenez
                            à investir comme un pro pour préparer votre
                            avenir financier.</dd>
                    </div>
                </div>
            </div>
            <div className={"absolute -bottom-72 -right-0 overflow-hidden z-0 w-1/2 h-1/2 bg-orange/30 rounded-full filter blur-3xl "}></div>
        </section>

    </div>

  );
}
