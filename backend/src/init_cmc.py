from src.http_client import CMCHTTPClient
from src.config import settings

cmc_client = CMCHTTPClient(
    base_url='https://pro-api.coinmarketcap.com', 
    API_KEY= settings.CMC_API_KEY
)