<template>
    <div class="index">
        <h1>欢迎来到狼人杀助手demo</h1>
        <p>本局人数</p>
        <select name="people" id="">
            <option value="9"></option>
        </select>
        <v-button large primary value="确定"></v-button>
    </div>
</template>

<script>
    import 'atui/dist/greater-blue.css'
    import atui from 'atui'
    export default {
        name: 'index',
        components: {
            vButton: atui.Button
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
