from fastapi import FastAPI
from src.router import router as cmc_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(cmc_router)

origins = [
 "http://212.193.27.122"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
