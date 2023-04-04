const issuesList = document.getElementById('issues-list');
const pageNumber = document.getElementById('page-number');
let currentPage = 1;

function displayIssues() {
  fetch(`https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`)
    .then(response => response.json())
    .then(issues => {
      issuesList.innerHTML = issues.map(issue => `<li>${issue.title}</li>`).join('');
      pageNumber.innerText = `Page number ${currentPage}`;
    })
    .catch(error => console.error(error));
}

displayIssues();

document.getElementById('load-next').addEventListener('click', () => {
  currentPage++;
  displayIssues();
});

document.getElementById('load-prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayIssues();
  }
});
