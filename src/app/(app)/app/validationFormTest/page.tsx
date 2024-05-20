import React, { FC } from "react";
import ValidationFormWithTitle from "@/components/validationFormWithTitle";
import ValidationForm from "@/components/validationForm";

const Page: FC = () => {
  return (
    <div className=" mx-[10px] my-[10px]">
      <div className="flex mx-[10px] my-[10px]">
      
      <ValidationForm />
      <ValidationFormWithTitle />
      
      </div>
      <div className="flex mx-[10px] my-[10px]">
      
      <ValidationForm />
      <ValidationFormWithTitle />
      
      </div>
      <div className="flex mx-[10px] my-[10px]">
      
      <ValidationForm />
      <ValidationFormWithTitle />
      
      </div>

      
    </div>
  );
};

export default Page;