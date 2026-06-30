"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="he" dir="rtl">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.25rem",
          background: "#ECEEE9",
          color: "#28302C",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <h2 style={{ fontSize: "1.75rem" }}>משהו השתבש</h2>
        <p style={{ opacity: 0.7 }}>נסו לרענן את הדף.</p>
        <button
          onClick={reset}
          style={{
            background: "#6E8A7F",
            color: "#ECEEE9",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.75rem 1.5rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          נסו שוב
        </button>
      </body>
    </html>
  );
}
