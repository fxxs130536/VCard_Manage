var iview = function (componentName) {
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
    path: '/pages/person/list',
    name: 'personList',
    config: {
      navigationBarTitleText: '个人中心',
      usingComponents: {
        'i-button': iview('button'),
        'i-icon': iview('icon'),
        'i-row': iview('row'),
        'i-col': iview('col'),
        'i-avatar': iview('avatar'),
        'i-divider': iview('divider'),
        'i-cell-group': iview('cell-group'),
        'i-cell': iview('cell')
      }
    }
  },
  {
    path: '/pages/person/rankingList',
    name: 'personRankingList',
    config: {
      navigationBarTitleText: '排行榜',
      enablePullDownRefresh: true,
      usingComponents: {
        'i-panel': iview('panel'),
        'i-tabs': iview('tabs'),
        'i-tab': iview('tab'),
        'i-avatar': iview('avatar')
      }
    }
  },
  {
    path: '/pages/person/editCard',
    name: 'personEditCard',
    config: {
      navigationBarTitleText: '编辑名片',
      usingComponents: {
        'i-button': iview('button'),
        'i-icon': iview('icon'),
        'i-row': iview('row'),
        'i-col': iview('col'),
        'i-avatar': iview('avatar'),
        'i-divider': iview('divider'),
        'i-input': iview('input'),
        'i-panel': iview('panel'),
        'i-cell-group': iview('cell-group'),
        'i-cell': iview('cell')
      }
    }
  },

  {
    path: '/pages/message/list',
    name: 'messageList',
    config: {
      navigationBarTitleText: '消息列表',
      usingComponents: {
        'i-panel': iview('row'),
        'i-button': iview('button'),
        'i-icon': iview('icon'),
        'i-row': iview('row'),
        'i-col': iview('col'),
        'i-avatar': iview('avatar')
      }
    }
  },
  {
    path: '/pages/customer/list',
    name: 'customerList',
    config: {
      navigationBarTitleText: '客户列表',
      usingComponents: {
        'i-panel': iview('row'),
        'i-button': iview('button'),
        'i-icon': iview('icon'),
        'i-row': iview('row'),
        'i-col': iview('col'),
        'i-avatar': iview('avatar')
      }
    }
  },
  {
    path: '/pages/radar/list',
    name: 'radarList',
    config: {
      navigationBarTitleText: '雷达',
      enablePullDownRefresh: true,
      usingComponents: {
        'i-row': iview('row'),
        'i-col': iview('col'),
        'i-tabs': iview('tabs'),
        'i-tab': iview('tab'),
        'i-card': iview('card'),
        'i-icon': iview('icon'),
        'i-avatar': iview('avatar'),
        'i-cell-group': iview('cell-group'),
        'i-cell': iview('cell'),
        'i-collapse': iview('collapse'),
        'i-collapse-item': iview('collapse-item'),
        'i-progress': iview('progress')
      }
    }
  }

]
