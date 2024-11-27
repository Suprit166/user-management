import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div>
      <h1>User Management</h1>
      {editingUser ? (
        <UserForm
          user={editingUser}
          onClose={() => setEditingUser(null)}
        />
      ) : (
        <UserList
          onEdit={setEditingUser}
          onAdd={() => setEditingUser({})}
        />
      )}
    </div>
  );
};

export default App;
