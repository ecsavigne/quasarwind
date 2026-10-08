import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import pluginQuasar from '@quasar/app-vite/eslint'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import stylistic from '@stylistic/eslint-plugin'
// import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
	{
		/**
     * Ignore the following files.
     * Please note that pluginQuasar.configs.recommended() already ignores
     * the "node_modules" folder for you (and all other Quasar project
     * relevant folders and files).
     *
     * ESLint requires "ignores" key to be the only one in this object
     */
		// ignores: []
	},

	pluginQuasar.configs.recommended(),
	js.configs.recommended,

	/**
   * https://eslint.vuejs.org
   *
   * pluginVue.configs.base
   *   -> Settings and rules to enable correct ESLint parsing.
   * pluginVue.configs[ 'flat/essential']
   *   -> base, plus rules to prevent errors or unintended behavior.
   * pluginVue.configs["flat/strongly-recommended"]
   *   -> Above, plus rules to considerably improve code readability and/or dev experience.
   * pluginVue.configs["flat/recommended"]
   *   -> Above, plus rules to enforce subjective community defaults to ensure consistency.
   */
	pluginVue.configs['flat/strongly-recommended'],

	// https://github.com/vuejs/eslint-config-typescript
	vueTsConfigs.recommendedTypeChecked,

	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',

			globals: {
				...globals.browser,
				...globals.node, // SSR, Electron, config files
				process: 'readonly', // process.env.*
				ga: 'readonly', // Google Analytics
				cordova: 'readonly',
				Capacitor: 'readonly',
				chrome: 'readonly', // BEX related
				browser: 'readonly' // BEX related
			}
		},

		// add your custom rules here
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'prefer-promise-reject-errors': 'off',
			'vue/max-attributes-per-line': ['error', {
				'singleline': 4,
				'multiline': {
					'max': 4,
					'allowFirstLine': false
				}
			}],

			// allow debugger during development only
			'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
		}
	},

	{
		files: ['src-pwa/custom-service-worker.ts'],
		languageOptions: {
			globals: {
				...globals.serviceworker
			}
		}
	},

	// prettierSkipFormatting,

	{
		files: ['**/*.ts', '**/*.js', '**/*.vue'],
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/comma-dangle': ['error', 'never'], // not comma in final arrays, functions, objects, exports, imports
			'@stylistic/semi': ['error', 'never'], // not point and comma
			'@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
			'@stylistic/block-spacing': 'error',
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/max-len': ['error', { 'code': 200, 'tabWidth': 4 }],
			'@stylistic/space-in-parens': ['error', 'never'],
			'@stylistic/space-before-blocks': ['error', 'always'],
			'@stylistic/space-before-function-paren': ['error', 'never'],
			'@stylistic/spaced-comment': ['error', 'always'],
			'@stylistic/space-unary-ops': 'error',
			'@stylistic/space-infix-ops': 'error'
		}
	}
)
