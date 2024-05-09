<template>
  <div class="menu">
    <ul>
        <li><router-link to="/cadastrar">Cadastrar</router-link></li>
        <li><router-link to="/listar">Listar</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style >
.menu{
  width: 130px;
  min-width: 130px;
  height: 100vh;
  background-color: rgb(0, 0, 0);
}

ul{
    height: 100vh;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

ul li{
    color: rgb(0, 0, 0);
    font-size: 24px;
    text-align: center;
    padding: 8px;
    margin-bottom: 8px;
    width: 100%;
    background: rgb(240, 240, 240);
   
}
a{
 text-decoration: none;
 color: rgb(98, 95, 95);
}
.router-link-active {
  color: black;
}
</style>