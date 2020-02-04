/* eslint-disable vue/require-v-for-key */
<template>
    <div class="RContainer">
        <div class="image-container">
            <img :src="recipe.image" class="recipe-image"/>
        </div>
        <div class="recipe-details">
            <div class="recipe-title">{{ recipe.label }} </div>
        
            <div class="recipe-ingredients">
                <div class="ingredient" v-for="label in recipe.healthLabels" :key="label">{{ label }}</div>
            </div>
           
            <div class="recipe-link-container">
                <a class="recipe-link" :href="recipe.url" target="_blank">VIEW RECIPE <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        recipe: Object
    },
    computed: {
        ...mapState(['ingredients'])
    }
}
</script>

<style lang="postcss" scoped>
    .RContainer{
        margin: 3px 20px;
        width: calc(70vw-100px);
        background-color: whitesmoke;
        padding: 20px 20px;
        display: flex;
        flex-direction: row;
    }
    .recipe-title{
        font-family:Helvetica, Arial, sans-serif;
        font-size: 23px;
        font-weight:bolder;
        text-align: center;
        width: 100%;
        /* border: 1px solid blue; */
    }
    .recipe-ingredients{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 10px auto;
         /* border: 1px solid blue; */
         text-align: center;
    }
    .recipe-image{
        border-radius: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 200px;
    }

    .recipe-details{
        padding: 20px 20px;
        width: 100%;
    }

    .ingredient {
        margin: 20px 20px;
        background-color: rgb(228, 228, 228);
        border: none;
        color: rgb(32, 32, 32);
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 16px;
        font-size: 12px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .recipe-link-container{
        margin: 10px 30px;
        /* border: 1px solid blue; */
    }
    .recipe-link{
        margin: 10px 30px;
        text-decoration: none;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 15px;
        font-weight: 900;
        color: orange;
    }

</style>