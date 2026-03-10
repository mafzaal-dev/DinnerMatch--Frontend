import React from "react";

const FeatureList = ({ features }) => {
  return (
    <div className="z-0 flex flex-col gap-4 mt-2 w-full text-sm leading-5 text-neutral-200 grow">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-3 items-center w-full">
          <img
            src={feature.icon}
            className="object-contain shrink-0 w-3 aspect-square"
            alt=""
          />
          <div className="flex-1 shrink basis-0 text-neutral-200">
            {feature.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
