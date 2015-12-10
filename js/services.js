angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '系统消息',
    lastText: '点击查看您的系统消息',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '订单消息',
    lastText: '点击查看您的订单消息',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '我的聊天',
    lastText: '点击查看您的聊天记录',
    face: 'img/adam.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Tasks', function() {

  var tasks = [{
    id: 0,
    name: '任务1',
    history:
    [{name:"李航",
      work:"已上传文件",
      time:"昨天 20:18"},
      {name:"静静",
        work:"已上传文件",
        time:"昨天 18:18"}]
  },
  {
    id: 1,
    name: '任务2',
    history:
    [{name:"李航",
      work:"已上传文件",
      time:"昨天 20:18"},
      {name:"静静",
        work:"已上传文件",
        time:"昨天 18:18"}]
  },
  {
    id: 2,
    name: '任务3',
    history:
    [{name:"李航",
      work:"已上传文件",
      time:"昨天 20:18"},
      {name:"静静",
        work:"已上传文件",
        time:"昨天 18:18"}]
  },
  {
    id: 3,
    name: '任务4',
    history:
    [{name:"李航",
      work:"已上传文件",
      time:"昨天 20:18"},
      {name:"静静",
        work:"已上传文件",
        time:"昨天 18:18"}]
  },
  {
    id: 4,
    name: '任务5',
    history:
    [{name:"李航",
      work:"已上传文件",
      time:"昨天 20:18"},
      {name:"静静",
        work:"已上传文件",
        time:"昨天 18:18"}]
  }
];

  return {
    all: function() {
      return tasks;
    }
  };
})
.factory('Jobs', function() {

  var jobs = [{
    id: 0,
    name: '任务1',
    history:
    [{name:"李航",
      work:"已上传文件",
      time:"昨天 20:18"},
      {name:"静静",
        work:"已上传文件",
        time:"昨天 18:18"}]
  },
  {
    id: 1,
    name: '任务2',
    history:
    [{name:"李航",
      work:"已上传文件",
      time:"昨天 20:18"},
      {name:"静静",
        work:"已上传文件",
        time:"昨天 18:18"}]
  }
];

  return {
    all: function() {
      return jobs;
    }
  };
});
