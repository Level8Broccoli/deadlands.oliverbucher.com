module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md", "pug", "png", "jpg", "css",
  ]);
  eleventyConfig.addPassthroughCopy("static");
  return {
    dir: {
      input: 'content',
      output: '_site',
      include: '_includes'
    }
  };
};
