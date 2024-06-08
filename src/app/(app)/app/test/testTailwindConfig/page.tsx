import React from "react";
const Page = () => {
	return (
		<>
			<div className="p-8">
				<h2 className="text-heading-1">Colors</h2>

				<h3 className="text-heading-2 mt-4">Primary</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-primary-normal rounded-lg whitespace-normal">
						bg-primary-normal
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-primary-strong rounded-lg whitespace-normal">
						bg-primary-strong
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-primary-heavy rounded-lg whitespace-normal">
						bg-primary-heavy
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Label</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-label-normal rounded-lg whitespace-normal text-white">
						bg-label-normal
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-label-strong rounded-lg whitespace-normal text-white">
						bg-label-strong{" "}
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-label-neutral rounded-lg whitespace-normal">
						bg-label-neutral
					</div>
					<div className="flex w-36 h-20 items-center justify-center bg-label-alternative rounded-lg whitespace-normal">
						bg-label-alternative
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-label-assistive rounded-lg whitespace-normal">
						bg-label-assistive
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-label-disable rounded-lg whitespace-normal">
						bg-label-disable
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Background</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-background-normal-normal border border-gray-400 rounded-lg overflow-hidden whitespace-normal">
						bg-background-normal-normal
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-background-normal-alternative border border-gray-400 rounded-lg whitespace-normal">
						bg-background-normal-alternative
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-background-elevated-normal border border-gray-400 rounded-lg whitespace-normal">
						bg-background-elevated-normal
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-background-elevated-alternative border border-gray-400 rounded-lg whitespace-normal">
						bg-background-elevated-alternative
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Interaction</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-interaction-inactive rounded-lg whitespace-normal">
						bg-interaction-inactive
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-interaction-disable rounded-lg whitespace-normal">
						bg-interaction-disable
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Line</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-line-normal rounded-lg whitespace-normal">
						bg-line-normal{" "}
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-line-neutral rounded-lg whitespace-normal">
						bg-line-neutral
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-line-alternative rounded-lg whitespace-normal">
						bg-line-alternative
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Status</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-status-positive rounded-lg whitespace-normal">
						bg-status-positive
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-status-cautionary rounded-lg whitespace-normal">
						bg-status-cautionary
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-status-destructive rounded-lg whitespace-normal">
						bg-status-destructive{" "}
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Accent</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-accent-lime rounded-lg whitespace-normal">
						bg-accent-lime
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-accent-cyan rounded-lg whitespace-normal">
						bg-accent-cyan
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-accent-light-blue rounded-lg whitespace-normal">
						bg-accent-light-blue
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-accent-pink rounded-lg whitespace-normal">
						bg-accent-pink
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-accent-skin-1 rounded-lg whitespace-normal">
						bg-accent-skin-1
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-accent-skin-2 rounded-lg whitespace-normal">
						bg-accent-skin-2
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Inverse</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-inverse-primary rounded-lg whitespace-normal">
						bg-inverse-primary
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-inverse-background rounded-lg whitespace-normal text-white">
						bg-inverse-background
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-inverse-label rounded-lg whitespace-normal">
						bg-inverse-label
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Static</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-static-white border border-black rounded-lg whitespace-normal">
						bg-static-white
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-static-black rounded-lg whitespace-normal text-white">
						bg-static-black
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Component-Fill</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-component-fill-normal rounded-lg whitespace-normal">
						bg-component-fill-normal
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-component-fill-strong rounded-lg whitespace-normal">
						bg-component-fill-strong
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-component-fill-alternative rounded-lg whitespace-normal">
						bg-component-fill-alternative
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Component-Material</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-component-material-dimmer rounded-lg whitespace-normal">
						bg-component-material-dimmer
					</div>
				</div>

				<h2 className="text-heading-2 mt-4">Elevation Shadows</h2>
				<div className="flex space-x-8">
					<div className="flex flex-col items-center justify-center">
						<div className="flex items-center justify-center w-32 h-32 bg-white shadow-elevation-shadow-normal rounded-lg whitespace-normal mb-2">
							shadow-elevation-shadow-normal
						</div>
						<p>Normal</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="flex items-center justify-center w-32 h-32 bg-white shadow-elevation-shadow-emphasize rounded-lg whitespace-normal mb-2">
							shadow-elevation-shadow-emphasize
						</div>
						<p>Emphasize</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="flex items-center justify-center w-32 h-32 bg-white shadow-elevation-shadow-strong rounded-lg whitespace-normal mb-2">
							shadow-elevation-shadow-strong
						</div>
						<p>Strong</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="flex items-center justify-center w-32 h-32 bg-white shadow-elevation-shadow-heavy rounded-lg whitespace-normal mb-2">
							shadow-elevation-shadow-heavy
						</div>
						<p>Heavy</p>
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Palette-Neutral</h3>
				<div className="flex ">
					<div className="items-center justify-center">
						<div className="flex w-36  h-20 items-center justify-center bg-neutral-99">
							bg-neutral-99
						</div>
						<p>99</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-95"></div>
						<p>95</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-90"></div>
						<p>90</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-80"></div>
						<p>80</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-70"></div>
						<p>70</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-60"></div>
						<p>60</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-50"></div>
						<p>50</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-40"></div>
						<p>40</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-30"></div>
						<p>30</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-22"></div>
						<p>22</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-20"></div>
						<p>20</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-15"></div>
						<p>15</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-10"></div>
						<p>10</p>
					</div>
					<div className="items-center justify-center">
						<div className="flex w-12  h-20 items-center justify-center bg-neutral-5"></div>
						<p>5</p>
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Palette-Cool-Neutral</h3>
				<div className="flex">
					<div className="items-center justify-center">
						<div className="flex w-36 h-20 items-center justify-center bg-cool-neutral-99">
							bg-cool-neutral-99
						</div>
						<p>99</p>
					</div>
					<div className="text- center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-98"></div>
						<p>98</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-97"></div>
						<p>97</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-96"></div>
						<p>96</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-95"></div>
						<p>95</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-90"></div>
						<p>90</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-80"></div>
						<p>80</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-70"></div>
						<p>70</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-60"></div>
						<p>60</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-50"></div>
						<p>50</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-40"></div>
						<p>40</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-30"></div>
						<p>30</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-25"></div>
						<p>25</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-23"></div>
						<p>23</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-22"></div>
						<p>22</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-20"></div>
						<p>20</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-17"></div>
						<p>17</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-15"></div>
						<p>15</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-10"></div>
						<p>10</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-7"></div>
						<p>7</p>
					</div>
					<div className="items-center justify-center">
						<div className="w-8 h-20 items-center justify-center bg-cool-neutral-5"></div>
						<p>5</p>
					</div>
				</div>

				<h3 className="text-heading-2 mt-4">Palette-Primary-Color</h3>
				<div className="flex">
					<div className="flex w-36  h-20 items-center justify-center bg-primary-color-cyan-900">
						bg-primary-color-cyan-900
					</div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-800"></div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-700"></div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-600"></div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-500"></div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-400"></div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-300"></div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-200"></div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-100"></div>
					<div className="flex w-12  h-20 items-center justify-center bg-primary-color-cyan-50"></div>
				</div>
				<h3 className="text-heading-2 mt-4">Border-Radius</h3>
				<div className="flex space-x-4">
					<div className="flex w-36  h-20 items-center justify-center bg-gray-300 rounded-sm">
						rounded-sm
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-gray-300 rounded-md">
						rounded-md
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-gray-300 rounded-lg whitespace-normal">
						rounded-lg
					</div>
					<div className="flex w-36  h-20 items-center justify-center bg-gray-300 rounded-xl">
						rounded-xl
					</div>
				</div>
				<h3 className="text-heading-2 mt-4">Font-Size</h3>
				<div className="space-y-2">
					<p className="text-title-1">text-title-1</p>
					<p className="text-heading-1">text-heading-1</p>
					<p className="text-heading-2">text-heading-2</p>
					<p className="text-headline-1">text-headline-1</p>
					<p className="text-headline-2">text-headline-2</p>
					<p className="text-body-1-normal">text-body-1-normal</p>
					<p className="text-body-1-reading">text-body-1-reading</p>
					<p className="text-body-2-normal">text-body-2-normal</p>
					<p className="text-body-2-reading">text-body-2-reading</p>
					<p className="text-label-1-normal">text-label-1-normal</p>
					<p className="text-label-1-reading">text-label-1-reading</p>
					<p className="text-label-2">text-label-2</p>
					<p className="text-caption-1">text-caption-1</p>
					<p className="text-caption-2">text-caption-2</p>
				</div>
			</div>
		</>
	);
};

export default Page;
