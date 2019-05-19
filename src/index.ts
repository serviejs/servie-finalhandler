import { Request, Response } from "servie/dist/node";

export function finalhandler(req: Request) {
  return async function(): Promise<Response> {
    const isHead = req.method.toLowerCase() === "head";
    const body = isHead ? undefined : `Cannot ${req.method} ${req.url}`;

    const headers = {
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'self'"
    };

    return new Response(body, { status: 404, headers });
  };
}
