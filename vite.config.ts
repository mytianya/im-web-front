import { defineConfig } from 'vite'
import {viteObfuscateFile} from 'vite-plugin-obfuscator'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base:'/m/',
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  define: {
    'process.env': process.env
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
    }
  },
  plugins: [
    vue(),
    // viteObfuscateFile({
    //   compact: true,
    //   controlFlowFlattening: false,
    //   controlFlowFlatteningThreshold: 0.75,
    //   deadCodeInjection: false,
    //   deadCodeInjectionThreshold: 0.4,
    //   debugProtection: false,
    //   debugProtectionInterval: 0,
    //   disableConsoleOutput: false,
    //   domainLock: [],
    //   domainLockRedirectUrl: 'about:blank',
    //   forceTransformStrings: [],
    //   identifierNamesCache: null,
    //   identifierNamesGenerator: 'hexadecimal',
    //   identifiersDictionary: [],
    //   identifiersPrefix: '',
    //   ignoreImports: false,
    //   inputFileName: '',
    //   log: false,
    //   numbersToExpressions: false,
    //   optionsPreset: 'default',
    //   renameGlobals: false,
    //   renameProperties: false,
    //   renamePropertiesMode: 'safe',
    //   reservedNames: [],
    //   reservedStrings: [],
    //   seed: 0,
    //   selfDefending: false,
    //   simplify: true,
    //   sourceMap: false,
    //   sourceMapBaseUrl: '',
    //   sourceMapFileName: '',
    //   sourceMapMode: 'separate',
    //   sourceMapSourcesMode: 'sources-content',
    //   splitStrings: false,
    //   splitStringsChunkLength: 10,
    //   stringArray: true,
    //   stringArrayCallsTransform: true,
    //   stringArrayCallsTransformThreshold: 0.5,
    //   stringArrayEncoding: [],
    //   stringArrayIndexesType: [
    //     'hexadecimal-number'
    //   ],
    //   stringArrayIndexShift: true,
    //   stringArrayRotate: true,
    //   stringArrayShuffle: true,
    //   stringArrayWrappersCount: 1,
    //   stringArrayWrappersChainedCalls: true,
    //   stringArrayWrappersParametersMaxCount: 2,
    //   stringArrayWrappersType: 'variable',
    //   stringArrayThreshold: 0.75,
    //   target: 'browser',
    //   transformObjectKeys: false,
    //   unicodeEscapeSequence: false
    // })
  ],
  build:{
    outDir:'music',
    sourcemap:false
  }
})
