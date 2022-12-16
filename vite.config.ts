///  <reference types="vitest" />
///  <reference types="vite/client" />
///  <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite'
import path from 'path'
import { readdirSync } from 'fs'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const absolutePathAliases: { [key: string]: string } = {}
const srcPath = path.resolve('./src/')

const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(
	dirent => dirent.name.replace(/(\.ts){1}(x?)/, '')
)

srcRootContent.forEach(directory => {
	absolutePathAliases[directory] = path.join(srcPath, directory)
})

export default defineConfig({
	plugins: [svgr(), react()],
	test: {
		globals: true,
		environment: 'jsdom'
	},
	resolve: {
		alias: {
			...absolutePathAliases,
			'@constants': '/src/constants',		}
	}
})
