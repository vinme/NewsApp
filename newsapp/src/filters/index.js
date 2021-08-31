import uppercase from './filter';
import formatDate from './formatDate';

export default {
     install(Vue) {
         Vue.filter('uppercase', uppercase);
         Vue.filter('formatDate', formatDate);
     }
}