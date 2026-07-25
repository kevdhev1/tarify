from dataclasses import dataclass
from decimal import Decimal


@dataclass(slots=True)
class PricingInput:
    desired_income: Decimal
    monthly_expenses: Decimal
    billable_hours: int
    project_hours: int
    safety_margin_rate: Decimal
    income_tax_rate: Decimal
    expected_price: Decimal | None = None


@dataclass(slots=True)
class Breakdown:
    desired_income: Decimal
    monthly_expenses: Decimal
    required_monthly_income: Decimal
    billable_hours: int
    project_hours: int
    base_hourly_rate: Decimal
    safety_margin_rate: Decimal
    safety_margin_amount: Decimal
    income_tax_rate: Decimal
    tax_amount: Decimal
    hourly_rate: Decimal
    sustainable_project_price: Decimal


@dataclass(slots=True)
class PricingResult:
    hourly_rate: Decimal
    sustainable_project_price: Decimal
    breakdown: Breakdown


@dataclass(slots=True)
class PriceComparison:
    difference_percentage: Decimal
    category: str
    justification: str
    color: str
