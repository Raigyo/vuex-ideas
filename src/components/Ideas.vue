<template>
  <!-- one main container needed -->
  <div>
    <div>
      <h1>Ideas</h1>
      <ul>
        <!-- The v-model Vue directive allows us to create a two-way binding -->
        <draggable class="ideas" v-model="allIdeas" group="ideas">
          <Idea v-for="idea in allIdeas" :key="idea.id" :item="idea" />
        </draggable>
      </ul>
    </div>
    <div class="destination">
      <div>
        <h3>Courses</h3>
        <!-- we use same group name to allow drag and drop between the 2 groups -->
        <draggable class="ideas" v-model="courses" group="ideas">
          <Idea v-for="course in courses" :key="course.id" :item="course" />
        </draggable>
      </div>
      <div>
        <h3>Paperwork</h3>
        <draggable class="ideas" v-model="paperWorks" group="ideas">
          <Idea v-for="paperWork in paperWorks" :key="paperWork.id" :item="paperWork" />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Idea from "@/components/Idea";
  export default {
    components: {
      draggable,
      Idea
    },
    computed: {
      allIdeas: {
        get() {
          return this.$store.getters.allIdeas;
        },
        set(value) {
          this.$store.dispatch("saveIdeasOrdering", value);
        }
      },
      courses: {
        get() {
          return this.$store.getters.courses;
        },
        set(value) {
          this.$store.dispatch("saveCoursesOrdering", value);
        }
      },
      paperWorks: {
        get() {
          return this.$store.getters.paperWorks;
        },
        set(value) {
          this.$store.dispatch("savePaperworksOrdering", value);
        }
      }
    }
  }
</script>

<style scoped>

ul {
    list-style-type: none;
    padding-inline-start: 0px;
}

.ideas {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  height: 30vh;
}
.destination {
  display: flex;
  justify-content: space-evenly;
}
</style>
