module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        extensions: ['.ios.tsx', '.android.tsx', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@navigations': "./src/navigations",
          '@assets': "./src/assets",
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@items':'./src/items',
          '@utils':'./src/utils',
          '@models':'./src/models',
          '@components':'./src/components',
        },
      },
    ],
    [
      'inline-dotenv',
      {
        systemVar: 'overwrite',
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ]
};
