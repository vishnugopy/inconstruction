# inconstruction

A React/Next.js component that adds an "Under Construction" overlay with a customizable message to any wrapped children.

## Features

- 🚧 Wraps child components with an "under construction" overlay
- 🛠️ Customizable message for the overlay
- 🌐 Works in both React and Next.js environments
- 🌍 Supports multiple languages (English and French)
- 💅 Customizable styling through className props
- 🎨 Custom icon support
- ✨ Animated overlay with pulse effect
- 🌫️ Blur effect on wrapped content

## Installation

To install the package, run:

```bash
npm i inconstruction
```

## Usage

To use the component, import it and wrap your child components with it:

```jsx
// Import the component
import React from "react";
import InConstruction from "inconstruction";

const MyPage: React.FC = () => {
  return (
    <InConstruction
      message="We're working on this section! Please check back soon."
      language="en"
      className="custom-overlay"
      childrenClassName="custom-content"
      icon={<span>🏗️</span>}
    >
      <div>
        <h1>New Feature Coming Soon</h1>
        <p>
          We're working on a new feature for this page. Please check back soon
          to see the updates!
        </p>
      </div>
    </InConstruction>
  );
};

export default MyPage;
```

## Props

The `InConstruction` component accepts the following props:

- `children`: ReactNode — The component(s) you want to wrap with the "under construction" overlay.
- `message`: string (optional) — The custom message that will be displayed in the overlay. If not provided, the default message will be "This section is under construction 🚧" in English or "Cette section est en construction 🚧" in French.
- `language`: "en" | "fr" (optional) — The language for the default message. Defaults to "en".
- `className`: string (optional) — Custom CSS class name for the overlay container.
- `childrenClassName`: string (optional) — Custom CSS class name for the wrapped content container.
- `icon`: ReactNode (optional) — Custom icon to display in the overlay instead of the default 🚧 emoji.

## Styling

The component comes with default styling that includes:

- Semi-transparent orange overlay
- Pulsing animation effect
- Blur effect on the wrapped content
- Centered message with icons

You can customize the styling by providing your own CSS classes through the `className` and `childrenClassName` props.
