import React from "react";

// Define a type for JSON-LD data
interface JsonLdProps {
  data: Record<string, any>; // You can make this more specific based on your JSON-LD structure
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
