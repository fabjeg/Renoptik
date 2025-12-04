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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .card {
    position: relative;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    transition: all var(--transition-base);
    border: 1px solid rgba(255, 255, 255, 0.8);
    min-height: 340px;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transition: transform var(--transition-base);
  }

  .card:hover::before {
    transform: scaleX(1);
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(26, 115, 232, 0.2);
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    z-index: 2;
  }

  .card .front-content img {
    width: 80px;
    height: 80px;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    transition: all var(--transition-base);
  }

  .card:hover .front-content img {
    transform: scale(1.1);
  }

  .card .front-content p {
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: var(--text-primary);
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
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
    padding: 2rem;
    gap: 1rem;
    background: linear-gradient(135deg, rgba(26, 115, 232, 0.95), rgba(245, 158, 11, 0.95));
    color: white;
    line-height: 1.6;
    border-radius: var(--radius-xl);
    pointer-events: none;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 3;
  }

  .card .content p {
    font-size: 1rem;
    color: white;
    margin: 0;
  }

  .card .content .heading {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
  }

  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .card:hover .front-content {
    opacity: 0;
    transform: translateY(-20px);
  }

  @media (max-width: 768px) {
    .cards-container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .card {
      min-height: 300px;
    }
  }
`;
