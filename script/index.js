
    function showSection(id, button) {
      // Hide all sections
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });

      // Remove active state from all buttons
      document.querySelectorAll('.menu button').forEach(btn => {
        btn.classList.remove('active');
      });

      // Show selected section
      document.getElementById(id).classList.add('active');
      button.classList.add('active');
    }