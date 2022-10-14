module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          components: './src/components',
          containers: './src/containers',
          apis: './src/network',
          constants: './src/constants'
        }
      }
    ],
    'nativewind/babel'
  ]
};

// module.exports = (api) => {
//   api.cache(true)

//   return {
//     presets: [
//       'module:metro-react-native-babel-preset',
//     ],
//     plugins: [
//       [
//         'module-resolver',
//         {
//           alias: {
//             components: './src/components',
//             containers: './src/containers'
//           }
//         }
//       ]
//     ]
//   }
// }
