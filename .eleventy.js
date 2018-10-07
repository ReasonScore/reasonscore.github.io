module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  return {
    dir: {
      output: "_site"
    }
  }
};

