import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-60">
      <SyncLoader></SyncLoader>
    </div>
  );
};

export default Loading;
