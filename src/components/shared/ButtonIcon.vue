<template>
    <div class="btn-icon">
        <slot/>
    </div>
</template>

<style scoped>
.btn-icon {
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    transition: 0.15s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
}

.btn-icon:hover{
    background-color: rgba(255, 255,255, 0.15);
}
</style>