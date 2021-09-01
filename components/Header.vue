<template>
    <div class="h-[55px] flex items-center fixed w-full backdrop-blur-sm z-10 navbar">
       <div class="text-4xl font-extrabold flex mx-9 w-3/4">
           <div class="logo text-gray-300">
               K
           </div>
           <div class="text-gray-300 logo2">
               M
           </div>
       </div>
       <div class="w-1/4 px-8">
           <Search />
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.logo {
    margin-left: -15px;
    font-family: 'Open Sans', sans-serif;
    background-color: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
}
.logo::before {
    content: 'B';
    display: inline-block;
    transform: rotateY(180deg);
    margin-right: -19px;
    background-color: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
    
}
.logo::after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50px;
    background-color: red;
    box-shadow: 1px 1px 0px rgba(0,0,0, 0.2);
    margin-left: 17px;
    margin-top: -6px;
    z-index: 19;
}

.logo2 {
    margin-left: -5px;
    margin-top: 1px;
    transform: rotate(180deg);
    font-family: 'Open Sans', sans-serif;
    background-color: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;

}

.logo2::after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50px;
    background-color: rgb(17, 0, 255);
    box-shadow: 1px 2px 9px rgba(49, 44, 44, 0.2);
    margin-left: 26px;
    margin-top: -6px;
    z-index: 19;
}


.navbar {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}

</style>