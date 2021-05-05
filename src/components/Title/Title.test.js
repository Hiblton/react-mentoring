import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./Title";

it("should take a snapshot", () => {
  const { asFragment } = render(<Title title="title" />);

  expect(asFragment()).toMatchSnapshot();
});
