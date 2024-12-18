"use client";

// import { CSSProperties } from "react";
import dynamic from "next/dynamic";

const PacmanLoader = dynamic(() => import("react-spinners").then((mod) => mod.PacmanLoader), {
  ssr: false,
});

export default function ClientLoader() {
  return <PacmanLoader color="#36d7b7" loading={true} size={20} speedMultiplier={1} />;
}
