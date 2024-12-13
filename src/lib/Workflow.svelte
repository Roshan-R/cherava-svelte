<script>
    import timeSince from "./utils/DateTime";

    export let options;

    let name = options.user_id;
    let data = options.data;
    let time = timeSince(options.lastupdated);
</script>

<div class="absolue">
    <div
        class="relative w-full h-fit max-w-md rounded-md bg-white p-3 shadow-lg mb-8"
    >
        <div class="flex justify-between overflow-hidden">
            <div class=" text-2xl font-semibold text-black text-wrap">
                <p>{name}</p>
            </div>
            <!-- <button class="rounded-md bg-gray-100 px-2">...</button> -->
        </div>

        <div class="font-semibold text-gray-700 text-wrap b-4">
            <p>{data}</p>
        </div>
        <div
            class="absolute -bottom-3 right-0 w-min text-nowrap rounded-lg bg-black p-2 text-sm text-green-400"
        >
            {time} ago
        </div>
    </div>
</div>
