const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  
  // ========================================
  // PLUGINS
  // ========================================
  
  eleventyConfig.addPlugin(pluginRss);
  
  // ========================================
  // PASSTHROUGH COPY
  // ========================================
  
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  
  // ========================================
  // FILTERS
  // ========================================
  
  // Format dates for display
  eleventyConfig.addFilter("dateFormat", (dateObj, format = "LLLL dd, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });
  
  // Human-readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });
  
  // ISO 8601 format for datetime attributes
  eleventyConfig.addFilter("dateToISO", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO();
  });
  
  // Generate excerpt from content
  eleventyConfig.addFilter("excerpt", (content, length = 200) => {
    const text = content.replace(/<[^>]+>/g, '');
    return text.length > length ? text.substring(0, length) + '...' : text;
  });
  
  // Limit array length
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });
  
  // Current year for copyright
  eleventyConfig.addFilter("currentYear", () => {
    return new Date().getFullYear();
  });
  
  // Base URL handling
  eleventyConfig.addFilter("baseUrl", (url) => {
    const pathPrefix = process.env.PATH_PREFIX || "";
    return pathPrefix + url;
  });
  
  // ========================================
  // COLLECTIONS
  // ========================================
  
  // Blog posts collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  // ========================================
  // SHORTCODES
  // ========================================
  
  // Responsive image shortcode using @11ty/eleventy-img
  eleventyConfig.addShortcode("image", async function(src, alt, sizes = "100vw") {
    let metadata = await Image(src, {
      widths: [320, 640, 960, 1280],
      formats: ["webp", "jpeg"],
      outputDir: "./_site/images/",
      urlPath: "/images/"
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });
  
  // ========================================
  // MARKDOWN CONFIGURATION
  // ========================================
  
  const markdownIt = require("markdown-it");
  const markdownItOptions = {
    html: true,
    breaks: false,
    linkify: true
  };
  
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));
  
  // ========================================
  // WATCH TARGETS
  // ========================================
  
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");
  
  // ========================================
  // CONFIGURATION
  // ========================================
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
