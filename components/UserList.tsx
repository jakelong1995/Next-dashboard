import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
  onUpdateUser: (user: User) => void;
  onDeleteUser: (userId: number) => void;
}

export default function UserList({
  users,
  onUpdateUser,
  onDeleteUser,
}: UserListProps) {
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    if (editingUser) {
      onUpdateUser(editingUser);
      setEditingUser(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingUser) {
      setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">User List</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="rounded bg-gray-100 p-4">
            {editingUser?.id === user.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editingUser.name}
                  onChange={handleChange}
                  className="mb-2 rounded border p-1"
                />
                <input
                  type="email"
                  name="email"
                  value={editingUser.email}
                  onChange={handleChange}
                  className="mb-2 rounded border p-1"
                />
                <button
                  onClick={handleSave}
                  className="mr-2 rounded bg-green-500 px-2 py-1 text-white"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <button
                  onClick={() => handleEdit(user)}
                  className="mr-2 rounded bg-blue-500 px-2 py-1 text-white"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => onDeleteUser(user.id)}
              className="rounded bg-red-500 px-2 py-1 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
