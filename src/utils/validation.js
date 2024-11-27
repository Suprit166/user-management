export const validateUser = (user) => {
    if (!user.firstName) return "First Name is required.";
    if (!user.lastName) return "Last Name is required.";
    if (!user.email || !/\S+@\S+\.\S+/.test(user.email))
      return "Valid Email is required.";
    if (!user.department) return "Department is required.";
    return null;
  };
  