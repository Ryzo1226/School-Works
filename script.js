document.addEventListener('DOMContentLoaded', function() {
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