import React from "react";

const Introduction = () => {
  return (
    <div className="container mx-auto px-6 text-left space-y-2">
      <p className="text-2xl font-semibold pt-8">About the API</p>
      <div className="flex justify-center py-4  pb-8 ">
        <p className="text-xl">
          The API included <b>5,715</b> companies from NASDAQ market. The
          completed companies list can be downloaded&nbsp;
          <a
            href={require("../data/NASDAQ.csv")}
            className="underline text-blue-500"
          >
            here
          </a>
          . The financial data are generated <b>randomly</b>. Read{" "}
          {/* <a href="/guide/" className="underline text-blue-500">
            guide
          </a> and  */}
          <a href="/docs/" className="underline text-blue-500">
            documentation
          </a>{" "}
          to get details.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
