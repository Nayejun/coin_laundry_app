import React, { FC } from "react";
import ValidationForm from "@/components/ValidationForm";

const Page: FC = () => {
  return (
    <div className=" mx-[10px] my-[10px]">
      <div className="flex mx-[10px] my-[10px]">
      
      <ValidationForm hasTitle={false}/>
      <ValidationForm hasTitle={true}/>
      
      </div>
      <div className="flex mx-[10px] my-[10px]">
      
      <ValidationForm hasTitle={false}/>
      <ValidationForm hasTitle={true}/>
      
      </div>
      <div className="flex mx-[10px] my-[10px]">
      
      <ValidationForm hasTitle={false}/>
      <ValidationForm hasTitle={true}/>
      
      </div>

      
    </div>
  );
};

export default Page;