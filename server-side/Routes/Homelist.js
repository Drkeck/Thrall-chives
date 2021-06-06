// THIS IS COPY PASTE FROM INDEX.HTML BUT FOR THE TIME BEING I AM NOT WORRYING ABOUT IT.
function homeList () {
    return`
    <h1 class="title-main">Data Management:</h1>
    <figure>
        <figcaption class="title-secondary">Find Client..</figcaption>
        <ul class="main-container list-container">
            <li class="list-item main-li post button" id="post">
                <h3 class="main-li-text" id="post">New Client</h3>
            </li>
            <hr/>
            <li class="list-item main-li put button" id="get">
                <h3 class="main-li-text" id="get">Find Client</h3>
            </li>
        </ul>
    </figure>
    `
}

module.exports = homeList