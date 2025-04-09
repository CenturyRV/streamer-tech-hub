
import React from "react";

interface SetupHeadingProps {
  title: string;
}

const SetupHeading: React.FC<SetupHeadingProps> = ({ title }) => {
  return (
    <div className="flex items-center mb-8">
      <div className="h-1 w-16 bg-twitch"></div>
      <h2 className="text-2xl font-bold mx-4">{title}</h2>
      <div className="h-1 flex-grow bg-twitch/20"></div>
    </div>
  );
};

export default SetupHeading;
