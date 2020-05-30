console.log('it works!');

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// fetch - new way of doing AJAX to call API
const promise = fetch(DOG_URL); // all caps is screaming case, says it should never change
const doggos = document.querySelector(".doggos");

// promises allow for working with things that don't happen immediately
promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });

// this logs first because waiting on promise to complete to fetch dog pic
console.log("this will log first");