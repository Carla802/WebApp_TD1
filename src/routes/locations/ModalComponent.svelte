<script>
    import {closeModal} from 'svelte-modals'

    export let isOpen

    export let title

    export let data

</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents">
            <h2>{title}</h2>
            <div class="actions">
                <table class="transpose">
                    <thead>
                    <tr>
                        <th>Film Name</th>
                        <th>Address</th>
                        <th>District</th>
                        <th>Film Director</th>
                        <th>Film Producer</th>
                        <th>Film Type</th>
                        <th>Geolocation</th>
                        <th>Source Location ID</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.filmName}</td>
                            <td>{data.address}</td>
                            <td>{data.district}</td>
                            <td>{data.filmDirectorName}</td>
                            <td>{data.filmProducerName}</td>
                            <td>{data.filmType}</td>
                            <td>{data.geolocation.coordinates}</td>
                            <td>{data.sourceLocationId}</td>
                            <td>{data.startDate}</td>
                            <td>{data.endDate}</td>
                            <td>{data.year}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button on:click="{closeModal}">Close</button>
        </div>
    </div>
{/if}


<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        /* allow click-through to backdrop */
        pointer-events: none;
    }

    .contents {
        min-width: 240px;
        border-radius: 6px;
        padding: 16px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: auto;
    }

    h2 {
        text-align: center;
        font-size: 24px;
    }

    p {
        text-align: center;
        margin-top: 16px;
    }

    .actions {
        margin-top: 32px;
        display: flex;
        justify-content: flex-end;
    }
    .transpose thead,
    .transpose tbody,
    .transpose tr {
        display: inline-block;
    }

    .transpose tbody tr {
        margin-right: -.27em;
    }

    .transpose th,
    .transpose td {
        display: block;
    }
</style>