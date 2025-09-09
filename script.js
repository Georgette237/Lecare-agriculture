let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change every 5 seconds
}

function redirectToWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  const text = `Bonjour, je suis ${name} (${email}).\n\n${message}`;
  const phoneNumber = "237 673255069"; // ← Remplace par le numéro WhatsApp de l’admin (avec indicatif pays)

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.open(whatsappURL, "_blank");
}

