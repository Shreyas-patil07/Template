import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";

vi.mock("./lib/api", () => ({
  fetchHealth: vi.fn().mockResolvedValue({ status: "ok" }),
}));

describe("App", () => {
  it("renders the project starter screen", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Project Starter" }),
    ).toBeInTheDocument();
  });
});
