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
  items: {
    'user': {},
    'userGroup': {},
    'userGroup': {},
    html: {
      win: '',
    },
  }
};
