const request = require("supertest");
const app = require("./app");

describe("App", () => {
  it("should return 200 OK on / route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });

  it("should return 400 on /400 route", async () => {
    const res = await request(app).get("/400");
    expect(res.statusCode).toEqual(400);
  });

  it("should return 500 on /500 route", async () => {
    const res = await request(app).get("/500");
    expect(res.statusCode).toEqual(500);
  });

  it("should throw error on /error route", async () => {
    await expect(request(app).get("/error")).rejects.toThrow();
  });
});
