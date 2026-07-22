from decimal import Decimal

from pydantic import BaseModel


class PricingForm(BaseModel):
    desired_income: Decimal
    monthly_expenses: Decimal
    billable_hours: int | None = None
    project_hours: int
    safety_margin_rate: Decimal | None = None
    income_tax_rate: Decimal | None = None
    expected_price: Decimal | None = None
