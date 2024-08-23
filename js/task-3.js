function getElementWidth(content, padding, border) {
    
    const contentWidth = parseFloat(content);   // Ширина контенту
    const paddingWidth = parseFloat(padding);   // Падінг з кожної сторони
    const borderWidth = parseFloat(border);     // Бордер з кожної сторони
    
    // Загальна ширина елемента в межах border-box
    const totalWidth = contentWidth + (2 * paddingWidth) + (2 * borderWidth);
    
    
    return totalWidth;
  }

  console.log(getElementWidth("50px", "8px", "4px")); 
  console.log(getElementWidth("60px", "12px", "8.5px")); 
  console.log(getElementWidth("200px", "0px", "0px")); 