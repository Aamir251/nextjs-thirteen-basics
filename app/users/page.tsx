import getUsers from "@/lib/getUsers"
import Link from "next/link";



const UsersPage = async () => {

  const users : User[] = await getUsers();

  return (
    <>
      <ul className="space-y-4">
        {
          users.map(user => <li key={user.id} className="hover:text-red-900" >
            <Link href={`/users/${user.id}`} > {user.name} </Link>
          </li>)
        }
      </ul>
    </>
  )
}

export default UsersPage