const Http = new XMLHttpRequest();
const url='D://Responsive sites//Javascript beginner//011jslogin//signup.html';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}