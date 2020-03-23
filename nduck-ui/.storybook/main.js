module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    webpackFinal: config => console.dir(config, { depth: null }) || config,
}
