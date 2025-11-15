const rooms = [
  { name: "Executive Room", price: "₹2499", city: "Pune", image: "images/room1.jpg" },
  { name: "Deluxe AC Room", price: "₹2999", city: "Mumbai", image: "images/room2.jpg" },
  { name: "Corporate Studio", price: "₹1999", city: "Delhi", image: "images/room3.jpg" }
];

const roomList = document.getElementById("room-list");

// Show rooms
rooms.forEach(room => {
  const card = document.createElement("div");
  card.className = "room-card";

  card.innerHTML = `
    <img src="${room.image}" alt="${room.name}">
    <div class="room-info">
      <h3>${room.name}</h3>
      <p>${room.price}</p>
      <button class="book-btn">Book Now</button>
    </div>
  `;

  card.querySelector(".book-btn").onclick = () => {
    const text = encodeURIComponent(`I want to book: ${room.name}`);
    window.open(`https://wa.me/918329095601?text=${text}`, "_blank");
  };

  roomList.appendChild(card);
});

// Contact Form → WhatsApp
document.getElementById("sendBtn").onclick = () => {
  const name = cname.value;
  const phone = cmobile.value;
  const city = ccity.value;

  const text = encodeURIComponent(
    `New Enquiry:\nName: ${name}\nPhone: ${phone}\nCity: ${city}`
  );

  window.open(`https://wa.me/918329095601?text=${text}`, "_blank");
};

// Dark Mode
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};
