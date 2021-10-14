<template>
    <div class="p-5 rounded-md blog-tips border border-green-500 relative shadow-md bg-gray-100">
            <slot>default</slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.blog-tips {
    padding-left: 40px;
    border-left: 8px rgb(4, 161, 101) solid;
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: 600;
}
.blog-tips::before {
    content: url('./static/Light-bulb-icon.svg');
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    left: 2px;
}

</style>