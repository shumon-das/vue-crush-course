<template>
     
     <div class="card shadow-lg">
         <div class="card-header">
            <h2 class="text-center">Greeting</h2>
         </div>
          <div class="card-body">
              <p class="h3 text-center display-3 my-5">Hi... <span>{{this.message}}</span></p>
              <div class="row my-3 mx-3">
                  <div class="col-md-12 display-block text-center">
                      <button class="btn btn-success col-md-2 mx-1" @click="this.greet('Good Morning')">Morning</button>
                      <button class="btn btn-warning  col-md-2 mx-1" @click="this.greet('Good Afternoon')">Afternoon</button>
                      <button class="btn btn-danger  col-md-2 mx-1" @click="this.greet('Good Evening')">Evening</button>
                      <button class="btn btn-dark  col-md-2 mx-1" @click="this.greet('Good Night')">Night</button>
                  </div>
               </div>
           </div>
       </div>
</template>

<script>
export default {
    name: 'Greeting',
    data: function(){
        return {
            message: ''
        }
    },
    methods:{
        greet(value){
            this.message = value;
        }
    }
}
</script>

<style scoped>

</style>