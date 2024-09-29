from aiohttp import ClientSession
from async_lru import alru_cache

class HTTPClient:
    def __init__(self, base_url: str, API_KEY: str):
        self._session = ClientSession(
            base_url=base_url, 
            headers={
                'X-CMC_PRO_API_KEY': API_KEY
            }
        )
                

class CMCHTTPClient(HTTPClient):
    @alru_cache
    async def get_listings(self):
        async with self._session.get('/v1/cryptocurrency/listings/latest') as _responce_from_listing:
            responce_from_listing = await _responce_from_listing.json()
            return responce_from_listing['data']
        
    @alru_cache
    async def get_quote(self, currency_id: int):
        async with self._session.get('/v2/cryptocurrency/quotes/latest',
                                     params={'id': currency_id}) as _responce_from_quote:
            responce_from_quote = await _responce_from_quote.json()
            return responce_from_quote['data'][str(currency_id)]
            