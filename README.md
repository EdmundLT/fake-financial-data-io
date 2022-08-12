# Welcome to Fake Financial Data - A free API for testing and data analysis practice.

- This is a simple free API **randomly generating fake financial data for testing and practice.**

- Real **5,715** companies from **NASDAQ** market. You can download it here: 

base url → `api/v1`
[![Build][build-badge]][build]
## Stacks I used

- React.JS
- Express.JS
- Node.JS
- SQlite
- Tailwind CSS

### Demo

- **GET** `api/v1/companies/all`:

```jsx title="src/pages/my-react-page.js"
import requests

url = "http://localhost:8000/api/v1/companies/all?limit="

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```
👇results:
```
{
    "meta": {
        "status": 200,
        "message": "success",
        "quoteLimit": 20
    },
    "companies": [
        {
            "symbol": "AACG",
            "name": "Ata Creativity Global ADR"
        },
        {
            "symbol": "AADI",
            "name": "Aadi Biosciences Inc"
        },
        {
            "symbol": "AADR",
            "name": "Advisorshares Dorsey Wright ETF"
        },
        {
            "symbol": "AAL",
            "name": "American Airlines Gp"
        },
        {
            "symbol": "AACI",
            "name": "Armada Acquisition Corp I"
        },
        {
            "symbol": "AAOI",
            "name": "Applied Optoelect"
        },
        {
            "symbol": "AAON",
            "name": "Aaon Inc"
        },
        {
            "symbol": "AAPL",
            "name": "Apple Inc"
        },
        {
            "symbol": "AACIU",
            "name": "Armada Acquisition Corp I"
        },
        {
            "symbol": "AAWW",
            "name": "Atlas Air Ww"
        },
        {
            "symbol": "AAXJ",
            "name": "All Country Asia Ex Japan Ishares MSCI ETF"
        },
        {
            "symbol": "ABCB",
            "name": "Ameris Bancorp"
        },
        {
            "symbol": "ABCL",
            "name": "Abcellera Biologics Inc"
        },
        {
            "symbol": "ABCM",
            "name": "Abcam Plc ADR"
        },
        {
            "symbol": "ABEO",
            "name": "Abeona Therapeutics"
        },
        {
            "symbol": "ABGI",
            "name": "Abg Acquisition Corp I Cl A"
        },
        {
            "symbol": "ABIO",
            "name": "Arca Biopharma Inc"
        },
        {
            "symbol": "ABMD",
            "name": "Abiomed Inc"
        },
        {
            "symbol": "ABNB",
            "name": "Airbnb Inc Cl A"
        },
        {
            "symbol": "ABOS",
            "name": "Acumen Pharmaceuticals Inc"
        }
    ]
}
```

- **GET** `api/v1/findata/demo`
```jsx title="src/pages/my-react-page.js"
import requests

url = "http://localhost:8000/api/v1/findata/demo"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

👇results:
```
{
    "meta": {
        "status": 200,
        "message": "success",
        "method": "Demo Get financial Data",
        "symbol": "AAPL",
        "name": "Apple Inc"
    },
    "data": [
        {
            "date": "2022-08-09T15:42:17-04:00",
            "open": 102.36293312588928,
            "close": 105.05248875457298,
            "high": 107.8615936907871,
            "low": 100.93504302074298
        },
        {
            "date": "2022-08-08T15:42:17-04:00",
            "open": 113.08687960420922,
            "close": 111.48703595440848,
            "high": 114.02792383122022,
            "low": 106.42568459401132
        },
        {
            "date": "2022-08-07T15:42:17-04:00",
            "open": 110.94548278336737,
            "close": 111.72297791336356,
            "high": 111.84681574816344,
            "low": 110.85805614958966
        },
        {
            "date": "2022-08-06T15:42:17-04:00",
            "open": 111.84849214738463,
            "close": 113.2497843949569,
            "high": 113.27872318949912,
            "low": 107.17340367485905
        },
        {
            "date": "2022-08-05T15:42:17-04:00",
            "open": 105.8053950747854,
            "close": 112.16276947401646,
            "high": 112.56011987989935,
            "low": 105.39039490926184
        }
    ]
}

```
More Details: [Postman](https://documenter.getpostman.com/view/21423086/VUjQkjEw)
## Route

- Companies Data → `api/v1/companies`
- Financial Data → `api/v1/findata`

## Thanks





