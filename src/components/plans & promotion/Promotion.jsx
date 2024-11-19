import React from "react";
import img from "./PPImage/pilates2.jpg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import "./promotion.css";
import image from "./PPImage/yogaclass.jpg";

const Promotions = () => {
  return (
    <>
      <div className="page-wrap mb-5">
        {/* Section to hold post sliders */}
        <section className="post-sliders">
          {/* Heading for the section */}
          <h2 className="section-heading">Promotions</h2>
          {/* Main post slider container */}
          <div className="post-slider bg-gradient-to-r from-green to-white rounded-md ">
            {/* Header card (title and sponsor information) */}
            <div
              className="post-slider-header header-card bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            >
              <h2 className="header-card-title bg-white text-green mb-[130px] ">
                Promotion Plan
              </h2>
              <p className="header-card-sponsor bg-white text-green mb-2 px-2 py-2">
                14 + 1 Trial
              </p>
              <p className="header-card-sponsor bg-white text-green mb-2 px-2 py-2">
                4725 THB 315 THB / Class
              </p>
              <p className="header-card-sponsor bg-white text-green mb-2 px-2 py-2">
                Drop-in 599 THB 2 months Starts on purchase date
              </p>
              <p className="header-card-sponsor bg-white text-green mb-2 px-2 py-2">
              See Review {'\u21AA'}
              </p>
            </div>
            {/* Grid layout for mini cards (articles) */}
            <div className="mini-card-grid ">
              {/* First mini card */}
              {/* bg-gradient-to-r from-green-300 to-green-300 */}
              <article className="mini-card  bg-white">
                <time>
                  <strong>Review</strong> jan 6, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced CSS Flexbox</h3> */}

                {/* Short description of the article */}
                <div className="mini-card-description text-green">
                My start of the day with a healthy yoga session with Master Adi . Stretching ,good breathing,activation of my muscles and relaxation of my body and mind. It is really invigorating time. God bless 🙏
                </div>

                {/* Author information for the article */}
                <div className="author-row">
                  {/* Author avatar */}
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  {/* Link to author profile */}
                  <a
                    className="author-name "
                    href="#"
                    style={{ color: "black" }}
                  >
                    Narinder Singh
                  </a>
                </div>
              </article>

              {/* Second mini card */}
              <article className="mini-card  bg-white">
                <time>
                  <strong>Review</strong> on Jul 10, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced CSS Flexbox</h3> */}

                {/* Short description of the article */}
                <div className="mini-card-description text-green">
                One of the best yoga centres you will ever find. Aadi is truely a yoga master and whatever your experience, he will guide you through it
                </div>

                {/* Author information for the article */}
                <div className="author-row">
                  {/* Author avatar */}
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  {/* Link to author profile */}
                  <a
                    className="author-name "
                    href="#"
                    style={{ color: "black" }}
                  >
                    Des P
                  </a>
                </div>
              </article>

             

              {/* Fifth mini card */}
              <article className="mini-card bg-white">
                <time>
                  <strong>Review</strong> on Dec 5, 2023
                </time>

                {/* <h3 className="mini-card-title">
                  Responsive Web Design Basics
                </h3> */}

                <div className="mini-card-description">
                Very good place to practice yoga, calm, relaxing, convenient to training yoga .The teacher is kind and experienced, and the fellow yoga practitioners are cute.
                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/18"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#" style={{ color: "black" }}>
                  Pattarawadee Palakul
                  </a>
                </div>
              </article>

              {/* Sixth mini card */}
              <article className="mini-card bg-white">
                <time>
                  <strong>Review</strong> on Feb 22, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced Selectors in CSS</h3> */}

                <div className="mini-card-description">
                Very convenient location, near Benchakitti Park, near BTS station.   Experienced teacher who is  sincere and very helpful.  Nice  and clean studio.
                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#" style={{ color: "black" }}>
                  Sermsook Patmastana
                  </a>
                </div>
              </article> <article className="mini-card bg-white">
                <time>
                  <strong>Review</strong> on Feb 22, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced Selectors in CSS</h3> */}

                <div className="mini-card-description">
                Very convenient location, near Benchakitti Park, near BTS station.   Experienced teacher who is  sincere and very helpful.  Nice  and clean studio.
                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#" style={{ color: "black" }}>
                  Sermsook Patmastana
                  </a>
                </div>
              </article> <article className="mini-card bg-white">
                <time>
                  <strong>Review</strong> on Feb 22, 2024
                </time>

                {/* <h3 className="mini-card-title">Advanced Selectors in CSS</h3> */}

                <div className="mini-card-description">
                Very convenient location, near Benchakitti Park, near BTS station.   Experienced teacher who is  sincere and very helpful.  Nice  and clean studio.
                </div>

                <div className="author-row">
                  <div>
                    <img
                      alt=""
                      src="https://avatar.iran.liara.run/public/14"
                      className="avatar"
                    />
                  </div>
                  <a className="author-name" href="#" style={{ color: "black" }}>
                  Sermsook Patmastana
                  </a>
                </div>
              </article>
            </div>{" "}
            {/* End of mini-card grid */}
          </div>{" "}
          {/* End of post-slider */}
        </section>{" "}
        {/* End of post-sliders section */}
      </div>{" "}
      {/* End of page-wrap */}
    </>
  );
};

export default Promotions;
