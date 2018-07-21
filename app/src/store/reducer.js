import initialState from './initialState';
import { LOADING, LOAD_SOCIALS_SUCCESS, LOAD_SKILLS_SUCCESS, LOAD_PROJECTS_SUCCESS } from '../actions/types';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        socialsLoading: action.payload,
        skillsLoading: action.payload,
        projectsLoading: action.payload,
      };
    }
    case LOAD_SOCIALS_SUCCESS: {
      return {
        ...state,
        socials: action.payload,
        socialsLoading: false
      };
    }

    case LOAD_SKILLS_SUCCESS: {
      return {
        ...state,
        skills: action.payload,
        skillsLoading: false
      };
    }
    case LOAD_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: action.payload,
        projectsLoading: false
      };
    }

    default:
      return state;
  }
}

export default reducer;