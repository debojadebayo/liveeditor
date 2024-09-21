import { liveblocks } from '@/lib/liveblocks'
import { getUserColor } from '@/lib/utils'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export async function POST(req: Request){

    const clerkUser = await currentUser()
    
    if(!clerkUser) redirect ('/sign-in')

    const { id, firstName, lastName, imageUrl, emailAddresses } = clerkUser



    const user = {
        id, 
        info: {
            id, 
            name: `${firstName} ${lastName}`,
            email: emailAddresses[0].emailAddress,
            avatar: imageUrl, 
            color: getUserColor(id)

        }
    }

    const { body, status } = await liveblocks.identifyUser(
    
    {
        userId: user.info.email, 
        groupIds: []
    }, 
{
    userInfo:user.info
})


    return new Response(body, { status })
}