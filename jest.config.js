// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/config'
    ],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        }
    },
    moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx' ],
    moduleNameMapper: {
        '^.*\\.scss$': '<rootDir>/config/jest/SCSSStub.js',
        '\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/fileMock.js'
    },
    reporters: [
        'default',
        [ 'jest-junit', { 'outputName': 'report.xml' }]
    ],
    setupFiles: [
        '<rootDir>/config/jest/shim.js',
        '<rootDir>/config/jest/setup.js'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/dist',
        '/node_modules/'
    ],
    testRegex: 'src.*(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    transformIgnorePatterns: [
        'node_modules/(?!@hedtech)'
    ]
};
