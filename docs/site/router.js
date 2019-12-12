/*eslint-disable*/
import Vue from 'vue';
import docConfig from './doc.config.js';

const registerRoute = ({ mobile, componentMap }) => {
  const route = [
    {
      path: '/',
      redirect: '/intr'
    }
  ];

  docConfig.nav.forEach(navs => {
   
    function addRoute(page) {
      let { path } = page;
      if (path) {
        path = path.replace('/', '');

        let component;
        if (mobile) {

        } else {
          const module = componentMap[`./${path}.md`]
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
      groups.list.forEach(page => addRoute(page))
    })
  });

  return route;
};

export default registerRoute;
