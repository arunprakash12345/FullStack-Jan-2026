import React from "react";

const MyComponent = (properties) => {
  const { message } = properties;
  return (
    <h1>
      My Component Loaded : {message} {1 + 2}
    </h1>
  );
};

export default MyComponent;
