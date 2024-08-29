"use client";

import { useState, useEffect } from "react";
import UserList from "@/components/UserList";
import UserForm from "@/components/UserForm";
import { getUsers, addUser, updateUser, deleteUser } from "@/lib/mockData";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setUsers(getUsers() as any);
    } catch (err) {
      setError("Failed to fetch users. Please try again later.");
    }
  }, []);

  const handleAddUser = (newUser: any) => {
    try {
      const updatedUsers = addUser(newUser);
      setUsers(updatedUsers as any);
      setError(null);
    } catch (err) {
      setError("Failed to add user. Please try again.");
    }
  };

  const handleUpdateUser = (updatedUser: any) => {
    try {
      const updatedUsers = updateUser(updatedUser);
      setUsers(updatedUsers as any);
      setError(null);
    } catch (err) {
      setError("Failed to update user. Please try again.");
    }
  };

  const handleDeleteUser = (userId: number) => {
    try {
      const updatedUsers = deleteUser(userId);
      setUsers(updatedUsers as any);
      setError(null);
    } catch (err) {
      setError("Failed to delete user. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">User Management</h1>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <UserForm onAddUser={handleAddUser} />
      <UserList
        users={users}
        onUpdateUser={handleUpdateUser}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  );
}
