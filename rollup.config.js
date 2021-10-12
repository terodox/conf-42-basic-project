import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/app.mjs',
    output: [
        {
            dir: 'dist',
            format: 'esm',
            exports: 'named',
        }
    ],
    plugins: [
        terser(),
        serve({
            contentBase: 'demo',
            historyApiFallback: true,
        }),
        resolve(),
        commonjs()
    ],
};