module.exports = {
    siteUrl: 'https://www.mihailo.cz',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: [
        // '/admin'
    ],
    alternateRefs: [
        // {
        //     href: 'https://www.mihailo.cz/cs',
        //     hreflang: 'cs',
        // }
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [],
            }
        ],
    },
};
