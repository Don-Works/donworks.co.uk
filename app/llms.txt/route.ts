export function GET() {
  return new Response(
    [
      "# Don Works",
      "",
      "Don Works is the open-source arm of Revitt.",
      "",
      "- Site: https://donworks.co.uk",
      "- Parent: https://revitt.co",
      "- Source: https://github.com/Don-Works",
      "- MCPlexer: https://mcplexer.com",
      "- Brw: https://brw.donworks.co.uk",
      "",
      "What you'll find here: tools we built at Revitt and decided to open up. It starts with MCPlexer (an MCP gateway that routes and secures AI tool calls) and Brw (a real browser for AI agents), and grows as more of our internal tools prove useful.",
      "",
      "Everything is released under AGPL-3.0 — free to use, change, and build on, with improvements shared back. If that doesn't fit your business, ask Revitt about a commercial licence.",
    ].join("\n"),
    {
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    },
  );
}
