'use strict';

module.exports = function multiline_blockquote_plugin(md) {
  //
  // Implements the GLFM multiline blockquote syntax.
  // https://docs.gitlab.com/ee/user/markdown.html#multiline-blockquote
  //
  // Uses the `markdown-it-container` plugin to do the actual container
  // detection.
  md.use(require('markdown-it-container'), 'multiline_blockquote', {
    marker: '>',
    validate: function (params/*, markup*/) {
      return params.trim().length === 0;
    },
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<blockquote>\n';
      }

      // closing tag
      return '</blockquote>\n';
    }
  });
};
