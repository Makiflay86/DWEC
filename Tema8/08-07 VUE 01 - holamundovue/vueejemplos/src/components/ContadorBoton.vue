<template>
    <div>
        <br>
        <button @click="incrementar">
            +
        </button>
        <button @click="decrementar">
            -
        </button>
        <button @click="restart">
            reset
        </button>
        <p>El contador se inicia en {{ valorInicial }}</p>
        <p>El incremento es 1</p>
        <p>La variable cuenta es {{ cuenta }}</p>
        <p>El doble es: {{ doble }}</p>
        <p>El triple es: {{ triple }}</p>
        <p>El cuadruple es: {{ cuadrupe }}</p>
        <p>El cuadrado es: {{ cuadrado }}</p>
        <p>El cubo es: {{ cubo }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            valorInicial: {type: Number, default: 0}
        },
        data() { return { cuenta: this.valorInicial } },
        methods: {
            incrementar() { this.cuenta++; },
            decrementar() { this.cuenta--; },
            restart() { this.cuenta = this.valorInicial; }
        },
        computed: {
            doble() { return this.cuenta * 2; },
            triple() { return this.cuenta * 3; },
            cuadrupe() { return this.cuenta * 4; },
            cuadrado() { return this.cuenta * this.cuenta; },
            cubo() { return this.cuenta * this.cuenta * this.cuenta; }
        }
    }
</script>

<style>
    button 
    {
        font-size: 2em;
        border: 1px solid pink;
        background-color: purple;
        color: yellow;
        padding: 10px;
        border-radius: 5px;
    }
</style>