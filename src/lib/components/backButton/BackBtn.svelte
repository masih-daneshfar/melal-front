<script>
    import Arrow from  "$lib/assets/arrow.svg"
    export let ref;
</script>

<a class="rad" href={ref}>
    <img src={Arrow} alt="back">
</a>

<style>
    a{
        width: 65px;
        height: 45px;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top:20px;
        left: 20px;
    }
</style>