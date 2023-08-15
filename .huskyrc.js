module.exports = {
  hooks: {
    'pre-push': 'npm run lint:md',
  },
};
