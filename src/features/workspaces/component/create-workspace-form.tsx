import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { createWorkspaceSchema } from '../schemas'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

interface CreateWorkspaceFormProps {
    onCancel:()=>void
}

export const CreateWorkspaceForm = ({onCancel}:CreateWorkspaceFormProps) =>{
    const form = useForm<z.infer<typeof createWorkspaceSchema>>({
        resolver:zodResolver(createWorkspaceSchema),
        defaultValues:{
            name:'',
        }
    })

    const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
        console.log({values})
    }

    return(
        <Card className='w-full h-full border-none shadow-none'>
            <CardHeader className='fles p-7'>
                <CardTitle className='text-xl font-bold'>
                    Create a new workspace
                </CardTitle>
            </CardHeader>
        </Card>
    )
}