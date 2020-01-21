import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import decamelize from 'decamelize'

const moduleName = 'withoutPropagation'

export default {
  input: 'source/index.ts',
  output: [
    {
      file: `dist/browser/${decamelize(moduleName, '-')}.js`,
      name: moduleName,
      format: 'iife'
    },
    {
      file: `dist/browser/${decamelize(moduleName, '-')}.min.js`,
      name: moduleName,
      format: 'iife',
      plugins: [terser()]
    }
  ],
  plugins: [typescript()]
}
