

storeLocator.FeatureSelectPanel = function(el, options) {
  this.el_    = el;
  this.init_();
};

storeLocator.FeatureSelectPanel.prototype.init_ = function() {
  var that = this;
  console.log('heyhey');
};

storeLocator['FeatureSelectPanel'] = storeLocator.FeatureSelectPanel;

storeLocator.FeatureSelectPanel.prototype.toString = function() {
  return "pickle";
};
