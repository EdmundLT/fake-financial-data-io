const request = require("supertest");
const app = require("../../app");

describe("API - GET", () => {
  describe("Test GET /api/v1/companies/aapl", () => {
    test("It is a companies Data Demo request, should respond with 200 success", async () => {
      await request(app)
        .get("/api/v1/companies/aapl")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("Test GET /api/v1/companies/", () => {
    test("It is a invalid request, should respond with 400 Bad Request", async () => {
      await request(app)
        .get("/api/v1/companies/")
        .expect("Content-Type", /json/)
        .expect(400);
    });
  });
});

describe("API - POST", () => {
  describe("Test POST /api/v1/companies/", () => {
    test("It is a invalid request, should respond with 405 Method Not Allowed", async () => {
      await request(app)
        .post("/api/v1/companies/")
        .expect("Content-Type", /json/)
        .expect(405);
    });
  });

  describe("Test POST /api/v1/companies/add", () => {
    test("It is a valid request, should respond with 201 Created", async () => {
      const company = { symbol: "TSMC", name: "Taiwan Semiconductor" };
      await request(app)
        .post("/api/v1/companies/add")
        .send(company)
        .expect("Content-Type", /json/)
        .expect(201);
    });
  });
});
describe("API - DELETE", () => {
  describe("Test Delete /api/v1/companies/delete/:symbol", () => {
    test("It is a valid request, should respond with 202 Created", async () => {
      const symbol = "aapl";
      await request(app)
        .delete(`/api/v1/companies/delete/${symbol}`)
        .expect("Content-Type", /json/)
        .expect(202);
    });
  });
});
