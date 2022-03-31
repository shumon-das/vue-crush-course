<template>
     <div class="card shadow-lg">
         
         <!-- <pre>{{this.user}}</pre> -->
         <div class="card-body">
            <table class="table table-hover text-center table-striped">
                <thead class="bg-success text-white py-1">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Zip Code</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.address.zipcode}}</td>
                        <td>{{user.address.street}}</td>
                        <td>{{user.address.city}}</td>
                        <td>{{user.phone}}</td>
                        <td>{{user.website}}</td>
                        <td>{{user.company.name}}</td>
                        <td><button class="btn btn-small btn-info"><i class="fa fa-eye"></i></button></td>
                    </tr>
                </tbody>
            </table>
         </div>
    </div>
</template>

<script>
import { UserData } from "@/database/UserData";

export default {
    name: 'UserList',
    data: function () {
        return {
            loading: false,
            users: [],
            errorMessage: null
        }
    },
    created: async function(){
        try{
            this.loading = true
            let result = await UserData.getAllUsers()
            this.loading = false
            this.users = result.data
        }catch(error){
            this.loading = false
            this.errorMessage = error
        }
    }
}
</script>

<style scoped>

</style>