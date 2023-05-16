import { fireEvent, render, screen, userEvent } from "../utils/test-utils";
import Counter from "../components/counter";
import App from "../app";

describe("Counter component", () => {
  it("renders hello", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it("increments count when increment button is clicked", async () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    userEvent.click(incrementButton);
    expect(await screen.findByText(/Count: 1/i)).toBeInTheDocument();
  });

  it("decrements count when decrement button is clicked", async () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrement/i);
    userEvent.click(decrementButton);
    expect(await screen.findByText(/Count: -1/i)).toBeInTheDocument();
  });

  it("resets count when button reset is clicked", async () => {
    render(<Counter />);
    const resetButton = screen.getByText(/Reset/i);
    userEvent.click(resetButton);
    expect(await screen.findByText(/Count: 0/i)).toBeInTheDocument();
  });
});
