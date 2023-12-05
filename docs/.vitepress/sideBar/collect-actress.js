// VitePress技术笔记左侧导航栏
export const collectActress = [
    {
        text: 'Reference',
        items: [
            { text: 'Site Config', link: 'site-config' },
            { text: 'Frontmatter Config', link: 'frontmatter-config' },
            { text: 'Runtime API', link: 'runtime-api' },
            { text: 'CLI', link: 'cli' },
            {
                text: 'Default Theme',
                base: '/reference/default-theme-',
                items: [
                    { text: 'Overview', link: 'config' },
                    { text: 'Nav', link: 'nav' },
                    { text: 'Sidebar', link: 'sidebar' },
                    { text: 'Home Page', link: 'home-page' },
                    { text: 'Footer', link: 'footer' },
                    { text: 'Layout', link: 'layout' },
                    { text: 'Badge', link: 'badge' },
                    { text: 'Team Page', link: 'team-page' },
                    { text: 'Prev / Next Links', link: 'prev-next-links' },
                    { text: 'Edit Link', link: 'edit-link' },
                    { text: 'Last Updated Timestamp', link: 'last-updated' },
                    { text: 'Search', link: 'search' },
                    { text: 'Carbon Ads', link: 'carbon-ads' }
                ]
            }
        ]
    }
]