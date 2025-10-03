function loadFairyContent() {

    const urlParams = new URLSearchParams(window.location.search);
    const fairyName = urlParams.get('fairy') || 'tecna';
    const fairy = FAIRIES_DATA[fairyName];
    
    
    document.body.classList.add(fairy.theme);
    
 
    document.getElementById('fairy-content').innerHTML = `
        <section class="section1__bio">
            <h2 class="section1__bio-heading heading-title">"${fairy.quote}"</h2>
            ${fairy.bio.map(text => `<p class="section1__bio-text">${text}</p>`).join('')}
        </section>
        
        <section class="section2__power">
            <h2 class="section2__power-title heading-title">Силы</h2>
            <div class="section2__power-kard">
                ${fairy.powers.map(power => `
                    <div class="section2__power-item">
                        <div class="kard-img-container">
                            <img class='kard-img' src="${power.image}" alt="${power.title}">
                        </div>
                        <div class="section2-item-sign">${power.title}</div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    

    document.getElementById('fairy-card').innerHTML = `
        <div class="article__kard-container">
            <img class="article__kard-img" src="${fairy.image}" alt="${fairy.name}">
            <h1 class="article__kard-title heading-title">${fairy.name}</h1>
            <div class="article__kard-subtitle">${fairy.subtitle}</div>
        </div>
    `;
}


loadFairyContent();