let elementsInTagCache = new Map();
module.exports = (config) => {
  config.addPassthroughCopy('src/assets/img/**/*');
  config.addPassthroughCopy({ 'src/posts/img/**/*': 'assets/img/' });

  config.addWatchTarget("src/assets/js/");

  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/post.njk');

  config.addFilter('readableDate', require('./lib/filters/readableDate'));
  config.addFilter('minifyJs', require('./lib/filters/minifyJs'));

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
  config.addTransform('minifyHtml', require('./lib/transforms/minifyHtml'));

  config.addCollection('posts', require('./lib/collections/posts'));
  config.addCollection('tagList', require('./lib/collections/tagList'));
  config.addCollection('pagedPosts', require('./lib/collections/pagedPosts'));
  config.addCollection('pagedPostsByTag', require('./lib/collections/pagedPostsByTag'));

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
