module.exports = {
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': ['eslint', () => 'tsc-files --noEmit'],
};
