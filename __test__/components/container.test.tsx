import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Container from "../../components/container";

describe("Container", () => {
  it("renders children inside a div with the 'container' class", () => {
    const { getByText } = render(
      <Container>
        <p>Test</p>
      </Container>
    );
    const containerElement = getByText("Test").parentElement;
    expect(containerElement).toHaveClass("container");
  });

  it("applies the 'max-w-2xl', 'm-auto', and 'px-4' classes to the container div", () => {
    const { getByText } = render(
      <Container>
        <p>Test</p>
      </Container>
    );
    const containerElement = getByText("Test").parentElement;
    expect(containerElement).toHaveClass("max-w-2xl");
    expect(containerElement).toHaveClass("m-auto");
    expect(containerElement).toHaveClass("px-4");
  });
});
