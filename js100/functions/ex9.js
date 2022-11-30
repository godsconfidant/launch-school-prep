// Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

  function exlang(locale) {
    let langCode = locale.slice(0, 2);
   return langCode;
  }
 

  function splitLang(locale) {
   let newStr = ''
    return newStr = locale.split('_')[0];
  }


console.log(exlang('en_US.UTF-8'));
console.log(splitLang('ko_KR.UTF-16'));