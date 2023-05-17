import { Link } from "react-router-dom";
import { Form as FormComponent } from "../components/form";

export const Form = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">Hello World</h1>
        <FormComponent />
      </div>

      <Link
        to="/"
        className="fixed bottom-0 flex flex-row gap-2 md:bottom-[-10] right-4 mb-4 mr-4 py-2 px-4 bg-slate-900 rounded text-white"
      >
        Home
      </Link>
    </main>
  );
};
