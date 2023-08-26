import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../../components/header";

test("renders header component", () => {
  render(<Header />);
});

test("renders about link", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders posts link", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Posts/i);
  expect(linkElement).toBeInTheDocument();
});
