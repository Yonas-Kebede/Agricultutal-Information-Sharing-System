import React from "react";
import './style.css'

const Team = () =>
{
    const teamMembers = [
        {
            name: "Sewlesew B.",
            img: require("../assets/sewlesew.jpg").default,
            text: "Web developer",
            socials: ["bi bi-twitter text-dark mx-1", "bi bi-facebook text-dark mx-1", "bi bi-linkedin text-dark mx-1", "bi bi-instagram text-dark mx-1"]
        },
        {
            name: "Melkamu Z.",
            img: require("../assets/melkamu.jpg").default,
            text: "Web developer",
            socials: ["bi bi-twitter text-dark mx-1", "bi bi-facebook text-dark mx-1", "bi bi-linkedin text-dark mx-1", "bi bi-instagram text-dark mx-1"]
        },
        {
            name: "Yonas K.",
            img: require("../assets/Yonas.jpg").default,
            text: "Web developer",
            socials: ["bi bi-twitter text-dark mx-1", "bi bi-facebook text-dark mx-1", "bi bi-linkedin text-dark mx-1", "bi bi-instagram text-dark mx-1"]
        },
        {
            name: "Samuel K.",
            img: require("../assets/samuel.jpg").default,
            text: "Web developer",
            socials: ["bi bi-twitter text-dark mx-1", "bi bi-facebook text-dark mx-1", "bi bi-linkedin text-dark mx-1", "bi bi-instagram text-dark mx-1"]
        }
    ];

    return (
        // section-padding
        
    <section className="team" id="team">
    <div className="container  border-bottom pb-4 border-top pt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="section-header text-center pb-5">
            <h2>Our Team</h2>
            <p>All of the developers for this system are 4<sup>th</sup> year computer science students</p>
          </div>
        </div>
      </div>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-12 col-md-6 col-lg-3 zoom-out" key={index}>
            <div className="card text-center bg-light">
              <div className="card-body">
                <img src={member.img} alt="" className="img-fluid rounded-circle" />
                <h3 className="card-title py-2">{member.name}</h3>
                <p className="card-text">{member.text}</p>
                <p className="socials">
                  {member.socials.map((social, socIndex) => (
                    <i key={socIndex} className={social}></i>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    );
};

export default Team;