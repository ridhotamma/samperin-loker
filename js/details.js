const fetchData = async (url) => {
  const response = await fetch(url);
  const jobs = await response.json();

  jobs.forEach((job, index) => {
    const jobData = [job.job, job.company, job.img];
    const semanticDiv = `   
    <tr>
            <td>${index}</td>
            <td>${jobData[0]}</td>
            <td>${jobData[1]}</td>
            <td><button>Details >>> </button></td>
          </tr>`;

    const joblist = document.querySelector("#job-table");
    joblist.innerHTML += semanticDiv;
  });
};
fetchData("../mock/MOCK_DATA.json");
