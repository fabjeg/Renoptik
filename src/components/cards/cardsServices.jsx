import React from "react";
import styled from "styled-components";
import svg from "../../assets/logo_svg/car_13260.png";
import svg1 from "../../assets/logo_svg/creativity_innovation_brainstorming_inspiration_vision_icon_260962.png";
import svg2 from "../../assets/logo_svg/password_essential_protect_safety_secure_shield_protection_security_ui_icon_219928.png";
import svg3 from "../../assets/logo_svg/road_icon_198842.png";

export function Card() {
  const services = [
    {
      logo: svg1,
      title: "Rénovation de phares",
      content:
        "Redonnez éclat et performance à vos phares grâce à notre expertise en restauration et en optimisation.",
    },
    {
      logo: svg3,
      title: "Amélioration de la visibilité",
      content:
        "Bien voir pour être vu, pour la protection de tous, aux yeux de tout le monde. Ce n'est pas que de l’esthétique, c’est aussi de la sécurité.",
    },
    {
      logo: svg,
      title: "Esthétique",
      content:
        "Au-delà de l'aspect sécurité (contrôle technique), une rénovation de phares redonne une fraîcheur à votre véhicule, aux premiers regards, pour une vente par exemple ou pour le plaisir d'un propriétaire soigneux.",
    },
    {
      logo: svg2,
      title: "Durabilité garantie",
      content:
        "Les phares d'une voiture sont en première ligne à être exposés sur la route. Ils subissent les éléments et de par leur matière, ils ne sont pas éternels. Aucune solution à moindre coût ne tient dans le temps, mais notre travail offre une solution efficace, maîtrisée, au rapport qualité/prix satisfaisant.",
    },
  ];

  return (
    <StyledWrapper>
      <div className="cards-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="card"
          >
            <div className="front-content">
              <img
                src={service.logo}
                alt={service.title}
              />
              <p>{service.title}</p>
            </div>
            <div className="content">
              <p>{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card {
    width: 250px;
    height: 300px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    background: white;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .front-content img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  .card .front-content p {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background: #e7dcca;
    color: black;
    line-height: 1.5;
    border-radius: 5px;
    pointer-events: none;
    transform: translateY(100%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content .heading {
    font-size: 20px;
    font-weight: 700;
  }

  .card:hover .content {
    transform: translateY(0);
  }

  .card:hover .front-content {
    transform: translateY(-30%);
  }

  .card:hover .front-content p {
    opacity: 0;
  }
`;
