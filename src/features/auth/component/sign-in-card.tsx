'use client'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod";

import { FcGoogle } from "react-icons/fc";   
import { FaGithub } from "react-icons/fa";   


import DottedSeparatort from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Link from 'next/link';
import { loginSchema } from '../schemas';
import { useLogin } from '../api/use-login';


// const formSchema = z.object({
//     email: z.string().min(1, "이메일을 입력해주세요").email("올바른 이메일 형식을 입력해주세요"),
//     password: z.string().min(1, "비밀번호를 입력해주세요").min(8, "비밀번호는 최소 8글자 이상이어야 합니다")
// })


const IconFcGoogle = FcGoogle as React.FC<React.SVGProps<SVGSVGElement>>
const IconFaGithub = FaGithub as React.FC<React.SVGProps<SVGSVGElement>>

    
const SignInCard = () => {

    const {mutate, isPending} = useLogin()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver:zodResolver(loginSchema),
        defaultValues:{
            email:'',
            password:''
        }
    })
    
    const onSubmit = (values:z.infer<typeof loginSchema>) => {
        mutate({json:values})        
    }
     
    
    return ( 
        <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
            <CardHeader className='flex items-center justify-center text-center p-7'>
                <CardTitle className='text-2xl'>
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <div className='px-7'>
                <DottedSeparatort/>
            </div>
            <CardContent className='p-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 flex flex-col'>
                        <FormField
                            name='email'
                            control={form.control}
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                        <Input                                            
                                            {...field}
                                            type='email'
                                            placeholder='Enter email address'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name='password'
                            control={form.control}
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='password'
                                            placeholder='Enter password'
                                        />
                                    </FormControl>
                                    <FormMessage />                                    
                                </FormItem>
                            )}
                        />
                        <Button disabled={isPending} size="lg" className='w-full'>
                            Login
                        </Button>
                    </form>
                
                </Form>
                {/* <form className='space-y-4 flex flex-col'>
                    <Input
                        required
                        type='email'
                        value={""}
                        onChange={()=>{}}
                        placeholder='Enter email address'
                        disabled={false}
                    />
                    <Input
                        required
                        type='password'
                        value={""}
                        onChange={()=>{}}
                        placeholder='Enter password'
                        disabled={false}
                        min={8}
                        max={256}
                    />
                    <Button disabled={false} size="lg" className='w-full'>
                        Login
                    </Button>
                </form> */}
            </CardContent>
            <div className='px-7'>
                <DottedSeparatort/>
            </div>
            <CardContent className='p-7 flex flex-col gap-y-4'>
                <Button 
                    disabled={isPending}
                    variant={'secondary'}
                    size={'lg'}
                    className='w-full'
                >
                    <IconFcGoogle className="mr-2 size-5"/>
                    Login width Google
                </Button>
                <Button 
                    disabled={isPending}
                    variant={'secondary'}
                    size={'lg'}
                    className='w-full'
                >
                    <IconFaGithub className="mr-2 size-5"/>
                    Login width Github
                </Button>
            </CardContent>
            <div className='px-7'>
                <DottedSeparatort/>
            </div>
            <CardContent className='p-7 items-center justify-center'>
                <p>아직 회원이 아니세요 ?
                    <Link href={"/sign-up"}>
                        <span className='text-blue-700'> 회원가입하기</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}
 
export default SignInCard;