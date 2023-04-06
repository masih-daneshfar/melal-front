<script>
    import Left from  "$lib/assets/left.svg"
    export let title;
    export let image;

</script>

<div class="container">
    <div class="arrow">
        <img src={Left} alt="left">
    </div>
    <div class="title"><h4>{title}</h4></div>
    <div class="icon">
        <img src={image} alt="icon">
    </div>
</div>

<style>
    .container{
        width: 100%;
        height: 65px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        /* border-bottom: 1px solid var(--gray); */
        padding-inline: 10px;
        box-sizing: border-box;
    }
    .container .arrow{
        width: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container .arrow img{
        max-width: 100%;
        height: 15px;
    }

    .container .title{
        width: 75%;
        display: flex;
        justify-content: flex-start;
    }
    .container .icon{
        width: 30px;
        display: flex;

        justify-content: center;
    }
    .container .icon img{
        max-width: 100%;
    }

</style>