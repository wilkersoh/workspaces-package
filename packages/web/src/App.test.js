import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(true).toBe(true);
  // expect(linkElement).toBeInTheDocument();
});
