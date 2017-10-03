import Ember from 'ember';
import queryExifTags from "dummy/utils/exif-tag";

export default Ember.Route.extend({
  model() {
    const src = "https://raw.githubusercontent.com/exif-js/exif-js/master/example/dsc_09827.jpg";
    return queryExifTags(src).then(tags => {
      return {
        src,
        tags: JSON.stringify(tags)
       }
    })
  }
});
