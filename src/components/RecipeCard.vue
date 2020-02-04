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
           
            <div class="recipe-link">
                <router-link :to="{ name: 'recipe', query: { label: recipe.label }}">View Recipe
                </router-link>
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
        margin: 20px 20px;
        width: calc(70vw-40px);
        background-color: wheat;
        padding: 20px 20px;
        display: flex;
        flex-direction: row;
    }
    .recipe-title{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size: 20px;
        font-weight: bolder;
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
        background-color: #ddd;
        border: none;
        color: black;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 16px;
    }

    .recipe-link{
        margin: 10px 30px;
        text-decoration: none;

    }

</style>