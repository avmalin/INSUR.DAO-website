<script>
  import { derived, writable } from "svelte/store";
  import HomePage from "./HomePage.svelte";
  import Logo from "./Elements/INSURDAO  logo.png";
  import TwitterIcon from "./Elements/Twitter Icon.png";
  import LinkedinIcon from "./Elements/Linked In Icon.png";
  import DescordIcon from "./Elements/Discord Icon.png";
  import { t, locale, locales } from "./lib/i18n";
  export let menu = 1;



</script>

<main class="container mx-auto">
  <div id="navbar">
    <div class="flex   items-center top-3 left-5 right-5 mx-5 absolute">
      <div class="flex left-0 align-middle items-center ">
        <img class="w-10 h-10" src={Logo} alt="logo" />
        <p class="text-1xl mt-2 ml-1 md:text-3xl md:mt-1">INSUR·DAO</p>
        <p class="mx-3 2xl:text-2xl ">
          <select class="ps-3 pb-1" bind:value={$locale}>
            {#each locales as l}
              <option value={l}>{l}</option>
            {/each}
          </select>
        </p>
      </div>
      <p class="hidden lg:block mx-auto text-center">{@html $t('app.header')}</p>
      <div class="flex right-0 md:ml-52 lg:ml-0">
        <div class="hidden md:flex flex-row space-x-3">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img class="w-10 h-10" src={TwitterIcon} alt="twitter icon" />
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img class="w-10 h-10" src={LinkedinIcon} alt="linked icon" />
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img class="w-10 h-10" src={DescordIcon} alt="descord icon" />
          </a>
        </div>
        <div>
          <button class="visible beautiful-button w-32 ml-8">{$t('app.b1')}</button>
        </div>
      </div>
    </div>
  </div>  
  <div id="page" class="mt-14">
    {#if menu === 1}
      <HomePage {t}/>
    {/if}
  </div>
  <div>
    <div
      class="mt-20"
      style="background:linear-gradient(to right, #0a75cc, #930bc9);"
    />
    <div class="flex flex-row place-content-center mr-14">
      <img class="h-20 w-20" src={Logo} alt="logo" />
      <p class="text-right text-3xl m-4">INSUR·DAO</p>
    </div>
    <p class="mt-4 md:text-xl xl:text-2xl">
      ©2023 All Right Reserved. INSUR.DAO, Israel.
    </p>
  </div>
</main>

<style>
  .header-main {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 30px;
  }
  .header-icons {
    height: 100px;
    display: flex;
    flex-direction: row;
    margin-right: 30px;
  }
  .beautiful-button {
    color: aliceblue;
    background: linear-gradient(to right, #0a75cc, #930bc9);
  }
</style>
