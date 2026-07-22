from app.constants import (
    DEFAULT_BILLABLE_HOURS,
    DEFAULT_INCOME_TAX_RATE,
    DEFAULT_SAFETY_MARGIN_RATE,
)
from app.domain.models import PricingInput
from app.validations.schemas import PricingForm


def validate_pricing_form(form: PricingForm) -> dict[str, str]:
    errors: dict[str, str] = {}

    if form.desired_income <= 0:
        errors["desired_income"] = "El ingreso mensual deseado debe ser mayor a 0."

    if form.monthly_expenses < 0:
        errors["monthly_expenses"] = "Los gastos mensuales no pueden ser menores a 0."

    if form.billable_hours is not None and form.billable_hours <= 0:
        errors["billable_hours"] = "Las horas facturables deben ser mayores a 0."

    if form.project_hours <= 0:
        errors["project_hours"] = "Las horas estimadas del proyecto deben ser mayores a 0"

    if form.expected_price is not None and form.expected_price <= 0:
        errors["expected_price"] = "El precio esperado debe ser mayor a 0."

    if form.safety_margin_rate is not None and (
        form.safety_margin_rate < 0 or form.safety_margin_rate > 100
    ):
        errors["safety_margin_rate"] = "El margen de seguridad debe estar entre 0% y 100%"

    if form.income_tax_rate is not None and (
        form.income_tax_rate < 0 or form.income_tax_rate > 100
    ):
        errors["income_tax_rate"] = "Los impuestos deben estar entre 0% y 100%"

    return errors


def build_pricing_input(form: PricingForm) -> PricingInput:
    pricing_input = PricingInput(
        desired_income=form.desired_income,
        monthly_expenses=form.monthly_expenses,
        project_hours=form.project_hours,
        expected_price=form.expected_price,
        billable_hours=(
            DEFAULT_BILLABLE_HOURS if form.billable_hours is None else form.billable_hours
        ),
        safety_margin_rate=(
            DEFAULT_SAFETY_MARGIN_RATE
            if form.safety_margin_rate is None
            else form.safety_margin_rate
        ),
        income_tax_rate=(
            DEFAULT_INCOME_TAX_RATE
            if form.income_tax_rate is None
            else form.income_tax_rate
        ),
    )

    return pricing_input
