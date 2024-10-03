from fastapi import APIRouter
from src.init_cmc import cmc_client

# router = APIRouter(prefix='/cryptocurrencies')
router = APIRouter()

@router.get('')
async def get_all_cryptocurrencies():
    return await cmc_client.get_listings()


@router.get('/{currency_id}')
async def get_cryptocurrency(currency_id: int):
    return await cmc_client.get_quote(currency_id)