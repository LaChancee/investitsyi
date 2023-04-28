import React from "react";
import DashboardLayout from "./DashboardLayout";
import { useSession} from 'next-auth/react'





const Profile = () => {

    const { data: session, status } = useSession()




    return (
        <DashboardLayout>
            <section>
               <span className={"block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white"}> Bienvenue {session?.user?.name}</span>
            </section>
        </DashboardLayout>
        )


}
export default Profile