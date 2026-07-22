from decimal import Decimal

from app.constants import (
    DEFAULT_BILLABLE_HOURS,
    DEFAULT_INCOME_TAX_RATE,
    DEFAULT_SAFETY_MARGIN_RATE,
)
from app.validations.rules import build_pricing_input, validate_pricing_form
from app.validations.schemas import PricingForm


def create_valid_form(**overrides) -> PricingForm:
    data = {
        "desired_income": Decimal("1000"),
        "monthly_expenses": Decimal("250"),
        "billable_hours": 100,
        "project_hours": 20,
        "safety_margin_rate": Decimal("10"),
        "income_tax_rate": Decimal("15"),
        "expected_price": Decimal("300"),
    }

    data.update(overrides)

    return PricingForm(**data)


# ==========================================================
# validate_pricing_form()
# ==========================================================


def test_validate_returns_no_errors_when_data_is_valid():
    form = create_valid_form()
    errors = validate_pricing_form(form)

    assert errors == {}


def test_validate_desired_income_must_be_greater_than_zero():
    form = create_valid_form(desired_income=Decimal("0"))
    errors = validate_pricing_form(form)

    assert errors == {"desired_income": "El ingreso mensual deseado debe ser mayor a 0."}


def test_validate_monthly_expenses_cannot_be_negative():
    form = create_valid_form(monthly_expenses=Decimal("-1"))
    errors = validate_pricing_form(form)

    assert errors == {
        "monthly_expenses": "Los gastos mensuales no pueden ser menores a 0."
    }


def test_validate_billable_hours_must_be_greater_than_zero():
    form = create_valid_form(billable_hours=0)
    errors = validate_pricing_form(form)

    assert errors == {"billable_hours": "Las horas facturables deben ser mayores a 0."}


def test_validate_project_hours_must_be_greater_than_zero():
    form = create_valid_form(project_hours=0)
    errors = validate_pricing_form(form)

    assert errors == {
        "project_hours": "Las horas estimadas del proyecto deben ser mayores a 0"
    }


def test_validate_expected_price_must_be_greater_than_zero():
    form = create_valid_form(expected_price=Decimal("0"))
    errors = validate_pricing_form(form)

    assert errors == {"expected_price": "El precio esperado debe ser mayor a 0."}


def test_validate_safety_margin_must_be_between_0_and_100():
    form = create_valid_form(safety_margin_rate=Decimal("-1"))
    errors = validate_pricing_form(form)

    assert errors == {
        "safety_margin_rate": "El margen de seguridad debe estar entre 0% y 100%"
    }


def test_validate_income_tax_must_be_between_0_and_100():
    form = create_valid_form(income_tax_rate=Decimal("101"))
    errors = validate_pricing_form(form)

    assert errors == {"income_tax_rate": "Los impuestos deben estar entre 0% y 100%"}


# ==========================================================
# build_pricing_input()
# ==========================================================


def test_build_pricing_input_uses_defaults_when_optional_fields_are_none():
    form = create_valid_form(
        billable_hours=None,
        safety_margin_rate=None,
        income_tax_rate=None,
    )

    pricing_input = build_pricing_input(form)

    assert pricing_input.billable_hours == DEFAULT_BILLABLE_HOURS
    assert pricing_input.safety_margin_rate == DEFAULT_SAFETY_MARGIN_RATE
    assert pricing_input.income_tax_rate == DEFAULT_INCOME_TAX_RATE


def test_build_pricing_input_preserves_user_values():
    form = create_valid_form(
        billable_hours=120,
        safety_margin_rate=Decimal("20"),
        income_tax_rate=Decimal("12"),
    )

    pricing_input = build_pricing_input(form)

    assert pricing_input.billable_hours == 120
    assert pricing_input.safety_margin_rate == Decimal("20")
    assert pricing_input.income_tax_rate == Decimal("12")
