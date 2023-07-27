import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("0이 잘 보인다!", () => {
  render(<App />);
  expect(screen.getByText("0")).toBeInTheDocument();
});

describe("더하기와 빼기", () => {
  it("더하기를 누르면 1만큼 증가한다!", () => {
    render(<App />);

    const incrementButton = screen.getByRole("button", { name: "더하기" });
    fireEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
  it("빼기를 누르면 1만큼 감소한다!", () => {
    render(<App />);

    const decrementButton  = screen.getByRole("button", { name: "빼기" });
    fireEvent.click(decrementButton );

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
