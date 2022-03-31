<template>

  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Customer name="Story One" writer="Monoranjan Das" age="28"/>
  <Employee/>
  <div class="row my-5">
    <h2 class="text-center">Event Handling</h2>
    <div class="col-md-1"></div>
    <div class="col-md-5">
        <Counter/>
    </div>
    <div class="col-md-5">
        <Greeting/>
    </div>
  </div>

  <div class="row mx-2">
    <h2 class="text-center">Form Handling</h2>
    <div class="col-md-4">
        <Register/>
    </div>
    <div class="col-md-4">
        <Authentication/>
    </div>
    <div class="col-md-4">
      <Login/>
    </div>
  </div>

  <div class="row my-5">
    <h2 class="text-center mb-3">For Loop</h2>
    <div class="col-md-12">
      <UserList />
    </div>
  </div>
  
  
</template>

<script>
import Customer from './components/Customer.vue'
import Employee from './components/Employee.vue'
import Counter from './components/Counter.vue'
import Greeting from './components/Greeting.vue'
import Register from './components/Register.vue'
import Authentication from './components/Authentication.vue'
import Login from './components/Login.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    Customer,
    Employee,
    Counter,
    Greeting,
    Register,
    Authentication,
    Login,
    UserList
  }
}
</script>

<style>

</style>
