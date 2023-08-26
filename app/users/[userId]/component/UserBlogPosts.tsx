

type Prop = {
    userId : number
}

type BlogType = {
    userId : number,
    id : number,
    title : string,
    body : string
}
const UserBlogPosts = async ({ userId } : Prop ) => {
    const posts = await getBlogPosts(userId.toString())
    return posts.map(post => <article key={post.id} className="border p-4">
        <h2 className="font-medium text-2xl">{post.title}</h2>
        <p>{post.body}</p>
    </article>)
}

export default UserBlogPosts;

const getBlogPosts = async (userId : string) : Promise<BlogType[]> => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(!resp.ok) throw new Error('Error fetching Posts')

    const data = await resp.json()
    return data
}

const getBlogPostsTwo =  () : Promise<BlogType[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    userId : 1,
                    id : 1,
                    title : "title 1",
                    body  : "description 1"
                },
                {
                    userId : 1,
                    id : 2,
                    title : "title 2",
                    body  : "description 2"
                }
            ])
        },5000)
    })
}