<script>
import Title from './Title.svelte'
import TodayTitle from './TodayTitle.svelte'
</script>

<style>
header {
  display: grid;
  grid-template-columns: minmax(20px, 300px) 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "logo list-info";
  grid-area: header;
}
.logo {
  display: flex;
  align-items: center;
  grid-area: logo;
  padding: var(--spacing);
}
.list-info {
  display: flex;
  align-items: center;
  padding: var(--spacing);
  grid-area: list-info;
}
</style>

<header>
  <div class="logo">
    <Title />
  </div>
  <div class="list-info">
    <TodayTitle />
  </div>
</header>