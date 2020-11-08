const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'newrank-design/lib': path.resolve(__dirname, '../components/'),
        'newrank-design/esm': path.resolve(__dirname, '../components/'),
        'newrank-design': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
