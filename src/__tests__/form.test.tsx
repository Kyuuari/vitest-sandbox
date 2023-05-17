import { Form } from "../components/form";
import { render, screen, fireEvent, waitFor } from "../utils/test-utils";

describe("Form", () => {
  it("submits the form with correct values", async () => {
    render(<Form />);

    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByText(/Submit/i);

    const name = "John Doe";
    const email = "john@example.com";
    const message = "Hello, world!";

    fireEvent.change(nameInput, { target: { value: name } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(messageInput, { target: { value: message } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const successMessage = screen.getByText(/Form submitted successfully/i);
      expect(successMessage).toBeInTheDocument();
    });
  });

  it.todo("submits the form with invalid values", async () => {
    // render(<Form />);
    // const submitButton = screen.getByText(/Submit/i);
    // fireEvent.click(submitButton);
    // await waitFor(() => {
    //   const successMessage = screen.queryByText(/Form submitted successfully/i);
    //   expect(successMessage).not.toBeInTheDocument();
    //   const nameError = screen.getByText(/Name is required/i);
    //   expect(nameError).toBeInTheDocument();
    //   const emailError = screen.getByText(/Email is required/i);
    //   expect(emailError).toBeInTheDocument();
    //   const messageError = screen.getByText(/Message is required/i);
    //   expect(messageError).toBeInTheDocument();
    // });
  });
});
