const getUsers = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users',  { next : { revalidate : 10 }});
    if(!resp.ok) throw new Error('Failed to fetch users ')
    const data = await resp.json()
    return data
}

export default getUsers