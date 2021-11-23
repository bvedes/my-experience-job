import React from "react";
import { useRouter } from "next/router";
const App = () => {
  const router = useRouter();
  return (
    <div className="p-4">
      <button
        className="mx-4"
        type="button"
        onClick={() => router.push("/quizzenglish")}
      >
        Quizz English
      </button>
      <button type="button" onClick={() => router.push("/contacts")}>
        Contacts
      </button>
    </div>
  );
};
export default App;
