const path = require('path')

module.export = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js', // this creates single bundled file
    path: path.resolve(__dirname, 'dist'), // this creates absolute path
  },
}
