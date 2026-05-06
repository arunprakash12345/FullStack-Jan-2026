import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("Button Is Clicked");
  };
  return <button onClick={handleClick}>Click me</button>;
};

export default Button;
