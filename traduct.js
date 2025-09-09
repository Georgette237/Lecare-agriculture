
  const traductions = {
    fr: {
      teamTitle: "Notre Équipe",
      testimonialsTitle: "Témoignages de nos Clients",
    },
    en: {
      teamTitle: "Our Team",
      testimonialsTitle: "Client Testimonials",
    }
  };

  function changerLangue(lang) {
    document.querySelector('#team h2').innerText = traductions[lang].teamTitle;
    document.querySelector('#temoignages h2').innerText = traductions[lang].testimonialsTitle;
  }
