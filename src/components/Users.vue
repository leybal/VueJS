<template>
  <div class="users">
    <form v-on:submit.prevent="addUser()" >
      <input type="text" v-model="name" placeholder="Name">
      <input type="email" v-model="email" placeholder="email@ex.com">
      <input type="submit" value="submit">
    </form>
    <h1>{{msg}}</h1>
    <ul>
      <li v-for="(user, key) in orderedUsers" v-bind:key="key">
        <p >
          Name:
          <router-link v-if="user.id" v-bind:to="'/users/' + user.id">{{ user.name }}</router-link>
          <span v-else>{{user.name}}</span>
          <button v-on:click="deleteUser(user)">x</button>
        </p>
        <p>E-mail: {{user.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      msg: 'List of users',
      name: '',
      email: '',
      users: []
    }
  },
  computed: {
    orderedUsers () {
      return _.orderBy(this.users, 'name')
    }
  },
  methods: {
    addUser: function () {
      this.users.push({name: this.name, email: this.email})
      this.name = ''
      this.email = ''
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
  },
  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function (data) {
        if (data.body.length) {
          this.users = data.body
        } else {
          this.users = [
            {
              'id': 1,
              'name': 'Leanne Graham',
              'email': 'Sincere@april.biz'
            },
            {
              'id': 2,
              'name': 'Ervin Howell',
              'email': 'Shanna@melissa.tv'
            }
          ]
        }
      })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
li {
  padding: 0;
}
a {
  color: #42b983;
}
input {
  display: block;
  margin-bottom: 15px;
}
</style>
