<script>
    import svelteLogo from './assets/svelte.svg'
    import Counter from './lib/Counter.svelte'
    import PersonCard from './person-card.svelte';
    import WorldCoumunicationIcon from './Elements/Site Icon 1.png'
    import VIcon from './Elements/Site Icon 6.png'
    import {Profiles} from './data'
    import Henry from './Elements/Henry.png'
    import {FeedbackCards} from './data'
    import QuoteIcon from './Elements/Site Icon 8.png'
    
  </script>
  
  <main class="main-style  lg:px-20 2xl:px-40">
    <div class="p-2.5 left-0 right-0 top-24 absolute" style="background:linear-gradient(to right, #0a75cc, #930bc9);">
      <p class="text-sm "style=" color:white;font-family: Didot, serif; ">Welcome to your Insurance Commuunity. Welcome to INSUR.DAO!</p>
    </div>
  
  
    <p class="header mt-52 ">Empower your <span class="my-gradiant-text">Peer-to-Peer</span>  </p>
    <p class="header" >protection business</p>
    <p class="data text-blue-500 mt-5  ">INSU.DAO: the Decentralized Organization for the Benefit of P2P Associations and Mutual Insurers</p>
    <div class="space-x-4 mt-5 font-oswald md:space-x-52 md:text-xl lg:text-3xl ">
      <button class= "beautiful-button">Get Started</button>
      <button class= "beautiful-button lg:px-10">Earn Yield</button>
    </div>
    <p class="text-xl mt-7"><span class="number-style">60%</span> Lower Coas | <span class="number-style">15%</span> Vield</p>
    <div class="my-block md:mt-52 lg:mt-72  ">
      <p class="header">Why Peer-to-Peer <span class="my-gradiant-text"> Protection? </span> </p>
      <img class="mx-auto h-10 w-10 md:my-5 md:h-14 md:w-14" src={WorldCoumunicationIcon} alt="world comunitication">
      <p class="data">Peer-to-peer protection emerged as a cheaper, quicker and less bureaucratic alternative of regular insurance coverages. It benefits financial inclusion by giving financial protection for individuals, who do not receive coverage from the current system at a reasonable price. The main difference is that in insurance, the insurer guarantees the payment of the claim with their capital. In peer-to-peer there is no such guarantee. Our mission is to offer business intelligence and risk management techniques who enable you to still reach the same level of security for customers.
      </p>
      <img class="mx-auto -mb-12 " src={VIcon} alt="V icon">
    </div>
    
    <p class="header mt-20 md:mt-52 lg:mt-72"><span class="my-gradiant-text">Cunsulting</span> for Peer-to-Peer</p>
    <dev class="flex flex-col md:flex-row">
      <div class="my-block" >
          <p class="header my-gradiant-text">Regulatory consulting</p>
          <p class="data">We help you understand the relevant regulations in Brazil. Are you willing to expand abroad? We can help you understand regulations for peer-to-peer insurance of the biggest global markets (United States, European Union) and safely navigate in these markets, fulfilling your statutory duties.</p>
      </div>
      <div class="md:ml-10">
        <div class="my-block" >
          <p class="header my-gradiant-text">Risk management and actuarial</p>
          <p class="data">We help you understands the risks of your business and how to protect yourself, your stakeholders and your customers from them. How do you calculate the premiums so you have sufficient funds for claims settlement and still stay cheaper than the competition? Use our tools to make your peer-to-peer business more efficient.</p>
        </div>
        <div class="my-block md:mt-10">
          <p class="header my-gradiant-text">Finance and setting up a peer-to-peer insurer</p>
          <p class="data">We help you order your finances, set up a cheap and efficient payments infrastructure and keep track of your key performance indicators. We offer a step-by-step guidance on how to establish a peer-to-peer insurer in a simple and stable way.</p>
        </div>
      </div>
    </dev>
  
    <p class="header mt-20 md:mt-52 lg:mt-72">Request a <span class="my-gradiant-text">Free Sample</span></p>
    <div class="bg-white rounded-2xl p-4 mt-10">
      <input class="block w-full  rounded-md  py-1.5 ring-1 px-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo text-xs md:text-2xl 2xl:text-4xl" type="text" placeholder="field to enter contact details, text or a number" />
      <button class="mt-5 md:text-2xl">Send</button>
    </div>
    <div class="flex flex-col bg-white p-4 rounded-2xl mt-20  lg:mt-72">
      <p class="header">The INSUR.DAO <span class="my-gradiant-text">team</span></p>
      <p class="data">insurDAO was built by a team of web 3, insurance and AI visionaries.</p>
      <div class="flex flex-col  m-5 mt-10 items-center justify-center align-middle pb-5 md:flex-row flex-wrap  ">
        {#each Profiles as profile }
        <div class="">
          <PersonCard  {...profile} />        
        </div>
        
        {/each}
        
      </div>
    </div>
    <p class="header mt-10 md:mt-52">Experiences and feedback from the <span class="my-gradiant-text">community</span></p>
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
    <p class="header mt-20 md:mt-52 xl:mt-72"><span class="my-gradiant-text">Join</span> the Growing Community</p>
    <p class="text-xs xl:mt-2 md:text-sm xl:text-lg">By signing up you agree to our <a href="https://www.google.com" target="_blank" rel="noreferrer">Terms & Conditions</a></p>
    <p class="data mt-10">The insurDAO community of associations, insurers, developers, claims adjusters and risk managers is constantly growing.</p>
    <p class="data" >Our aim is to improve the world of insurance, and make easy, affordable and simple coverage accessible to everyone. Join us to shape the insurance of tomorrow.</p>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-5 mt-5 md:space-y-0 md:text-2xl md:flex-row md:space-x-10 lg" >
        <input class="w-full rounded-lg p-2.5" type='text' placeholder='Name'>
        <input type='text'  id="email"  class=" rounded-lg w-full p-2.5" placeholder='EMail'>
      </div>
      <button class='beautiful-button font-oswald mt-10 mx-7 md:text-xl' >Subscribe!</button>
    </div>
    <div class="flex mt-20 justify-between align-middle" >
      <p class="header mt-1">Get the INSUR.DAO <span class='my-gradiant-text'>Token</span></p>
      <button class="beautiful-button font-oswald text-xs md:text-xl xl:text-2xl ">Connect Wallet!</button>
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
   
    
  
    .my-gradiant-text{
      background: linear-gradient(to right, #0a75cc, #930bc9);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;  
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
  