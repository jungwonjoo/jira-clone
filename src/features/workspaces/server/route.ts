import { zValidator } from '@hono/zod-validator'
import {Hono} from 'hono'
import { createWorkspaceSchema } from '../schemas'
import { sessionMiddleware } from '@/lib/session-middleware'
import { DATAVASE_ID, WORKSPACES_ID } from '@/config'
import { ID } from 'node-appwrite'

const app = new Hono()
    .post(
        '/',
        zValidator("json", createWorkspaceSchema),
        sessionMiddleware,
        async (c)=>{
            const databases = c.get("databases");
            const user = c.get("user");

            const {name} = c.req.valid("json");

            const workspaces = await databases.createDocument(
                DATAVASE_ID,
                WORKSPACES_ID,
                ID.unique(),
                {
                    name,
                },
            )   ;

            return c.json({data:workspaces})
        }
    )

export default app