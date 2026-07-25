from decimal import Decimal

from app import constants
from app.domain.models import PriceComparison


def compare_prices(
    sustainable_price: Decimal, expected_price: Decimal
) -> PriceComparison:
    """Compare the expected price against the sustainable price."""

    difference_percentage = (
        (expected_price - sustainable_price) / sustainable_price * Decimal("100")
    )

    if difference_percentage <= Decimal("-20"):
        return PriceComparison(
            difference_percentage=difference_percentage,
            category=constants.CATEGORY_VERY_BELOW,
            justification=constants.JUSTIFICATION_VERY_BELOW,
            color=constants.COLOR_RED,
        )

    if difference_percentage < Decimal("-5"):
        return PriceComparison(
            difference_percentage=difference_percentage,
            category=constants.CATEGORY_SLIGHTLY_BELOW,
            justification=constants.JUSTIFICATION_SLIGHTLY_BELOW,
            color=constants.COLOR_YELLOW,
        )

    if difference_percentage <= Decimal("5"):
        return PriceComparison(
            difference_percentage=difference_percentage,
            category=constants.CATEGORY_VERY_CLOSE,
            justification=constants.JUSTIFICATION_VERY_CLOSE,
            color=constants.COLOR_GREEN,
        )

    return PriceComparison(
        difference_percentage=difference_percentage,
        category=constants.CATEGORY_ABOVE,
        justification=constants.JUSTIFICATION_ABOVE,
        color=constants.COLOR_BLUE,
    )
