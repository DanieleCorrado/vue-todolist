const { createApp } = Vue;

createApp({

  data() {
    return {
      error: false,
      newTask: '',
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

    // Eliminazione di una task

    deleteTask(index) {

      this.tasks.splice(index, 1);
    },

    // Inserimento di una nuova task

    addTask() {

      if (this.newTask !== '' && this.newTask.length >= 5) {

        this.tasks.unshift({
          text: this.newTask,
          done: false
        })

        this.error = false;
      } else {

        this.error = true;
      }
      
      this.newTask = '';
    },

    // Modifica dello stato di una task

    changeStatus(index) {

      if (this.tasks[index].done === false) {
        this.tasks[index].done = true;
      } else {
        this.tasks[index].done = false
      }
    }
  }

}).mount("#app")

