window.addEventListener('load', () => {
    const loading = document.querySelector('#loading');
    fetch('https://api.github.com/users')
      .then(loading.classList.add('hidden'))
      .then(response => response.json())
      .then(data => {
        const usersContainer = document.querySelector('.users')
        data.forEach(user => {
          const card = document.createElement('div')
          card.classList.add('card')
          card.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.login}" />
            <h3>${user.login}</h3>
            <button id="showMore">Show more</button>
            <h4 class="additionalInfo hidden">Rank: ${user.type}</h4>
            <h4 class="additionalInfo hidden">Admin: ${user.site_admin}</h4>
          `
          card.querySelector('#showMore').addEventListener('click', () => {
            const additionalInfo = card.querySelectorAll('.additionalInfo')
            additionalInfo.forEach(info => {
              info.classList.toggle('hidden')
            })
            if (card.querySelector('#showMore').innerText === 'Show more') {
              card.querySelector('#showMore').innerText = 'Show less'
            } else {
              card.querySelector('#showMore').innerText = 'Show more'
            }
          })
          usersContainer.appendChild(card)
        })
  
        const input = document.querySelector('input')
        input.addEventListener('input', () => {
          const usersContainer = document.querySelector('.users')
          usersContainer.innerHTML = ''
          data.forEach(user => {
            if (user.login.includes(input.value) || input.value === '') {
              const card = document.createElement('div')
              card.classList.add('card')
              card.innerHTML = `
                      <img src="${user.avatar_url}" alt="${user.login}" />
                      <h3>${user.login}</h3>
                      <button id="showMore">Show more</button>
                      <h4 class="additionalInfo hidden">Rank: ${user.type}</h4>
                      <h4 class="additionalInfo hidden">Admin: ${user.site_admin}</h4>
                    `
              card.querySelector('#showMore').addEventListener('click', () => {
                const additionalInfo = card.querySelectorAll('.additionalInfo')
                additionalInfo.forEach(info => {
                  info.classList.toggle('hidden')
                })
                if (card.querySelector('#showMore').innerText === 'Show more') {
                  card.querySelector('#showMore').innerText = 'Show less'
                } else {
                  card.querySelector('#showMore').innerText = 'Show more'
                }
              })
              usersContainer.appendChild(card)
            }
          })
        })
      })
  })