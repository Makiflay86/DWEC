<template>
    <div>
        <h1>Mi nombre es {{ nombre }}</h1>
        <h2>Mi edad es {{ edad }} años</h2>
    </div>
</template>

<script>
    export default {
        props: {
            nombre: { type: String, required: true },
            edad: { type: Number, required: true }
        }
    }
</script>

<style scoped>
    h1 
    {
        color: blue;
    }

    h2
    {
        color: orange;
    }
</style>