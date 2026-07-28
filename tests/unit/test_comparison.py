from decimal import Decimal

from app import constants
from app.domain.comparison import compare_prices


def test_compare_prices_returns_very_below_for_minus_20_percent():
    result = compare_prices(
        sustainable_price=Decimal("100"), expected_price=Decimal("80")
    )

    assert result.difference_percentage == Decimal("-20")
    assert result.category == constants.CATEGORY_VERY_BELOW
    assert result.justification == constants.JUSTIFICATION_VERY_BELOW
    assert result.color == constants.COLOR_RED


def test_compare_prices_returns_slightly_below_for_minus_10_percent():
    result = compare_prices(
        sustainable_price=Decimal("100"), expected_price=Decimal("90")
    )

    assert result.difference_percentage == Decimal("-10")
    assert result.category == constants.CATEGORY_SLIGHTLY_BELOW
    assert result.justification == constants.JUSTIFICATION_SLIGHTLY_BELOW
    assert result.color == constants.COLOR_YELLOW


def test_compare_prices_returns_very_close_for_minus_5_percent():
    result = compare_prices(
        sustainable_price=Decimal("100"), expected_price=Decimal("95")
    )

    assert result.difference_percentage == Decimal("-5")
    assert result.category == constants.CATEGORY_VERY_CLOSE
    assert result.justification == constants.JUSTIFICATION_VERY_CLOSE
    assert result.color == constants.COLOR_GREEN


def test_compare_prices_returns_very_close_for_plus_5_percent():
    result = compare_prices(
        sustainable_price=Decimal("100"), expected_price=Decimal("105")
    )

    assert result.difference_percentage == Decimal("5")
    assert result.category == constants.CATEGORY_VERY_CLOSE
    assert result.justification == constants.JUSTIFICATION_VERY_CLOSE
    assert result.color == constants.COLOR_GREEN


def test_compare_prices_returns_above_for_more_than_5_percent():
    result = compare_prices(
        sustainable_price=Decimal("100"), expected_price=Decimal("106")
    )

    assert result.difference_percentage == Decimal("6")
    assert result.category == constants.CATEGORY_ABOVE
    assert result.justification == constants.JUSTIFICATION_ABOVE
    assert result.color == constants.COLOR_BLUE
