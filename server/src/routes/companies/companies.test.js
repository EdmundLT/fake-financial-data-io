const request = require("supertest");
const app = require("../../app");

describe("Test GET /api/companies/aapl", () => {
  test("It is a companies Data Demo request, should respond with 200 success", async () => {
    const response = await request(app)
      .get("/api/companies/aapl")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test GET /api/companies/", () => {
  test("It is a invalid request, should respond with 400 Bad Request", async () => {
    const response = await request(app)
      .get("/api/companies/")
      .expect("Content-Type", /json/)
      .expect(400);
  });
});

describe("Test POST /api/companies/", () => {
  test("It is a invalid request, should respond with 405 Method Not Allowed", async () => {
    const response = await request(app)
      .post("/api/companies/")
      .expect("Content-Type", /json/)
      .expect(405);
  });
});
