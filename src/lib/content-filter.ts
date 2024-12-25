// Allowed topics and their related keywords
const ALLOWED_TOPICS = {
  development: [
    'code', 'programming', 'developer', 'software', 'web', 'app', 'api',
    'frontend', 'backend', 'fullstack', 'database', 'framework', 'library',
    'javascript', 'typescript', 'python', 'java', 'c#', 'ruby', 'php'
  ],
  testing: [
    'test', 'automation', 'qa', 'quality', 'assertion', 'selenium',
    'playwright', 'cypress', 'webdriver', 'e2e', 'unit', 'integration',
    'coverage', 'bug', 'debug', 'verification', 'validation'
  ],
  projectManagement: [
    'agile', 'scrum', 'kanban', 'sprint', 'project', 'team', 'requirement',
    'planning', 'estimate', 'timeline', 'milestone', 'deliverable', 'stakeholder',
    'workflow', 'process', 'methodology'
  ],
  tooling: [
    'git', 'github', 'gitlab', 'jenkins', 'docker', 'kubernetes', 'ci/cd',
    'ide', 'editor', 'terminal', 'cli', 'npm', 'yarn', 'package', 'dependency'
  ]
};

export function isRelevantTopic(question: string): boolean {
  const normalizedQuestion = question.toLowerCase();
  
  // Check if question contains any keywords from allowed topics
  return Object.values(ALLOWED_TOPICS).some(keywords =>
    keywords.some(keyword => normalizedQuestion.includes(keyword))
  );
}

export function getTopicGuidance(question: string): string {
  return `I'm specialized in software development, testing, and project management topics. 
Your question about "${question}" seems to be outside these areas. 
Could you please ask something related to:

- Software Development
- Test Automation
- Quality Assurance
- Project Management
- Development Tools and Practices

I'll be happy to help with questions in these areas!`;
}