import Link from "next/link"
import SideBarLink from "./SideBarLink";

const SideBar = () => {
    
  return (
    <aside className="flex flex-col space-y-3 bg-red-100 py-5">
        {
            links.map(({ title, href }) => <SideBarLink key={title} title={title} href={href} />)
        }
    </aside>
  )
}

export default SideBar;



const links = [
    {
        title : "home",
        href : "/"
    },
    {
        title : "See Users",
        href : "/users"
    }
]