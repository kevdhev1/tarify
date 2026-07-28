from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.routes.pricing import router

app = FastAPI(
    title="Tarify", description="Price calculator for freelancers", version="1.0.0"
)

app.include_router(router)
app.mount("/static", StaticFiles(directory="app/static"), name="static")
