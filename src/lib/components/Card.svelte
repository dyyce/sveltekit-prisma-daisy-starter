<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    let x = 0;
    let y = 0;

    onMount(() => {
        let btn = document.querySelector(".mouse-cursor-gradient-tracking");
        if (btn == null) return;

        btn.addEventListener("mousemove", (e) => {
            let rect = e.target.getBoundingClientRect();

            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
            btn.style.setProperty("--x", x + "px");
            btn.style.setProperty("--y", y + "px");
        });
    });
</script>

<button
    class="btn btn-primary inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
    >Button</button
>

<div class="card mouse-cursor-gradient-tracking">hover me</div>

<style lang="scss">
    .mouse-cursor-gradient-tracking {
        position: relative;
        background: #7983ff;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        border: none;
        color: white;
        cursor: pointer;
        // outline: none;
        overflow: hidden;
    }

    .mouse-cursor-gradient-tracking span {
        position: relative;
    }

    .mouse-cursor-gradient-tracking::before {
        --size: 0;
        content: "";
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, pink, transparent);
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
    }

    .mouse-cursor-gradient-tracking:hover::before {
        --size: 200px;
    }
</style>
