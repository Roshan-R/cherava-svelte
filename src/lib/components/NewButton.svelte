<script>
    import { Button } from "$lib/components/ui/button/index";
    import LoaderCircle from "lucide-svelte/icons/loader-circle";

    export let onClick;
    export let isLoading = false;
    export let text = "";

    let classList = "";
    export { classList as class };
</script>

{#if isLoading}
    <Button disabled>
        <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
        Please wait
    </Button>
{:else}
    <Button on:click={onClick} class={classList}>{text}</Button>
{/if}
