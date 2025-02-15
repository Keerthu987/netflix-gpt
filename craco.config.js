// module.exports = {
//     style: {
//       postcss: {
//         plugins: [
//           require('tailwindcss'),
//           require('autoprefixer'),
//         ],
//       },
//     },
//   }


module.exports = {
    style: {
        // why use postcssOptions? -> https://github.com/dilanx/craco/issues/353
        postcssOptions: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}