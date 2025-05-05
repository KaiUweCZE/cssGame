export const formatCode = (code) => {
  if (!code) return "";

  return (
    code
      // comments
      .replace(/\$\/([^$]+?)\$\//g, '<span class="code-comment">$1</span>')
      // CSS values
      .replace(/\$###([^$]+?)\$###/g, '<span class="code-css-value">$1</span>')
      // CSS properties
      .replace(/\$##([^$]+?)\$##/g, '<span class="code-css-property">$1</span>')
      // CSS classes
      .replace(/\$#([^$]+?)\$#/g, '<span class="code-css-class">$1</span>')
      // bold text
      .replace(/\$\*\*([^$]+?)\$\*\*/g, '<span class="code-bold">$1</span>')
  );
};
