const { version } = require("../package.json");
const eth = require("./tokens/eth.json");
const bsc = require("./tokens/bsc.json");
const ftm = require("./tokens/ftm.json");
const avax = require("./tokens/avax.json");
const matic = require("./tokens/matic.json");
const xdai = require("./tokens/xdai.json");
const cro = require("./tokens/cro.json");
const harmony = require("./tokens/harmony.json");
const kava = require("./tokens/kava.json");
const pom = require("./tokens/pom.json");
const empire = require("./tokens/empire.json");
const arb = require("./tokens/arb.json");
const ame = require("./tokens/ame.json");

module.exports = function buildList() {
    const parsed = version.split(".");
    return {
        name: "Empire Default List",
        timestamp: new Date().toISOString(),
        version: {
            major: +parsed[0],
            minor: +parsed[1],
            patch: +parsed[2],
        },
        tags: {},
        logoURI: "https://raw.githubusercontent.com/Prism-Network-io/default-token-list/master/logos/shared/empire.png",
        keywords: ["empire", "default"],
        tokens: [...eth, ...bsc, ...ftm, ...avax, ...matic, ...xdai, ...cro, ...harmony, ...kava, ...pom, ...empire, ...arb, ...ame]
            // sort them by symbol for easy readability
            .sort((t1, t2) => {
                if (t1.chainId === t2.chainId) {
                    return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
                }
                return t1.chainId < t2.chainId ? -1 : 1;
            }),
    };
};
