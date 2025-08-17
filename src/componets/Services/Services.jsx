import React, { useState } from "react";
import "./Services.css";
import bridal from "../../assets/Services/bridal.png"
import party from "../../assets/Services/party.png";
import cam from "../../assets/Services/cam.png";
import grooming from "../../assets/Services/grooming.png";
import addon from "../../assets/Services/addon.png";

function Service() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Bridal & Wedding Makeup",
      image: bridal, // put your image path
      details: [
        "Bridal Makeup (traditional, HD, airbrush, matte, dewy, etc.)",
        "Engagement Makeup",
        "Mehndi / Haldi Makeup",
        "Sangeet / Reception Makeup",
        "Bridal Hair Styling & Draping (saree/dupatta)"
      ]
    },
    {
      title: "Party & Occasion Makeup",
      image: party, // put your image path
     details: [
        "Birthday Party Makeup",
        "Festive & Event Makeup",
        "Cocktail & Reception Looks",
        "Evening Glam Makeup"
      ]
    },
    {
      title: "Professional & Editorial Makeup",
      image: cam, // put your image path
      details: [
        "Portfolio Makeup",
        "Fashion Show Makeup",
        "Editorial & Magazine Looks",
        "Camera-ready HD Makeup"
      ]
    },
    {
      title: "Grooming & Personal Styling",
      image: grooming, // put your image path
      details: [
        "Everyday Natural Makeup",
        "Personal Styling Sessions",
        "Hair Grooming & Styling",
        "Wardrobe Guidance"
      ]
    },
    {
      title: "Add-on Services",
      image: addon, // put your image path
      details: [
        "Saree Draping",
        "Nail Art",
        "Lash Extensions",
        "Quick Touch-ups"
      ]
    }
  ];

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="service-section">
      <div className="service-header">
        <h2>Our Services</h2>
        <p>
         Bridal makeup is entirely up to the bride. What could be great for one bride is awful for the next. 
         Are you a bride to be that has no clue what kind of makeup to have on your big day? Many brides, often 
         feel overwhelmed by all the planning and excitement going on around them, that they completely forget 
         about deciding on their hair and makeup. This decision tends to come nearer the wedding day,
          but if you’re one of these brides 
         that are super organised and want to plan everything ahead of schedule, you have come to the right place!
        </p>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleService(index)}
          >
            <img src={service.image} alt={service.title} className="service-img" />
            <h3>{service.title}</h3>
            {activeIndex === index && (
              <ul className="service-details">
                {service.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
