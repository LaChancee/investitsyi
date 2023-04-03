import React, {FormEvent, useState} from "react";
import DashboardLayout from "./DashboardLayout";
import {useSession} from "next-auth/react";


const Profile = () => {
    const {data:session} = useSession()
    return (
        <DashboardLayout>
            <section>
                <h1>Bonjour {session?.user?.name} </h1>
            </section>
        </DashboardLayout>
        )


}
export default Profile