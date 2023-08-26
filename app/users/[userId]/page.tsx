import getUser from "@/lib/getUser";
import { Suspense } from "react";
import UserBlogPosts from "./component/UserBlogPosts";
import type { Metadata } from "next"; 
import Weather from "./component/Weather";
import ErrorBoundary from './component/WeatherErrorBoundary';
import getUsers from "@/lib/getUsers";
import { notFound } from "next/navigation"
type PropType = {
    params : {
        userId : string
    }
}

export const generateMetadata = async ({ params } : PropType) : Promise<Metadata> => {
    const userData : User  = await getUser(params.userId);

    if(!userData?.name) {
        return {
            title : "User Not Found"
        }
    }
    return {
        title : userData.name,
        description : `Page of the user ${userData.name}`
    } 
}

const UserPage = async ({ params } : PropType) => {
    const userData : User  = await getUser(params.userId);

    if(!userData?.name) notFound()
    // const posts = await getBlogPosts()
    return <>
        <h2>{userData.name}</h2>
        <p>{userData.email}</p>

        <Suspense fallback={<h2>Loading Blog Posts...</h2>} >
            <UserBlogPosts 
                userId={userData.id} 
            />

            {/* <UserBlogPostsNew posts={posts} /> */}
        </Suspense>
        <Suspense fallback={<h2>Loading Weather Data....</h2>} >
            <ErrorBoundary fallback={<h2>Error occured in fetching weather data</h2>} >
                <Weather />
            </ErrorBoundary>
            {/* <UserBlogPostsNew posts={posts} /> */}
        </Suspense>
    </>
}

export default UserPage;


export const generateStaticParams = async () => {
    const usersData : User[] = await getUsers()

    return usersData.map(user => {
        return {
            userId : user.id.toString()
        }
    })

}

