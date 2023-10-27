export const fetchUserByEmail = async (email) => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/${email}`);
  return res.json();
};
