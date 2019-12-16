/*eslint-disable*/
import Vue from 'vue';
import docConfig from './doc.config.js';
import { initIframeRouter } from './utils/iframe-router.js';

initIframeRouter();

const registerRoute = ({ mobile, componentMap }) => {

  const route = [
    {
      path: '/',
      redirect: '/backTop'
    }
  ];
  docConfig.nav.forEach(navs => {
    
   
    function addRoute(page) {
      let { path } = page;
      if (path) {
        path = path.replace('/', '');

        let component;
        if (mobile) {

          const module = componentMap[`./${path}/demo/index.vue`];
          if (module) {
            component = module.default
          }
        } else {
          const module =
            componentMap[`./${path}/README.md`] ||
            componentMap[`./${path}.md`];
          component = module.default;
        }
        route.push({
          name: path,
          component,
          path: `/${path}`,
          meta: {
            path,
            name: page.name
          }
        })
      }
    }
    navs.groups.forEach(groups => {
      if (groups.list) {
        groups.list.forEach(page => addRoute(page))
      }
    })
  });
  return route;
};

export default registerRoute;
