from decimal import Decimal

# ==========================================================
# Default form values
# ==========================================================

DEFAULT_BILLABLE_HOURS = 100
DEFAULT_SAFETY_MARGIN_RATE = Decimal("10")
DEFAULT_INCOME_TAX_RATE = Decimal("0")

# ==========================================================
# Price comparison categories
# ==========================================================

CATEGORY_VERY_BELOW = "Muy por debajo del precio sostenible"
CATEGORY_SLIGHTLY_BELOW = "Ligeramente por debajo"
CATEGORY_VERY_CLOSE = "Muy cercano al precio sostenible"
CATEGORY_ABOVE = "Por encima del precio sostenible"

# ==========================================================
# Price comparison justifications
# ==========================================================

JUSTIFICATION_VERY_BELOW = "Ese precio probablemente no cubra tus objetivos económicos."
JUSTIFICATION_SLIGHTLY_BELOW = "El precio está algo por debajo del recomendado."
JUSTIFICATION_VERY_CLOSE = "El precio es coherente con el cálculo realizado."
JUSTIFICATION_ABOVE = "El precio está por encima del recomendado."

# ==========================================================
# Price comparison colors
# ==========================================================

COLOR_RED = "red"
COLOR_YELLOW = "yellow"
COLOR_GREEN = "green"
COLOR_BLUE = "blue"
