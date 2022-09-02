const request = require("supertest");

const { createRandomobject } = require("./findata.model");

describe("Testing Function CreateRandomOjbect", () => {
  test("it should create a random object, the diff between min and max is 40", async () => {
    const result = await createRandomobject;
    console.log(result);
  });
});
