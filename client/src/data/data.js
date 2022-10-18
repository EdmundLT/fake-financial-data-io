const URL = "http://ffd-api.click";
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
  {
    version: "0.2.0 (beta)",
    date: "13 Aug, 2022",
    content: "Post /companies/add created",
  },
  {
    version: "0.3.0 (beta)",
    date: "18 Aug, 2022",
    content: "Delete companies/delete/:symbol created",
  },
  {
    version: "0.3.1 (beta)",
    date: "18 Aug, 2022",
    content: "Get /companies/all change default quoteLimit to 5",
  },
  {
    version: "1.0.0",
    date: "18 Oct, 2022",
    content: "UI Updated",
  },
];

const DocsData = [
  {
    method: "GET",
    methodDescription: "All Company Info (limit (optional), default=5)",
    url: `${URL}/api/v1/companies/all?limit=`,
    shortUrl: "/api/v1/companies/all",
    result: `{
        "meta": {
            "status": 200,
            "message": "success",
            "quoteLimit": 5
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
    method: "POST",
    methodDescription: "Add Company to Database",
    url: `${URL}/api/v1/companies/add`,
    shortUrl: "/api/v1/companies/add",
    result: `{
          "meta": {
              "status": 201,
              "message": "Created",
              "company": {
                  "symbol": "TSMC",
                  "name": "Taiwan Semiconductor"
              }
          }
      }`,
    note: "the data will not be really updated to database, but it will response wih 201 Created.",
  },
  {
    method: "DELETE",
    methodDescription: "DELETE Company from Database",
    url: `${URL}/api/v1/companies/delete/tsla`,
    shortUrl: "/api/v1/companies/delete/:symbol",
    result: `{
        "meta": {
            "status": 202,
            "message": "Accpeted"
        },
        "company": {
            "symbol": "TSLA",
            "name": "Tesla Inc"
        }
    }`,
    note: "the data will not be really deleted in database, but it will response wih 202 Accepted.",
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
            "days": "5",
            "company": {
                "symbol": "AAPL",
                "name": "Apple Inc"
            }
        },
        "data": [
            {
                "date": "2022-08-12T18:10:57+00:00",
                "open": 120.10489171284372,
                "close": 119.18754923927378,
                "high": 120.66693145509038,
                "low": 118.97503380651433
            },
            {
                "date": "2022-08-11T18:10:57+00:00",
                "open": 104.73012100094932,
                "close": 105.17922980855695,
                "high": 105.50654697487828,
                "low": 104.19941246737953
            },
            {
                "date": "2022-08-10T18:10:57+00:00",
                "open": 115.8363965226732,
                "close": 114.13638597266794,
                "high": 117.36606373256386,
                "low": 113.99230585151629
            },
            {
                "date": "2022-08-09T18:10:57+00:00",
                "open": 114.99953319042612,
                "close": 115.36651853284293,
                "high": 115.4788941237416,
                "low": 114.83612511513014
            },
            {
                "date": "2022-08-08T18:10:57+00:00",
                "open": 112.75447961875483,
                "close": 113.29090926794115,
                "high": 115.74839619690088,
                "low": 108.17478059201511
            }
        ]
    }`,
  },
];

export { URL, demoCode, DemoResult, changeLogData, DocsData };
