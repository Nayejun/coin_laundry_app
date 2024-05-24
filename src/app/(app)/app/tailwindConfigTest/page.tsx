import React from "react";

const Page = () => {
	return (
		<>
			<div className="p-8">
				<h2 className="text-heading-1">Colors</h2>

				<h3 className="text-heading-2 mt-4">Primary</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-primary-normal rounded-lg"></div>
					<div className="w-16 h-16 bg-primary-strong rounded-lg"></div>
					<div className="w-16 h-16 bg-primary-heavy rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Label</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-label-normal rounded-lg"></div>
					<div className="w-16 h-16 bg-label-strong rounded-lg"></div>
					<div className="w-16 h-16 bg-label-neutral rounded-lg"></div>
					<div className="w-16 h-16 bg-label-alternative rounded-lg"></div>
					<div className="w-16 h-16 bg-label-assistive rounded-lg"></div>
					<div className="w-16 h-16 bg-label-disable rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Background</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-background-normal-normal border border-gray-400 rounded-lg"></div>
					<div className="w-16 h-16 bg-background-normal-alternative border border-gray-400 rounded-lg"></div>
					<div className="w-16 h-16 bg-background-elevated-normal border border-gray-400 rounded-lg"></div>
					<div className="w-16 h-16 bg-background-elevated-alternative border border-gray-400 rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Interaction</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-interaction-inactive rounded-lg"></div>
					<div className="w-16 h-16 bg-interaction-disable rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Line</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-line-normal rounded-lg"></div>
					<div className="w-16 h-16 bg-line-neutral rounded-lg"></div>
					<div className="w-16 h-16 bg-line-alternative rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Status</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-status-positive rounded-lg"></div>
					<div className="w-16 h-16 bg-status-cautionary rounded-lg"></div>
					<div className="w-16 h-16 bg-status-destructive rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Accent</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-accent-lime rounded-lg"></div>
					<div className="w-16 h-16 bg-accent-cyan rounded-lg"></div>
					<div className="w-16 h-16 bg-accent-light-blue rounded-lg"></div>
					<div className="w-16 h-16 bg-accent-pink rounded-lg"></div>
					<div className="w-16 h-16 bg-accent-skin-1 rounded-lg"></div>
					<div className="w-16 h-16 bg-accent-skin-2 rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Inverse</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-inverse-primary rounded-lg"></div>
					<div className="w-16 h-16 bg-inverse-background rounded-lg"></div>
					<div className="w-16 h-16 bg-inverse-label rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Static</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-static-white border border-black rounded-lg"></div>
					<div className="w-16 h-16 bg-static-black rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Component-Fill</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-component-fill-normal rounded-lg"></div>
					<div className="w-16 h-16 bg-component-fill-strong rounded-lg"></div>
					<div className="w-16 h-16 bg-component-fill-alternative rounded-lg"></div>
				</div>

				<h3 className="text-heading-2 mt-4">Component-Material</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-component-material-dimmer rounded-lg"></div>
				</div>

				<h2 className="text-heading-2 mt-4">Elevation Shadows</h2>
				<div className="flex space-x-8">
					<div className="text-center">
						<div className="w-32 h-32 bg-white shadow-elevation-shadow-normal rounded-lg mb-2"></div>
						<p>Normal</p>
					</div>
					<div className="text-center">
						<div className="w-32 h-32 bg-white shadow-elevation-shadow-emphasize rounded-lg mb-2"></div>
						<p>Emphasize</p>
					</div>
					<div className="text-center">
						<div className="w-32 h-32 bg-white shadow-elevation-shadow-strong rounded-lg mb-2"></div>
						<p>Strong</p>
					</div>
					<div className="text-center">
						<div className="w-32 h-32 bg-white shadow-elevation-shadow-heavy rounded-lg mb-2"></div>
						<p>Heavy</p>
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Palette-Neutral</h3>
				<div className="flex ">
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-99"></div>
						<p>99</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-95"></div>
						<p>95</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-90"></div>
						<p>90</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-80"></div>
						<p>80</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-70"></div>
						<p>70</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-60"></div>
						<p>60</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-50"></div>
						<p>50</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-40"></div>
						<p>40</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-30"></div>
						<p>30</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-22"></div>
						<p>22</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-20"></div>
						<p>20</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-15"></div>
						<p>15</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-10"></div>
						<p>10</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-neutral-5"></div>
						<p>5</p>
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Palette-Cool-Neutral</h3>
				<div className="flex">
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-99"></div>
						<p>99</p>
					</div>
					<div className="text- center">
						<div className="w-8 h-16 bg-cool-neutral-98"></div>
						<p>98</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-97"></div>
						<p>97</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-96"></div>
						<p>96</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-95"></div>
						<p>95</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-90"></div>
						<p>90</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-80"></div>
						<p>80</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-70"></div>
						<p>70</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-60"></div>
						<p>60</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-50"></div>
						<p>50</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-40"></div>
						<p>40</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-30"></div>
						<p>30</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-25"></div>
						<p>25</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-23"></div>
						<p>23</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-22"></div>
						<p>22</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-20"></div>
						<p>20</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-17"></div>
						<p>17</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-15"></div>
						<p>15</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-10"></div>
						<p>10</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-7"></div>
						<p>7</p>
					</div>
					<div className="text-center">
						<div className="w-8 h-16 bg-cool-neutral-5"></div>
						<p>5</p>
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Palette-Primary-Color</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-primary-color-cyan-900"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-800"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-700"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-600"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-500"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-400"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-300"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-200"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-100"></div>
					<div className="w-16 h-16 bg-primary-color-cyan-50"></div>
				</div>
				<h3 className="text-heading-2 mt-4">Border-Radius</h3>
				<div className="flex space-x-4">
					<div className="w-16 h-16 bg-gray-300 rounded-sm"></div>
					<div className="w-16 h-16 bg-gray-300 rounded-md"></div>
					<div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
					<div className="w-16 h-16 bg-gray-300 rounded-xl"></div>
				</div>
				<h3 className="text-heading-2 mt-4">Font-Size</h3>
				<div className="space-y-2">
					<p className="text-title-1">Title 1</p>
					<p className="text-heading-1">Heading 1</p>
					<p className="text-heading-2">Heading 2</p>
					<p className="text-headline-1">Headline 1</p>
					<p className="text-headline-2">Headline 2</p>
					<p className="text-body-1-normal">Body 1 Normal</p>
					<p className="text-body-1-reading">Body 1 Reading</p>
					<p className="text-body-2-normal">Body 2 Normal</p>
					<p className="text-body-2-reading">Body 2 Reading</p>
					<p className="text-label-1-normal">Label 1 Normal</p>
					<p className="text-label-1-reading">Label 1 Reading</p>
					<p className="text-label-2">Label 2</p>
					<p className="text-caption-1">Caption 1</p>
					<p className="text-caption-2">Caption 2</p>
				</div>
			</div>
		</>
	);
};

export default Page;
