// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
        <div
        style={{
          background: "#0f172a",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        Tejas Mandhare — Remote Backend & React Engineer
      </div>
      
    ),
    size
  );
}
