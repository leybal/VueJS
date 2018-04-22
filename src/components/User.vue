<template>
  <div class="user">
    <div v-if="user">
      <h1>{{user.name }}</h1>
      <p>E-mail: {{user.email}}</p>
      <p>Username: {{user.username}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      user: {}
    }
  },
  created: function () {
    let id = this.$route.params.id
    this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(function (data) {
        this.user = data.body
      })
  }
}
</script>

<style scoped>

</style>
