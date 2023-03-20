<script>
    import Profile from "$lib/assets/profile.svg"
    import Home from "$lib/assets/home.svg"
    import Stock from "$lib/assets/stock.svg"
    
</script>

  <nav class="rad">
    <a href="/profile">
        <img src={Profile} alt="profile">
        <span>کاربری</span>
    </a>
    <a href="/">
        <img src={Home} alt="profile">
        <span>خانه</span>
    </a>
    <a href="/stock">
        <img src={Stock} alt="profile">
        <span>سهام</span>
    </a>
  </nav> 

<style>
    nav{
        width: 80%;
        position: fixed;
        bottom: 10px;
        left: 0;
        margin-left: 6%;
        border: 1px solid #C1B1B1;
        padding: 5px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    nav a{
        text-decoration: none;
        color: var(--primary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 2px;
    }
  
</style>