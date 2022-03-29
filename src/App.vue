<template>

  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Customer name="Story One" writer="Monoranjan Das" age="28"/>
  <Employee/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Customer from './components/Customer.vue'
import Employee from './components/Employee.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Customer,
    Employee
  }
}
</script>

<style>

</style>
