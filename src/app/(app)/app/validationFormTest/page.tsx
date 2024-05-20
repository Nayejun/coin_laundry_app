import React, { FC } from "react";
import ValidationFormWithTitle from "@/components/validationFormWithTitle";
import ValidationForm from "@/components/validationForm";

const Page: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      
      <ValidationForm />
      <ValidationFormWithTitle />
    </div>
  );
};

export default Page;