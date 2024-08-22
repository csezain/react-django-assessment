import React from "react";

const ErrorBlock = () => {
  return (
    <div className="bg-foreground/5 mt-10 p-10 text-center rounded-md">
      <h2 className="text-4xl font-bold text-destructive">Oops!</h2>
      <p className="font-medium text-muted-foreground mt-5">
        Something wen't wrong! Retry later.
      </p>
    </div>
  );
};

export default ErrorBlock;
