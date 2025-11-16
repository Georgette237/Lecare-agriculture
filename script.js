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

  const phoneNumber = "237673255069"; // ← Remplace par le numéro WhatsApp de l’admin (avec indicatif pays)
   // Construit le message à envoyer
   const whatsappMessage = `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`;
            
    // Encode le message pour l'URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
            
    // Construit l'URL WhatsApp
     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
      // Ouvre WhatsApp avec le message pré-rempli
      window.open(whatsappURL, '_blank');
  //construire un message a envoyer
 // const text = `Hello !!!, je suis ${name}.\n(${email}).\n\n${message}`;
 
  //const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  //window.open(whatsappURL, "_blank");
}



