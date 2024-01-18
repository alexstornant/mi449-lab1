module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('screen.css')
    return {
      passthroughFileCopy: true
    }
  }