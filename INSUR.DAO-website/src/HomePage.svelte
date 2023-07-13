<script>
// @ts-nocheck

    import svelteLogo from './assets/svelte.svg'
    import Counter from './lib/Counter.svelte'
    import PersonCard from './person-card.svelte';
    import WorldCoumunicationIcon from './Elements/Site Icon 1.png'
    import VIcon from './Elements/Site Icon 6.png'
    import {Profiles} from './data'
    import Henry from './Elements/Henry.png'
    import {FeedbackCards} from './data'
    import QuoteIcon from './Elements/Site Icon 8.png'
    import lang from './lib/translations'
    export let t
    let text=lang.en
    
 
  </script>
  
  <main class="main-style  lg:px-20 2xl:px-40">
    <div class="p-2.5 left-0 right-0 top-24 absolute" style="background:linear-gradient(to right, #0a75cc, #930bc9);">
      <p class="text-sm "style=" color:white;font-family: Didot, serif; ">{@html $t('homepage.header')}</p>
    </div>
  
  
    <p class="header mt-52 ">{@html $t('homepage.h1')}</p>
    <p class="header">{@html $t('homepage.h2')}</p>
    <p class="data text-blue-500 mt-5  ">{@html $t('homepage.p1')}</p>
    <div class="space-x-4 mt-5 font-oswald md:space-x-52 md:text-xl lg:text-3xl ">
      <button class= "beautiful-button" >{@html $t('homepage.b1')}</button>
      <button class= "beautiful-button lg:px-10">{@html $t('homepage.b2')}</button>
    </div>
    <p class="text-xl mt-7"><span class="number-style">60% </span> {$t('homepage.p2.1')} | <span class="number-style"> 15% </span> {$t('homepage.p2.2')}</p>
    <div class="my-block md:mt-52 lg:mt-72  ">
      <p class="header">{@html $t('homepage.h3')} </p>
      <img class="mx-auto h-10 w-10 md:my-5 md:h-14 md:w-14" src={WorldCoumunicationIcon} alt="world comunitication">
      <p class="data">{@html $t('homepage.p3')} </p>
      <img class="mx-auto -mb-12 " src={VIcon} alt="V icon">
    </div>
    
    <p class="header mt-20 md:mt-52 lg:mt-72">{@html $t('homepage.h4')}</p>
    <dev class="flex flex-col md:flex-row">
      <div class="my-block" >
          <p class="header my-gradiant-text">{@html $t('homepage.h4.1')}</p>
          <p class="data">{@html $t('homepage.p4.1')}</p>
      </div>
      <div class="md:ml-10">
        <div class="my-block" >
          <p class="header my-gradiant-text">{@html $t('homepage.h4.2')}</p>
          <p class="data">{@html $t('homepage.p4.2')}</p>
        </div>
        <div class="my-block md:mt-10">
          <p class="header my-gradiant-text">{@html $t('homepage.h4.3')}</p>
          <p class="data">{@html $t('homepage.p4.3')}</p>
        </div>
      </div>
    </dev>
  
    <p class="header mt-20 md:mt-52 lg:mt-72">{@html $t('homepage.h5')}</p>
    <div class="bg-white rounded-2xl p-4 mt-10">
      <input class="block w-full  rounded-md  py-1.5 ring-1 px-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo text-xs md:text-2xl 2xl:text-4xl" type="text" placeholder={ $t('homepage.i5')}/>
      <button class="mt-5 md:text-2xl">{@html $t('homepage.b5')}</button>
    </div>
    <div class="flex flex-col bg-white p-4 rounded-2xl mt-20  lg:mt-72">
      <p class="header">{@html $t('homepage.h6')}</p>
      <p class="data">{@html $t('homepage.p6')}</p>
      <div class="flex flex-col  m-5 mt-10 items-center justify-center align-middle pb-5 md:flex-row flex-wrap  ">
        {#each Profiles as profile }
        <div class="">
          <PersonCard  {...profile} />        
        </div>
        
        {/each}
        
      </div>
    </div>
    <p class="header mt-10 md:mt-52">{@html $t('homepage.h7')}</p>
    <div class="flex flex-col justify-start items-start flex-wrap  md:justify-center md  md:flex-row md:items-center md:mt-10 ">
      {#each FeedbackCards as card}
        <div class="flex flex-col w-full m-2 p-4 bg-white rounded-3xl md:m-5 md:w-auto md:px-20">
          <img class="h-16 w-16" src={card.img} alt="person profile" />
          <p3 style="font-size: 25px; padding-left: 10px; text-align: left;">{card.name}</p3>
          <div style="display: flex; flex-direction: row;">
            <img class="h-10 w-10" src={QuoteIcon} alt="qoute icon">
            <p class="feedback">{card.feedback}</p>
          </div>
        </div>
        
      {/each}
    </div>
    <p class="header mt-20 md:mt-52 xl:mt-72">{@html $t('homepage.h8')}</p>
    <p class="text-xs xl:mt-2 md:text-sm xl:text-lg">{@html $t('homepage.p8.1')}</p>
    <p class="data mt-10">{@html $t('homepage.p8.2')}</p>
    <p class="data" >{@html $t('homepage.p8.3')}</p>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-5 mt-5 md:space-y-0 md:text-2xl md:flex-row md:space-x-10 lg" >
        <input class="w-full rounded-lg p-2.5" type='text' placeholder={$t('homepage.i8.1')}>
        <input type='text'  id="email"  class=" rounded-lg w-full p-2.5" placeholder={ $t('homepage.i8.2')}>
      </div>
      <button class='beautiful-button font-oswald mt-10 mx-7 md:text-xl' >{@html $t('homepage.b8')}</button>
    </div>
    <div class="flex mt-20 justify-between align-middle" >
      <p class="header mt-1">{@html $t('homepage.h9')}</p>
      <button class="beautiful-button font-oswald text-xs md:text-xl xl:text-2xl ">{@html $t('homepage.b9')}</button>
    </div>
 
    
  
  </main>
  
  <style>
    .main-style{
      background-color: aliceblue;
      margin-top: 0 ;
    }
  
    .icon{
      padding-bottom: 0;
    }
    .v-icon{
      margin-bottom: -50px;
      
    }
   
    
  
    
    
    .button-container{      
      margin-bottom: 100px;
    }
    .button-container button{
      color:aliceblue;
      background: linear-gradient(to right, #0a75cc, #930bc9);
      font-size: 20px;
      margin-right: 80px;
      width: 180px;
    }
    .beautiful-button{
      color:aliceblue;
      background: linear-gradient(to right, #0a75cc, #930bc9);
      
    }
 
    .data-text{
      font-size: 30px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;  
      
    }
    
    h1{
      margin-top: 150px;
      color: #213547;
    }
    h2{
      font-size: 40px;
      color: #2d86cf;
    }
    .number-style{
      color: #0a75cc;
    }
    h3{
      font-size: 30px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    h4{
      background: linear-gradient(to right, #0a75cc, #930bc9);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 30px;
      margin-bottom: -30px;
    }
    .grid-block{
      display: grid;
      margin-right: 0;
      grid-template-columns: 6fr 9fr; /*the ratio between the element*/
      
    }
    .request-header{
      text-align: left;
      padding-left: 70px;
      margin-bottom:-60px;
    }
  
    .cards-block{
      display:flex;
      flex-direction: row;
      justify-content: center;
  
    }
    .gallery{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .feedback-card{
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 350px;
      background-color: white;
      margin: 30px;
      padding:30px;
  
      border-radius: 30px;
      
    }
    .feedback-card img{
      width: 90px;
      height: 90px;
    }
    .feedback-card p{
      padding-top: 15px;
      font-size: 25px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
  </style>
  