/**
 * Studiotra Portfolio — Work page filter
 * Filters project cards by category
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.work-grid .project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectCards.forEach((card) => {
        const categories = (card.dataset.category || '').split(' ');
        const match = filter === 'all' || categories.includes(filter);
        card.style.display = match ? '' : 'none';
      });
    });
  });
});
