<script>
    import Navbar from "./Navbar.svelte";
    import Button from "./components/Button.svelte";
    import Input from "./components/Input.svelte";

    let name = "Cherava";
    let url = "https://en.wikipedia.org/wiki/Linux";
    let selector =
        "#mw-content-text > div.mw-content-ltr.mw-parser-output > p:nth-child(8)";
    let cron = "* * * * *";

    let loading = false;
    let previewData = "";

    async function handlePreviewClick() {
        loading = true;
        const data = { url, selector };
        const endpoint = `${import.meta.env.VITE_BACKEND}/api/v1/scrape`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        const res = await fetch(endpoint, options);
        const response_json = await res.json();

        console.log(response_json);
        previewData = response_json.d;
        loading = false;
    }

    async function save() {
        loading = true;
        const data = { id: name, data: previewData, selector, url, cron };
        const endpoint = `${import.meta.env.VITE_BACKEND}/api/v1/workflows/new`;
        const options = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        const res = await fetch(endpoint, options);
        const response_json = await res.json();

        console.log(response_json);
        loading = false;
    }
</script>

<Navbar />
<div class="my-12 mx-20">
    <div class="text-4xl font-bold tracking-tight">Create a new workflow</div>
    <p class="text-muted-foreground text-sm">Make it your own!</p>
    <div class="flex flex-col px-1 py-4">
        <div
            class="flex flex-col justify-evenly gap-4 bg-white p-8 rounded-xl shadow"
        >
            <div class="flex flex-col gap-4">
                <Input title="Name" placeholder="example" bind:value={name} />
                <Input
                    title="Website url"
                    placeholder="https://example.com"
                    bind:value={url}
                />
                <Input
                    title="CSS Selector"
                    placeholder="h1.title"
                    bind:value={selector}
                />
                <Button
                    onClick={handlePreviewClick}
                    text="Preview"
                    isLoading={loading}
                ></Button>
            </div>
        </div>
        {#if previewData}
            <div class="mx-4 flex flex-col shadow p-8 rounded-xl gap-8">
                <p class="text-2xl font-semibold text-gray-600">Preview</p>

                <iframe srcdoc={previewData} title="Preview" frameborder="0"
                ></iframe>
                <base href="https://en.wikipedia.org/wiki/Linux" />

                <Input
                    title="Cron Expression"
                    placeholder="* * * * *"
                    bind:value={cron}
                />
                <Button
                    class="justify-self-end"
                    onClick={save}
                    text="Save"
                    isLoading={loading}
                ></Button>
            </div>
        {/if}
    </div>
</div>
