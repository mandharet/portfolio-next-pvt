import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tejas Mandhare - Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: 20,
          }}
        >
          Tejas Mandhare
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#cccccc",
            marginBottom: 30,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#999999",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          Building scalable, fault-tolerant distributed systems
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
