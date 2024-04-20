<script lang="ts">
import '../app.css';
</script>

<header>
    <h1>
        Cancer Research AI
    </h1>
</header>

<slot/>

<style>
:global(body) {
    font-family: Arial;
    background-color:rgb(159, 178, 181);
}
header{
    background-color: #555;
    padding: 20px 10px;
}

h1{
    text-align: center;
    color: white;
    font-family:'Century Gothic';
    font-size:30px;
}
</style>
