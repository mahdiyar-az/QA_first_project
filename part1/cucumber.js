module.exports = {
    default: {
        require: [
            "src/test/step/**/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        paths: ["src/test/feature/**/*.feature"],
        format: [
            "progress-bar",
            "json:reports/cucumber-report.json"
        ],
        publishQuiet: true
    }
}