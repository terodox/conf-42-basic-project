import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';

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
        resolve(),
        commonjs(),
        scss({
            output: false,
        }),
        terser(),
        serve({
            contentBase: 'demo',
            historyApiFallback: true,
        }),
    ],
};