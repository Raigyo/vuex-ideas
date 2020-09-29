import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {}
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
    }
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
    }
  },
  modules: {}
});
