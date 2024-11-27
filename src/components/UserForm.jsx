import React, { useState } from "react";
import { addUser, updateUser } from "../services/api";
import { validateUser } from "../utils/validation";

const UserForm = ({ user = {}, onClose }) => {
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateUser(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    const apiCall = user.id ? updateUser : addUser;
    apiCall(formData)
      .then(onClose)
      .catch(() => setError("Failed to save user."));
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="firstName"
        value={formData.firstName || ""}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName || ""}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email || ""}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="department"
        value={formData.department || ""}
        onChange={handleChange}
        placeholder="Department"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
