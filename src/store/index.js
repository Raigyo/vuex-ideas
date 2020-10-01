import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {},
    courses: [],
    paperWorks: []
  },
  mutations: {
    CREATE_IDEAS(state, payload){
      const id = Date.now();
      state.ideas[id] = payload;
      //we create a new object because the original is unmutable
      //we use spread operator to copy the object
      state.ideas = {...state.ideas};

    },
    SAVE_IDEAS_ORDERING(state, payload){
      state.ideas = {...payload};
    },
    SAVE_COURSES_ORDERING(state, payload){
      state.courses = [...payload];
    },
    SAVE_PAYPERWORKS_ORDERING(state, payload){
      state.paperWorks = [...payload];
    }
  },
  actions: {
    createIdea(context, payload) {
      context.commit("CREATE_IDEAS", payload);
    },
    //id's recrated to have the same format than state
    saveIdeasOrdering({ commit }, payload){
      const ideas = {};
      payload.map(idea => {
        ideas[idea.id] = idea;
      });
      commit("SAVE_IDEAS_ORDERING", ideas);
    },
    saveCoursesOrdering({ commit }, payload){
      commit("SAVE_COURSES_ORDERING", payload);
    },
    savePaperworksOrdering({ commit }, payload){
      commit("SAVE_PAYPERWORKS_ORDERING", payload);
    },
  },
  getters: {
    allIdeas(state){
      //retrive all keys of the object and return value of keys
      const allIdeas = Object.keys(state.ideas).map(key =>
        {
          const idea = state.ideas[key];
          idea.id = key;
          return idea;
        });
        return allIdeas;
    },
    courses(state){
      return state.courses;
    },
    paperWorks(state){
      return state.paperWorks;
    },
  },
  modules: {}
});
