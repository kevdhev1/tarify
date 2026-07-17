from decimal import Decimal

from app.domain.calculator import calculate_pricing
from app.domain.models import PricingInput


def test_calculate_pricing_returns_expected_result():
    # Arrange
    pricing_input = PricingInput(
        desired_income=Decimal("1000"),
        monthly_expenses=Decimal("260"),
        billable_hours=100,
        project_hours=20,
        safety_margin_rate=Decimal("10"),
        income_tax_rate=Decimal("15"),
    )

    # Act
    result = calculate_pricing(pricing_input)

    # Assert
    assert result.hourly_rate == Decimal("15.939")
    assert result.sustainable_project_price == Decimal("318.780")

    assert result.breakdown.required_monthly_income == Decimal("1260")
    assert result.breakdown.base_hourly_rate == Decimal("12.6")
    assert result.breakdown.safety_margin_amount == Decimal("1.26")
    assert result.breakdown.tax_amount == Decimal("2.079")
