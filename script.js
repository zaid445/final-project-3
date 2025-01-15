/*home login*/
function openPopup() {     /*To make the login popup visible.*/

    document.getElementById('loginPopup').style.display = 'flex';     /* It selects an element with the ID loginPopup and sets its style.display property to 'flex', making it visible on the screen.*/
}

function closePopup() {     /*To hide the login popup.*/

    document.getElementById('loginPopup').style.display = 'none'; /* its style.display property to 'none', hiding it from view.*/
}


function validateLogin() {   /* To check if the user has entered both email and password.*/
  const loginButton = document.getElementById("loginButton");
    const email = document.getElementById('email').value;  /*It retrieves the values of the input fields with IDs email and password.*/
    const password = document.getElementById('password').value; /*It retrieves the values of the input fields with IDs email and password.*/

    if (!email || !password) {
        alert('Please verify');  /*If either field is empty, an alert prompts the user to verify their input.*/
        loginButton.textContent = "Login";

    } else {
        alert('You are logged in'); /*If both fields have values, an alert informs the user they are logged in.*/
        loginButton.innerHTML = '<img src="user-circle-solid-24.png" alt="Profile" class="profile-img" style="width:30px;">';

    }
}



/*vehicles-slider*/

var swiper = new Swiper(".vehicles-slider", {  /*A new Swiper object is created, which is a library used to create sliders.*/
    slidesPerView: 1, /*Specifies the number of slides that are displayed at one time.*/
    spaceBetween: 20, /*The distance between slices is specified in units (usually pixels).*/
    loop:true,  /*Specifies whether the slider operates in continuous repeat mode*/
    grabCursor:true,  /*The cursor turns into a "hand" shape.*/
    centeredSlides:true, /*The active slide will be in the center.*/
    autoplay: { /*An object containing the slider's autoplay settings*/
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {  /*An object containing numbering settings*/
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {  /*An object containing settings for the slider's responsiveness to display changes.*/
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


/*the futer*/
  function showCar(videoSrc, title, description) { /*The name of the function that receives three parameters (videoSrc, title, description).*/
    const carVideo = document.getElementById("car-video");
    document.getElementById("car-title").textContent = title;
    document.getElementById("car-description").textContent = description;
    carVideo.src = videoSrc;  /*The value of the videoSrc parameter is set to the video source.*/
    carVideo.load(); /*A function that reloads the video, especially when the source is changed.*/
    carVideo.play(); /*A function that plays video.*/
  }
  



  function changeImage(imagePath) {  /*The name of the function that receives a single transaction*/
    const mainImage = document.getElementById('main-shoe');
    mainImage.src = imagePath; /*The src property specifies the source of the image.*/
  }
  









    // Select filter buttons and car cards
    const filterButtons = document.querySelectorAll('.filter-button');
    const carCards = document.querySelectorAll('.car-card');

    // Add click event to each filter button
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Get the data-type of the clicked button
        const type = button.getAttribute('data-type');

        // Show/hide car cards based on type
        carCards.forEach(card => {
          if (type === 'all' || card.getAttribute('data-type') === type) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Show all cars by default
    document.querySelector('.filter-button[data-type="all"]').click();








let openShopping = document.querySelector('.shopping');

let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
body.classList.add('active');

})



let currentPrice = 10000;
let timeLeft = 600; // 10 minutes in seconds
let autoIncreaseInterval = 30; // Time interval in seconds for auto price update
let priceIncreaseAmount = 200; // Amount to increase each time
let userIsWinner = false;

const priceElement = document.getElementById('current-price');
const timerElement = document.getElementById('timer');
const bidButton = document.getElementById('bid-button');
const resultMessage = document.getElementById('result-message');

// Function to update price
function updatePrice() {
    currentPrice += priceIncreaseAmount;
    priceElement.textContent = `$${currentPrice}`;
}

// Function to update the timer
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        clearInterval(priceUpdateInterval);
        declareWinner();
    }
}

// Declare the winner when auction ends
function declareWinner() {
    if (userIsWinner) {
        resultMessage.textContent = "Congratulations! You have won the auction!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Sorry, you did not win the auction.";
        resultMessage.style.color = "red";
    }
    resultMessage.style.display = "block";
}

// Manually increase the price and set the user as the current winner
bidButton.addEventListener('click', () => {
    updatePrice();
    userIsWinner = true;
});

// Update the timer every second
let timerInterval = setInterval(updateTimer, 100);

// Automatically increase the price at set intervals
let priceUpdateInterval = setInterval(updatePrice, autoIncreaseInterval * 100);
