import { useRouter } from "next/router";
import { useState } from "react";
import EditModal from "../Components/EditModal/EditModal";
import { useContacts } from "../hooks/useContacts";
import { Button } from "@chakra-ui/react";

const Contacts = () => {
  const {
    contacts,
    error,
    handleCreateContact,
    handleUpdateContact,
    handleDeleteContact,
  } = useContacts();

  const [editingContact, setEditingContact] = useState(null);

  const router = useRouter();
  const handleCancelModal = () => setEditingContact(null);

  const handleEditContact = (id) => {
    const contact = contacts.find((contact) => contact._id === id);
    setEditingContact(contact);
  };

  return (
    <div className="flex min-h-screen flex-col w-full">
      <div className="py-8 flex justify-center items-center w-full">
        <div>
          <Button
            size="xs"
            colorScheme="green"
            onClick={() => {
              handleCreateContact();
            }}
          >
            Add
          </Button>
          {error ? <div className="text-red-500">{error}</div> : null}
        </div>
      </div>
      <div>
        {contacts?.map((contact, idx) => {
          const { _id, name, email, title } = contact;
          return (
            <div key={idx} className="p-6 w-full">
              <div className="w-full flex p-2">
                {title}
                <Button
                  className="ml-auto"
                  size="xs"
                  colorScheme="red"
                  onClick={() => handleDeleteContact(_id)}
                >
                  x
                </Button>
              </div>
              <div className="bg-white shadow-md p-4 w-full">
                <div className="p-2">
                  <p className="font-bold"> Name:</p>
                  {name}
                </div>
                <div className="p-2">
                  <p className="font-bold"> Email:</p>
                  {email}
                </div>
                {editingContact ? (
                  <EditModal
                    contact={editingContact}
                    handleCancelModal={handleCancelModal}
                    handleUpdateContact={handleUpdateContact}
                  />
                ) : (
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEditContact(_id)}
                  >
                    Edit
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
