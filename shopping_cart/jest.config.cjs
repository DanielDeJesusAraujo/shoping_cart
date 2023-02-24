/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {},
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  coverageDirectory: "coverage",
  collectCoverage: true,
  coverageReporters: ['html', 'text'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/jest.config.js',
    '!**/index.js'
  ],
  bail: false,
  coverageProvider: "v8",
  clearMocks: true,
  testMatch: [
    "**/__tests__/**/*.test.ts"
  ],
  globals: {
    "ts-jest": {
      "useESM": true
    }
  },
};