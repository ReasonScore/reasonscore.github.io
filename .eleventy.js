const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static-root": "/" });
  eleventyConfig.addPassthroughCopy({ "static-last": "/static" });
  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.addPlugin(pluginRss);

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    dir: {
      output: "dist"
    }
  }
};

