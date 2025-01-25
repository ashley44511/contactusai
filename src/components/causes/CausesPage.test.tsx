import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CausesPage } from "../../pages/CausesPage";

describe("CausesPage", () => {
  it("renders without crashing", () => {
    render(<CausesPage />);
    expect(screen.getByText("Select causes to support:")).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<CausesPage />);
    expect(screen.getByText("Causes")).toBeInTheDocument();
    expect(screen.getByText("Generate Email")).toBeInTheDocument();
    expect(screen.getByText("Representatives")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders continue button", () => {
    render(<CausesPage />);
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });
});
