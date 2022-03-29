<template>
    <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <h2 class="text-center">Employee</h2>   
            <table class="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Date Entered</th>
                </thead>
                <tbody>
                    <td>{{this.employee.id}}</td>
                    <td>{{this.employee.name}}</td>
                    <td>{{this.employee.age}}</td>
                    <td>{{this.employee.designation}}</td>
                    <td>{{this.employee.dateEnterd}}</td>
                </tbody>
            </table> 
        </div>
    </div>

</template>

<script>
export default {
    name: 'Employee',
    data: function(){
        return {
            employee: {
                id: 1,
                name: 'Monoranjan Das',
                age: '29',
                designation: 'Junior Sorfware Developer',
                dateEnterd: '30-03-2022'
            }
        }
    }
}
</script>

<style scoped>

</style>