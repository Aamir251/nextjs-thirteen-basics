import Link from "next/link"
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center shadow sticky top-0 bg-slate-900 ">
        <Link href={"/"} className="p-3">Wiki!</Link>

        <SearchBar />
    </nav>
  )
}

export default Navbar