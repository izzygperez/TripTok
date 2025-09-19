"use client";

import { useEffect } from "react";

export default function ClientHome() {
  useEffect(() => {
    console.log("Window width:", window.innerWidth);
  }, []);

  return <div>Client-only logic runs here</div>;
}