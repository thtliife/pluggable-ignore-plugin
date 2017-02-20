# pluggable-ignore-plugin

This is simply a template module wrapper for webpacks
[IgnorePlugin](https://webpack.github.io/docs/list-of-plugins.html#ignoreplugin)

This plugin is designed to work with applications generated from the awesome
[create-react-app](https://github.com/facebookincubator/create-react-app) npm
module, using the 
[react-scripts-pluggable](https://www.npmjs.com/package/react-scripts-pluggable)
scripts package.

## Usage

```bash
create-react-app myAwesomeApp --scripts-version react-scripts-pluggable
cd myAwesomeApp
npm install pluggable-ignore-plugin
npm run start
```

Create a file named `pluggable-ignore-plugin.js` in the `.pluggable` directory
at the root of your application, with content like below:
```javascript
module.exports = {
  ignore: [
    {
      requestRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }
  ]
}
```
You may add as many ignore objects to the array as you like.
The ignore objects must have at least the requestRegExp property.
the contextRegExp property is optional.

The webpack ignorePlugin documentation explains this plugin as follows:
_Don’t generate modules for requests matching the provided RegExp._
* `requestRegExp` A RegExp to test the request against.
* `contextRegExp` (optional) A RegExp to test the context (directory) against.
