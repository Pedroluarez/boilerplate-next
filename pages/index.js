import Link from 'next/link'

export default function Home() {
  return (
   <>
    <h1>Boilerplate</h1>
    <Link href="/nextPage" passHref>
    <button >next page</button>
    </Link>
    </>
  )
}
