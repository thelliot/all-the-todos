<script>
const nth = function(day) {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:  return `${day}st`;
    case 2:  return `${day}nd`;
    case 3:  return `${day}rd`;
    default: return `${day}th`;
  }
}
function dateTitle(date) {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${nth(day)} ${monthNames[monthIndex]}, ${year}`;
}

export let title = dateTitle(new Date())
</script>

<style lang="scss">
h2 {
  color:#3c3e54
}
</style>

<h2>{title}</h2>

