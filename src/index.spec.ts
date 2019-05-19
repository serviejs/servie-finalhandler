import { Request } from "servie/dist/node";
import { finalhandler } from "./index";

describe("servie-finalhandler", () => {
  it("should return a 404 response", () => {
    const req = new Request("/");

    return finalhandler(req)().then(res => expect(res).toMatchSnapshot());
  });

  it("should not return a body when using HEAD", () => {
    const req = new Request("/", { method: "head" });

    return finalhandler(req)().then(res => expect(res).toMatchSnapshot());
  });
});
