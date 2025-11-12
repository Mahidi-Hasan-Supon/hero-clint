import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-lg mx-auto py-60">
      <SyncLoader></SyncLoader>
    </div>
  );
};

export default Loading;
