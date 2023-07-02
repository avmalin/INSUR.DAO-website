<script>
  import HomePage from './HomePage.svelte';
  import Logo from './assets/svelte.svg'
  import TwitterIcon from './Elements/Twitter Icon.png'
  import LinkedinIcon from './Elements/Linked In Icon.png'
  import DescordIcon from './Elements/Discord Icon.png'
  
  export let menu=1;
</script>
<main>
<div id="navbar" class='navbar'>
  <div class='header-main'>
    <div style="display: flex;">
    <img style="width: 60px; height: 60px;" src={Logo} alt="logo"/>
    <h1 style="margin-top: 0;">INSUR·DAO</h1>
    </div>  
    <p class="navbar" style="margin-top: 50px;">Governace . Join the Community . Contact Us</p>
    <div class = "header-icons" >
      <div style="margin-top: 0px;">
      <img  style= "margin-right:10px;" src={TwitterIcon} alt="twitter icon"/>
      <img style= "margin-right:10px;" src={LinkedinIcon} alt ="linked icon"/>
      <img style= "margin-right:10px;" src={DescordIcon} alt='descord icon'/>
    </div>
    <div>
      <button class='beautiful-button' style="margin-left: 30px; ">Use App</button>
    </div>
    </div>
  </div>
</div>
<div id="page">
  {#if menu === 1}
    <HomePage/>
  {/if}
</div>
<div style="position: absolute; right: 0; left:0;  buttom:0;width: 100%;">
  <div style="height: 3px; background-color: black;background:linear-gradient(to right, #0a75cc, #930bc9);"></div>
  <div style="display: flex; flex-direction:row; margin-left: 300px; margin-top: 30px;">
    <img style="width: 80px; height: 80px;" src={Logo} alt="logo"/>
    <h1 style="margin-top: 20px;">INSUR·DAO</h1>
  </div>
  <p>©2023 All Right Reserved. INSUR.DAO, Israel.</p>
</div>
</main>
<style>
  .navbar{
    position: absolute;
    top:0;
    left: 0;
    right:0;
  
  }
  .header-main{
    display: flex;
    justify-content: space-between;
    flex-direction:row;
    margin-top: 30px;
  }
  .header-icons{
    height: 100px;
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    
  }
  .beautiful-button{
    color:aliceblue;
      background: linear-gradient(to right, #0a75cc, #930bc9);
      font-size: 20px;  
      width: 180px;
      
  }
</style>