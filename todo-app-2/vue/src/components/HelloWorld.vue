<template>
  <div class="hello">
    <form>
      <input type="text" style="display: none" />
      <input v-model="currentTask" type="text" />
      <input type="button" value="add!" @click="taskCreate" />
    </form>
    <table align="center" border="0">
      <tr>
        <th>done</th>
        <th>task</th>
        <th>delete</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="task.id">
        <td>
          <input
            type="checkbox"
            v-model="task.done"
            @change="taskUpdate(task.id, task.name, task.done)"
          />
        </td>
        <td>
          <input
            type="text"
            v-model="task.name"
            @change="taskUpdate(task.id, task.name, task.done)"
          />
        </td>
        <td>
          <input
            type="button"
            value="delete"
            @click="taskDelete(task.id, index)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data: () => ({
    tasks: [],
    currentTask: '',
  }),
  created: async function () {
    try {
      const result = await axios.get('/task/')
      this.tasks = result.data
    } catch (err) {
      alert(JSON.stringify(err))
    }
  },
  methods: {
    taskCreate: async function () {
      try {
        const result = await axios.post('/task/', {
          name: this.currentTask,
        })
        this.tasks.push(result.data)
        this.currentTask = ''
      } catch (err) {
        alert(JSON.stringify(err))
      }
    },
    taskDelete: async function (id, index) {
      try {
        await axios.delete('/task/' + id)
        this.currentTask = ''
        this.tasks.splice(index, 1)
      } catch (err) {
        alert(JSON.stringify(err))
      }
    },
    taskUpdate: async function (id, val, done) {
      try {
        await axios.put('/task/' + id, {
          name: val,
          done: done,
        })
        this.currentTask = ''
      } catch (err) {
        alert(JSON.stringify(err))
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.table {
  height: 100%;
  text-align: center;
}
</style>
