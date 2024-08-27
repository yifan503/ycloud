module.exports = {
    apps: [{
        name: 'yiyun_website',
        script: 'next start',
        instances: 'max',
        exec_mode: 'cluster',
        env: {
            NODE_ENV: 'production',
        },
    }]
};