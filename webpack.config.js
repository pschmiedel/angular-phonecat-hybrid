const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      // angularJS templates
      {
        test: /^(?!.*\.component\.html$).*\.html$/,
        loader: 'ng-cache-loader?module=phoneCat',
        exclude: path.resolve(__dirname, 'src/index.html')
      }
    ]
  }
};
