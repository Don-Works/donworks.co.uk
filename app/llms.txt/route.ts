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
      "",
      "Focus areas: practical tools, reusable Codex/MCP skills, website operations notes, and field-tested patterns from real delivery work.",
    ].join("\n"),
    {
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    },
  );
}
