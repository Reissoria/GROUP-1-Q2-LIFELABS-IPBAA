<script>
function showSection(sectionId) {
  let sections = document.querySelectorAll('.section-container');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}
</script>