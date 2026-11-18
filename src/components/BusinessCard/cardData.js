// All the text and links on the card live here.
// Change this file to update the card; the layout reads from it.

const cardData = {
  brand: "SIRNETZ",
  name: "Alejandro Abonnanzieri",
  title: "Automation Technician & Web Developer",
  location: "Salt Lake City, UT",
  photo: "/headshot.jpg",
  skills: ["PLC", "FANUC", "HMI", "Web & AI"],
  certificate: "Automated Manufacturing Certificate · April 2027",

  // "Save contact" downloads this file (it lives in /public).
  vcard: "/alejandro-abonnanzieri.vcf",

  // QR code image (in /public). It points to this card's web address.
  qrCode: "/qr-card.svg",

  links: [
    { label: "Call", href: "tel:+13855152421", icon: "phone" },
    { label: "Email", href: "mailto:aabonnanzieri@gmail.com", icon: "mail" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alejandro-abonnanzieri-929b84b3/",
      icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/Ghub10", icon: "github" },
    { label: "Portfolio", href: "https://www.sirnetz.com/", icon: "globe" },
  ],
};

export default cardData;
