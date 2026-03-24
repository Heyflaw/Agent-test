const messages = document.getElementById('messages');
const composer = document.getElementById('composer');
const promptInput = document.getElementById('prompt');
const sessionMeta = document.getElementById('session-meta');
const modeSelect = document.getElementById('mode-select');
const settingsForm = document.getElementById('settings-form');
const insights = document.getElementById('insights');
const quickActions = document.querySelectorAll('.quick-action');
const toggleHelp = document.getElementById('toggle-help');
const helpPanel = document.getElementById('help-panel');

function getSelectedDetail() {
  const checked = settingsForm.querySelector('input[name="detail"]:checked');
  return checked ? checked.value : 'executif';
}

function updateSessionMeta() {
  const modeLabel = modeSelect.options[modeSelect.selectedIndex].text;
  const detail = getSelectedDetail() === 'expert' ? 'Expert' : 'Exécutif';
  sessionMeta.textContent = `Mode: ${modeLabel} · Détail: ${detail}`;
}

function addMessage(content, role = 'assistant') {
  const item = document.createElement('li');
  item.className = `message ${role}`;

  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  item.appendChild(paragraph);

  messages.appendChild(item);
  item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function mockAssistantResponse(userPrompt) {
  const mode = modeSelect.value;
  const includeSources = document.getElementById('include-sources').checked;
  const includeConfidence = document.getElementById('include-confidence').checked;

  const intros = {
    veille: 'Voici une synthèse de veille orientée impact agence :',
    redaction: 'Voici une proposition éditoriale prête à retravailler :',
    conseil: 'Voici des recommandations opérationnelles prioritaires :'
  };

  let response = `${intros[mode]}\n- Point clé 1\n- Point clé 2\n- Prochaine action en 7 jours`;

  if (userPrompt.length < 25) {
    response += '\n\nPeux-tu préciser le contexte (client, objectif, canal) pour affiner ?';
  }

  const insightBits = [];
  if (includeSources) insightBits.push('Sources: 3 liens externes + 2 contenus Decriiipt');
  if (includeConfidence) insightBits.push('Confiance: 0,78 (moyenne/élevée)');

  insights.innerHTML = insightBits.length
    ? `<ul>${insightBits.map((bit) => `<li>${bit}</li>`).join('')}</ul>`
    : '<p>Affichage des sources et de la confiance désactivé.</p>';

  return response;
}

composer.addEventListener('submit', (event) => {
  event.preventDefault();
  const userPrompt = promptInput.value.trim();

  if (!userPrompt) {
    promptInput.setAttribute('aria-invalid', 'true');
    return;
  }

  promptInput.removeAttribute('aria-invalid');

  addMessage(userPrompt, 'user');

  window.setTimeout(() => {
    addMessage(mockAssistantResponse(userPrompt), 'assistant');
  }, 250);

  promptInput.value = '';
  promptInput.focus();
});

promptInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.ctrlKey) {
    event.preventDefault();
    composer.requestSubmit();
  }
});

modeSelect.addEventListener('change', updateSessionMeta);
settingsForm.addEventListener('change', updateSessionMeta);

quickActions.forEach((button) => {
  button.addEventListener('click', () => {
    promptInput.value = button.dataset.prompt || '';
    promptInput.focus();
  });
});

toggleHelp.addEventListener('click', () => {
  const hidden = helpPanel.hasAttribute('hidden');
  if (hidden) {
    helpPanel.removeAttribute('hidden');
    toggleHelp.setAttribute('aria-expanded', 'true');
    toggleHelp.textContent = 'Masquer l’aide clavier';
  } else {
    helpPanel.setAttribute('hidden', '');
    toggleHelp.setAttribute('aria-expanded', 'false');
    toggleHelp.textContent = 'Afficher l’aide clavier';
  }
});

updateSessionMeta();
