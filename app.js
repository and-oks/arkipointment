// 1. CARD SWITCHING LOGIC (Welcome -> Login -> Register)
function switchCard(cardId) {
    document.getElementById('welcomeCard').classList.remove('visible');
    document.getElementById('welcomeCard').classList.add('hidden');
    
    document.getElementById('loginCard').classList.remove('visible');
    document.getElementById('loginCard').classList.add('hidden');
    
    document.getElementById('registerCard').classList.remove('visible');
    document.getElementById('registerCard').classList.add('hidden');

    const targetCard = document.getElementById(cardId);
    targetCard.classList.remove('hidden');
    targetCard.classList.add('visible');
}

// 2. ROLE SELECTOR LOGIC (Architect vs Client)
let selectedRole = 'client';

function setRole(role) {
    selectedRole = role;
    const archBtn = document.getElementById('roleArchitect');
    const clientBtn = document.getElementById('roleClient');
    const licenseInput = document.getElementById('licenseInput');

    if (role === 'architect') {
        archBtn.classList.add('active');
        clientBtn.classList.remove('active');
        licenseInput.classList.remove('hidden');
    } else {
        clientBtn.classList.add('active');
        archBtn.classList.remove('active');
        licenseInput.classList.add('hidden');
    }
}

// 3. NEW: INTERCEPT FORM SUBMISSIONS & REDIRECT TO DASHBOARD
// INTERCEPT FORM SUBMISSIONS & REDIRECT TO CORRESPONDING ACCOUNT SYSTEM
;