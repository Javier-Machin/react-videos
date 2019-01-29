import React from "react";
import { create } from "react-test-renderer";
import SearchBar from "../SearchBar";

describe("Feature component", () => {
  test("it matches the snapshot", () => {
    const component = create(<SearchBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
