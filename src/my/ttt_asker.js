var Asker = Class({
  constructor: function () {
    // super might promote current instance
    var self = this.super();
    // be sure you use the right reference
    self.push.apply(self, arguments);
    // and remember to return it
    return self;
  },
  push: function () {
    // constructor a part, everything else is the same
    this.super.push.apply(this, arguments);
    // make push chainable for demo purpose
    return this;
  }
});
