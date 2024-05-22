from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from stripe_integration import stripe_router

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(stripe_router)

@app.get("/")
async def root():
    return {"message": "Hello, World!"}
