const nextConfig = {
  /* config options here */
    reactStrictMode: false,
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    experimental: {
        staleTimes: {
            static: 5,
        },
    },
};

export default nextConfig;
