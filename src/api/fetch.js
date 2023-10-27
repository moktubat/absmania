// ==========post notes in db=============
export const sendNotes = async (contactInfo) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/contact-us`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(contactInfo),
  });
  const data = response.json();
  return data;
};

// ================== blogs ====================
export const getAllBlogs = async () => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/blogs`);
  const data = res.json();
  return data;
};

export const addBlog = async (blogData) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/blogs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(blogData),
  });
  const data = response.json();
  return data;
};