import React from 'react';
import CTAButton from '@/components/ui/ctaButton';

const CTAButtonCollection: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">CTA Button</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">L size</h2>
        <div className="flex space-x-4">
          <CTAButton
            buttonWidth="200px"
            buttonHeight="50px"
            buttonColor="#00C4CC"
            borderColor="#00C4CC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#FFFFFF"
          />
          <CTAButton
            buttonWidth="200px"
            buttonHeight="50px"
            buttonColor="#FFFFFF"
            borderColor="#00C4CC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#00C4CC"
          />
          <CTAButton
            buttonWidth="200px"
            buttonHeight="50px"
            buttonColor="#FFFFFF"
            borderColor="#CCCCCC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#000000"
          />
          <CTAButton
            buttonWidth="200px"
            buttonHeight="50px"
            buttonColor="#CCCCCC"
            borderColor="#CCCCCC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#FFFFFF"
            disabled={true}
          />
          <CTAButton
            buttonWidth="200px"
            buttonHeight="50px"
            buttonColor="#FFFFFF"
            borderColor="#CCCCCC"
            borderThickness="1px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#AEB0B6"
            disabled={true}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">M size</h2>
        <div className="flex space-x-4">
          <CTAButton
            buttonWidth="150px"
            buttonHeight="40px"
            buttonColor="#00C4CC"
            borderColor="#00C4CC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#FFFFFF"
          />
          <CTAButton
            buttonWidth="150px"
            buttonHeight="40px"
            buttonColor="#FFFFFF"
            borderColor="#00C4CC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#00C4CC"
          />
          <CTAButton
            buttonWidth="150px"
            buttonHeight="40px"
            buttonColor="#FFFFFF"
            borderColor="#CCCCCC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#000000"
          />
          <CTAButton
            buttonWidth="150px"
            buttonHeight="40px"
            buttonColor="#CCCCCC"
            borderColor="#CCCCCC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#AEB0B6"
            disabled
          />
          <CTAButton
            buttonWidth="150px"
            buttonHeight="40px"
            buttonColor="#FFFFFF"
            borderColor="#CCCCCC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#AEB0B6"
            disabled
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">S size</h2>
        <div className="flex space-x-4">
          <CTAButton
            buttonWidth="100px"
            buttonHeight="30px"
            buttonColor="#00C4CC"
            borderColor="#00C4CC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#FFFFFF"
          />
          <CTAButton
            buttonWidth="100px"
            buttonHeight="30px"
            buttonColor="#FFFFFF"
            borderColor="#00C4CC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#00C4CC"
          />
          <CTAButton
            buttonWidth="100px"
            buttonHeight="30px"
            buttonColor="#FFFFFF"
            borderColor="#CCCCCC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#000000"
          />
          <CTAButton
            buttonWidth="100px"
            buttonHeight="30px"
            buttonColor="#CCCCCC"
            borderColor="#CCCCCC"
            borderThickness="2px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#FFFFFF"
            disabled
          />
          <CTAButton
            buttonWidth="100px"
            buttonHeight="30px"
            buttonColor="#FFFFFF"
            borderColor="#CCCCCC"
            borderThickness="1px"
            buttonText="텍스트"
            buttonTextSize="16px"
            buttonTextColor="#AEB0B6"
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CTAButtonCollection;
