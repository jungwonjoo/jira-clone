'use client'

import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod";

// import { FcGoogle } from "react-icons/fc";   
// import { FaGithub } from "react-icons/fa";   

import DottedSeparatort from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { registerSchema } from '../schemas';

import {useRegister} from '../api/use-register'


// const formSchema = z.object({
//     name:z.string().trim().min(1, "이름을 입력해주세요"),
//     email: z.string().min(1, "이메일을 입력해주세요").email("올바른 이메일 형식을 입력해주세요"),
//     password: z.string().min(1, "비밀번호를 입력해주세요").min(8, "비밀번호는 최소 8글자 이상이어야 합니다")
// })


const SignUpCard = () => {

    const {mutate, isPending} = useRegister();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver:zodResolver(registerSchema),
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })


    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        mutate({ json: values }, {
            onError: (error) => {
                console.error("회원가입 실패:", error);
                alert("회원가입 중 오류가 발생했습니다.");
            },
            onSuccess: (data) => {
                console.log("회원가입 성공", data);
            }
        })
    }


    return ( 
        <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
            <CardHeader className='flex items-center justify-center text-center p-7'>
                <CardTitle className='text-2xl'>
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to our{" "}
                    <Link href="/privacy">
                        <span className='text-blue-700'>Privacy Policy</span>
                    </Link>{" "}
                    add{" "}
                    <Link href="/privacy">
                        <span className='text-blue-700'>Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className='px-7'>
                <DottedSeparatort/>
            </div>
            <CardContent className='p-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 flex flex-col'>
                        <FormField
                            name='name'
                            control={form.control}
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='name'
                                            placeholder='Enter name'
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
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
                            Register
                        </Button>
                    </form>
                </Form>
                {/* <form className='space-y-4 flex flex-col'>
                    <Input
                        required
                        type='text'
                        value={""}
                        onChange={()=>{}}
                        placeholder='Enter your name'
                        disabled={false}
                    />
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
                    disabled={false}
                    variant={'secondary'}
                    size={'lg'}
                    className='w-full'
                >
                    {/* <FcGoogle className="mr-2 size-5"/> */}
                    Login width Google
                </Button>
                <Button 
                    disabled={false}
                    variant={'secondary'}
                    size={'lg'}
                    className='w-full'
                >
                    {/* <FaGithub className="mr-2 size-5"/> */}
                    Login width Github
                </Button>
            </CardContent>
            <div className='px-7'>
                <DottedSeparatort/>
            </div>
            <CardContent className='p-7 items-center justify-center'>
                <p>사용 계정이 있으세요 ?  
                    <Link href={"/sign-up"}>
                        <span className='text-blue-700'> 로그인하기</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}
 
export default SignUpCard;

