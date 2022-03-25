import React from "react";
import { render } from "@testing-library/react-native";
import MarvelList from "./marvelList";

describe("Marvel List tests", () => {
  const props = {
    textForSearch: "",
  };
  it("Should render successfully", () => {
    const { getByTestId } = render(<MarvelList {...props} />);
    expect(getByTestId("marvel-list")).toBeDefined();
  });
});
