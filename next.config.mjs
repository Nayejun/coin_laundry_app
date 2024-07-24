import path from "path";
import withPWA from "next-pwa";

const nextConfig = {
	reactStrictMode: false,
	typescript: {
		// Ignore TypeScript errors during the build process
		ignoreBuildErrors: true,
	},
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		// Fixes npm packages that depend on `fs` module
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
			};
		}

		// Add custom webpack configurations here
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve("src"),
		};

		return config;
	},
};

export default withPWA({
	dest: "public",
	register: true,
	skipWaiting: true,
})(nextConfig);
