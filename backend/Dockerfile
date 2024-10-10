FROM python:3.12-slim

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

CMD [ "uvicorn", "src.main:app", "--reload",  "--host",  "172.19.0.2",  "--port",  "8000" ]
