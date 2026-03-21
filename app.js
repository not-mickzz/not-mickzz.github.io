// Custom cursor
  const cursor    = document.getElementById('cursor')
  const cursorDot = document.getElementById('cursorDot')
  document.addEventListener('mousemove', e => {
    cursor.style.left    = e.clientX + 'px'
    cursor.style.top     = e.clientY + 'px'
    cursorDot.style.left = e.clientX + 'px'
    cursorDot.style.top  = e.clientY + 'px'
  })
  document.querySelectorAll('a').forEach(a => {
    a.addEventListener('mouseenter', () => {
      cursor.style.width  = '32px'
      cursor.style.height = '32px'
      cursor.style.borderColor = '#00ff88'
    })
    a.addEventListener('mouseleave', () => {
      cursor.style.width  = '16px'
      cursor.style.height = '16px'
    })
  })

  // Typing effect for boot lines
  const lines = document.querySelectorAll('.boot-line')
  lines.forEach((line, i) => {
    const text = line.textContent
    line.textContent = ''
    setTimeout(() => {
      let j = 0
      const interval = setInterval(() => {
        line.textContent += text[j]
        j++
        if (j >= text.length) clearInterval(interval)
      }, 25)
    }, 300 + i * 300)
  })
