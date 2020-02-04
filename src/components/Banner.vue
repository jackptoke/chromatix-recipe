<template>
    <div class="BContainer">
        <h1>What Can I Make?</h1>
        <h4>Please, enter up to 3 ingredients.  We'll see what we can make with them...</h4>
    </div>
</template>

<style scoped>
    .BContainer{
        margin: -10px auto;
        display: flex;
        width: 70vw;
        height: 200px;
        background-color: #f38200;
        flex-direction: column;
    }

    .BContainer h1 {
        color: white;
        margin: 50px auto;
        font-size: 3em;
        /* border: 1px solid blue; */
    }

    .BContainer h4{
        color: white;
        margin: -50px auto;
        padding: 0px 30px;
    }
</style>