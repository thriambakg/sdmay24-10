<header>
    <nav>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/model1">Model 1</a>
        </li>  
        <li>
            <a href="/model2">Model 2</a>
        </li>
    </nav>
</header>

<slot />

<style>
    header {
        background-color: #555;
        padding: 20px 10px;
    }

    li {
        display: inline;
        margin-right: 20px;
    }

    nav {
        text-align: center;
        color: white;
        font-family:'Century Gothic';
        font-size:17px;
        padding: 20px 30px;

    }
</style>
