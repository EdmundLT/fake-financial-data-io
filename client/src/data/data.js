const URL = "http://localhost:8000"
const DemoResult = `{
    "meta": {
        "status": 200,
        "message": "success",
        "method": "Demo Get financial Data",
        "symbol": "AAPL",
        "name": "Apple Inc"
    },
    "data": [
        {
            "date": "2022-08-11T18:34:14-04:00",
            "open": 101.62977555047408,
            "close": 101.57828611009153,
            "high": 101.65964870485796,
            "low": 101.47990695511751
        },
        {
            "date": "2022-08-10T18:34:14-04:00",
            "open": 109.19058147979018,
            "close": 107.42096150103168,
            "high": 110.1473362648016,
            "low": 105.2356269435378
        },
        {
            "date": "2022-08-09T18:34:14-04:00",
            "open": 108.75901118499688,
            "close": 109.29154861555885,
            "high": 109.57110259303072,
            "low": 108.19938860103011
        },
        {
            "date": "2022-08-08T18:34:14-04:00",
            "open": 112.56707723320346,
            "close": 111.94608003036676,
            "high": 113.63427672077543,
            "low": 105.53388332446067
        },
        {
            "date": "2022-08-07T18:34:14-04:00",
            "open": 112.54300793642847,
            "close": 112.04174532945297,
            "high": 114.27839019212605,
            "low": 111.61890149439165
        }
    ]
  }`;
const demoCode = `fetch("${URL}/api/findata/demo")
.then(res => res.json())
.then(json => console.log(json))`;

const changeLogData = [
  {
    version: "0.1.0 (beta)",
    date: "10 Aug, 2022",
    content: "/companies and /findata updated",
  },
];

const DocsData = [
  {
    method: "GET",
    methodDescription: "All Company Info (limit (optional), default=20)",
    url: `${URL}/api/v1/companies/all?limit=`,
    shortUrl: "/api/v1/companies/all",
    result: `{
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
        }`,
  },
  {
    method: "GET",
    methodDescription: "Company Info by Symbol",
    url: `${URL}/api/v1/companies/aapl`,
    shortUrl: "/api/v1/companies/aapl",
    result: `{
            "meta": {
                "status": 200,
                "message": "success",
                "method": "GET company name and today's price by symbol",
                "company": {
                    "symbol": "AAPL",
                    "name": "Apple Inc"
                }
            },
            "data": {
                "date": "2022-08-12T19:40:11-04:00",
                "open": 163.21,
                "close": 165.35,
                "high": 165.85,
                "low": 163
            }
        }`,
  },
  {
    method: "GET",
    methodDescription: "Demo Financial Data",
    url: `${URL}/api/v1/findata/demo`,
    shortUrl: "/api/v1/findata/demo",
    result: `{
            "meta": {
                "status": 200,
                "message": "success",
                "method": "Demo Get financial Data",
                "symbol": "AAPL",
                "name": "Apple Inc"
            },
            "data": [
                {
                    "date": "2022-08-11T19:40:00-04:00",
                    "open": 101.42484437207098,
                    "close": 101.24876990167279,
                    "high": 102.43831152478606,
                    "low": 100.79366304267616
                },
                {
                    "date": "2022-08-10T19:40:00-04:00",
                    "open": 107.17550927372373,
                    "close": 107.3717205635649,
                    "high": 113.34615145419588,
                    "low": 105.67108493761567
                },
                {
                    "date": "2022-08-09T19:40:00-04:00",
                    "open": 106.4674526428727,
                    "close": 107.23371911968113,
                    "high": 108.98071388893518,
                    "low": 106.30966584196536
                },
                {
                    "date": "2022-08-08T19:40:00-04:00",
                    "open": 104.83098345122784,
                    "close": 105.38677038057887,
                    "high": 105.67196195132824,
                    "low": 104.41619381747823
                },
                {
                    "date": "2022-08-07T19:40:00-04:00",
                    "open": 108.0179471806248,
                    "close": 108.67996552105429,
                    "high": 110.34558603988424,
                    "low": 105.93098483557314
                }
            ]
        }`,
  },
  {
    method: "GET",
    methodDescription: "Financial data by symbol (days (optional), default=10)",
    url: `${URL}/api/v1/findata/aapl?days=5`,
    shortUrl: "/api/v1/findata/aapl",
    result: `{
            "meta": {
                "status": 200,
                "message": "success",
                "method": "GET Finanial Data by Symbol",
                "days": 10,
                "company": {
                    "symbol": "AAPL",
                    "name": "Apple Inc"
                }
            },
            "data": [
                {
                    "date": "2022-08-11T19:39:31-04:00",
                    "open": 138.14347006630226,
                    "close": 137.30268427885736,
                    "high": 138.3225748132819,
                    "low": 132.96225555570754
                },
                {
                    "date": "2022-08-10T19:39:31-04:00",
                    "open": 114.07981850137277,
                    "close": 114.14075565839028,
                    "high": 114.63103274645664,
                    "low": 114.01653378985576
                },
                {
                    "date": "2022-08-09T19:39:31-04:00",
                    "open": 124.05881452308924,
                    "close": 124.4714385243516,
                    "high": 125.16625825317305,
                    "low": 117.62714075485763
                },
                {
                    "date": "2022-08-08T19:39:31-04:00",
                    "open": 133.45373243695082,
                    "close": 133.7562765266824,
                    "high": 134.16063730224704,
                    "low": 132.58025114528488
                },
                {
                    "date": "2022-08-07T19:39:31-04:00",
                    "open": 134.31865527762744,
                    "close": 134.13271692980678,
                    "high": 135.10332531357747,
                    "low": 134.05401285395396
                },
                {
                    "date": "2022-08-06T19:39:31-04:00",
                    "open": 138.9928802666889,
                    "close": 137.6072149371239,
                    "high": 139.8483139488288,
                    "low": 136.6992435917652
                },
                {
                    "date": "2022-08-05T19:39:31-04:00",
                    "open": 132.16403593187715,
                    "close": 131.63932412155776,
                    "high": 133.96392514760421,
                    "low": 126.64480168792312
                },
                {
                    "date": "2022-08-04T19:39:31-04:00",
                    "open": 111.47488313510475,
                    "close": 111.24828542205161,
                    "high": 117.53119765792552,
                    "low": 110.15847769983363
                },
                {
                    "date": "2022-08-03T19:39:31-04:00",
                    "open": 120.07655033896695,
                    "close": 117.47169239730482,
                    "high": 120.08702045599321,
                    "low": 114.15212091598816
                },
                {
                    "date": "2022-08-02T19:39:31-04:00",
                    "open": 112.54011326744221,
                    "close": 113.74296560268863,
                    "high": 113.94527251203941,
                    "low": 110.81531180749074
                }
            ]
        }`,
  },
];


export { URL, demoCode, DemoResult, changeLogData, DocsData };
