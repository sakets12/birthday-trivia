const questions = [
	{ q: 'What piece of clothing is often worn by men at weddings and interviews?', a: 'suit' },
	{ q: 'Which is your favorite F1 team?', a: 'mclaren' },
	{ q: 'What wind instrument is often seen in orchestras and once stolen for love?', a: 'french horn' },
	{ q: 'What do you call a person who looks just like someone else?', a: 'doppelganger' },
	{ q: 'What yellow object is essential for rainy days and shows up in many romantic movie scenes?', a: 'umbrella' }
  ];
  
  const finalAnswer = 'how i met your mother'; // 5‑word phrase
  let current = 0;
  
  const startBtn = document.getElementById('start-btn');
  const gameArea = document.getElementById('game-area');
  const questionEl = document.getElementById('question');
  const answerInput = document.getElementById('answer-input');
  const submitBtn = document.getElementById('submit-btn');
  const feedbackEl = document.getElementById('feedback');
  
  startBtn.addEventListener('click', () => {
	startBtn.classList.add('hidden');
	gameArea.classList.remove('hidden');
	showQuestion();
  });
  
  function showQuestion() {
	if (current < questions.length) {
	  questionEl.textContent = questions[current].q;
	  answerInput.value = '';
	  feedbackEl.textContent = '';
	} else {
	  questionEl.textContent = 'Type the 5 worded phrase that links all the previous answers';
	  answerInput.value = '';
	  feedbackEl.textContent = '';
	  submitBtn.removeEventListener('click', handleAnswer);
	  submitBtn.addEventListener('click', handleFinal);
	}
  }
  
  function handleAnswer() {
	const ans = answerInput.value.trim().toLowerCase();
	if (ans === questions[current].a.toLowerCase()) {
	  current++;
	  showQuestion();
	} else {
	  feedbackEl.textContent = 'Incorrect. Try again.';
	}
  }
  
  function handleFinal() {
	const ans = answerInput.value.trim().toLowerCase();
	if (ans === finalAnswer) {
	  feedbackEl.innerHTML = 'Correct! <a href="party-details.pdf" download>Download your offer</a>';
	} else {
	  feedbackEl.textContent = 'Hint: It is a sit-com.';
	}
  }
  
  submitBtn.addEventListener('click', handleAnswer);