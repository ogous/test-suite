const nextConfig = {

    webpack: (config) => {

        if (process.env.NODE_V8_COVERAGE) {
            Object.defineProperty(config, 'devtool', {
                get() {
                    return 'source-map';
                },
                set() {}
            });
        }

        return config;
    }
};


module.exports= nextConfig;
