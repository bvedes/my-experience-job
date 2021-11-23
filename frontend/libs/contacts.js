export const getAllContacts = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/v1/contacts");
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, message: "Failed to fetch Contacts" };
  }
};

export const addContact = async ({ title, name, email }) => {
  const url = "http://localhost:3001/api/v1/addContact";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, name, email }),
  }).then((data) => data.json());
};

export const updateContact = async (contact) => {
  // podes fazer a destruturing não só quando tens o map.
  const { _id } = contact;
  const url = `http://localhost:3001/api/v1/contacts/${_id}`;
  try {
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }).then((data) => data.json());
  } catch (e) {
    console.log("error: ", e);
  }
};

export const deleteContact = async (contactId) => {
  const url = `http://localhost:3001/api/v1/contacts/${contactId}`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .catch((err) => console.error("error: ", err));
};
