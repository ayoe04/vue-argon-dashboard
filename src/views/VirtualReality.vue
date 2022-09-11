<template>
  <div class="card mx-4" id="top">
  <div class="card-header pb-0">
    <h2>Update User</h2>
  </div>
  <div class="card-body px-3 pt-0 pb-2">
    <div class="mb-3">
      <label for="Name" class="form-label fs-5 text-uppercase font-weight-bolder opacity-7">Name</label>
      <input type="text" class="form-control" id="Name" v-model="name" />
      <div>
        <label for="Job" class="form-label fs-5 text-uppercase font-weight-bolder opacity-7">Job</label>
        <input type="text" class="form-control" id="Job" v-model="job" />
      </div><br>
      <button @click="updateUser" class="btn btn-primary">Update</button>
      <div id="name"></div>
      <div id="job"></div>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
      return {
          name: '',
          job: ''

      }



  },

  methods: {
      async updateUser() {
          try {
              const user = await axios.put(
                  "https://reqres.in/api/users/2",
                  {
                      name: this.name,
                      job: this.job,
                  }
              );

              console.log(user);
              alert("User updated!");
          } catch (e) {
              console.log(e);
          }
      }
  },
}
</script>