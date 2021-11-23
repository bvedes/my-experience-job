import { useState, useEffect } from "react";
import {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact,
} from "../libs/contacts";

export const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { success, data, message } = await getAllContacts();
    if (success) {
      setContacts(data);
    } else {
      console.error("Error getting all contacts");
      setError(message);
    }
  };

  const handleCreateContact = async () => {
    const { success, data } = await addContact({
      //title: title,
      data: data,
    });
    if (success) {
      setContacts([...contacts, data]);
    } else {
      console.error("Error adding Contact");
    }
  };

  const handleDeleteContact = async (id) => {
    const { success, data } = await deleteContact(id);
    if (success) {
      const { _id } = data;
      setContacts(contacts.filter((contact) => contact._id !== _id));
    } else {
      console.error("Error deleting contact");
    }
  };

  const handleUpdateContact = async (contact) => {
    const { success, data } = await updateContact(contact);
    const { _id } = data;
    if (success) {
      setContacts(
        contacts.map((contact) => {
          if (contact._id === _id) {
            return data;
          }
          return contact;
        })
      );
    } else {
      console.error("Unable to update Contact");
    }
  };

  return {
    contacts,
    error,
    handleUpdateContact,
    handleDeleteContact,
    handleCreateContact,
  };
};
