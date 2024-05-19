module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ]
};
