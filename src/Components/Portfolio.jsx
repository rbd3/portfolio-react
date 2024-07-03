/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "eboons 🎉",
    description:
      "a website that boosts your buying power by offering discounted prices and special deals..",
    url: "https://www.eboons.ch",
  },
  {
    title: "RBD School",
    description:
      "This Ruby on Rails  with React project is about  a high school in Madagascar based on three subjects : computer science, english as main language, and chess game.Whether you are a parent or student this school will help you or your children to be a future inrternational worker in the Technologie areas.",
    url: "https://school-react.onrender.com/",
  },
  {
    title: "TV-Show",
    description:
      "The TV-ShoW Episodes website is a platform that provides information about various TV-serie. The website utilizes an API to fetch data about popular TV-shows episodes : season number or summary about it for example. You can add a comment",
    url: "https://tv-show-episodes.onrender.com",
  },
  {
    title: "BookStore 🎉",
    description:
      "Book Store, a user-friendly React-based application that enpowers user to effortlessly add and remove books form your collection.Adding a book is as simple as providing the book title and author name.Once you have entered the required information, just press the enter key or click the submit button to add the book store.",
    url: "https://bookstore-5cb5.onrender.com",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
