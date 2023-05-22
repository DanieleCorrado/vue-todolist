const { createApp } = Vue;

createApp({

  data() {
    return {
      tasks: [
        {
          text: "prova",
          done: false
        },
        {
          text: "prova2",
          done: false
        },
        {
          text: "prova3",
          done: true
        },
        {
          text: "prova4",
          done: false
        },
      ]
    }
  },

  methods: {
    deleteTask(index) {

      this.tasks.splice(index, 1);
    }
  }
}).mount("#app")

