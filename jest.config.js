module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/scripts/fileTransform.js",
  },
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](node_modules|.next)[/\\\\]",
    "<rootDir>/cypress",
  ],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$",
    "<rootDir>/cypress",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
