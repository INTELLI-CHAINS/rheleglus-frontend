export const module = {
  rules: [
    {
      test: /\.(jpg|png|gif|svg)$/,
      loader: 'image-webpack-loader',
      enforce: 'pre'
    }
  ]
};