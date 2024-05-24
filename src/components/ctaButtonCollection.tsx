import React from "react";
import CTAButtonLarge from "@/components/ui/ctaButtonLarge";
import CTAButtonMedium from "@/components/ui/ctaButtonMedium";
import CTAButtonSmall from "@/components/ui/ctaButtonSmall";

const CTAButtonCollection: React.FC = () => {
	return (
		<div className="p-5">
			<h1 className="text-2xl font-bold mb-4">CTA Button</h1>

			<div className="space-y-4">
				<h2 className="text-xl font-semibold mt-4">L size</h2>
				<div className="grid grid-cols-4 gap-x-12">
					<div className="space-y-4 mx-auto">
						<CTAButtonLarge
							buttonColor="#13C2C2"
							borderColor="#13C2C2"
							borderThickness="0px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#FFFFFF"
						/>
						<CTAButtonLarge
							buttonColor="#FFFFFF"
							borderColor="#00C4CC"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#13C2C2"
						/>
						<CTAButtonLarge
							buttonColor="#FFFFFF"
							borderColor="#878A93"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#000000"
						/>
					</div>

					<div className="space-y-4 mx-auto">
						<CTAButtonLarge
							buttonColor="#AEB0B6"
							borderColor="#AEB0B6"
							borderThickness="0px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#FFFFFF"
							disabled={true}
						/>
						<CTAButtonLarge
							buttonColor="#FFFFFF"
							borderColor="#AEB0B6"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#AEB0B6"
							disabled={true}
						/>
					</div>
				</div>
				<h2 className="text-xl font-semibold mt-4">M size</h2>
				<div className="grid grid-cols-4 gap-x-12">
        <div className="space-y-4 mx-auto">
						<CTAButtonMedium
							buttonColor="#13C2C2"
							borderColor="#00C4CC"
							borderThickness="0px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#FFFFFF"
						/>
						<CTAButtonMedium
							buttonColor="#FFFFFF"
							borderColor="#13C2C2"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#13C2C2"
						/>
						<CTAButtonMedium
							buttonColor="#FFFFFF"
							borderColor="#878A93"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#000000"
						/>
					</div>

					<div className="space-y-4 mx-auto">
						<CTAButtonMedium
							buttonColor="#AEB0B6"
							borderColor="#AEB0B6"
							borderThickness="0px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#FFF"
							disabled={true}
						/>
						<CTAButtonMedium
							buttonColor="#FFFFFF"
							borderColor="#AEB0B6"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#AEB0B6"
							disabled={true}
						/>
					</div>
				</div>
				<h2 className="text-xl font-semibold mt-4">S size</h2>
				<div className="grid grid-cols-4 gap-x-12">
        <div className="space-y-4 mx-auto">
						<CTAButtonSmall
							buttonColor="#13C2C2"
							borderColor="#13C2C2"
							borderThickness="0px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#FFFFFF"
						/>
						<CTAButtonSmall
							buttonColor="#FFFFFF"
							borderColor="#13C2C2"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#13C2C2"
						/>
						<CTAButtonSmall
							buttonColor="#FFFFFF"
							borderColor="#878A93"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#000000"
						/>
					</div>

					<div className="space-y-4 mx-auto">
						<CTAButtonSmall
							buttonColor="#AEB0B6"
							borderColor="#AEB0B6"
							borderThickness="0px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#FFFFFF"
							disabled={true}
						/>
						<CTAButtonSmall
							buttonColor="#FFFFFF"
							borderColor="#AEB0B6"
							borderThickness="1px"
							buttonText="텍스트"
							buttonTextSize="16px"
							buttonTextColor="#AEB0B6"
							disabled={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTAButtonCollection;
