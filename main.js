const url = "https://api.adviceslip.com/advice"
const mainContent = document.querySelector(".mainContent")

const fetchAdvice = async () => {
  let container = document.getElementsByClassName("main")
  let adviceId = document.getElementsByClassName("adviceNumber")
  let advice = document.getElementsByClassName("advice")

  const res = await fetch(url)
  const data = await res.json()

  displayAdvice(data)
}

const displayAdvice = (data) => {
  const adviceHTML = `<div class="card">
  <h3 class="adviceNumber">advice #${data.slip.id}</h3>
  <h2 class="advice">${data.slip.advice}</h2>
  <div class="divider">
    <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
        <g transform="translate(138)" fill="#CEE3E9">
          <rect width="6" height="16" rx="3" />
          <rect x="14" width="6" height="16" rx="3" />
        </g>
      </g>
    </svg>
  </div>
  <button class="adviceBtn" onclick="fetchAdvice()">
    <svg viewBox="-15 -15 55 55" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        fill="#202733"
      />
    </svg>
  </button>
</div>`

  mainContent.innerHTML = adviceHTML
  console.log(adviceHTML)
}

fetchAdvice()
