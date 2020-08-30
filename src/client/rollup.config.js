import typescript from 'rollup-plugin-typescript2';
import progress from 'rollup-plugin-progress';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel from '@rollup/plugin-babel';
// import pkg from "./package.json"

const rollupConfig = [
  {
    input: './index.tsx',
    // external: [...Object.keys(pkg.dependencies)],
    output: {
      file: '../../build/app.js',
      format: 'cjs'
    },
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      cleanup({
        comments: 'none'
      }),
      progress(),
      commonjs({
        include: 'node_modules/**'
      }),
      nodeResolve({
        browser: true
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
      babel({
        presets: [
          'react-app',
        ],
        extensions: [
          ...DEFAULT_EXTENSIONS,
          '.ts',
          '.tsx',
        ],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-class-properties'
        ],
        exclude: 'node_modules/**'
      })
    ]
  }
];

export default rollupConfig;