<script>
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.backgroundColor = "#00ff88";
      link.style.color = "#0d0d0d";
    });
    link.addEventListener("mouseout", () => {
      link.style.backgroundColor = "";
      link.style.color = "#00ff88";
    });
  });
});
</script>