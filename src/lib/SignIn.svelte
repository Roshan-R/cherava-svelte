<script lang="ts">
    import { isLoggedIn } from "../stores/auth";

    let loggedIn: boolean;

    // Subscribe to the store
    $: $isLoggedIn, (loggedIn = $isLoggedIn);

    const responseCallback = (resp: Response) => {
        resp.ok == true ? isLoggedIn.set(true) : isLoggedIn.set(false);
    };

    fetch(`${import.meta.env.vite_backend}/api/v1/login`, {
        method: "POST",
        credentials: "include",
    }).then(responseCallback);
</script>

<div>
    {#if !loggedIn}
        <button>
            <a
                href="https://github.com/login/oauth/authorize?client_id=e7accc9e4b457201f4d2&scope=user:email"
            >
                Sign in with Github
            </a>
        </button>
    {/if}
</div>
