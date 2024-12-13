<script>
    import HomePage from "./lib/HomePage.svelte";
    import New from "./lib/New.svelte";
    import "./app.css";
    import { path } from "elegua";
</script>

<body class="bg-background">
    {#if $path === "/"}
        <HomePage></HomePage>
    {:else if $path === "/new"}
        <New />
    {:else}
        <!-- Fallback/error route "*" - this will get matched/rendered if nothing else did. You can inspect $path, $url, etc as usual to see what user tried to reach -->
    {/if}
</body>
