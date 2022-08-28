const request = require("supertest");
const app = require("../../app");

describe("Test GET /api/v1/findata/demo", () => {
  test("It is a financial Data Demo request, should respond with 200 success", async () => {
    const res = await request(app)
      .get("/api/v1/findata/demo")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test GET /api/v1/findata", () =>
  test("It is a invalid request (no symbol entered), should respond with 400 Bad Request", async () => {
    const res = await request(app)
      .get("/api/v1/findata")
      .expect("Content-Type", /json/)
      .expect(400);
  }));

describe("Test GET /api/v1/findata/aapl", () =>
  test("It is valid request (symbol entered and found in database), should respond with 200 Success", async () => {
    const res = await request(app)
      .get("/api/v1/findata/aapl")
      .expect("Content-Type", /json/)
      .expect(200);
  }));

describe("Test GET /api/v1/findata/aapl?days=10", () =>
  test("It is valid request (symbol entered and found in database, optional query entered), should respond with 200 Success", async () => {
    const res = await request(app)
      .get("/api/v1/findata/aapl?days=10")
      .expect("Content-Type", /json/)
      .expect(200);
  }));

describe("Test GET /api/v1/findata/abcde", () =>
  test("It is invalid request (symbol entered but not existed in database), should respond with 200 Success", async () => {
    const res = await request(app)
      .get("/api/v1/findata/aapl")
      .expect("Content-Type", /json/)
      .expect(200);
  }));
