export default  {
  title: 'Tips AI',
  description: 'What can do or automate with AI?',
  keywords: ['ai', 'Ai', 'Chat-gpt', 'artificial', "intelligence","Midjourney"],
  url: 'tips-ai.com', // your site url without trailing slash
  paginate: 12,
  // uncomment the next line if you want to add disqus to your site
  // disqusShortname: "your-shortname"
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  }
};
