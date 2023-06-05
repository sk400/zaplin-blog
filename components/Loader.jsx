import React from "react";
import { Spinner } from "components/chakraui";

const Loader = () => {
  return (
    <div className="h-[95vh] flex justify-center items-center w-full">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Loader;
