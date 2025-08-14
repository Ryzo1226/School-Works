document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    const projectSelect = document.getElementById('projectSelect');

    projectSelect.addEventListener('change', function() {
        const selectedProject = this.value;
        if (selectedProject) {
            // Navigate to the selected project page
            window.location.href = selectedProject;

            // Alternative methods that do the same thing:
            // window.location = selectedProject;
            // window.location.assign(selectedProject);
        }
    });
});
=======
  const projectSelect = document.getElementById('projectSelect');
  
  projectSelect.addEventListener('change', function() {
    const selectedProject = this.value;
    if (selectedProject) {
      // Navigate to the selected project page
      window.location.href = selectedProject;
      
      // Alternative methods that do the same thing:
      // window.location = selectedProject;
      // window.location.assign(selectedProject);
    }
  });
});
>>>>>>> 5cedb1914c7055bfe58feda5d3dc0c58deae09e2
