const url = "https://api.adviceslip.com/advice"

const fetchAdvice = async () => {
  let container = document.getElementsByClassName("main")
  let adviceId = document.getElementsByClassName("adviceNumber")
  let advice = document.getElementsByClassName("advice")

  const res = await fetch(url)
  const data = await res.json()

  console.log(data.slip.id)
  adviceId.innerHTML += `advice #${data.slip.id}`
}

fetchAdvice()
