// options.js

module.exports = {
    stdTTL: {
        description: 'The standard ttl in seconds for every generated cache element.',
        default: 0
    },
    checkperiod: {
        description: 'The period in seconds used for the automatic delete check interval.',
        default: 600
    },
    useClones: {
        description: 'Enable/disable cloning of variables.',
        default: true
    },
    deleteOnExpire: {
        description: 'Whether variables will be deleted automatically when they expire.',
        default: true
    },
    enableLegacyCallbacks: {
        description: 'Re-enables the usage of callbacks instead of sync functions.',
        default: false
    },
    maxKeys: {
        description: 'Specifies a maximum amount of keys that can be stored in the cache.',
        default: -1
    }
};
