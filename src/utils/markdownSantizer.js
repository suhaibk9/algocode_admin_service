const marked = require('marked'); //Used to convert markdown to html
const sanitizeHtml = require('sanitize-html'); //Used to sanitize html
const turndown = require('turndown'); //Used to convert html to markdown
//So basically we will convert markdown to HTML using marked package, then we will sanitize the HTML using sanitize-html package, and then we will convert the sanitized HTML back to markdown using turndown package.
const sanitizeMarkdown = (markdownContent) => {
  //1. Convert markdown to HTML
  const htmlContent = marked.parse(markdownContent);
  //2. Sanitize HTML
  const sanitizedHtml = sanitizeHtml(htmlContent, {
    //Allow img tag
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      //Only allow src attribute in img tag
      img: ['src'],
      //If you had more like input, you could add them here like this: input: ['type', 'value']
    },
  });
  //3. Convert sanitized HTML to markdown
  const turndownService = new turndown();
  return turndownService.turndown(sanitizedHtml);
};
module.exports = sanitizeMarkdown;
