// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true, //运行时报错显示
  clearMocks: false, // 测试前删除案例调用
  collectCoverage: false, // 收集覆盖信息
  reporters: ["default"], //报告器默认
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],//文件扩展名模块名
  moduleDirectories: ['node_modules'],//模块目录
  globals: { //全局变量
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
  },//通过正则来获取模块名
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],//测试匹配
  transform: { //转换器模块
    "^.+unit\\.(js|jsx)$": "babel-jest",
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}