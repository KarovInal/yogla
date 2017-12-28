import React from 'react';
import Player from './Player';

function slidesByIdSelector({ slides }) {
  let slidesById = {};

  slides.forEach((slide, index) => {
    let { id } = slide;

    slidesById[id] = {
      id,
      next: slides[index + 1] ? slides[index + 1].id : null,
      prev: slides[index - 1] ? slides[index - 1].id : null
    }
  });

  return slidesById;
};

function slidesDataSelector({ slides }) {
  let transformSlides = {};

  slides.forEach((slide, index) => {
    let { id } = slide;

    transformSlides[id] = {
      id,
      label: slide.titleAsan,
      delay: slide.delayAsan,
      description: slide.descriptionAsan,
      image: slide.imageAsan,
      icon: slide.iconAsan,
      voice: slide.voiceAsan
    };
  });

  return transformSlides;
}

function startBySelector({ slides, startBy = 0 }) {
  return slides[startBy].id
}

export default props => {
  const normolizeData = {
    slidesById: slidesByIdSelector(props),
    slides: slidesDataSelector(props),
    startBy: startBySelector(props)
  }

  return <Player {...props} {...normolizeData} />
}