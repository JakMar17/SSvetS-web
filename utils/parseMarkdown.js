// ~/utils/parseMarkdown.js
import markdownParser from '@nuxt/content/transformers/markdown'

// first arg to parse() is for id, which is unused
export const parseMarkdown = md => md != null && md.length > 0 ? markdownParser.parse('parsed-content', md) : new Promise(resolve => resolve(''));