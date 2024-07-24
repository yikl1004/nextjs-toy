import nextJest from 'next/jest'
import type { Config } from 'jest'

const createJestConfig = nextJest({
	// 테스트 환경에서 next.config.js 및 .env 파일을 로드할 app의 경로
	dir: './',
})

const config = {
	rootDir: './',
	// Add more setup options before each test is run
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jest-environment-jsdom',
	// testEnvironmentOptions: {
	// 	customExportConditions: [''],
	// },
	preset: 'ts-jest',
	moduleDirectories: ['.yarn', '<rootDir>/'],
	// moduleNameMapper: {
	//     '^@/(.*)$': '<rootDir>/src/$1',
	//   },
} satisfies Config

export default createJestConfig(config)
