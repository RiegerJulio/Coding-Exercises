window.onload = function(){
  let BGcolor = document.querySelector('#background-color');
  BGcolor.addEventListener('change', function(){
    let BGcolorSelected = BGcolor.selectedOptions[0];
    document.body.style.backgroundColor = BGcolorSelected.value;
    localStorage.setItem('bg-color', BGcolor.value);
  })

  let TXTcolor = document.querySelector('#text-color');
  TXTcolor.addEventListener('change', function(){
    let TXTcolorSelected = TXTcolor.selectedOptions[0];
    document.body.style.color = TXTcolorSelected.value;
    localStorage.setItem('TXT-color', TXTcolor.value);
  })

  let fontSize = document.querySelector('#font-size');
  fontSize.addEventListener('change', function(){
    let fontSizeSelected = fontSize.selectedOptions[0];
    document.body.style.fontSize = fontSizeSelected.value;
    localStorage.setItem('font-size', fontSize.value);
  })

  let textSpacing = document.querySelector('#text-spacing');
  textSpacing.addEventListener('change', function(){
    let textSpacingSelected = textSpacing.selectedOptions[0];
    document.body.style.lineHeight = textSpacingSelected.value;
    localStorage.setItem('text-spacing',textSpacingSelected.value);
  })

  let fontFamily = document.querySelector('#font-family');
  fontFamily.addEventListener('change', function(){
    let fontFamilySelected = fontFamily.selectedOptions[0];
    document.body.style.fontFamily = fontFamilySelected.value;
    localStorage.setItem('font-family', fontFamilySelected.value);
  })



  let savedBG = localStorage.getItem('bg-color');
  document.body.style.backgroundColor = savedBG;

  let savedTextColor = localStorage.getItem('TXT-color');
  document.body.style.color = savedTextColor;
  
  let savedFontSize = localStorage.getItem('font-size');
  document.body.style.fontSize = savedFontSize;

  let savedTextSpacing = localStorage.getItem('text-spacing');
  document.body.style.lineHeight = savedTextSpacing;

  let savedFontFamily = localStorage.getItem('font-family');
  document.body.style.fontFamily = savedFontFamily;




}



