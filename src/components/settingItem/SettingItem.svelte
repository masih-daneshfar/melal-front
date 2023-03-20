<script>
    import Left from  "$lib/assets/left.svg"
    export let title;
    export let image;

</script>

<div class="container">
    <div class="arrow">
        <img src={Left} alt="left">
    </div>
    <div class="title"><h3>{title}</h3></div>
    <div class="icon">
        <img src={image} alt="icon">
    </div>
</div>

<style>
    .container{
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid var(--gray);
    }
    .container .arrow{
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container .title{
        width: 65%;
        display: flex;
        justify-content: flex-end;
    }
    .container .icon{
        width: 20%;
        display: flex;
        justify-content: center;
    }

</style>