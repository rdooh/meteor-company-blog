// For Namespacing
App = {
  Constants: {},
  // Small reusable utilities
  Utils: {}
};



App.Utils.formatSlug = function(value) {
  let formatted = value
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w\x80-\xFF-]+/g,'');
    return formatted;
};
