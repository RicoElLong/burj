// Age gate logic
  function enterSite() {
    document.getElementById('age-gate').style.display = 'none';
    localStorage.setItem('velvet_age_verified', 'true');
  }
  
  if (localStorage.getItem('velvet_age_verified') === 'true') {
    document.getElementById('age-gate').style.display = 'none';
  }

  // --- Checkout Modal Logic ---
  function openCheckout(title) {
    document.getElementById('modal-title').textContent = title;
    
    // Динамически меняем цену в зависимости от того, что нажали
    let amount = '$19.99';
    if (title.includes('VIP')) amount = '$49.99';
    if (title.includes('Basic')) amount = '$9.99';
    document.getElementById('pay-amount').textContent = amount;
    
    // Сброс состояний модалки
    document.getElementById('checkout-form-view').style.display = 'block';
    document.getElementById('checkout-success-view').style.display = 'none';
    document.getElementById('pay-email').value = '';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('pay-email').style.borderColor = 'var(--line)';
    
    const btn = document.getElementById('pay-btn');
    btn.textContent = 'I Have Paid — Unlock Access';
    btn.style.opacity = '1';
    
    document.getElementById('checkout-modal').classList.add('on');
  }

  function copyAddress() {
    const addr = document.querySelector('.crypto-addr').textContent;
    navigator.clipboard.writeText(addr).then(() => {
      alert("Crypto address copied to clipboard!");
    });
  }

  function confirmCryptoPayment() {
    const emailInput = document.getElementById('pay-email');
    const email = emailInput.value.trim();
    const errorDiv = document.getElementById('email-error');
    
    // Валидация почты
    if (!email || !email.includes('@') || !email.includes('.')) {
      emailInput.style.borderColor = '#ff3333';
      errorDiv.style.display = 'block';
      return;
    }
    
    emailInput.style.borderColor = 'var(--line)';
    errorDiv.style.display = 'none';
    
    // Симуляция проверки транзакции
    const btn = document.getElementById('pay-btn');
    btn.textContent = 'Verifying Transaction...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
      // Показываем экран успеха
      document.getElementById('checkout-form-view').style.display = 'none';
      document.getElementById('checkout-success-view').style.display = 'block';
      document.getElementById('success-email').textContent = email;
    }, 1800);
  }

  // --- Chat Modal Logic ---
  function openChat() {
    document.getElementById('chat-modal').classList.add('on');
  }
  function closeChat() {
    document.getElementById('chat-modal').classList.remove('on');
  }
  function closeChatAndScroll() {
    closeChat();
    document.getElementById('pricing').scrollIntoView({behavior:'smooth'});
  }
