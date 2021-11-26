alert("Hello World");

function changePriceEducation() {
  var element = document.querySelector(".current-active");
  element.classList.remove("active");
  element.classList.remove("current-active");

  var element = document.querySelector("#navbar-education");
  element.classList.add("active");
  element.classList.add("current-active");

  document.querySelector(".price-label-1").innerHTML = "Rs 3,000/- (For the education of 1 child for 6 months)";
  document.querySelector(".price-label-2").innerHTML = "Rs 6,000/- (For the education of 1 child for 1 Year)";
  document.querySelector(".price-label-3").innerHTML = "Rs 18,000/- (For the education of 3 children for 1 year)";
}

function changePriceHealthcare() {
  var element = document.querySelector(".current-active");
  element.classList.remove("active");
  element.classList.remove("current-active");


  element = document.querySelector(".navbar-healthcare");
  element.classList.add("active");
  element.classList.add("current-active");

  document.querySelector(".price-label-1").innerHTML = "Rs 14,200/- (healthcare for 100 people)";
  document.querySelector(".price-label-2").innerHTML = "Rs 8,850/- (healthcare for 60 people)";
  document.querySelector(".price-label-3").innerHTML = "Rs 4,260/- (healthcare for 30 people)";


}

function changePriceNutrition() {
  var element = document.querySelector(".current-active");
  element.classList.remove("active");
  element.classList.remove("current-active");

  var element = document.querySelector("#navbar-nutrition");
  element.classList.add("active");
  element.classList.add("current-active");

  document.querySelector(".price-label-1").innerHTML = "Rs 3,000/- (For the nutrition of 1 child for one year)";
  document.querySelector(".price-label-2").innerHTML = "Rs 9,000/- (For the education of 3 children for one Year)";
  document.querySelector(".price-label-3").innerHTML = "Rs 15,000/- (For the education of 5 children for one year)";
}

function changePriceWomenEmpowerment() {
  var element = document.querySelector(".current-active");
  element.classList.remove("active");
  element.classList.remove("current-active");

  var element = document.querySelector("#navbar-women-empowerment");
  element.classList.add("active");
  element.classList.add("current-active");

  document.querySelector(".price-label-1").innerHTML = "Rs 3,000/- (For the empowerment of 1 girls for 6 months)";
  document.querySelector(".price-label-2").innerHTML = "Rs 6,000/- (For the empowerment of 1 girls for 1 Year)";
  document.querySelector(".price-label-3").innerHTML = "Rs 18,000/- (For the empowerment of 3 girls for 1 year)";
}
