<script lang="ts">
    import NewWorkflow from "./NewWorkflow.svelte";
    import SignIn from "./SignIn.svelte";
    import Navbar from "./Navbar.svelte";
    import { isLoggedIn } from "../stores/auth";
    import Workflow from "./Workflow.svelte";
    import { onMount } from "svelte";

    import "@appnest/masonry-layout";

    let loggedIn: boolean;
    let data = [];

    // Subscribe to the store
    $: loggedIn = $isLoggedIn;

    // Fetch data when user is logged in
    const fetchWorkflows = async () => {
        const response = await fetch(
            "http://localhost:8080/api/v1/workflows/get",
            {
                method: "GET",
                credentials: "include",
            },
        );
        if (response.ok) {
            data = await response.json();
        }
    };

    // Fetch workflows when the component is mounted and user is logged in
    onMount(async () => {
        await fetchWorkflows();
    });
</script>

<Navbar />
<main class="container mx-4 mt-12 h-full w-full">
    <div class="font-semibold text-4xl mb-8">Your Workflows</div>
    <masonry-layout class="h-full w-full">
        {#if loggedIn}
            {#each data as e}
                <Workflow options={e} />
            {/each}
            <NewWorkflow />
        {:else}
            <SignIn />
        {/if}
    </masonry-layout>
</main>
