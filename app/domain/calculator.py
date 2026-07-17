from decimal import Decimal

from app.domain.models import Breakdown, PricingInput, PricingResult


def calculate_pricing(pricing_input: PricingInput) -> PricingResult:
    """Calculate the sustainable price of a freelance project."""

    # 1. Calculate the necessary monthly income
    required_monthly_income = (
        pricing_input.desired_income + pricing_input.monthly_expenses
    )

    # 2. Calculate the base hourly rate
    base_hourly_rate = required_monthly_income / pricing_input.billable_hours

    # 3. Apply safety margin
    safety_margin_amount = (
        base_hourly_rate * pricing_input.safety_margin_rate / Decimal("100")
    )

    hourly_rate_with_margin = base_hourly_rate + safety_margin_amount

    # 4. Apply taxes
    tax_amount = hourly_rate_with_margin * pricing_input.income_tax_rate / Decimal("100")

    hourly_rate = hourly_rate_with_margin + tax_amount

    # 5. Calculate the project price
    sustainable_project_price = hourly_rate * pricing_input.project_hours

    breakdown = Breakdown(
        desired_income=pricing_input.desired_income,
        monthly_expenses=pricing_input.monthly_expenses,
        required_monthly_income=required_monthly_income,
        billable_hours=pricing_input.billable_hours,
        project_hours=pricing_input.project_hours,
        base_hourly_rate=base_hourly_rate,
        safety_margin_rate=pricing_input.safety_margin_rate,
        safety_margin_amount=safety_margin_amount,
        income_tax_rate=pricing_input.income_tax_rate,
        tax_amount=tax_amount,
        hourly_rate=hourly_rate,
        sustainable_project_price=sustainable_project_price,
    )

    pricing_result = PricingResult(
        hourly_rate=hourly_rate,
        sustainable_project_price=sustainable_project_price,
        breakdown=breakdown,
    )

    return pricing_result
