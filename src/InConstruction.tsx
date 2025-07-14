// src/InConstruction.tsx
import React, { ReactNode } from "react";
import "./InConstruction.css";

// Define the component's props interface
export interface InConstructionProps {
  children: ReactNode;
  message?: string; // Optional custom message for the "Under Construction" notice
  className?: string;
  language?: "en" | "fr";
}

// Functional component with TypeScript support
const InConstruction: React.FC<InConstructionProps> = ({
  children,
  message,
  className,
  language = "en",
}) => {
  return (
    <div className={`in-construction-zone ${className}`}>
      <div className="overlay">
        <p>
          🚧
          {message
            ? message
            : language === "en"
            ? "This section is under construction "
            : "Cette section est en construction "}
          🚧
        </p>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default InConstruction;
