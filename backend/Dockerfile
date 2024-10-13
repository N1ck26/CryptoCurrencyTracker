FROM python:3.12-slim

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000
CMD [ "uvicorn", "src.main:app", "--host", "172.18.0.2", "--port", "8000" ]
# ENTRYPOINT [ "uvicorn src.main:app --reload --port 8000" ]
