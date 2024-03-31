<template>
    <div class="empty-content">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-inbox"></use>
        </svg>
        Empty
    </div>
</template>

<script>

</script>
<style lang='less' scoped>
.empty-content {
    flex: 1;
    margin: 20px;
    font-size: 16px;
    overflow-y: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    height: 72vh;

    .icon {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }
}
</style>