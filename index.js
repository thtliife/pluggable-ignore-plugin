const transform = function(existingConfig, pluggableConfig) {
  const newConfig = existingConfig;
  if (pluggableConfig.ignore) {
    if (!pluggableConfig.ignore instanceof Array) {
      pluggableConfig.ignore = [pluggableConfig.ignore];
    }
  }
  const ignoreCount = pluggable.ignore ? pluggableConfig.ignore.length : 0;
  for (let i = 0; i < ignoreCount; i++) {
    newConfig.plugins.push(
      new webpack.IgnorePlugin(
        pluggableConfig.ignore[i].requestRegExp,
        pluggableConfig.ignore[i].contextRegExp
      )
    );
  }

  return newConfig;
};
module.exports = {
  transform: transform,
  development: true,
  production: true
};
