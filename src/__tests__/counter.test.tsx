import { render, screen, userEvent } from "../utils/test-utils";
import Counter from "../components/counter";

describe("Counter component", () => {
  it("renders initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it("increments count when increment button is clicked", async () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment-button");
    userEvent.click(incrementButton);

    expect(await screen.findByText(/Count: 1/i)).toBeInTheDocument();
  });

  it("decrements count when decrement button is clicked", async () => {
    render(<Counter />);

    const decrementButton = screen.getByTestId("decrement-button");
    userEvent.click(decrementButton);

    expect(await screen.findByText(/Count: -1/i)).toBeInTheDocument();
  });

  it("resets count when button reset is clicked", async () => {
    render(<Counter />);

    const resetButton = screen.getByTestId("reset-button");
    userEvent.click(resetButton);

    expect(await screen.findByText(/Count: 0/i)).toBeInTheDocument();
  });
});
