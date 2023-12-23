document.addEventListener('DOMContentLoaded', function () {
  let memberCount = 1030; // Initial member count
  const onlineMembersElement = document.getElementById('online-members');

  setInterval(function () {
    memberCount += 3; // Increase the member count
    onlineMembersElement.textContent = memberCount.toLocaleString() + ' Member Online';
  }, 1000); // Update every 1 second
});

