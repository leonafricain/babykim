<template>
    <div class="h-[55px] flex items-center fixed w-full backdrop-blur-sm z-10 navbar">
     <NuxtLink to="/" class="w-1/2">
         <Logo />
     </NuxtLink>
       <div class="w-1/3">
           <Search />
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>



.navbar {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}

</style>