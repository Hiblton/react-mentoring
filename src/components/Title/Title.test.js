import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Title } from "./Title";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<Title title="title" />);

  expect(asFragment()).toMatchSnapshot();
});
