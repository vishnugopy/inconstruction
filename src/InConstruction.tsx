// src/InConstruction.tsx
import React, { ReactNode } from "react";
import "./InConstruction.css";

// Define the component's props interface
export interface InConstructionProps {
  children: ReactNode;
  message?: string; // Optional custom message for the "Under Construction" notice
  className?: string;
}

// Functional component with TypeScript support
const InConstruction: React.FC<InConstructionProps> = ({
  children,
  message,
  className,
}) => {
  return (
    <div className={`in-construction-zone ${className}`}>
      <div className="overlay">
        <p>🚧{message || "This section is under construction "}🚧</p>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default InConstruction;
