const demoResult = `{
    "meta": {
        "status": 200,
        "message": "success",
        "method": "Demo Get financial Data",
        "symbol": "AAPL",
        "name": "Apple Inc"
    },
    "data": [
        {
            "date": "2022-08-09T10:33:56-04:00",
            "open": 100.40295026330418,
            "close": 100.47544734153496,
            "high": 100.57412761065179,
            "low": 100.22358117695667
        },
        {
            "date": "2022-08-08T10:33:56-04:00",
            "open": 107.00100419471146,
            "close": 106.98621682117634,
            "high": 108.23756875843375,
            "low": 102.2636012166779
        },
        {
            "date": "2022-08-07T10:33:56-04:00",
            "open": 106.812153600528,
            "close": 105.73613162227846,
            "high": 107.16014934652269,
            "low": 104.88317160655652
        },
        {
            "date": "2022-08-06T10:33:56-04:00",
            "open": 113.34550984660146,
            "close": 112.74621775019247,
            "high": 114.5940816019785,
            "low": 112.40609193184689
        },
        {
            "date": "2022-08-05T10:33:56-04:00",
            "open": 110.04625457787319,
            "close": 110.6572311869765,
            "high": 113.0439468957416,
            "low": 107.19207545915086
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

export { demoCode, demoResult, changeLogData };
