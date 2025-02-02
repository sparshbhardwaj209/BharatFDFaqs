// export default {
//     testEnvironment: "node",
//     transformIgnorePatterns: ["<rootDir>/node_modules/"],

//     moduleNameMapper: {
//       "^@/(.*)$": "<rootDir>/src/$1",
//     },

//     clearMocks: true,
//     collectCoverageFrom: ["src/**/*.js"],
//     transform: {},
//     extensionsToTreatAsEsm: [],
//   };

// /** @type {import('jest').Config} */
// const config = {
//   clearMocks: true,
//   collectCoverage: true,
//   coverageDirectory: "coverage",
//   testEnvironment: "jsdom",
// };

// module.exports = config;

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
      "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!adminjs|@adminjs/express|@adminjs/mongoose)"
  ],
};
