from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import stripe
import os

# Load environment variables
from dotenv import load_dotenv
load_dotenv()

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

stripe_router = APIRouter()

class CreateCheckoutSessionRequest(BaseModel):
    price_id: str

@stripe_router.post("/create-checkout-session")
async def create_checkout_session(request: CreateCheckoutSessionRequest):
    try:
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price': 'price_1PJIItATreXSbkC9x7Jy7tEV',
                'quantity': 1,
            }],
            mode='payment',
            success_url='http://localhost:8000/static/success.html',
            cancel_url='http://localhost:8000/static/cancel.html',
        )
        return {"id": checkout_session.id}
    except Exception as e:
        print(f"Error creating checkout session: {e}")
        raise HTTPException(status_code=400, detail=str(e))
