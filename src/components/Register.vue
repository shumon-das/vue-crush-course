<template>
     <div class="card shadow-lg">
         <div class="card-header bg-primary text-white">
            <h2 class="text-center">Registration</h2>
         </div>
         <!-- <pre>{{this.user}}</pre> -->
         <div class="card-body">
            <form @submit.prevent="register()">
                <div class="mb-2">
                    <input v-model="user.name" class="form-control" placeholder="Name" type="text" name="" id="name">
                </div>
                <div class="mb-2">
                    <input v-model="user.email" class="form-control" placeholder="Email" type="email" name="" id="email">
                </div>
                <div class="mb-2">
                    <input v-model="user.password" class="form-control" type="password" name="" id="password">
                </div>
                <div class="mb-2">
                    <input class="btn btn-success" type="submit" value="Submit">
                </div>
            </form>
         </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data: function () {
        return {
            user: {
                name: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        register(){
            console.log(this.user)
        }
    }
}
</script>

<style scoped>

</style>