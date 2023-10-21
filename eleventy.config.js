module.exports = (config) => {
  config.addPassthroughCopy('src/assets/img/**/*');
  config.addPassthroughCopy({ 'src/posts/img/**/*': 'assets/img/' });

  config.addWatchTarget("src/assets/js/");

  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/post.njk');

  config.addFilter('readableDate', require('./lib/filters/readableDate'));
  config.addFilter('minifyJs', require('./lib/filters/minifyJs'));

  config.addFilter("getRandom5", function(items){
    if(!items.length || items.length < 5) return;

    var selected = []
	for(var i = 0; i < 5; i++){
        selected.push(items[Math.floor(Math.random() * items.length)]);
    }    
    

	return selected;

  });

  config.addFilter("getRandom10byCategory", function(items, tags){
    if(!items.length || items.length < 10) return;

    var elementsInTag = items.filter(i => {
        let isNext = i.data.tags.some(item => tags.includes(item));
        return isNext;
    });

    console.log(elementsInTag.length)
    var selected = []
	for(var i = 0; i < 10; i++){
        selected.push(elementsInTag[Math.floor(Math.random() * elementsInTag.length)]);
    }    
    

	return selected;

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
