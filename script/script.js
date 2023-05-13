"use strict";

const swiperMain = new Swiper(".swiper__main", {
  direction: "vertical",
  pagination: {
    el: ".swiper__main .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 6,
});

const swiper = new Swiper(".mySwiper__section", {
  slidesPerView: 3,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuItems = document.querySelectorAll(".header__nav--item");
menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const section = document.querySelector(item.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

const photos = document.querySelectorAll('.gallery__photo');

const modal = document.getElementById('modal_background');
const modalImage = document.getElementById('modal_content');

photos.forEach(img => img.addEventListener('click', displayModal))


function displayModal() {
    modal.style.display = "block";
    modalImage.src = this.firstChild.src;
}

const closeModal = document.getElementById('modal_close');
closeModal.onclick = function () {
    modal.style.display = "none";
}


input.onblur = function () {
  if (!input.value.includes("@")) {
    input.classList.add("invalid");
    error.innerHTML = "Please enter a correct email.";
  }
};

input.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.innerHTML = "";
  }
};

function initMap() {
  let seattle = { lat: 47.666417676610614, lng: -122.41249736723638 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: seattle,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ]
  });

  let marker = new google.maps.Marker({
    position: { lat: 40.689244, lng: -73.906453 },
    icon: {
      position: { lat: 40.689244, lng: -73.906453 },
      url: "./assets/icons/Pin.svg",
      scaledSize: new google.maps.Size(70, 70),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(25, 25),
      zIndex: 1
    },
    map: map,
    opacity: 1.0
  });

  let fadingOut = false;
  setInterval(() => {
    if (marker.opacity <= 0.1) {
      fadingOut = false;
    } else if (marker.opacity >= 0.9) {
      fadingOut = true;
    }

    marker.opacity = fadingOut ? marker.opacity - 0.1 : marker.opacity + 0.1;
    marker.setOpacity(marker.opacity);
  }, 100);
  
}
