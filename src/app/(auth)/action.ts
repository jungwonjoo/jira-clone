"use server"

import { AUTH_COOKE } from '@/features/auth/constants'
import { cookies } from 'next/headers'
import { Account, Client } from 'node-appwrite'

export const getCurrent = async () => {
    try{
        const client = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
            .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)

        const session = await cookies().get(AUTH_COOKE)

        if(!session) return null

        client.setSession(session.value);
        const account = new Account(client);

        return await account.get();
    }catch{
        return null
    }
}