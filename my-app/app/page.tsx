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
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            SonarQube Test Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Demo de Code Coverage com Jest e React Testing Library
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

        <footer className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🧪 Sobre este Projeto
            </h3>
            <div className="text-left space-y-2 text-gray-700 dark:text-gray-300">
              <p>✅ <strong>Jest</strong> configurado para testes unitários</p>
              <p>✅ <strong>React Testing Library</strong> para testes de componentes</p>
              <p>✅ <strong>Code Coverage</strong> integrado com SonarQube</p>
              <p>✅ Múltiplos componentes testáveis</p>
              <p>✅ Funções utilitárias com testes</p>
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
    </div>
  );
}
