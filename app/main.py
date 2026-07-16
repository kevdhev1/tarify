from fastapi import FastAPI

from app.routes.pricing import router

app = FastAPI(
    title="Tarify", description="Price calculator for freelancers", version="1.0.0"
)

app.include_router(router)
