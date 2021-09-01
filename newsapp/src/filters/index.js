import uppercase from './filter';
import formatDate from './formatDate';
import excerpt from './excerpt';
export default {
     install(Vue) {
         Vue.filter('uppercase', uppercase);
         Vue.filter('formatDate', formatDate);
         Vue.filter('excerpt', excerpt);
     }
}