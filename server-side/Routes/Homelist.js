// THIS IS COPY PASTE FROM INDEX.HTML BUT FOR THE TIME BEING I AM NOT WORRYING ABOUT IT.
const run = require('../connection')
console.log(run)

function homeList () {
    return`
    <h1 class="title-main">Data Management:</h1>
    <figure>
        <figcaption class="title-secondary">
            ..Find Client..
        </figcaption>
        <ul>
            <li class="button">
                <figure>
                    <figcaption>
                        *test user*
                    </figcaption>
                    <p>*test description*</p>
                </figure>
            </li>
        </ul>
    </figure>
    `
}

module.exports = homeList