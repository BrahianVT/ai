module.exports = {
  title: 'AI-deas',
  description: 'What can do with AI?',
  keywords: ['ai', 'Ai', 'Chat-gpt', 'artificial', "intelligence","Midjourney"],
  url: 'https://vredeburg.netlify.app', // your site url without trailing slash
  paginate: 12,
  // uncomment the next line if you want to add disqus to your site
  // disqusShortname: "your-shortname"
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  }
};
