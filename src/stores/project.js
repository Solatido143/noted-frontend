// src/stores/project.js
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
    selectedProject: null,
  }),
  actions: {
    addProject(project) {
      this.projects.push(project)
    },
    selectProject(projectId) {
      this.selectedProject = this.projects.find((p) => p.id === projectId)
    },
  },
})
