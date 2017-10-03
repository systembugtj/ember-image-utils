import Ember from "ember";

export default function fetchImage(src) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    }
    image.onerror = reject;
    image.src = src;
  })
}
