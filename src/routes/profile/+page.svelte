<script>
	import BackBtn from "$lib/components/backButton/BackBtn.svelte";
	import Nav from "$lib/components/nav/Nav.svelte";
	import SettingItem from "$lib/components/settingItem/SettingItem.svelte";
    import Language from  "$lib/assets/language.svg"
    import Key from  "$lib/assets/key.svg"
    import Gear from  "$lib/assets/gear.svg"
    import Envelop from  "$lib/assets/envelop.svg"
    import Information from  "$lib/assets/information.svg"
    import Exit from  "$lib/assets/exit.svg"



</script>
<div class="header-container">
    <div class="title-container">
        <h2>ناحیه کاربری</h2>
    </div>
    <div class="user-container">
        <div class="insider-left">
            <h3>نوید بیاتی</h3>
            <span>@navid1376</span>
        </div>
        <div class="insider-right">
            <div class="letter-box primary"><h2>N</h2></div>
        </div>
    </div>
<BackBtn ref='/'/>
</div>
<div class="settings-container">
    <SettingItem title='زبان' image={Language}/>
    <SettingItem title='تغییر رمز عبور' image={Key}/>
    <SettingItem title='تنظیمات پیشرفته' image={Gear}/>
    <SettingItem title='دعوت از دوستان' image={Envelop}/>
    <SettingItem title='درباره ما' image={Information}/>
    <SettingItem title='خروج از حساب' image={Exit}/>
</div>
<Nav/>


<style>
    .header-container{
        width: 90%;
        height: 30vh;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .title-container{
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
    }
    .title-container h2{
        padding: 0;
        margin: 0;
        color: var(--primary);
    }
    .user-container{
        width: 100%;
        height: 50%;
        margin-block-end: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
    .insider-right{
        width: 25%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .insider-right .letter-box{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .insider-left{
        width: 65%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .insider-left h3{
        padding: 0;
        margin: 0;
    }
    .insider-left span{
        font-size: x-small;
        padding-top: 8px;
    
    }
    .settings-container{
        width: 90%;
        height: 60vh;
        margin-inline: auto;
    }
</style>