<template>
    <div class="TContainer">
        <label>Ingredient {{ index }} </label>
        <input type="text" v-on:change="onChange"/>
    </div>
</template>

<script>


export default {
     props: {
    index: Number
  },
  methods: {
    onChange(e){
        //   this.ingredient = e.target.value;
        this.$store.commit("SET_INGREDIENT", {ingredient: e.target.value, index: this.index-1 });
    }
  }

}

</script>

<style scoped>
    .TContainer{
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px; 
        display: flex;
        flex-direction: column;
        /* border: 1px solid blue; */
        /* widows: 25%; */
    }

    .TContainer input {
        font-size: 1em;
        height: 30px;
        /* width: 100%; */
        
    }

    .TContainer label{
        font-size: 1em;
        text-align: left;
        color: white;
    }

</style>