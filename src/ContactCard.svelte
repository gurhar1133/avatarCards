<script>
    // a variable that can be used from outside
    // of the component. in this case, the App 
    // component
   
    export let userName;
    export let userTitle;
    export let userDesc;
    export let image;
    export let nationImg;
</script>
<style>
.contact-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 30rem;
    background: #eee;
    border-radius: 5px;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: -10rem;
    
  }
  .contact-card:hover{
    cursor:pointer;
    z-index: 100;
    background: #fff;
  }
.nation{
    max-width: 50px;
    max-height: 50px;
    position: relative;
    top: 0;
    right: -80%;
}
/* .contact-card:hover{
    transform: rotate(1deg);
    transition: transform .5s;
    cursor: pointer;
} */

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
  }

  .thumb {
    width: 33%;
    height: 100%;
   
  }
  .thumb-placeholder{
      background: #ccc;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  .user-data {
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: #5a5a5a;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .description {
    border-top: 1px solid #ccc;
    padding: 1rem;
  }
</style>
<div class="contact-card" on:click>
    <header>
    <!-- you can dynamically alter classes with ternary operator 
        in curly braces-->
        <div class="{image ? "thumb" : "thumb thumb-placeholder"}">
        
             <img src="{image}" alt="{userName}"/>
        </div>
        <div class="user-data">
          <span class="nation">nation: {nationImg}</span>
            <h1>{userName}</h1>
            
            <h2><strong>{userTitle}</strong></h2>
        </div>
        
    </header>
    <div class="description">
        <p>{userDesc}</p>
    </div>
</div>
