<script>
    import linkedInLogo from './assets/linkedin-icon.svg'
    import linkedInLogo1 from './Elements/Linked In Icon (Team).png'
    import DefualtImg from './Elements/Site Icon 5.png'
    export let img = DefualtImg;
    export let name;
    export let role;
    export let inUrl;
</script>


<dev class="flex flex-col justify-center items-center bg-white m-3 md:m-16 xl:">
    <img class="w-24 h-24 rounded-full md:w-28 md:h-28 xl:w-40 xl:h-40"src={img} alt='{name} image'>
    <p class="text-xl xl:text-2xl">{name}</p>
    <p class="text-lg xl:text-xl">{role}</p>
    <a href={inUrl} target="_blank" rel="noreferrer">
            <img class="w-10 h-10 rounded-3xl p-1 bg-linked-in 2xl:mt-1  "src={linkedInLogo} alt="linked in logo">
    </a>
</dev>
    

<style>
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        

    }
    .card img{  
        
        width: 200px;
        height: 200px;
        object-fit: contain;
        border-radius: 50px;
    }
    .card img:last-child{
        margin: 0;
        width: 40px;
        height: 40px;
        padding: 10px;
        
        background-color: #0177b5;
        object-fit: cover;
    }
    h3{
        margin: 0;
    }
    p{
        margin: 0;
    }

</style>