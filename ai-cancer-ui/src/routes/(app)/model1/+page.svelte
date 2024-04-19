<h1>Model 1</h1>

<script lang='ts'>
    import {enhance} from '$app/forms';

    export let form;
</script>
<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
    <h2>Upload CSV</h2>
    <p class="text-gray-600 mb-4">Please upload your cancer data CSV file for cancer recurrence prediction.</p>
    <form method='POST' enctype="multipart/form-data" use:enhance>
        <input type="file" class="border rounded-md p-2 w-full mb-4" accept=".csv" name="cancerFile"/>
        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Upload</button>
    </form>
    {#if form}
        <h2 class="mt-4 text-2xl font-bold">{`Cancer will come back in ${form.prediction} months`}</h2>
    {/if}
</div>

<style>

    h1{
        text-align: center;
        color: black;
        font-family:'Century Gothic';
        font-size:25px;
    }

    p{
        padding: 20px 100px;
    }

</style>