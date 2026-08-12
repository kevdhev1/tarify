import { describe, expect, it } from "vitest";
import { comparePrices } from "@/domain/comparison";
import {
  CATEGORY_ABOVE,
  CATEGORY_SLIGHTLY_BELOW,
  CATEGORY_VERY_CLOSE,
  CATEGORY_VERY_BELOW,
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_YELLOW,
  JUSTIFICATION_ABOVE,
  JUSTIFICATION_SLIGHTLY_BELOW,
  JUSTIFICATION_VERY_BELOW,
  JUSTIFICATION_VERY_CLOSE,
} from "@/constants/constants";

describe("comparePrices", () => {
  it("returns very below for -20%", () => {
    const result = comparePrices(80, 100);

    expect(result.differencePercentage).toBe(-20);
    expect(result.category).toBe(CATEGORY_VERY_BELOW);
    expect(result.justification).toBe(JUSTIFICATION_VERY_BELOW);
    expect(result.color).toBe(COLOR_RED);
  });

  it("returns slightly below for -10%", () => {
    const result = comparePrices(90, 100);

    expect(result.differencePercentage).toBe(-10);
    expect(result.category).toBe(CATEGORY_SLIGHTLY_BELOW);
    expect(result.justification).toBe(JUSTIFICATION_SLIGHTLY_BELOW);
    expect(result.color).toBe(COLOR_YELLOW);
  });

  it("returns slightly below for just under -5%", () => {
    const result = comparePrices(94.9, 100);

    expect(result.differencePercentage).toBeCloseTo(-5.1, 1);
    expect(result.category).toBe(CATEGORY_SLIGHTLY_BELOW);
    expect(result.justification).toBe(JUSTIFICATION_SLIGHTLY_BELOW);
    expect(result.color).toBe(COLOR_YELLOW);
  });

  it("returns very close for -5%", () => {
    const result = comparePrices(95, 100);

    expect(result.differencePercentage).toBe(-5);
    expect(result.category).toBe(CATEGORY_VERY_CLOSE);
    expect(result.justification).toBe(JUSTIFICATION_VERY_CLOSE);
    expect(result.color).toBe(COLOR_GREEN);
  });

  it("returns very close for +5%", () => {
    const result = comparePrices(105, 100);

    expect(result.differencePercentage).toBe(5);
    expect(result.category).toBe(CATEGORY_VERY_CLOSE);
    expect(result.justification).toBe(JUSTIFICATION_VERY_CLOSE);
    expect(result.color).toBe(COLOR_GREEN);
  });

  it("returns above for more than +5%", () => {
    const result = comparePrices(106, 100);

    expect(result.differencePercentage).toBe(6);
    expect(result.category).toBe(CATEGORY_ABOVE);
    expect(result.justification).toBe(JUSTIFICATION_ABOVE);
    expect(result.color).toBe(COLOR_BLUE);
  });
});
