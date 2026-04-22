const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'hysj-web';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPagesBuild ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	basePath,
	assetPrefix: isGitHubPagesBuild ? `${basePath}/` : undefined,
};

export default nextConfig;
