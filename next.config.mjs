// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    env: {
        RECAPTCHA_SITE_KEY: '6Lf12GoqAAAAAB4SNfUDC5JVrXEHM9x_8LPZYZtT',
    },
    
};

export default nextConfig;
