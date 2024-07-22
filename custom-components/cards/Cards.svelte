<script>
  export let cards;
</script>

<div class="cards block">
  <ul>
    {#each cards as { srcSet, src, alt, title, description }}
      <li>
        <div class="cards-card-image">
          <picture>
            <source {srcSet} media="(min-width: 750px)" />
            <img {src} {alt} />
          </picture>
        </div>
        <div class="cards-card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .cards > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(278px, 1fr));
    grid-gap: 16px;
  }

  .cards > ul > li {
    border: 1px solid var(--dark-color);
    background-color: var(--background-color);
  }

  .cards .cards-card-body {
    margin: 16px;
  }

  .cards .cards-card-image {
    line-height: 0;
  }

  .cards .cards-card-body > *:first-child {
    margin-top: 0;
  }

  .cards > ul > li img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
</style>
