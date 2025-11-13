// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-pad-40">
      <section className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold font-[Poppins]">
          KindJoe News Hub
        </h1>
        <p className="text-sm md:text-base text-zinc-700">
          Welcome to the internal playground. Use the links below to explore
          different views of our content and experiments.
        </p>

        <nav className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold">Pages</h2>
            <ul className="mt-2 space-y-2 text-sm md:text-base">
              <li>
                <Link
                  href="/rss"
                  className="text-blue-700 hover:underline underline-offset-2"
                >
                  • From Around the Web (RSS layout)
                </Link>
              </li>
              {/* add more as you build them */}
              {/* <li>
                <Link href="/featured" className="text-blue-700 hover:underline underline-offset-2">
                  • KindJoe Featured Stories
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </section>
    </main>
  );
}
