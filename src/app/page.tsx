import { UserButton } from '@/features/auth/component/user-button';
import { getCurrent } from './(auth)/action';
import { redirect } from 'next/navigation';

export default async function Home() {

  const user = await getCurrent();
  if(!user) redirect("/sign-in")
  return (
    <div>
      <UserButton/>
    </div>
  );
}
