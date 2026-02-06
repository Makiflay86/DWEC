<script setup>
</script>

<template>
    <h1>Este es mi primer componente</h1>
    <h2>{{ subtitulo }}</h2>
    <p>{{ ketchup }}</p>
    <p>{{ nombre }} {{ apellido }}</p>
</template>

<script>
    export default {
        props: { 
            nombre: { type: String, required: true }, 
            apellido: { type: String, required: true } 
        },

        data() {
            return {
                subtitulo: 'Soy el subtitulo del componente',
                ketchup: 'Ketchup'
            }
        }
    }
</script>

<style scoped>
    h2
    {
        color: green;
    }

    h1
    {
        color: darkgreen;
    }

    p
    {
        color: red;
    }
</style>