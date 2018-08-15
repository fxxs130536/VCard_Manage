var iview = function(componentName) {
  return `../../../static/iview/${componentName}/index`
}
module.exports = [
  // {
  //   path: '/pages/news/list',
  //   name: 'NewsList',
  //   config: {
  //     enablePullDownRefresh: true
  //   }
  // },
  // {
  //   path: '/pages/news/detail',
  //   name: 'NewsDetail',
  //   config: {
  //     navigationBarTitleText: '文章详情'
  //   }
  // },
  // {
  //   path: '/pages/news/comment',
  //   name: 'NewsComment',
  //   config: {
  //     navigationBarTitleText: '评论列表'
  //   }
  // },
  // {
  //   path: '/pages/quanzi/list',
  //   name: 'QuanziList',
  //   config: {
  //     navigationBarTitleText: '圈子',
  //     enablePullDownRefresh: true
  //   }
  // },
  // {
  //   path: '/pages/quanzi/detail',
  //   name: 'QuanziDetail',
  //   config: {
  //     navigationBarTitleText: '圈子详情'
  //   }
  // },
  {
    path: '/pages/radar/list',
    name: 'radarList',
    config: {
      navigationBarTitleText: '雷达',
      enablePullDownRefresh: true,
      usingComponents: {
        "i-row": iview('row'),
        "i-col": iview("col"),
        'i-tabs': iview('tabs'),
        'i-tab': iview('tab'),
        'i-card': iview('card'),
        "i-icon": iview("icon"),
        "i-avatar": iview("avatar"),
        'i-cell-group': iview('cell-group'),
        'i-cell': iview('cell')
      }
    }
  },
  {
    path: '/pages/customer/list',
    name: 'customerList',
    config: {
      navigationBarTitleText: '客户列表'
    }
  },
  {
    path: '/pages/message/list',
    name: 'messageList',
    config: {
      navigationBarTitleText: '消息列表'
    }
  },
  {
    path: '/pages/person/list',
    name: 'personList',
    config: {
      navigationBarTitleText: '个人列表'
    }
  },
]
