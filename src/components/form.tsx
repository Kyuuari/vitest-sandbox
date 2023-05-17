import { FormEvent, useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values (name, email, message) from the state variables
    // and perform any necessary actions (e.g., send a request to a server)
    // Reset the form fields after submission if needed
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-slate-900 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      {isSubmitted && (
        <p className="text-green-500 mt-4">Form submitted successfully</p>
      )}
    </form>
  );
};
