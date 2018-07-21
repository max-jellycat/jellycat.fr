import { LOADING, LOAD_SOCIALS_SUCCESS, LOAD_SKILLS_SUCCESS, LOAD_PROJECTS_SUCCESS } from './types';

export const startLoading = (isLoading = true) => ({
  type: LOADING,
  payload: isLoading
});

export const loadSocials = socials => ({
  type: LOAD_SOCIALS_SUCCESS,
  payload: socials
});

export const loadSkills = skills => ({
  type: LOAD_SKILLS_SUCCESS,
  payload: skills
});

export const loadProjects = projects => ({
  type: LOAD_PROJECTS_SUCCESS,
  payload: projects
});