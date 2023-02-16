<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
</script>

<Header />
<div class="layout">
    <slot />
</div>

<style global>
    .layout {
        padding: 0 2rem;
    }
</style>
