<template>
  <div>
    <form @submit.prevent="create">
      <label for="idea-title">Idea's title</label>
      <input type="text" id="id-title" v-model="title" />
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ""
      }
    },
    methods: {
      create() {
        const idea = {
          createdAt: new Date(),
          title: this.title
        };
        /* we can choose to commit a state or dispatch an action */
        
        //this.$store.commit("CREATE_IDEAS", idea);
        //ideas = payload (id) from store
        this.$store.dispatch("createIdea", idea);
        this.title = "";
      }
    },
  }
</script>

