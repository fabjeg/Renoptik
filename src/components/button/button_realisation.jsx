import React from 'react';
import styled from 'styled-components';

export function ButtonRealisation () {
  return (
    <StyledWrapper>
      <button>
        <p>Voir nos réalisations</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
    --primary-color: #111;
    --hovered-color: #e7dcca;
    position: relative;
    display: flex;
    font-weight: 600;
    font-size: 20px;
    gap: 0.5rem;
    align-items: center;
  }

  button p {
    margin: 0;
    position: relative;
    font-size: 20px;
    background: linear-gradient(90deg, var(--primary-color), var(--hovered-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200%;
    transition: background-position 0.3s ease-out;
  }

  button:hover p {
    background-position: -100% 0;
  }

  button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0;
    bottom: -7px;
    background: var(--hovered-color);
    height: 2px;
    transition: 0.3s ease-out;
  }

  button:hover::after {
    width: 100%;
  }

  button:hover svg {
    transform: translateX(4px);
    color: var(--hovered-color);
  }

  button svg {
    color: var(--primary-color);
    transition: 0.2s;
    position: relative;
    width: 15px;
    transition-delay: 0.2s;
  }
`;
