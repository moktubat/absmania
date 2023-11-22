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

// ================== workOuts ====================

export const getAllWorkOuts = async () => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/workOuts`);
  const data = res.json();
  return data;
};

export const saveWorkOuts = async (workOutData) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/workOuts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(workOutData),
  });
  const data = response.json();
  return data;
};

// ================== shop products apis ====================
export const getAllShopProducts = async () => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/products`);
  const data = await res.json();
  return data;
};

// ================== shop product cart apis ====================
export const carts = async (cartData) => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/carts`,  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(cartData),
  });
  const data = await res.json();
  return data;
};

// ================== testimonials ====================

export const getAllTestimonials = async () => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/testimonials`);
  const data = res.json();
  return data;
};

export const saveTestimonials = async (testimonialData) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/testimonials`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonialData),
    }
  );
  const data = response.json();
  return data;
};
