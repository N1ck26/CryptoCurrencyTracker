from pydantic_settings import BaseSettings, SettingsConfigDict


class Settins(BaseSettings):
    CMC_API_KEY: str
    
    model_config = SettingsConfigDict(env_file='.env')
    
    
    
settings = Settins()