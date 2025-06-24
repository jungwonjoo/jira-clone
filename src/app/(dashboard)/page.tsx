import { getCurrent } from '../(auth)/action';
import { redirect } from 'next/navigation';

export default async function Home() {

  const user = await getCurrent();
  if(!user) redirect("/sign-in")
  return (
    <div>
      {/* <UserButton/> */}
      This is a home page
    </div>
  );
}
