const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// const titleText = document.querySelector("title");
// titleText.textContent("Great Idea!");

//NAV

const navBar = document.querySelectorAll("a");
navBar[0].textContent = "Services";
navBar[1].textContent = "Product";
navBar[2].textContent = "Vision";
navBar[3].textContent = "Features";
navBar[4].textContent = "About";
navBar[5].textContent = "Contact";

const newNavItem = document.createElement("a");
newNavItem.textContent = "Home";
newNavItem.style.color = "green";

const newNavItem2 = document.createElement("a");
newNavItem2.textContent = "Help";
newNavItem2.style.color = "green";

const navBarAll = document.querySelector("nav");
navBarAll.appendChild(newNavItem2);
navBarAll.prepend(newNavItem);
// navBar.appendChild(newNavItem);

navBar.forEach((item) => (item.style.color = "green"));

//CTA

//H1
const h1Content = document.querySelector("h1");
h1Content.textContent = "DOM";
const lineBreak = document.createElement("br");
h1Content.appendChild(lineBreak);
var is = document.createTextNode("IS");
h1Content.appendChild(is);
const lineBreak2 = document.createElement("br");
h1Content.appendChild(lineBreak2);
var awesome = document.createTextNode("AWESOME");
h1Content.appendChild(awesome);

//CTA Button
const ctaButton = document.querySelector("button");
ctaButton.textContent = "Get Started";

//CTA Image
const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", "img/header-img.png");

//Middle Image
const midImg = document.querySelector("#middle-img");
midImg.src = "img/mid-page-accent.jpg";

//H4 Content

const h4Content = document.querySelectorAll("h4");
h4Content[0].textContent = "Features";
h4Content[1].textContent = "About";
h4Content[2].textContent = "Services";
h4Content[3].textContent = "Product";
h4Content[4].textContent = "Vision";
h4Content[5].textContent = "Contact";

//P content

const pContent = document.querySelectorAll("p");
pContent[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pContent[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pContent[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pContent[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pContent[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pContent[5].textContent = "123 Way 456 Street";
const lineBreak3 = document.createElement("br");
pContent[5].appendChild(lineBreak3);
var cityState = document.createTextNode("Somewhere, USA");
pContent[5].appendChild(cityState);
pContent[6].textContent = "1 (888) 888-8888";
pContent[7].textContent = "sales@greatidea.io";
pContent[8].textContent = "Copyright Great Idea! 2018";
