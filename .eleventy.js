module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md", "pug", "png", "jpg", "css", "js"
  ]);
  eleventyConfig.addPassthroughCopy("js");
};
