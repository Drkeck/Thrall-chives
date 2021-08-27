const { getAll } = require("../../server-side/connection/types")

// will be filled in later, technically this already has been made in the INDEX.JS FILE.
const List = getAll()

const users = run

console.log(users)

var home = `
<figure>
    <figcaption class="title-secondary">
        ..Find Client..
    </figcaption>
    <ul>
        <li>
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