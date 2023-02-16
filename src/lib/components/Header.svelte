<script lang="ts">
    import { page } from "$app/stores";
</script>

<nav>
    <div class="navbar bg-accent ">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl text-primary" href="/">Blog</a>
        </div>

        <div class="flex-none">
            <ul class="menu menu-horizontal px-1 text-white">
                <li><a class:active={$page.url.pathname === "/"} href="/">Blog</a></li>
                <li><a class:active={$page.url.pathname === "/drafts"} href="/drafts">Drafts</a></li>
            </ul>
        </div>
    </div>
</nav>

<!-- <nav>
  <div class="left">
    <a class:active={$page.url.pathname === '/'} href="/">Blog</a>
    <a class:active={$page.url.pathname === '/drafts'} href="/drafts">Drafts</a>
  </div>
  <div class="right">
    <a href="/signup">Signup</a>
    <a href="/create">+ Create draft</a>
  </div>
</nav> -->
<style>
    /* nav {
        display: flex;
        padding: 2rem;
        align-items: center;
    } */
</style>
