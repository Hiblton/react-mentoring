import React from "react";

export default function ReactCreateElement() {
  return React.createElement(
    "h2",
    { className: "title" },
    "Hello World from React.createElement"
  );
}
