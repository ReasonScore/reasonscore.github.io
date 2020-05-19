module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static-root": "/" });
  eleventyConfig.addPassthroughCopy({ "static-last": "/static" });
  eleventyConfig.addPassthroughCopy("static");
  return {
    dir: {
      output: "dist"
    }
  }
};

