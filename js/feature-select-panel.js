

storeLocator.FeatureSelectPanel = function(el, opt_options) {
  this.el_    = $(el);

  this.settings_ = $.extend({
    'panel': null,
    'view': null,
    'featurePrefix': null
  }, opt_options);

  this.init_();
};

storeLocator['FeatureSelectPanel'] = storeLocator.FeatureSelectPanel;

storeLocator.FeatureSelectPanel.prototype = new google.maps.MVCObject;

/**
 * Initialise the info panel
 * @private
 */
storeLocator.FeatureSelectPanel.prototype.init_ = function() {
  var that = this;
  if (this.settings_['view']) {
    this.set('view', this.settings_['view']);
  }
  if (this.settings_['panel']) {
    this.set('panel', this.settings_['panel']);
  }

  var allFeatures = this.get('view').getFeatures().asList();

  for (var i = 0, ii = allFeatures.length; i < ii; i++) {
    var feature = allFeatures[i];
    var checkbox = $('<input type="checkbox"/>');
    checkbox.data('feature', feature);
    $('<label/>').append(checkbox).append(feature.getDisplayName())
      .appendTo(this.el_);
  }
  this.el_.find('input').change(function() {
    var feature = $(this).data('feature');
    console.log('changed');

    that.get('panel').toggleFeatureFilter_(/** @type {storeLocator.Feature} */(feature));
    that.get('view').refreshView();
  });

  var allFeatures = this.get('view').getFeatures().asList();
  console.log(allFeatures);

  console.log(this.get('panel'));
};


storeLocator.FeatureSelectPanel.prototype.toString = function() {
  return "pickle";
};
