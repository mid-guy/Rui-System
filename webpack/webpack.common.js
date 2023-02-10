/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  entry: {
    'packages/ButtonBase/index': path.resolve(
      __dirname,
      '..',
      './src/production/packages/ButtonBase/index.tsx'
    ),
    'packages/InputBase/index': path.resolve(
      __dirname,
      '..',
      './src/production/packages/InputBase/index.tsx'
    ),
    'core/theme/createTheme/index': path.resolve(
      __dirname,
      '..',
      './src/production/core/theme/createTheme/index.ts'
    ),
    'core/theme/themeProvider/index': path.resolve(
      __dirname,
      '..',
      './src/production/core/theme/themeProvider/index.ts'
    ),
    'core/styles/makeStyles/index': path.resolve(
      __dirname,
      '..',
      './src/production/core/styles/makeStyles/index.ts'
    ),
    'core/styles/withStyles/index': path.resolve(
      __dirname,
      '..',
      './src/production/core/styles/withStyles/index.ts'
    ),
    // 'core/colors/colors': path.resolve(
    //   __dirname,
    //   '..',
    //   './src/production/core/colors/colors.ts'
    // ),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@packages': path.resolve(__dirname, '../src/production/packages'),
      '@core': path.resolve(__dirname, '../src/production/core'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].js',
    clean: true,
  },
}
