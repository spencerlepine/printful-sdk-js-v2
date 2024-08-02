import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/api.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(), // Converts CommonJS modules to ES6
      json(),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      terser(), // Minifies the bundle
    ],
  },
  {
    input: 'dist/api.d.ts',
    output: [{ file: 'dist/index.d.mts', format: 'es' }],
    plugins: [dts()],
  },
];
