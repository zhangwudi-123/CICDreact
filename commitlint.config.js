module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  verbose: true,
  rules: {
    // ... 其他配置
  },
};
