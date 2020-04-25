module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md", "pug", "png", "jpg", "css"//, "js"
  ]);
  eleventyConfig.addPassthroughCopy("**/*.js");
  eleventyConfig.addWatchTarget("./static/");
  return {
    dir: {
      input: 'content',
      output: '_site',
      include: '_includes'
    }
  };
};
