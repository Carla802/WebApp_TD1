<script>
    import { onMount } from "svelte";
    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;

    import { Modals, closeModal } from "svelte-modals";
    import ModalComponent from "./ModalComponent.svelte";
    import { openModal } from "svelte-modals";

    let rows = [];
    let page = 0;
    let totalPages = [];
    let currentPageRows = [];
    let itemsPerPage = 20;

    $: currentPageRows = totalPages.length > 0 ? totalPages[page] : [];

    const paginate = (items) => {
        const pages = Math.ceil(items.length / itemsPerPage);

        const paginatedItems = Array.from({ length: pages }, (_, index) => {
            const start = index * itemsPerPage;
            return items.slice(start, start + itemsPerPage);
        });

        totalPages = [...paginatedItems];
    };

    onMount(() => {
        $: (rows = data.body);
        paginate(rows);
    });

    const setPage = (p) => {
        if (p >= 0 && p < totalPages.length) {
            page = p;
        }
    }

    function handle(row) {
        openModal(ModalComponent, { title: "Details", data: row})
    }

</script>

<div class="home-page">
    <div class="banner">
        <div class="container">
            <h1 class="logo-font">List of all locations</h1>
        </div>
    </div>

    <div class="container page">
        <div class="row">
            <div class="col-md-9">
                <div class="feed-toggle">
                    {#if data.role=="admin"}
                        <a href="/add" class="btn btn-outline-primary">
                            <i class="ion-add" /> Add a new location
                        </a>
                    {/if}
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Film Name</th>
                            <th>Address</th>
                            <th>Year</th>
                        <tr/>
                        </thead>
                        <tbody>
                        {#each currentPageRows as row, i}
                            <tr>
                                <td>{row.filmName}</td>
                                <td>{row.address}</td>
                                <td>{row.year}</td>
                                <td>
                                    <button class="btn btn-outline-primary" on:click={() => handle(row)}>
                                        Details
                                    </button>
                                </td>
                                {#if data.role=="admin"}
                                    <td>
                                        <a href="/editor/{row._id}" class="btn btn-outline-secondary">
                                            <i class="ion-edit" /> Edit
                                        </a>
                                    </td>
                                    <td>
                                        <form use:enhance method="POST" action="?/delete">
                                            <input type="hidden" name="id" value={row._id}>
                                            <button class="btn btn-outline-danger">
                                                <i class="ion-trash-a" /> Delete
                                            </button>
                                        </form>
                                    </td>
                                {/if}
                            </tr>
                        {/each}
                        </tbody>
                    </table>
                    <Modals>
                        <div
                            slot="backdrop"
                            class="backdrop"
                            on:click={closeModal}>
                        </div>
                    </Modals>
                </div>

                <nav class="pagination">
                    <ul>
                        <li>
                            <button
                                    type="button"
                                    class="btn-next-prev"
                                    on:click={() => setPage(page - 1)}
                            >
                                PREV
                            </button>
                        </li>

                        {#each totalPages as page, i}
                            <li>
                                <button
                                        type="button"
                                        class="btn-page-number"
                                        on:click={() => setPage(i)}
                                >
                                    {i + 1}
                                </button>
                            </li>
                        {/each}

                        <li>
                            <button
                                    type="button"
                                    class="btn-next-prev"
                                    on:click={() => setPage(page + 1)}
                            >
                                NEXT
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<style>
    nav > ul {
        list-style-type: none;
        display: flex;
    }
    button {
        background: transparent;
        border: 1px solid #ccc;
        padding: 5px 10px;
        margin-left: 3px;
        float: left;
        cursor: pointer;
    }
    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0,0.50)
    }
    a {
        background: transparent;
        border: 1px solid #ccc;
        padding: 5px 10px;
        margin-left: 3px;
        float: left;
        cursor: pointer;
    }
</style>
