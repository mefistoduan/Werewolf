<template>
    <div class="index">
        <h1>欢迎来到狼人杀助手demo</h1>
        <p>本局人数</p>
        <!--<v-select v-model="initValue" dropdown-class-name="aaaaa" :dropdown-z-index="9898"  >-->
            <!--<v-option value="9">9</v-option>-->
        <!--</v-select>-->
        <br>
        <v-button large primary value="确定" @click.native="show = true"></v-button>

      <modal :show="show" ref="dialog" @close="show = false">
        <div slot="modal-body" class="atui-modal-body">
          <textarea></textarea>
        </div>
      </modal>

    </div>
</template>

<script>
    import 'atui/dist/greater-blue.css'
    import atui from 'atui'
    export default {
        name: 'index',
        methods:{
          getPeople:function () {
            console.log(123);
          }
        },
        components: {
            vButton: atui.Button,
            vModal: atui.Modal,
//            vSelect: atui.Select,
//            vOption: atui.Option,
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
