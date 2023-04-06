<script>
  import '../app.css';
    import { page } from '$app/stores';

  import {screenLockStore} from "$lib/store/screenLock.store.js";
	import { onMount } from 'svelte';
  let url;
  onMount(() => {
    url = window.location.pathname
     if ($screenLockStore===true && url!=='/screenlock'  ) {
      window.location.pathname='/screenlock'
    }
  });

  $:{
   
  }

</script>

{url}
<div class="container "><slot></slot></div>
<style>
  .container{
    width: 100%;
    height: 100vh;
    max-width: 450px;
    margin-inline: auto;
    position: relative;
  }
</style>
