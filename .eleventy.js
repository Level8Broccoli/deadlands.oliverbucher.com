module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md", "pug", "png", "jpg", "css"
  ]);
  eleventyConfig.addPassthroughCopy("js");
};
