const programData = {
  'computer-science': {
    icon: '💻',
    title: 'Computer Science',
    badge: 'New Program · BS 4-Year',
    subjects: [
      'Programming Fundamentals (C/C++)',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Database Systems',
      'Computer Networks',
      'Operating Systems',
      'Software Engineering',
      'Web Technologies',
      'Artificial Intelligence',
      'Discrete Mathematics'
    ],
    careers: ['Software Developer', 'Web Developer', 'Database Administrator', 'IT Support Specialist', 'MS/PhD in CS']
  },
  'english-literature': {
    icon: '📖',
    title: 'English Literature',
    badge: 'BS 4-Year Program',
    subjects: [
      'Introduction to Poetry, Drama & Prose',
      'British Literature',
      'American Literature',
      'Literary Criticism & Theory',
      'Linguistics',
      'Academic Writing & Composition',
      'South Asian Literature in English',
      'Research Methodology'
    ],
    careers: ['Teaching', 'Content Writing & Journalism', 'Civil Services', 'Publishing', 'Translation']
  },
  'zoology': {
    icon: '🔬',
    title: 'Zoology',
    badge: 'BS 4-Year Program',
    subjects: [
      'Cell Biology',
      'Invertebrate Zoology',
      'Vertebrate Zoology',
      'Animal Physiology',
      'Genetics',
      'Ecology & Environmental Biology',
      'Biochemistry',
      'Immunology',
      'Research Methods'
    ],
    careers: ['Research & Academia', 'Wildlife Conservation', 'Medical/Veterinary Studies', 'Environmental Science', 'Teaching']
  },
  'chemistry': {
    icon: '🧪',
    title: 'Chemistry',
    badge: 'BS 4-Year Program',
    subjects: [
      'Organic Chemistry',
      'Inorganic Chemistry',
      'Physical Chemistry',
      'Analytical Chemistry',
      'Biochemistry',
      'Environmental Chemistry',
      'Industrial Chemistry',
      'Research Methods'
    ],
    careers: ['Pharmaceutical Industry', 'Research Labs', 'Quality Control', 'Teaching', 'MPhil/PhD Studies']
  },
  'botany': {
    icon: '🌿',
    title: 'Botany',
    badge: 'BS 4-Year Program',
    subjects: [
      'Plant Taxonomy',
      'Plant Physiology',
      'Plant Ecology',
      'Genetics',
      'Mycology & Plant Pathology',
      'Cell & Molecular Biology',
      'Biochemistry',
      'Economic Botany'
    ],
    careers: ['Agriculture Sector', 'Environmental Management', 'Research', 'Teaching', 'Biotechnology']
  },
  'mathematics': {
    icon: '🔢',
    title: 'Mathematics',
    badge: 'BS 4-Year Program',
    subjects: [
      'Calculus & Analytic Geometry',
      'Linear Algebra',
      'Abstract Algebra',
      'Real Analysis',
      'Differential Equations',
      'Number Theory',
      'Mechanics',
      'Statistics & Probability'
    ],
    careers: ['Finance & Banking', 'Data Analysis', 'Engineering Support Roles', 'Teaching', 'Further Studies']
  },
  'urdu-pashto': {
    icon: '🌍',
    title: 'Urdu / Pashto Literature',
    badge: 'BS 4-Year Program',
    subjects: [
      'Classical Urdu/Pashto Poetry',
      'Prose & Fiction',
      'Linguistics',
      'Literary Criticism',
      'Modern Literature',
      'Folk Literature',
      'Research Methodology'
    ],
    careers: ['Teaching', 'Journalism', 'Translation', 'Civil Services', 'Media & Broadcasting']
  }
};

function openProgramModal(key) {
  const data = programData[key];
  if (!data) return;
  document.getElementById('modalIcon').textContent = data.icon;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalBadge').textContent = data.badge;
  const subjectsList = document.getElementById('modalSubjects');
  subjectsList.innerHTML = data.subjects.map(s => `<li>${s}</li>`).join('');
  const careersWrap = document.getElementById('modalCareers');
  careersWrap.innerHTML = data.careers.map(c => `<span>${c}</span>`).join('');
  document.getElementById('programModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProgramModal() {
  document.getElementById('programModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('programModal');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProgramModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProgramModal();
  });
});
