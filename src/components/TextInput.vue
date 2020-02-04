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
        margin: 20px 20px;
        display: flex;
        flex-direction: column;
        /* widows: 25%; */
    }

    .TContainer input {
        font-size: 1em;
        height: 30px;
        width: 100%;
    }

    .TContainer label{
        font-size: 1em;
        text-align: left;
        color: white;
    }

</style>