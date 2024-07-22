import Cards from './Cards.svelte'

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
    const cards = block.parentElement;
    block.remove();
    new Cards({
        target: cards,
        props: {
            cards: cardComponents
        }
    })
}
