import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

beforeEach(cleanup);
test("renders loader on form submit", () => {
  const { getByTestId, container } = render(<App />);
  const submitButton = getByTestId("submitButton");
  fireEvent.click(submitButton);
  const loader = container.querySelector(".loader");
  expect(loader).toBeInTheDocument();
});
