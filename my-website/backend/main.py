from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173"],
    allow_credentials = True,
    allow_headers = ["*"],
    allow_methods = ["*"]

)

@app.post("/add")
def add_numbers(data : dict):
    a = data.get("a")
    b = data.get("b")
    result = a + b
    return{"sum" : result}