<template>
    <div class="row">
        <h1 class="text-center">From Customer</h1>
        <div class="col-md-6">
            <h3 class="text-center">{{name}}</h3>
            <h6 class="text-center">{{writer}} {{age}}</h6>
            <p class="m-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aut itaque ducimus, voluptas possimus animi in cumque libero quam facilis at earum dolores voluptatum nihil quisquam eius expedita deleniti culpa.</p>
        
        </div>
        <div class="col-md-6">
            <h3 class="text-center">Story 2</h3>
            <h6 class="text-center">Sreebash Das</h6>
            <p class="m-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aut itaque ducimus, voluptas possimus animi in cumque libero quam facilis at earum dolores voluptatum nihil quisquam eius expedita deleniti culpa.</p>
        
        </div>
    </div>

</template>

<script>

export default {
    name: 'Customer',
    props: {
        name: {type: String, required: true},
        writer: {type: String, required: true},
        age: {type: Number, required: false}
    }
}
</script>
