import request from "supertest";

import server from "../server";

describe("[HEALTHY SERVER]", () => {
  it("Should respond with 200 Ok!", async () => {
    const res = await request(server).get("/api/health").send({});
    expect(res.statusCode).toEqual(200);
  });
});
