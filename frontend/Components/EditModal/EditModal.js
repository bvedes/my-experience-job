import { useState } from "react";

const EditModal = ({ contact, handleCancelModal, handleUpdateContact }) => {
  const [title, setTitle] = useState(contact?.title);
  const [email, setEmail] = useState(contact?.email);
  const [name, setName] = useState(contact?.name);

  console.log("modal contact: ", contact);

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-gray-500 p-44"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7" }}
    >
      <div className="mx-auto relative w-3/4 h-1/2 flex flex-col justify-center fixed border bg-white border-gray-300 rounded-lg shadow-lg">
        <div className="h-16 p-4 border-b border-gray-200">Update Contact</div>
        <div className="flex flex-col gap-4 p-8">
          <div>Title</div>
          <input
            className="border border-gray-300 p-2 w-full"
            placeholder="Add a Title..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>Name</div>
          <input
            className="border border-gray-300 p-2 w-full"
            placeholder="Add a Name..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>Email</div>
          <input
            className="border border-gray-300 p-2 w-full"
            placeholder="Add an E-mail..."
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="h-16 p-8 border-t border-gray-200 flex justify-end items-center gap-2">
          <button
            className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded-sm shadow-sm"
            onClick={() => handleCancelModal()}
          >
            CANCEL
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 rounded-sm shadow-sm"
            onClick={() => {
              handleUpdateContact({ ...contact, title, name, email });
              handleCancelModal();
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
