// Create bubbles for the interactive section
document.addEventListener("DOMContentLoaded", () => {
  const bubbleContainer = document.getElementById("bubbleContainer")

  // Create 15 bubbles
  for (let i = 0; i < 15; i++) {
    createBubble()
  }

  // Add click event to the container
  bubbleContainer.addEventListener("click", (e) => {
    // Create a new bubble at the click position
    const bubble = document.createElement("div")
    bubble.className = "bubble"

    // Random size between 20px and 60px
    const size = Math.floor(Math.random() * 40) + 20
    bubble.style.width = `${size}px`
    bubble.style.height = `${size}px`

    // Position at click location
    bubble.style.left = `${e.clientX - bubbleContainer.getBoundingClientRect().left}px`
    bubble.style.top = `${e.clientY - bubbleContainer.getBoundingClientRect().top}px`

    // Random color
    const colors = ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    bubble.style.backgroundColor = randomColor

    bubbleContainer.appendChild(bubble)

    // Make the bubble pop when clicked
    bubble.addEventListener("click", (event) => {
      event.stopPropagation()
      bubble.classList.add("pop")
      setTimeout(() => {
        bubble.remove()
        createBubble()
      }, 500)
    })
  })

  function createBubble() {
    const bubble = document.createElement("div")
    bubble.className = "bubble"

    // Random size between 20px and 60px
    const size = Math.floor(Math.random() * 40) + 20
    bubble.style.width = `${size}px`
    bubble.style.height = `${size}px`

    // Random position
    bubble.style.left = `${Math.random() * 100}%`
    bubble.style.top = `${Math.random() * 100}%`

    // Random color
    const colors = ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    bubble.style.backgroundColor = randomColor

    bubbleContainer.appendChild(bubble)

    // Make the bubble pop when clicked
    bubble.addEventListener("click", (event) => {
      event.stopPropagation()
      bubble.classList.add("pop")
      setTimeout(() => {
        bubble.remove()
        createBubble()
      }, 500)
    })
  }

  // Add bubble styles dynamically
  const style = document.createElement("style")
  style.textContent = `
    .bubble {
      position: absolute;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .bubble:hover {
      transform: scale(1.1);
    }
    
    .pop {
      transform: scale(1.5);
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
  `
  document.head.appendChild(style)
})
