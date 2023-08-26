import Link from "next/link";

export default function MemberPage() {
  return <h1>
    Mmebers page

    <div>
        <Link href={"/members/member"}>
        See Modal
        </Link>
    </div>
  </h1>
}