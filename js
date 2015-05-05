var lib = {
  count: 0,
  createObj: function(type){
    var o = {};
    o = this.items[type];
    o = JSON.stringify(o);
    o = JSON.parse(o);
    if (o) {
      this.count++;
      o.id = this.count;
      o.t = type;
      return o;
    }
  },
  
  itemsUl: function(){
    var $ul = $('<ul/>');
    for(var k in this.items){
      var item = this.items[k];
      var $li = $('<li/>').text(k);
      $ul.append($li);
    }
    return $ul;
  },
  
  items: {
    'user': {},
    'userGroup': {},
    'userGroup': {},
    html: {
      win: '',
    },
  }
};
