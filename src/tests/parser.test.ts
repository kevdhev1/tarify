import { describe, expect, it } from "vitest";
import { parseNumber } from "@/domain/validations/parser";

describe("parseNumber", () => {
  it("returns null for empty string", () => {
    expect(parseNumber("")).toBeNull();
  });

  it("returns null for whitespace string", () => {
    expect(parseNumber("   ")).toBeNull();
  });

  it("returns null for non-numeric string", () => {
    expect(parseNumber("abc")).toBeNull();
  });

  it("returns null for NaN", () => {
    expect(parseNumber("NaN")).toBeNull();
  });

  it("returns null for Infinity", () => {
    expect(parseNumber("Infinity")).toBeNull();
  });

  it("returns the number for valid numeric string", () => {
    expect(parseNumber("42")).toBe(42);
    expect(parseNumber("-3.14")).toBe(-3.14);
    expect(parseNumber("0")).toBe(0);
  });
});
