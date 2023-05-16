import Counter from "./components/counter";

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">Hello World</h1>
        <Counter />
      </div>
    </main>
  );
}

export default App;
