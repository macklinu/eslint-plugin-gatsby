module.exports = {
  concurrent: false,
  linters: {
    'README.md': ['doctoc --maxlevel 3 --notitle', 'git add'],
    '*.md': ['prettier --write', 'git add'],
    '*.json': ['prettier --write', 'git add'],
    '*.js': ['prettier --write', 'git add'],
  },
}
