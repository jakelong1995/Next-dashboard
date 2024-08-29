interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

export function getUsers(): User[] {
  return users;
}

export function addUser(user: Omit<User, "id">): User[] {
  const newUser = { ...user, id: users.length + 1 };
  users = [...users, newUser];
  return users;
}

export function updateUser(updatedUser: User): User[] {
  users = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user,
  );
  return users;
}

export function deleteUser(userId: number): User[] {
  users = users.filter((user) => user.id !== userId);
  return users;
}

export function getUserById(userId: number): User | undefined {
  return users.find((user) => user.id === userId);
}
