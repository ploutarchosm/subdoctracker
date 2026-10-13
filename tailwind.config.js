/** Rebuild CSS: npx tailwindcss@3 -i src/input.css -o assets/styles.css --minify */
module.exports = {
  content: ['./*.html'],
  theme: { extend: { colors: { ink:'#17231d', forest:'#246b4a', leaf:'#dff3e6', paper:'#f7f8f5', muted:'#65716a' } } },
};
