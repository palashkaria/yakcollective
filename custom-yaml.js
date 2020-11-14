// source: https://github.com/gatsbyjs/gatsby/issues/5021#issuecomment-651275263
/* usage in frontmatter
---
title: My Page
inline: !md Some **bold** and _italic_ text
block: !md |
  ## I'm a H2 title
  [I'm an inline-style link](https://www.google.com)
---
*/

const yaml = require('js-yaml');
const remark = require('remark');
const remarkHTML = require('remark-html');

const MarkdownYamlType = new yaml.Type('!md', {
  kind: 'scalar',
  construct: (data) => remark().use(remarkHTML).processSync(data).toString(),
});

const MARKDOWN_SCHEMA = yaml.Schema.create(MarkdownYamlType);

module.exports = (doc) => yaml.safeLoad(doc, { schema: MARKDOWN_SCHEMA });
