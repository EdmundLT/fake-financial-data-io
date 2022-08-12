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
const demoCode = `fetch("https://fake-financial-data.com/api/findata/demo")
.then(res => res.json())
.then(json => console.log(json))`;

const changeLogData = [
    {
        version: "0.1.0 (beta)",
        date: "10 Aug, 2022",
        content: "/companies and /findata updated"
    },

];

export { demoCode, DemoResult, changeLogData };
