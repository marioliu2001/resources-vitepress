// VitePress技术笔记左侧导航栏
export const spiderData = [
    {
        text: 'UU(TOP)',
        collapsed: false,
        items: [
            {
                text: "妃光莉, 妃ひかり'",
                link: 'UU-TOP1/妃光莉, 妃ひかり\'/',
                collapsed: true,
                items: [
                    { text: "全部", link: "UU-TOP1/妃光莉, 妃ひかり'/全部" },
                    { text: "字幕", link: "UU-TOP1/妃光莉, 妃ひかり'/字幕" },
                    { text: "精选", link: "UU-TOP1/妃光莉, 妃ひかり'/精选" },
                ],
            },
        ]
    },
    {
        text: '剧情',
        collapsed: false,
        items: [
            { text: "NTR", link: "剧情/NTR" },
        ]
    }
]