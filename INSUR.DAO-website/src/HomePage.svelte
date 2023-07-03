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
  
  <main class="main-style">
    <div style="position: absolute;top:100px; right: 0; left:0; buttom:0;width: 100%; background-color: black;background:linear-gradient(to right, #0a75cc, #930bc9);">
      <p style="color:white;font-family: Didot, serif; ">Welcome to your Insurance Commuunity. Welcome to INSUR.DAO!</p>
    </div>
  
  
    <h1>Empower your <span class="my-gradiant-text">Peer-to-Peer</span>  </h1>
    <h1>protection business</h1>
    <h2>INSU.DAO: the Decentralized Organization for the Benefit of P2P Associations and Mutual Insurers</h2>
    <div class="button-container">
      <button class= "beautiful-button">Get Started</button>
      <button class= "beautiful-button">Earn Yield</button>
    </div>
    <h3><span class="number-style">60%</span> Lower Coas | <span class="number-style">15%</span> Vield</h3>
    <div class="my-block">
      <h1 style="margin-top: 0;">Why Peer-to-Peer <span class="my-gradiant-text"> Protection? </span> </h1>
      <img class="icon" src={WorldCoumunicationIcon} alt="world comunitication">
      <p class="data-text">Peer-to-peer protection emerged as a cheaper, quicker and less bureaucratic alternative of regular insurance coverages. It benefits financial inclusion by giving financial protection for individuals, who do not receive coverage from the current system at a reasonable price. The main difference is that in insurance, the insurer guarantees the payment of the claim with their capital. In peer-to-peer there is no such guarantee. Our mission is to offer business intelligence and risk management techniques who enable you to still reach the same level of security for customers.
      </p>
      <img class="v-icon" src={VIcon} alt="V icon">
    </div>
    
    <h1><span class="my-gradiant-text">Cunsulting</span> for Peer-to-Peer</h1>
    <dev class="grid-block">
      <div class="my-block" style="margin-right: 0;">
          <h4>Regulatory consulting</h4>
          <p class="data-text">We help you understand the relevant regulations in Brazil. Are you willing to expand abroad? We can help you understand regulations for peer-to-peer insurance of the biggest global markets (United States, European Union) and safely navigate in these markets, fulfilling your statutory duties.</p>
      </div>
      <div>
        <div class="my-block" style="margin-left: 30px;">
          <h4>Risk management and actuarial</h4>
          <p class="data-text">We help you understands the risks of your business and how to protect yourself, your stakeholders and your customers from them. How do you calculate the premiums so you have sufficient funds for claims settlement and still stay cheaper than the competition? Use our tools to make your peer-to-peer business more efficient.</p>
        </div>
        <div class="my-block" style="margin-top: 30px; margin-left:30px">
          <h4>Finance and setting up a peer-to-peer insurer</h4>
          <p class="data-text">We help you order your finances, set up a cheap and efficient payments infrastructure and keep track of your key performance indicators. We offer a step-by-step guidance on how to establish a peer-to-peer insurer in a simple and stable way.</p>
        </div>
      </div>
    </dev>
  
    <h1 class="request-header">Request a <span class="my-gradiant-text">Free Sample</span></h1>
    <div class="my-block">
      <input  type="text" placeholder="field to enter contact details, text or a number" >
      <button style="font-size: 23px; margin-left: 30px; padding-right: 20px; padding-left:20px">Send</button>
    </div>
    <div class="my-block">
      <h1 style="margin-top: 0px;">The INSUR.DAO <span class="my-gradiant-text">team</span></h1>
      <p class="data-text">insurDAO was built by a team of web 3, insurance and AI visionaries.</p>
      <div class="cards-block">
        {#each Profiles as profile }
        <PersonCard {...profile}/>        
        {/each}
        
      </div>
    </div>
    <h1>Experiences and feedback from the <span class="my-gradiant-text">community</span></h1>
    <div class="gallery">
      {#each FeedbackCards as card}
        <div class="feedback-card">
          <img src={card.img} alt="person profile" />
          <p3 style="font-size: 25px; padding-left: 10px; text-align: left;">{card.name}</p3>
          <div style="display: flex; flex-direction: row;">
            <img style="width: 60px; height: 60px;" src={QuoteIcon} alt="qoute icon">
            <p class="feedback">{card.feedback}</p>
          </div>
        </div>
        
      {/each}
    </div>
    <h1 style="text-align: left; padding-left:30px ;"><span class="my-gradiant-text">Join</span> the Growing Community</h1>
    <p style="font-size:14px; text-align: left; padding-left: 30px; margin-top: -30px;">By signing up you agree to our <a href="https://www.google.com" target="_blank" rel="noreferrer">Terms & Conditions</a></p>
    <p class="data-text" style="margin: 50px; margin-top:40px; text-align: left;">The insurDAO community of associations, insurers, developers, claims adjusters and risk managers is constantly growing.</p>
    <p class="data-text" style="margin: 50px; margin-top: -50px; text-align: left;">Our aim is to improve the world of insurance, and make easy, affordable and simple coverage accessible to everyone. Join us to shape the insurance of tomorrow.</p>
    <div style="display: flex; padding-left:30px;">
      <input style="width: 400px;" type='text' placeholder='Name'>
      <input style="width: 400px; margin-left:20px;margin-right: 30px;" type='text' placeholder='EMail'>
      <button class='beautiful-button' style="height: 60px; width: 200px; ">Subscribe!</button>
    </div>
    <div style="display: flex; margin-top: 100px;">
      <h1 style="text-align: left; padding-left:30px; margin-top:0;">Get the INSUR.DAO <span class='my-gradiant-text'>Token</span></h1>
      <button class="beautiful-button" style="height: 60px; width: 200px; margin-left: 230px; ">Connect Wallet</button>
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
      font-size: 20px;
      margin-right: 80px;
      width: 180px;
    }
    .my-block{
      background-color: white;
      padding: 20px;
      
      margin-left: 60px;
      margin-right: 60px;
      border-radius: 15px;
      margin-top: 100px;
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
    input{
      width: 800px;
      height: 50px;
      font-size: 25px;
      border-radius: 7px;
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
  