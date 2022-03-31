<template>
     <div class="card shadow-lg">
         <div class="card-header bg-primary text-white">
            <h2 class="text-center">User Login</h2>
         </div>
         <!-- <pre>{{this.user}}</pre> -->
         <div class="card-body">
            <div v-if="login">
                <h3>Hello User</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias deserunt nostrum, ut, iure ipsum asperiores consectetur perspiciatis amet dolore impedit praesentium dignissimos pariatur magni quasi voluptatibus, sint tempore culpa a.</p>
            </div>

            <div v-if="!login">
                <h3>By User</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias deserunt nostrum, ut, iure ipsum asperiores consectetur perspiciatis amet dolore impedit praesentium dignissimos pariatur magni quasi voluptatibus, sint tempore culpa a.</p>
            </div>

            <div>
                <button v-if="!login" @click="loginState(true)" class="btn btn-success">Login</button>
                <button v-if="login" @click="loginState(false)" class="btn btn-danger">Logout</button>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    name: 'Authentication',
    data: function () {
        return {
            login: false
        }
    },
    methods: {
        loginState(value){
            this.login = value
        }
    }
}
</script>

<style scoped>

</style>