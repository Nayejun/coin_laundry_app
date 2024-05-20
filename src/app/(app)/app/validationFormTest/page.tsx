import React, { FC } from "react";
import ValidationFormWithTitle from "@/components/validationFormWithTitle";
import ValidationForm from "@/components/validationForm";

const Page: FC = () => {
  return (
    <div className="flex mx-[10px] my-[10px] h-screen">
      
      <ValidationForm />
      <ValidationFormWithTitle />
    </div>
  );
};

export default Page;