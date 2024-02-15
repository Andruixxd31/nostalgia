import Link from 'next/link'

export default function Home() {
  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">
        Nostalgia
      </h1>
      <Link href={"/NewActivity"}>
        New Habit
      </Link>
    </header>
  );
}
