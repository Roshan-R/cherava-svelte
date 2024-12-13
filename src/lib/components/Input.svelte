<script lang="ts">
    import { Input } from "$lib/components/ui/input/index";
    import { Label } from "$lib/components/ui/label/index";

    export let title: string;
    export let placeholder: string;
    export let value = "";
    const onInput = (e: Event) => {
        const input = e.target as HTMLInputElement;
        value = input.value;
    };
</script>

<div class="flex w-full max-w-sm flex-col gap-1.5">
    <Label>{title}</Label>
    <Input {placeholder} on:input={onInput} />
</div>
