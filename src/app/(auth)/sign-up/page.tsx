
import SignUpCard from '@/features/auth/component/sign-up-card';
import { getCurrent } from '../action';
import { redirect } from 'next/navigation';

const SignUpPage = async () => {

    const user = await getCurrent();
    if(user) redirect("/")

    return (
        <SignUpCard/>
    );
}
 
export default SignUpPage;