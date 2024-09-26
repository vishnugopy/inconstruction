// src/InConstruction.tsx
import React, { ReactNode } from "react";
import "./InConstruction.css";

// Define the component's props interface
interface InConstructionProps {
  children: ReactNode;
  message?: string; // Optional custom message for the "Under Construction" notice
}

// Functional component with TypeScript support
const InConstruction: React.FC<InConstructionProps> = ({
  children,
  message,
}) => {
  return (
    <div className="in-construction-zone">
      <div className="overlay">
        <p>🚧{message || "This section is under construction "}🚧</p>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default InConstruction;
