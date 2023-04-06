<script>
    import shoppingCard from '$lib/assets/shoppingCard.svg'
    import income from '$lib/assets/income.svg'
    import charge from '$lib/assets/charge.svg'
    import transact from '$lib/assets/transact.svg'
    export let icon=[shoppingCard,income,charge,transact];
    export let date;
    export let fee;
    export let type;
</script>
<div class="item-container" >
    <div class="icon-container">
        {#if type==='spend'}
            <img src={icon[0]} alt="shoppingcard">
            {:else if type==="income"}
            <img src={icon[1]} alt="income">
            {:else if type==="charge"}
            <img src={icon[2]} alt="charge">
             {:else if type==="transact"}
            <img src={icon[3]} alt="transact">
            
        {/if}
    </div>
    <div class="details-container">
      <span>
        {#if type==='spend'}
            <span>خرید از فروشگاه</span>
            {:else if type==="income"}
            <span>واریز به حساب</span>
            {:else if type==="charge"}
            <span>شارژ حساب</span>
             {:else if type==="transact"}
            <span>انتقال به حساب</span>
            
        {/if}
      </span>
      <span class="date">
          {
            new Date(date).toLocaleDateString('fa-IR',{weekday:"long",year:"numeric",month:'numeric',day:'numeric',hour:'numeric',minute:'numeric'})
        }
      </span>
    </div>
    <div class="fee-container">
        <span>{fee.toLocaleString('fa-IR')} ریال</span>
    </div>
</div>

<style>
    .item-container{
        width: 90%;
        height: 8vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px;
        box-shadow: 0 4px 4px rgba(0,0,0,0.25);
        padding: 5px 20px 5px 0;
        margin-block: 4px;
    }
    .icon-container{
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .details-container{
         width: 42%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: small;
    }
    .fee-container{  
        width: 43%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: small;
        color: var(--primary);
    }
    .details-container .date{
        font-size: x-small;
        font-weight: 500;
        color: #636262;
    }

</style>