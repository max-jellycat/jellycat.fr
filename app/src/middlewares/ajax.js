import * as contentful from 'contentful';
import { LOADING } from '../actions/types';
import { loadSocials, loadSkills, loadProjects } from '../actions/actions';

const ajaxMiddleware = store => next => action => {

  const client = contentful.createClient({
    space: 'q5nu4huodbh0',
    accessToken: 'e0f768a4f55c4c5eff9ce2024c313142e66eeb10493af7b3b48fc31f71443b9b'
  });

  switch(action.type) {
    case LOADING: {
      client.getEntries({ order: 'fields.title', content_type: 'socials' })
        .then(({ items }) => {
          store.dispatch(loadSocials(items));
        })
        .catch(err => console.error(err));

      client.getEntries({ order: 'fields.title', content_type: 'skills' })
        .then(({ items }) => {
          store.dispatch(loadSkills(items));
        })
        .catch(err => console.error(err));

      // client.getEntries({ order: 'fields.title', content_type: 'projects' })
      //   .then(({ items }) => {
      //     store.dispatch(loadProjects(items));
      //   })
      //   .catch(err => console.error(err));
    }

    default: break;
  }

  next(action);
}

export default ajaxMiddleware;