// 'use client'

import SignInCard from '@/features/auth/component/sign-in-card';
import { getCurrent } from '../action';
import { redirect } from 'next/navigation';

const SignInPage = async () => {

    const user = await getCurrent();
    if(user) redirect("/")
        
    return (
        <SignInCard/>
    );
}
 
export default SignInPage;