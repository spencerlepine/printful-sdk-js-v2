import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
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
        exports: 'auto',
      },
    ],
    plugins: [
      resolve(),
      commonjs(), // Converts CommonJS modules to ES6
      json(),
      typescript({
        // rpt2's default `*.ts+(|x)` globs stop matching under picomatch >=2.3.2 (extglob security fix)
        include: ['*.ts', '**/*.ts', '*.tsx', '**/*.tsx'],
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      terser(), // Minifies the bundle
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
