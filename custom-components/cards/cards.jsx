import { createOptimizedPicture } from '../../scripts/aem.js';
import { createRoot } from 'react-dom/client';

/**
 * 
 * @param {HTMLDivElement} block 
 */
export default function decorate(block) {
    let cardComponents = [];
    [...block.children].forEach((card) => {
        const srcSet = card.querySelector('source').srcset;
        const img = card.querySelector('img');
        const src = img.src;
        const alt = img.alt;
        const title = card.querySelector('div > p:first-child').textContent;
        const description = card.querySelector('div > p:last-child').textContent;
        cardComponents.push({ srcSet, src, alt, title, description }); 
    });
    console.log(cardComponents);
    const cards = document.createElement("div");
    cards.classList.add('cards');
    cards.classList.add('block');
    block.replaceWith(cards);
    const root = createRoot(cards);
    root.render(<Cards>
        {cardComponents.map((card) => <Card key={card.title} {...card} />)}
    </Cards>);
}


function Cards({ children }) {
    return (    
        <ul>
            {children}
        </ul>
    );
}

function Card({srcSet, src, alt, title, description, }) {
    return (
        <li>
            <div className="cards-card-image">
            <picture>
                <source srcSet={srcSet} media="(min-width: 750px)" />
                <img src={src} alt={alt} />
            </picture>
            </div>
            <div className="cards-card-body">
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </li>
    )
}