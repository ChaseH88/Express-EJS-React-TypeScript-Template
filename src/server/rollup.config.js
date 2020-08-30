import typescript from 'rollup-plugin-typescript2';
import progress from 'rollup-plugin-progress';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy'

const rollupConfig = [
  {
    input: './app.ts',
    output: {
      file: '../../build/server.js',
      format: 'cjs'
    },
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      copy({
        targets: [
          { src: 'views', dest: '../../build' }
        ]
      }),
      cleanup({
        comments: 'none'
      }),
      progress()
    ]
  }
];

export default rollupConfig;