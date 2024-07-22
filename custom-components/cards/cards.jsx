export function decorate(block) {

}

function Cards() {
    return (
        <ul>
        
        </ul>
    );
}

function Card(srcSet, src, alt, title, description, ) {
    return (
        <li>
            <div className="cards-card-image">
            <picture>
                <source srcSet="..." media="(min-width: 750px)" />
                <img src="..." alt="..." />
            </picture>
            </div>
            <div className="cards-card-body">
            <h2>...</h2>
            <p>...</p>
            </div>
        </li>
    )
}