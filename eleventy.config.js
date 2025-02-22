let elementsInTagCache = new Map();

import readableDate from './lib/filters/readableDate.js';
import minify from './lib/filters/minifyJs.js';
import minifyHtml from './lib/transforms/minifyHtml.js';
import posts from './lib/collections/posts.js';
import tagLists from './lib/collections/tagList.js';
import pagedPosts from './lib/collections/pagedPosts.js';
import pagedPostsByTag from './lib/collections/pagedPostsByTag.js';

export default function (config)  {
  config.addPassthroughCopy('src/assets/img/**/*');
  config.addPassthroughCopy({ 'src/posts/img/**/*': 'assets/img/' });

  config.addWatchTarget("src/assets/js/");

  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/post.njk');

  config.addFilter('readableDate', readableDate);
  config.addFilter('minifyJs', minify);

  config.addFilter("getRandomNbyCategory", function(items, tags, n){
    if(!items.length || items.length < n) return;

     // Convert tags to array if it isn't already
     const searchTags = Array.isArray(tags) ? tags : [tags];
    const cacheKey = JSON.stringify(searchTags);

    let elementsInTag;

    if(elementsInTagCache.has(cacheKey)){
        elementsInTag = elementsInTagCache.get(cacheKey);
    } else {
        elementsInTag = items.filter(i => {
            const itemTags = Array.isArray(i.data.tags) 
                ? i.data.tags 
                : (i.data.tags ? [i.data.tags] : []);
                
            return itemTags.some(tag => searchTags.includes(tag));
        });
        elementsInTagCache.set(cacheKey, elementsInTag);
    }
     
 
     if (!elementsInTag.length || elementsInTag.length < n) return elementsInTag;

       
    for (let i = elementsInTag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elementsInTag[i], elementsInTag[j]] = [elementsInTag[j], elementsInTag[i]]; // Swap elements
      }
    

	return elementsInTag.slice(0, n);

  });
  config.addTransform('minifyHtml', minifyHtml);

  config.addCollection('posts', posts);
  config.addCollection('tagList', tagLists);
  config.addCollection('pagedPosts', pagedPosts);
  config.addCollection('pagedPostsByTag', pagedPostsByTag);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    // pathPrefix: "/subfolder/",
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
