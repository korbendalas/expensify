const path = require('path');

module.exports ={
entry:'./src/app.js', //where to start
  output:{
    path:path.join(__dirname, 'public'),
    filename:'bundle.js' //where to end compiling ES6 to ES5
  },
  module : { //webpack rules to do stuff for us
    rules:[{ //rule to start using babel
      loader: 'babel-loader', // loader, webpack plugin to use babel
      test :/\.js$/, //target all files with .sj ending
      exclude:/node_modules/
    }, {//rule to use css and SCSS
      use: ['style-loader',    //to use multiple loaders, we are using USE, its array of loaders
      'css-loader',
    'sass-loader'
  ],
      test:/\.s?css$/, // znak pitanja je da 's' bude opcionalno. Znaci procesuira css, a scss opcionalno


    }]
  },
devtool : 'cheap-module-eval-source-map',
devServer : {
  contentBase :path.join(__dirname, 'public'),
  historyApiFallback: true // da kaze serveru da rutiranje vrsimo u Reactu, ne na serveru
}
};
