import { serve } from "https://deno.land/std@0.83.0/http/server.ts";

const s = serve({ port: 8000 });
console.log("Starting on Port 8000");
for await (const req of s) {
  req.respond({
    body: "Hello Deno!",
  });
}