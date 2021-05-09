import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
// import YoutubeIcon from "@material-ui/icons/YouTube";
import Particle from "../Components/Particle";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con" id="home">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Hasib</span>
        </h1>
        <p>
          Profissional Full-Stack web developer. Willing to help implementing
          some great ideas that people / team working with.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/hasib.tanzimul/"
            className="icon i-facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/Tanzimul-Hasib"
            className="icon i-github"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/tanzimul-hasib-29b9b0143/"
            className="icon i-linkdin"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      // .i-youtube {
      //   &:hover {
      //     border: 2px solid red;
      //     color: red;
      //   }
      // }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
