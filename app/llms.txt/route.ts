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
      "- Brw: https://brw.donworks.co.uk (site) / https://github.com/Don-Works/brw",
      "- Resident: https://github.com/Don-Works/resident",
      "- Handler: https://github.com/Don-Works/handler",
      "- Reminders MCP: https://github.com/Don-Works/reminders-mcp",
      "",
      "What you'll find here: tools we built at Revitt and decided to open up. Brw (a real browser for AI agents), Resident (a macOS menu bar gauge for the memory your local models live in), Handler (a macOS menu bar watchdog for the resource ceilings that panic your Mac), and Reminders MCP (the macOS Reminders store as MCP tools an agent can drive). It grows as more of our internal tools prove useful.",
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
