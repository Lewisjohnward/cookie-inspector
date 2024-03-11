console.log("hello from my extension");
console.log(browser);
console.log(window);
console.log(document);
console.log(document.cookie);
const cookies = document.cookie.split(";");
console.log("cookies: ", cookies.length);

console.log(cookies);
