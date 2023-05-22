import React from "react";
import DashboardLayout from "./DashboardLayout";
import {useSession} from 'next-auth/react'
import Link from "next/link";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import Image from "next/image";
import purple from "public/purpleBackground.png";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'NFT', href: '/invest/nft', current: true },
    { name: 'Crypto', href: '/invest/crypto', current: false },
    { name: 'Immobilier', href: '/invest/immobilier', current: false },
    { name: 'PME', href: '/invest/actions-obligations', current: false },
];
const Profile = () => {
    const {data: session, status} = useSession()


    return (
        <DashboardLayout>
            <section >
                <div
                    className={" flex justify-between gap-6 shadow shadow-xl shadow-circle/30 bg-white rounded-2xl my-5 p-6 w-full h-1/2"}>
                    <div className={"flex h-fit gap-6 "}>
                        <Image src={purple} alt={'Purple background '} className={"rounded-2xl "} width={150}/>
                        <div className={"flex flex-col gap-4 items-center"}>
                            <p className={"text-xl"}>Bonjour, <span
                                className={"font-medium "}>{session?.user?.name} !</span></p>
                            <p className={"text-lg"}>
                                Bienvenue dans votre bureau !
                            </p>
                        </div>

                    </div>
                    <div>
                        <Link href={"/dashboard/parameter"}>
                            <svg  width="20" height="19" viewBox="0 0 20 19" fill={"none"}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13 9.5C13 10.0933 12.8241 10.6734 12.4944 11.1667C12.1648 11.6601 11.6962 12.0446 11.1481 12.2716C10.5999 12.4987 9.99667 12.5581 9.41473 12.4424C8.83279 12.3266 8.29824 12.0409 7.87868 11.6213C7.45912 11.2018 7.1734 10.6672 7.05764 10.0853C6.94189 9.50333 7.0013 8.90013 7.22836 8.35195C7.45542 7.80377 7.83994 7.33524 8.33329 7.00559C8.82664 6.67595 9.40666 6.5 10 6.5C10.7956 6.5 11.5587 6.81607 12.1213 7.37868C12.6839 7.94129 13 8.70435 13 9.5ZM18 7.5H17.41C17.2033 7.49918 17.0019 7.43431 16.8336 7.31433C16.6652 7.19434 16.5382 7.02514 16.47 6.83C16.381 6.6427 16.3525 6.43237 16.3883 6.22812C16.4241 6.02388 16.5226 5.83583 16.67 5.69L17.08 5.28C17.1737 5.18704 17.2481 5.07644 17.2989 4.95458C17.3497 4.83272 17.3758 4.70201 17.3758 4.57C17.3758 4.43799 17.3497 4.30728 17.2989 4.18542C17.2481 4.06356 17.1737 3.95296 17.08 3.86L15.66 2.43C15.567 2.33627 15.4564 2.26188 15.3346 2.21111C15.2127 2.16034 15.082 2.1342 14.95 2.1342C14.818 2.1342 14.6873 2.16034 14.5654 2.21111C14.4436 2.26188 14.333 2.33627 14.24 2.43L13.83 2.84C13.6842 2.98742 13.4961 3.08586 13.2919 3.12169C13.0876 3.15752 12.8773 3.12897 12.69 3.04C12.4895 2.97463 12.3148 2.84755 12.1909 2.67693C12.067 2.50631 12.0002 2.30088 12 2.09V1.5C12 1.23478 11.8946 0.98043 11.7071 0.792893C11.5196 0.605357 11.2652 0.5 11 0.5H9C8.73478 0.5 8.48043 0.605357 8.29289 0.792893C8.10536 0.98043 8 1.23478 8 1.5V2.09C7.99918 2.29672 7.93431 2.4981 7.81433 2.66643C7.69434 2.83477 7.52514 2.96178 7.33 3.03V3.03C7.1427 3.11897 6.93237 3.14752 6.72812 3.11169C6.52388 3.07586 6.33583 2.97742 6.19 2.83L5.78 2.42C5.68704 2.32627 5.57644 2.25188 5.45458 2.20111C5.33272 2.15034 5.20201 2.1242 5.07 2.1242C4.93799 2.1242 4.80728 2.15034 4.68542 2.20111C4.56356 2.25188 4.45296 2.32627 4.36 2.42L2.93 3.84C2.83627 3.93296 2.76188 4.04356 2.71111 4.16542C2.66034 4.28728 2.6342 4.41799 2.6342 4.55C2.6342 4.68201 2.66034 4.81272 2.71111 4.93458C2.76188 5.05644 2.83627 5.16704 2.93 5.26L3.34 5.67C3.48742 5.81583 3.58586 6.00388 3.62169 6.20813C3.65752 6.41237 3.62897 6.6227 3.54 6.81C3.47178 7.00514 3.34477 7.17434 3.17643 7.29433C3.0081 7.41431 2.80672 7.47918 2.6 7.48H2C1.73478 7.48 1.48043 7.58536 1.29289 7.77289C1.10536 7.96043 1 8.21478 1 8.48V10.48C1 10.7452 1.10536 10.9996 1.29289 11.1871C1.48043 11.3746 1.73478 11.48 2 11.48H2.59C2.79672 11.4808 2.9981 11.5457 3.16643 11.6657C3.33477 11.7857 3.46178 11.9549 3.53 12.15V12.15C3.61897 12.3373 3.64752 12.5476 3.61169 12.7519C3.57586 12.9561 3.47742 13.1442 3.33 13.29L2.92 13.7C2.82627 13.793 2.75188 13.9036 2.70111 14.0254C2.65034 14.1473 2.6242 14.278 2.6242 14.41C2.6242 14.542 2.65034 14.6727 2.70111 14.7946C2.75188 14.9164 2.82627 15.027 2.92 15.12L4.33 16.53C4.42296 16.6237 4.53356 16.6981 4.65542 16.7489C4.77728 16.7997 4.90799 16.8258 5.04 16.8258C5.17201 16.8258 5.30272 16.7997 5.42458 16.7489C5.54644 16.6981 5.65704 16.6237 5.75 16.53L6.16 16.12C6.30583 15.9726 6.49388 15.8741 6.69812 15.8383C6.90237 15.8025 7.1127 15.831 7.3 15.92C7.49514 15.9882 7.66434 16.1152 7.78433 16.2836C7.90431 16.4519 7.96918 16.6533 7.97 16.86V17.5C7.97 17.7652 8.07536 18.0196 8.26289 18.2071C8.45043 18.3946 8.70478 18.5 8.97 18.5H10.97C11.2352 18.5 11.4896 18.3946 11.6771 18.2071C11.8646 18.0196 11.97 17.7652 11.97 17.5V16.91C11.9708 16.7033 12.0357 16.5019 12.1557 16.3336C12.2757 16.1652 12.4449 16.0382 12.64 15.97C12.8273 15.881 13.0376 15.8525 13.2419 15.8883C13.4461 15.9241 13.6342 16.0226 13.78 16.17L14.19 16.58C14.283 16.6737 14.3936 16.7481 14.5154 16.7989C14.6373 16.8497 14.768 16.8758 14.9 16.8758C15.032 16.8758 15.1627 16.8497 15.2846 16.7989C15.4064 16.7481 15.517 16.6737 15.61 16.58L17.02 15.17C17.1137 15.077 17.1881 14.9664 17.2389 14.8446C17.2897 14.7227 17.3158 14.592 17.3158 14.46C17.3158 14.328 17.2897 14.1973 17.2389 14.0754C17.1881 13.9536 17.1137 13.843 17.02 13.75L16.61 13.34C16.4626 13.1942 16.3641 13.0061 16.3283 12.8019C16.2925 12.5976 16.321 12.3873 16.41 12.2V12.2C16.4782 12.0049 16.6052 11.8357 16.7736 11.7157C16.9419 11.5957 17.1433 11.5308 17.35 11.53H18C18.2652 11.53 18.5196 11.4246 18.7071 11.2371C18.8946 11.0496 19 10.7952 19 10.53V8.5C19 8.23478 18.8946 7.98043 18.7071 7.79289C18.5196 7.60536 18.2652 7.5 18 7.5Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>

                    </div>
                </div>
            </section>

            <section >
                <h5 className={"font-semibold text-primary text-xl"}>Les domaines dans lesquels vous pouvez investir </h5>
                <div className={"grid grid-cols-4 gap-6"}>
                    {navigation.map((item)=> (
                        <div key={item.name} className={"flex justify-center gap-6 shadow shadow-xl shadow-circle/30 bg-white hover:bg-circle/30 rounded-2xl my-5 p-6 w-full "}>
                            <Link href={item.href}> <span className={" text-xl"}> {item.name}</span> </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <Link href={"/dashboard/adminArticle"}>
                    <ButtonPrimary text='Poster un article' className={""}/>
                </Link>
            </section>
        </DashboardLayout>
    )


}
export default Profile