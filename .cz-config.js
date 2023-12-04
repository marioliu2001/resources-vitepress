module.exports = {
    // 可选类型
    types: [
        { value: '🚀feat', name: '🚀feat: 新功能' },
        { value: '🐛fix', name: '🐛fix: 修复' },
        { value: '📝docs', name: '📝docs: 文档变更' },
        { value: '🏠style', name: '🏠style: 代码格式(不影响代码运行的变动)' },
        { value: '♻️refactor', name: '♻️refactor: 重构(既不是增加feature，也不是修复bug)' },
        { value: '⚡️perf', name: '⚡️perf: 性能优化' },
        { value: '✅test', name: '✅test: 增加测试' },
        { value: '🔨chore', name: '🔨chore: 构建过程或辅助工具的变动' },
        { value: '⏪revert', name: '⏪revert: 回退' },
        { value: '📦build', name: '📦build: 打包' }
    ],

    // 消息步骤
    messages: {
        type: '请选择提交类型:',
        scope: '选择一个 scope (可选):',
        customScope: '请输入修改范围(可选):',
        subject: '请简要描述提交(必填): \n',
        body: '请输入详细描述，使用"|"换行(可选): \n',
        breaking: '非兼容性说明 (可选): \n',
        footer: '请输入要关闭的issue，例如：#31, #34(可选): \n',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
    },
    // 设置为 true，在 scope 选择的时候，会有 empty 和 custom 可以选择
    // 顾名思义，选择 empty 表示 scope 缺省，如果选择 custom，则可以自己输入信息
    allowCustomScopes: true,

    scopes: [
        { name: "note" },
        { name: "folder" },
        { name: "share" },
        { name: "settings" },
    ],

    // 跳过问题
    // skipQuestions: ['body', 'breaking', 'footer'],

    // 只有我们 type 选择了 feat 或者是 fix，才会询问我们 breaking message.
    allowBreakingChanges: ['🚀feat', '🐛fix'],
    // subject文字长度默认是72
    subjectLimit: 200
}
