import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0f0805 0%, #2d1a0f 30%, #5d3a1a 60%, #8B4513 100%)",
          borderRadius: "50%",
          boxShadow: "0 6px 20px rgba(139,69,19,0.6), inset 0 2px 4px rgba(255,255,255,0.1)",
          border: "3px solid #B8860B",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute",
          width: "85%",
          height: "85%",
          borderRadius: "50%",
          border: "1px solid rgba(184,134,11,0.4)",
        }} />
        <div style={{
          position: "absolute",
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          border: "1px solid rgba(184,134,11,0.2)",
        }} />
        <span style={{ fontSize: 18, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))" }}>🍕</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
