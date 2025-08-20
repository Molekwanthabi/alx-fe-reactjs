import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoForm from "../components/AddTodoForm";

describe("AddTodoForm Component", () => {
  test("renders input and button", () => {
    render(<AddTodoForm addTodo={() => {}} />);
    expect(screen.getByPlaceholderText("Add todo")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("calls addTodo when form is submitted", () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    fireEvent.change(screen.getByPlaceholderText("Add todo"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Add"));

    expect(mockAddTodo).toHaveBeenCalledWith("New Task");
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
  });

  test("clears input after submitting", () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    const input = screen.getByPlaceholderText("Add todo");
    fireEvent.change(input, { target: { value: "Clear me" } });
    fireEvent.click(screen.getByText("Add"));

    expect(input.value).toBe("");
  });
});
