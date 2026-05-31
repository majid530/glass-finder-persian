import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glass Finder - Screen Protector Compatibility" },
      { name: "description", content: "گلس های مشابه را پیدا کنید" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/glassfinder.html"
      title="Glass Finder"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
