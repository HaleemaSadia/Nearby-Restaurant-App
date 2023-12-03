module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: [
          {'@test': './__tests__/'},
          {'@app': './src/app/'},
          {'@resources': './src/resources/'},
          {'@typings': './src/typings/'},
          {'@ui': './src/ui'},
          {'@utils': './src/utils/'},
        ],
      },
    ],
  ],
};
