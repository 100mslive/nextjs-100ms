import { useState } from "react";

const Preview = ({ handleSubmit }) => {
  const [userName, setUserName] = useState("");
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-800">
      <div className="w-64 h-32 p-4 rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(userName);
          }}
        >
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="userName"
            className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            placeholder="John Doe"
            required
          />
          <button className="px-4 py-2 bg-blue-700 rounded-lg text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Preview;
