//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const {getChildren} = require("vuepress-sidebar-atuo")

module.exports = {
    '/md/': [
        {
            title: '基础知识',
            collapsable: true,
            children: getChildren('/md/views/basis/')
        },
        {
            title: '高级进阶',
            collapsable: true,
            children: getChildren('/md/views/advanced/')
        }, 
        {
            title: 'Bug',
            collapsable: true,
            children: getChildren('/md/views/Bug/')
        },
        {
            title: '面试宝典',
            collapsable: true,
            children:getChildren('/md/views/interview/')
        },
    ],
    '/coms/':[
        {
            title: '基础组件',
            collapsable: true,
            children: getChildren('/md/coms/basicsCom/')
        },{
            title: '业务组件',
            collapsable: true,
            children: getChildren('/md/coms/professionCom/')
        },
    ],
    '/jottings/':[
        {
            title: '随笔',
            collapsable: true,
            children: getChildren('/md/jottings/')
        },
    ],

}