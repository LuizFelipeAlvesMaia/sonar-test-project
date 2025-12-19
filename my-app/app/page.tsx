import Image from "next/image";
'use client';

import Counter from "@/components/Counter";
import ContactForm from "@/components/ContactForm";
import UserCard from "@/components/UserCard";

export default function Home() {
  const sampleUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <main>
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              SonarQube Test Project
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Learning
              </a>{" "}
              center.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Code Coverage Demo with Jest and React Testing Library
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Counter Component */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <Counter initialValue={0} />
            </div>

            {/* User Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">User List</h2>
              <div className="space-y-3">
                {sampleUsers.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onDelete={(id) => console.log(`Delete user ${id}`)}
                  />
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-1">
              <ContactForm />
            </div>
          </div>
          
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            🧪 About This Project
          </h3>
          <div className="text-left space-y-2 text-gray-700 dark:text-gray-300">
            <p>✅ <strong>Jest</strong> configured for unit testing</p>
            <p>✅ <strong>React Testing Library</strong> for component testing</p>
            <p>✅ <strong>Code Coverage</strong> integrated with SonarQube</p>
            <p>✅ Multiple testable components</p>
            <p>✅ Utility functions with tests</p>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm">
              yarn test
            </code>
            <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm">
              yarn test:coverage
            </code>
          </div>
        </div>
      </footer>
    </div>
  );
}