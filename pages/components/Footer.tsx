import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
    return (
        <footer className="grid p-4 bg-dark sm:p-6 dark:bg-gray-800 gap-6">
            <div className={"grid place-content-center"}>
                <p className={"text-white font-bold text-xl"}>INVESTYTSIYI</p>
            </div>
            <div className="grid grid-flow-row-dense grid-cols-2  sm:grid-cols-11 px-80 content-center">
                <div className={"col-span-2"}>
                    <h6 className="text-lg font-medium font-bold text-white">Investytsiyi.</h6>
                    <ul className="mt-4 list-inside space-y-4">
                        <li>
                            <Link href="/" className="transition text-white text-sm hover:text-orange">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/Fonctionnement" className="transition text-white text-sm hover:text-orange">Fonctionnement</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="transition text-white text-sm hover:text-orange">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={"bg-orange w-1 h-1/2 grid self-center"}></div>
                <div className={"col-span-2"}>
                    <h6 className="text-lg font-medium font-bold text-white">Accès membre.</h6>
                    <ul className="mt-4 list-inside space-y-4">
                        <li>
                            <Link href="/login" className="transition text-white text-sm  hover:text-orange">Se connecter</Link>
                        </li>
                        <li>
                            <a href="#" className="transition text-white text-sm hover:text-orange">Créer un compte</a>
                        </li>
                        <li>
                            <a href="#" className="transition text-white text-sm hover:text-orange">Découvrir les tarifs</a>
                        </li>
                    </ul>
                </div>
                <div className={"bg-orange w-1 h-1/2 grid self-center"}></div>

                <div className={"col-span-2"}>
                    <h6 className="text-lg font-medium font-bold text-white">Légal.</h6>
                    <ul className="mt-4 list-inside space-y-4">
                        <li>
                            <Link href="/mentions" className="transition text-white text-sm  hover:text-orange">Mentions légales</Link>
                        </li>
                        <li>
                            <a href="#" className="transition text-white text-sm  hover:text-orange">Politique de confidentialité</a>
                        </li>
                        <li>
                            <a href="#" className="transition text-white  text-sm hover:text-orange">Risques et bonnes pratiques</a>
                        </li>
                    </ul>
                </div>
                <div className={"bg-orange w-1 h-1/2 grid self-center"}></div>

                <div className={"col-span-2"}>
                    <h6 className="text-lg font-medium font-bold text-white">Aide.</h6>
                    <ul className="mt-4 list-inside space-y-4">
                        <li>
                            <a href="#" className="transition text-white text-sm hover:text-orange">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="transition text-white text-sm hover:text-orange">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"grid grid-cols-1 gap-6  place-items-center"}>
                <div className={"grid grid-cols-3 w-fit gap-6"}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4412 6.17054C21.3908 5.05244 21.2102 4.28743 20.9539 3.6191C20.6851 2.92974 20.328 2.34127 19.7441 1.76121C19.1602 1.18114 18.5762 0.815452 17.8873 0.550641C17.2194 0.290032 16.4548 0.113491 15.3374 0.0630504C14.2158 0.0126101 13.8587 0 11.0105 0C8.15816 0 7.80109 0.0126101 6.68367 0.0630504C5.56624 0.113491 4.80169 0.294235 4.13376 0.550641C3.44062 0.819656 2.8525 1.17694 2.27279 1.76121C1.69307 2.34548 1.3276 2.92974 1.06294 3.6191C0.806693 4.28743 0.626057 5.05244 0.575647 6.17054C0.525237 7.29283 0.512634 7.65012 0.512634 10.5C0.512634 13.3541 0.525237 13.7114 0.575647 14.8295C0.626057 15.9476 0.806693 16.7126 1.06294 17.3809C1.3318 18.0703 1.68887 18.6587 2.27279 19.2388C2.8525 19.8231 3.44062 20.1845 4.12956 20.4494C4.79749 20.71 5.56204 20.8865 6.67947 20.9369C7.80109 20.9874 8.15816 21 11.0063 21C13.8587 21 14.2158 20.9874 15.3332 20.9369C16.4506 20.8865 17.2152 20.7058 17.8831 20.4494C18.572 20.1803 19.1602 19.8231 19.7399 19.2388C20.3196 18.6545 20.6851 18.0703 20.9497 17.3809C21.2102 16.7126 21.3866 15.9476 21.437 14.8295C21.4874 13.7072 21.5 13.3499 21.5 10.5C21.5 7.65012 21.4916 7.28863 21.4412 6.17054ZM19.555 14.7454C19.5088 15.771 19.3366 16.3301 19.1938 16.6958C19.0047 17.1833 18.7737 17.5364 18.404 17.9063C18.0343 18.2762 17.6857 18.499 17.1942 18.6966C16.8245 18.8395 16.2658 19.0118 15.245 19.058C14.1402 19.1085 13.8083 19.1211 11.0021 19.1211C8.19597 19.1211 7.8641 19.1085 6.75928 19.058C5.73428 19.0118 5.17557 18.8395 4.81009 18.6966C4.3228 18.5074 3.96993 18.2762 3.60025 17.9063C3.23058 17.5364 3.00793 17.1875 2.81049 16.6958C2.66767 16.3259 2.49543 15.7668 2.44922 14.7454C2.39881 13.6399 2.38621 13.3078 2.38621 10.5C2.38621 7.69215 2.39881 7.36009 2.44922 6.2546C2.49543 5.22898 2.66767 4.66994 2.81049 4.30424C2.99953 3.81665 3.23058 3.46357 3.60025 3.09368C3.96993 2.72378 4.3186 2.501 4.81009 2.30344C5.17977 2.16053 5.73848 1.98819 6.75928 1.94195C7.8641 1.89151 8.19597 1.8789 11.0021 1.8789C13.8083 1.8789 14.1402 1.89151 15.245 1.94195C16.27 1.98819 16.8287 2.16053 17.1942 2.30344C17.6815 2.49259 18.0343 2.72378 18.404 3.09368C18.7737 3.46357 18.9963 3.81245 19.1938 4.30424C19.3366 4.67414 19.5088 5.23319 19.555 6.2546C19.6055 7.36009 19.6181 7.69215 19.6181 10.5C19.6181 13.3078 19.6013 13.6399 19.555 14.7454Z" fill="white"/>
                        <path d="M11.0022 5.10278C8.01956 5.10278 5.60828 7.51972 5.60828 10.4999C5.60828 13.4843 8.02376 15.897 11.0022 15.897C13.9805 15.897 16.396 13.4759 16.396 10.4999C16.396 7.51551 13.9848 5.10278 11.0022 5.10278ZM11.0022 14.0013C9.06977 14.0013 7.50286 12.4334 7.50286 10.4999C7.50286 8.56635 9.06977 6.9985 11.0022 6.9985C12.9345 6.9985 14.5015 8.56635 14.5015 10.4999C14.5015 12.4334 12.9345 14.0013 11.0022 14.0013Z" fill="white"/>
                        <path d="M16.6061 6.15361C17.3021 6.15361 17.8663 5.58904 17.8663 4.8926C17.8663 4.19616 17.3021 3.63159 16.6061 3.63159C15.9101 3.63159 15.3458 4.19616 15.3458 4.8926C15.3458 5.58904 15.9101 6.15361 16.6061 6.15361Z" fill="white"/>
                        <path d="M0.5 10.5C0.5 13.3541 0.512603 13.7114 0.563013 14.8295C0.613423 15.9476 0.794059 16.7126 1.05031 17.3809C1.31916 18.0703 1.67624 18.6587 2.26015 19.2388C2.83987 19.8189 3.42799 20.1845 4.11692 20.4494C4.78486 20.71 5.54941 20.8865 6.66683 20.9369C7.78846 20.9874 8.14553 21 10.9937 21C13.8461 21 14.2031 20.9874 15.3206 20.9369C16.438 20.8865 17.2025 20.7058 17.8705 20.4494C18.5594 20.1803 19.1475 19.8231 19.7272 19.2388C20.307 18.6587 20.6724 18.0703 20.9371 17.3809C21.1975 16.7126 21.374 15.9476 21.4244 14.8295C21.4748 13.7072 21.4874 13.3499 21.4874 10.5C21.4874 7.64592 21.4748 7.28863 21.4244 6.17054C21.374 5.05244 21.1933 4.28743 20.9371 3.6191C20.6682 2.92974 20.3112 2.34127 19.7272 1.76121C19.1517 1.17694 18.5636 0.815452 17.8747 0.550641C17.2067 0.290032 16.4422 0.113491 15.3248 0.0630504C14.2031 0.0126101 13.8461 0 10.9979 0C8.14553 0 7.78846 0.0126101 6.67103 0.0630504C5.55361 0.113491 4.78906 0.294235 4.12112 0.550641C3.43219 0.819656 2.84407 1.17694 2.26435 1.76121C1.68464 2.34548 1.31916 2.92974 1.05451 3.6191C0.794059 4.28743 0.613423 5.05244 0.563013 6.17054C0.512603 7.28863 0.5 7.64592 0.5 10.5ZM2.39458 10.5C2.39458 7.69636 2.40718 7.36009 2.45759 6.2546C2.5038 5.22898 2.67604 4.66994 2.81886 4.30424C3.0079 3.81665 3.23895 3.46357 3.60862 3.09368C3.9783 2.72378 4.32697 2.501 4.81846 2.30344C5.18814 2.16053 5.74685 1.98819 6.76765 1.94195C7.87247 1.89151 8.20434 1.8789 11.0105 1.8789C13.8167 1.8789 14.1485 1.89151 15.2534 1.94195C16.2784 1.98819 16.8371 2.16053 17.2025 2.30344C17.6898 2.49259 18.0427 2.72378 18.4124 3.09368C18.7821 3.46357 19.0047 3.81245 19.2021 4.30424C19.345 4.67414 19.5172 5.23319 19.5634 6.2546C19.6138 7.36009 19.6264 7.69215 19.6264 10.5C19.6264 13.3078 19.6138 13.6399 19.5634 14.7454C19.5172 15.771 19.345 16.3301 19.2021 16.6958C19.0131 17.1833 18.7821 17.5364 18.4124 17.9063C18.0427 18.2762 17.694 18.499 17.2025 18.6966C16.8329 18.8395 16.2742 19.0118 15.2534 19.058C14.1485 19.1085 13.8167 19.1211 11.0105 19.1211C8.20434 19.1211 7.87247 19.1085 6.76765 19.058C5.74265 19.0118 5.18394 18.8395 4.81846 18.6966C4.33117 18.5074 3.9783 18.2762 3.60862 17.9063C3.23895 17.5364 3.0163 17.1875 2.81886 16.6958C2.67604 16.3259 2.5038 15.7668 2.45759 14.7454C2.40298 13.6399 2.39458 13.3036 2.39458 10.5Z" fill="white"/>
                    </svg>
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8023 6.28326C19.8108 6.46806 19.8108 6.64446 19.8108 6.82926C19.8192 12.4321 15.5068 18.9001 7.6205 18.9001C5.2945 18.9001 3.01095 18.2365 1.04999 16.9933C1.38955 17.0353 1.72911 17.0521 2.06867 17.0521C3.99568 17.0521 5.87176 16.4137 7.3913 15.2293C5.55766 15.1957 3.94475 14.0113 3.38447 12.2809C4.02964 12.4069 4.69178 12.3817 5.31997 12.2053C3.32505 11.8189 1.8904 10.0801 1.88191 8.05566C1.88191 8.03886 1.88191 8.02206 1.88191 8.00526C2.47615 8.33286 3.14678 8.51766 3.8259 8.53446C1.94983 7.29126 1.36408 4.81325 2.50161 2.87285C4.68329 5.52726 7.89215 7.13166 11.3387 7.30806C10.9906 5.83806 11.466 4.29245 12.5781 3.25085C14.3014 1.64644 17.0179 1.73044 18.6478 3.43565C19.607 3.25085 20.5323 2.89805 21.3727 2.40244C21.0501 3.38525 20.3795 4.21685 19.4882 4.74605C20.3371 4.64525 21.169 4.41845 21.95 4.08245C21.3727 4.93925 20.6427 5.67846 19.8023 6.28326Z" fill="white"/>
                    </svg>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="21" height="21" rx="10.5" fill="white"/>
                        <path d="M15.0872 13.5352L15.5527 10.5H12.6406V8.53125C12.6406 7.70068 13.0467 6.89062 14.351 6.89062H15.6758V4.30664C15.6758 4.30664 14.474 4.10156 13.3256 4.10156C10.9262 4.10156 9.35938 5.55557 9.35938 8.18672V10.5H6.69336V13.5352H9.35938V20.8729C9.89463 20.9569 10.4422 21 11 21C11.5578 21 12.1054 20.9569 12.6406 20.8729V13.5352H15.0872Z" fill="#100140"/>
                    </svg>
                </div>
                <div>
                    <p className={"text-white"}>© 2023 All rights reserved Investytsiyi</p>
                </div>




            </div>

        </footer>
    )
}