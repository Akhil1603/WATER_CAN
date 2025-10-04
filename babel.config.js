module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@theme': './src/theme',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@assets': './assets'
          }
        }
      ]
    ]
  };
};
