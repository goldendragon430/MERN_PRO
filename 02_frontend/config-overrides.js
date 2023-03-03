module.exports = function override(config, env) {
  console.log("React app rewired works!")
  config.resolve.fallback = {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "buffer":false
          };
  return config;
};