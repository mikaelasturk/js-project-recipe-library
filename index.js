function setupButtonGroup(groupSelector) {
  const group = document.querySelector(groupSelector);
  if (!group) return;
  const buttons = group.querySelectorAll('button');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      
      buttons.forEach(b => b.classList.remove('active'));
    
      btn.classList.add('active');
    });
  });
}

setupButtonGroup('.filterButton');
setupButtonGroup('.sortButton');

