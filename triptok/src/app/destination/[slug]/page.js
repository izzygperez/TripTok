"use client";

import { useParams } from "next/navigation";

export default function DestinationPage() {
  const params = useParams();
  const { slug } = params;

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>{slug ? slug.replace(/-/g, ' ') : ''}</h1>
      <p>This is a BLANK page for {slug ? slug.replace(/-/g, ' ') : ''}.</p>
    </div>
  );
}
