export default {
  layout: 'post',
  title: 'Untitled',
  eleventyComputed: {
    permalink: (data) => `${ data.slug || data.page.fileSlug}/index.html`,
    thumb: (data) => {
      if (data.thumb) {
        if (data.thumb.search(/^https?:\/\//) !== -1) {
          return data.thumb;
        }
        return `/assets/img/${data.thumb}`;
      } else {
        return false;
      }
    }
  }
};
