interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onDelete?: (id: number) => void;
}

export default function UserCard({ user, onDelete }: UserCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow" data-testid="user-card">
      <h3 className="text-lg font-semibold" data-testid="user-name">{user.name}</h3>
      <p className="text-gray-600" data-testid="user-email">{user.email}</p>
      {onDelete && (
        <button
          onClick={() => onDelete(user.id)}
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          data-testid="delete-button"
        >
          Delete
        </button>
      )}
    </div>
  );
}
