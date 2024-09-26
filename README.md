# inconstruction

A React/Next.js component that adds an "Under Construction" overlay with a customizable message to any wrapped children.

## Features

- 🚧 Wraps child components with an "under construction" overlay
- 🛠️ Customizable message for the overlay
- 🌐 Works in both React and Next.js environments

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
    <InConstruction message="We're working on this section! Please check back soon.">
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

- children : ReactNode — The component(s) you want to wrap with the "under construction" overlay.
- message : string (optional) — The custom message that will be displayed in the overlay. If not provided, the default message will be "This section is under construction 🚧"
