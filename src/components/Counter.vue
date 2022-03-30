<template>
        <div class="card shadow-lg">
            <div class="card-header">
                <h2 class="text-center">Counter</h2>
            </div>
            <div class="card-body">
                <p class="h3 text-center display-3 my-5">{{this.count}}</p>
                <div class="row my-3 mx-3">
                    <div class="col-md-12 display-block text-center">
                        <button class="btn btn-success col-md-3 mx-3" @click="this.incr">Incremeant</button>
                        <button class="btn btn-danger  col-md-3 mx-3" @click="this.decr">Decremeant</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Counter',
    data(){
        return {
            count: 0
        };
    },
    methods: {
        incr() {
            this.count = this.count + 1;
        },
        decr() {
            this.count = this.count - 1;
        }
    }
}
</script>

<style scoped>

</style>