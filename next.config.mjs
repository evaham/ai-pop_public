/** @type {import('next').NextConfig} */

const repoName = "ai-pop_public";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	basePath: isProd ? `/${repoName}` : "",
	assetPrefix: isProd ? `/${repoName}` : "",
	env: {
		NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
	},
};

export default nextConfig;
