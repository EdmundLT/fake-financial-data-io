import React from "react";
import { Prism } from "@mantine/prism";
import {demoCode, demoResult} from '../data/data'

const Try = () => {
  return (
    <div className="container mx-auto p-2 text-center space-y-4">
      <p className="text-2xl font-semibold">How to Use?</p>
      <p>Copy the code:</p>
      <div className="text-left">
        <Prism withLineNumbers language="jsx">
          {demoCode}
        </Prism>
      </div>
      <div className="text-left py-4">
        <Prism withLineNumbers language="json">
          {demoResult}
        </Prism>
      </div>
      <p>Congrat! This is your first fetch!</p>
    </div>
  );
};

export default Try;
