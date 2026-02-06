<script setup>
    import Hola from './components/Hola.vue'
    import MiPrimerComponente from './components/MiPrimerComponente.vue'
    import PropsPadre from './components/PropsPadre.vue';
    import ContadorBoton from './components/ContadorBoton.vue';
    import Todoist from './components/Todoist.vue';
</script>

<template>
    <Hola></Hola>
    <MiPrimerComponente nombre="Francisco" apellido="Aybar Romero"></MiPrimerComponente>
    <PropsPadre></PropsPadre>
    
    <ContadorBoton valorInicial=13></ContadorBoton>

    <Todoist></Todoist>
</template>