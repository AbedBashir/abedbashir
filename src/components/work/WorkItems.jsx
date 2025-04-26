import React from "react";

const WorkItems = ({ item }) => {
  return (
    <a href={item.link} className="work__button fade-in__hover" target="_blank">
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img starting__img" />
        <img
          src={item.scrolling_image}
          alt=""
          className="work__img scrolling__img"
        />
        <h3 className="work__title fade-in__hover">{item.title}</h3>
        <span className="work__reference fade-in__hover">
          {item.company} - {item.location}
        </span>
      </div>
    </a>
  );
};

export default WorkItems;
