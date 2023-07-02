<script>
    import linkedInLogo from './assets/linkedin-icon.svg'
    import linkedInLogo1 from './Elements/Linked In Icon (Team).png'
    import DefualtImg from './Elements/Site Icon 5.png'
    export let img = DefualtImg;
    export let name;
    export let role;
    export let inUrl;
</script>


<dev class="card">
    <img src={img} alt='{name} image'>
    <h3 style="font-size: 30px;">{name}</h3>
    <p style="font-size: 30px;">{role}</p>
    <a href={inUrl} target="_blank" rel="noreferrer">
            <img src={linkedInLogo} alt="linked in logo">
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