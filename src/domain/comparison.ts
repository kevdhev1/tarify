import {
  CATEGORY_ABOVE,
  CATEGORY_SLIGHTLY_BELOW,
  CATEGORY_VERY_BELOW,
  CATEGORY_VERY_CLOSE,
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_YELLOW,
  JUSTIFICATION_ABOVE,
  JUSTIFICATION_SLIGHTLY_BELOW,
  JUSTIFICATION_VERY_BELOW,
  JUSTIFICATION_VERY_CLOSE,
} from "@/constants/constants";
import type { PriceComparison } from "@/types/pricing";

export function comparePrices(
  expectedPrice: number,
  sustainablePrice: number,
): PriceComparison {
  const differencePercentage =
    ((expectedPrice - sustainablePrice) / sustainablePrice) * 100;

  if (differencePercentage <= -20) {
    return {
      differencePercentage,
      category: CATEGORY_VERY_BELOW,
      justification: JUSTIFICATION_VERY_BELOW,
      color: COLOR_RED,
    };
  }

  if (differencePercentage < -5) {
    return {
      differencePercentage,
      category: CATEGORY_SLIGHTLY_BELOW,
      justification: JUSTIFICATION_SLIGHTLY_BELOW,
      color: COLOR_YELLOW,
    };
  }

  if (differencePercentage <= 5) {
    return {
      differencePercentage,
      category: CATEGORY_VERY_CLOSE,
      justification: JUSTIFICATION_VERY_CLOSE,
      color: COLOR_GREEN,
    };
  }

  return {
    differencePercentage,
    category: CATEGORY_ABOVE,
    justification: JUSTIFICATION_ABOVE,
    color: COLOR_BLUE,
  };
}
