module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          apis: './src/network',
          components: './src/components',
          constants: './src/constants',
          containers: './src/containers',
          interfaces: './src/interfaces',
        }
      }
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
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
