module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
