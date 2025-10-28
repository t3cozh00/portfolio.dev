import React from "react";
import { IconType } from "react-icons";

type Prop = {
  role: string;
  Icon: IconType;
  date: string;
};
const ResumeCard = ({ Icon, role, date }: Prop) => {
  return (
    <div className="mb-6">
      <div className="flex items-center bg-blue 950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
      <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-90 rounded-full flex items-center justify-center flex-col"></div class></div>
    </div>
  );
};

export default ResumeCard;
