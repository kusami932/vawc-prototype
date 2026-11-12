/* Illustrative prototype fixtures only. Organizations, programs and vacancies are fictional.
   Coordinates approximate city centers for demonstration filtering, not travel distances. */
window.VAWC_DATA = {
  occupations: [
    {
      id: 'O01', title: 'Administrative Assistant', group: 'Office and Administrative Support',
      summary: 'Support the daily work of an office by organizing information, appointments, and communications.',
      duties: ['Schedule meetings and appointments', 'Prepare correspondence and maintain records', 'Update spreadsheets and coordinate office supplies'],
      skills: ['Written communication', 'Organization and recordkeeping', 'Spreadsheet use'],
      qualifications: 'Requirements vary by employer. Some openings request a high school diploma and prior clerical experience.',
      keywords: ['administrative', 'office', 'assistant', 'scheduling', 'spreadsheet']
    },
    {
      id: 'O02', title: 'Office Clerk', group: 'Office and Administrative Support',
      summary: 'Complete varied clerical tasks that keep office records and routine services organized.',
      duties: ['File and retrieve documents', 'Enter and check information in office systems', 'Handle mail and routine requests'],
      skills: ['Data entry', 'Attention to detail', 'Document organization'],
      qualifications: 'Many employers request a high school diploma. Required software knowledge and experience vary by opening.',
      keywords: ['administrative', 'office', 'clerk', 'clerical', 'records']
    },
    {
      id: 'O03', title: 'Receptionist', group: 'Office and Administrative Support',
      summary: 'Welcome visitors and connect callers with the people and information they need.',
      duties: ['Greet and direct visitors', 'Answer calls and take messages', 'Maintain appointment calendars'],
      skills: ['Customer service', 'Verbal communication', 'Calendar management'],
      qualifications: 'Employers may request a high school diploma and customer-service experience. Shift requirements vary.',
      keywords: ['administrative', 'reception', 'front desk', 'office', 'customer service']
    },
    {
      id: 'O04', title: 'Bookkeeping Clerk', group: 'Business and Financial Operations',
      summary: 'Maintain financial records and check routine business transactions for accuracy.',
      duties: ['Record payments and purchases', 'Reconcile routine account records', 'Prepare basic financial summaries'],
      skills: ['Numerical accuracy', 'Spreadsheet use', 'Accounting software'],
      qualifications: 'Some employers request accounting coursework or an associate degree. Credentials and experience depend on the opening.',
      keywords: ['bookkeeping', 'accounting', 'finance', 'spreadsheet', 'clerk']
    },
    {
      id: 'O05', title: 'Computer Support Specialist', group: 'Computer and Mathematical Occupations',
      summary: 'Help people resolve everyday computer, software, and equipment problems.',
      duties: ['Respond to technical help requests', 'Troubleshoot software and equipment', 'Document solutions and explain next steps'],
      skills: ['Troubleshooting', 'Clear communication', 'Computer systems knowledge'],
      qualifications: 'Employers may request technical coursework, an associate degree, or relevant experience. Requirements differ by role.',
      keywords: ['computer', 'IT', 'technical', 'support', 'help desk']
    },
    {
      id: 'O06', title: 'Human Resources Assistant', group: 'Office and Administrative Support',
      summary: 'Support hiring and employee-record processes in a human resources office.',
      duties: ['Maintain employee records', 'Coordinate interview appointments', 'Prepare onboarding materials'],
      skills: ['Confidential recordkeeping', 'Written communication', 'Scheduling'],
      qualifications: 'Employers may request administrative experience or related college coursework. Check each opening for its requirements.',
      keywords: ['administrative', 'human resources', 'HR', 'assistant', 'office']
    }
  ],
  providers: [
    {
      id: 'T01', name: 'Richmond Learning Center', city: 'Richmond, VA', type: 'Training center',
      description: 'A sample training organization offering office-software and spreadsheet instruction. Listed programs describe training topics; confirm current availability with the provider.',
      programIds: ['P01', 'P02']
    },
    {
      id: 'T02', name: 'Capital Skills Institute', city: 'Henrico, VA', type: 'Career school',
      description: 'A sample career school focused on office service and bookkeeping skills. Program schedules and enrollment must be confirmed separately.',
      programIds: ['P03', 'P04']
    },
    {
      id: 'T03', name: 'Piedmont Career Academy', city: 'Charlottesville, VA', type: 'Career school',
      description: 'A sample organization offering introductory computer-support training. Review the program details to determine whether the content fits your goal.',
      programIds: ['P05']
    },
    {
      id: 'T04', name: 'Harbor Online Learning', city: 'Norfolk, VA', type: 'Online provider',
      description: 'A sample provider of online office-skills instruction. The organization is based in Norfolk; its listed online program has no required campus attendance.',
      programIds: ['P06']
    }
  ],
  programs: [
    {
      id: 'P01', title: 'Office Software Fundamentals', providerId: 'T01', city: 'Richmond, VA',
      qualification: 'Certificate of completion', cost: 480, schedule: 'Daytime', format: 'In person',
      description: 'Practice writing office documents, organizing electronic files, and building basic spreadsheets for administrative work.',
      skills: ['Office software', 'Spreadsheet use', 'Document organization'], availability: 'Contact provider to confirm',
      keywords: ['office', 'administrative', 'software', 'computer', 'assistant']
    },
    {
      id: 'P02', title: 'Spreadsheets for Office Work', providerId: 'T01', city: 'Richmond, VA',
      qualification: 'Certificate of completion', cost: 260, schedule: 'Evening', format: 'Hybrid',
      description: 'Build and check simple office spreadsheets, including formulas, schedules, and lists. Some class meetings are held in Richmond.',
      skills: ['Spreadsheet use', 'Data entry', 'Attention to detail'], availability: 'Contact provider to confirm',
      keywords: ['spreadsheet', 'office', 'administrative', 'excel', 'data']
    },
    {
      id: 'P03', title: 'Front Desk and Office Communication', providerId: 'T02', city: 'Henrico, VA',
      qualification: 'Certificate of completion', cost: 350, schedule: 'Weekend', format: 'In person',
      description: 'Practice greeting visitors, handling telephone requests, and managing appointments in an office setting.',
      skills: ['Customer service', 'Calendar management', 'Verbal communication'], availability: 'Contact provider to confirm',
      keywords: ['office', 'administrative', 'front desk', 'reception', 'communication']
    },
    {
      id: 'P04', title: 'Bookkeeping Basics', providerId: 'T02', city: 'Henrico, VA',
      qualification: 'Certificate of completion', cost: 620, schedule: 'Evening', format: 'Hybrid',
      description: 'Learn to record routine transactions, organize financial documents, and prepare basic account summaries.',
      skills: ['Accounting software', 'Numerical accuracy', 'Spreadsheet use'], availability: 'Contact provider to confirm',
      keywords: ['bookkeeping', 'accounting', 'finance', 'spreadsheet']
    },
    {
      id: 'P05', title: 'Computer Support Foundations', providerId: 'T03', city: 'Charlottesville, VA',
      qualification: 'Certificate of completion', cost: 940, schedule: 'Daytime', format: 'In person',
      description: 'Develop introductory troubleshooting and help-desk communication skills using common computer-support scenarios.',
      skills: ['Troubleshooting', 'Computer systems knowledge', 'Clear communication'], availability: 'Contact provider to confirm',
      keywords: ['computer', 'IT', 'support', 'help desk', 'technical']
    },
    {
      id: 'P06', title: 'Digital Office Administration', providerId: 'T04', city: 'Norfolk, VA',
      qualification: 'Certificate of completion', cost: 390, schedule: 'Evening', format: 'Online',
      description: 'Study digital filing, shared calendars, and online office communication. Delivered online by a provider based in Norfolk; confirm meeting times and enrollment.',
      skills: ['Organization and recordkeeping', 'Scheduling', 'Written communication'], availability: 'Contact provider to confirm',
      keywords: ['office', 'administrative', 'online', 'digital', 'assistant']
    }
  ],
  jobs: [
    {
      id: 'J01', title: 'Administrative Assistant', employer: 'Example Employer A', city: 'Richmond, VA', occupationId: 'O01',
      type: 'Full-time', payMin: 20, payMax: 22, payUnit: 'hour', schedule: 'Daytime',
      qualifications: 'High school diploma; one year of clerical experience; office-software and spreadsheet skills.',
      description: 'Support a small office team with scheduling, correspondence, and organized records. Monday–Friday, 8:30 a.m.–5 p.m. The offered rate within the listed range is not specified.',
      duties: ['Schedule appointments and meetings', 'Prepare documents and maintain office records', 'Update spreadsheets and respond to routine inquiries'],
      postedDays: 2, workArrangement: 'On-site', education: 'High school', source: 'Employer', applyMethod: 'account',
      keywords: ['administrative', 'assistant', 'office', 'clerical', 'spreadsheet']
    },
    {
      id: 'J02', title: 'Office Coordinator', employer: 'Example Employer B', city: 'Richmond, VA', occupationId: 'O01',
      type: 'Full-time', payMin: null, payMax: null, payUnit: 'hour', schedule: null,
      qualifications: 'High school diploma; spreadsheet and communication skills; ability to coordinate office requests.',
      description: 'Coordinate day-to-day administrative requests and office records. Pay and work schedule are not provided in this listing and require confirmation with the employer.',
      duties: ['Organize internal office requests', 'Maintain supply and contact lists', 'Coordinate team calendars'],
      postedDays: 4, workArrangement: 'On-site', education: 'High school', source: 'Job board', applyMethod: 'external',
      keywords: ['administrative', 'office', 'coordinator', 'scheduling', 'spreadsheet']
    },
    {
      id: 'J03', title: 'Office Clerk', employer: 'Example Records Services', city: 'Richmond, VA', occupationId: 'O02',
      type: 'Part-time', payMin: 16, payMax: 18, payUnit: 'hour', schedule: 'Daytime',
      qualifications: 'High school diploma; accurate data entry; prior work experience is not required.',
      description: 'Assist with filing and routine data entry for 20 hours per week. This part-time opening does not meet a full-time preference.',
      duties: ['Sort and file documents', 'Enter records into a database', 'Check forms for missing information'],
      postedDays: 1, workArrangement: 'On-site', education: 'High school', source: 'Employer', applyMethod: 'account',
      keywords: ['administrative', 'office', 'clerk', 'records', 'data entry']
    },
    {
      id: 'J04', title: 'Administrative Services Assistant', employer: 'Example Community Services', city: 'Henrico, VA', occupationId: 'O01',
      type: 'Full-time', payMin: 43000, payMax: 47000, payUnit: 'year', schedule: 'Daytime',
      qualifications: 'Associate degree; one year of office experience; confidence using spreadsheets.',
      description: 'Provide administrative support for a community-services team. Monday–Friday daytime hours, 40 hours per week. The annual salary is a range; the offered amount requires confirmation.',
      duties: ['Maintain service records', 'Coordinate meetings and appointments', 'Prepare routine reports'],
      postedDays: 7, workArrangement: 'Hybrid', education: 'Associate degree', source: 'Employer', applyMethod: 'external',
      keywords: ['administrative', 'assistant', 'office', 'community', 'spreadsheet']
    },
    {
      id: 'J05', title: 'Administrative Receptionist', employer: 'Example Evening Services', city: 'Chesterfield, VA', occupationId: 'O03',
      type: 'Full-time', payMin: 21, payMax: 23, payUnit: 'hour', schedule: 'Evening',
      qualifications: 'High school diploma; customer-service experience; clear telephone communication.',
      description: 'Welcome visitors and coordinate appointments during a 2 p.m.–10 p.m. shift. The evening schedule may not suit a daytime-work preference.',
      duties: ['Welcome and direct visitors', 'Answer incoming calls', 'Update appointment schedules'],
      postedDays: 3, workArrangement: 'On-site', education: 'High school', source: 'Job board', applyMethod: 'account',
      keywords: ['administrative', 'receptionist', 'front desk', 'office', 'evening']
    },
    {
      id: 'J06', title: 'Administrative Records Clerk', employer: 'Example Regional Office', city: 'Petersburg, VA', occupationId: 'O02',
      type: 'Full-time', payMin: 19, payMax: 20, payUnit: 'hour', schedule: 'Daytime',
      qualifications: 'High school diploma; careful recordkeeping; basic office-software skills.',
      description: 'Maintain administrative records in a regional office. Monday–Friday daytime work. Review the Petersburg location against your preferred search radius.',
      duties: ['Maintain electronic and paper files', 'Respond to document requests', 'Check records for accuracy'],
      postedDays: 11, workArrangement: 'On-site', education: 'High school', source: 'Employer', applyMethod: 'external',
      keywords: ['administrative', 'records', 'clerk', 'office', 'filing']
    },
    {
      id: 'J07', title: 'Administrative Coordinator', employer: 'Example Piedmont Operations', city: 'Charlottesville, VA', occupationId: 'O01',
      type: 'Full-time', payMin: 24, payMax: 27, payUnit: 'hour', schedule: 'Daytime',
      qualifications: 'Bachelor degree; two years of administrative experience; spreadsheet and report-writing skills.',
      description: 'Coordinate administrative work for an operations team in Charlottesville. This location is outside a 25-mile Richmond search area.',
      duties: ['Coordinate department schedules', 'Prepare reports and correspondence', 'Maintain operational records'],
      postedDays: 6, workArrangement: 'On-site', education: 'Bachelor degree', source: 'Job board', applyMethod: 'external',
      keywords: ['administrative', 'coordinator', 'office', 'operations']
    },
    {
      id: 'J08', title: 'Office Administration Assistant', employer: 'Example Coastal Office', city: 'Norfolk, VA', occupationId: 'O01',
      type: 'Full-time', payMin: 22, payMax: 24, payUnit: 'hour', schedule: 'Daytime',
      qualifications: 'High school diploma; one year of office experience; written communication skills.',
      description: 'Support a Norfolk office with documents and scheduling. Hybrid work includes required attendance in Norfolk, so review the location before considering this opening.',
      duties: ['Organize team calendars', 'Prepare office documents', 'Maintain shared records'],
      postedDays: 15, workArrangement: 'Hybrid', education: 'High school', source: 'Employer', applyMethod: 'account',
      keywords: ['administrative', 'administration', 'assistant', 'office', 'hybrid']
    },
    {
      id: 'J09', title: 'Computer Support Specialist', employer: 'Example Technology Desk', city: 'Richmond, VA', occupationId: 'O05',
      type: 'Full-time', payMin: 25, payMax: 29, payUnit: 'hour', schedule: 'Daytime',
      qualifications: 'Associate degree in a technical field or related training; troubleshooting experience.',
      description: 'Resolve routine computer-support requests for a local organization. This is a technical support role rather than an administrative opening.',
      duties: ['Respond to help-desk requests', 'Troubleshoot desktop software', 'Document technical solutions'],
      postedDays: 5, workArrangement: 'On-site', education: 'Associate degree', source: 'Job board', applyMethod: 'external',
      keywords: ['computer', 'IT', 'help desk', 'technical', 'support']
    },
    {
      id: 'J10', title: 'Human Resources Assistant', employer: 'Example People Services', city: 'Richmond, VA', occupationId: 'O06',
      type: 'Full-time', payMin: 41000, payMax: 45000, payUnit: 'year', schedule: 'Daytime',
      qualifications: 'Associate degree; administrative experience; confidential handling of employee information.',
      description: 'Provide administrative support to a human resources team. Monday–Friday, 40 hours per week. Confirm the offered salary within the listed annual range.',
      duties: ['Maintain employee files', 'Arrange interviews', 'Prepare onboarding documents'],
      postedDays: 9, workArrangement: 'Hybrid', education: 'Associate degree', source: 'Employer', applyMethod: 'account',
      keywords: ['administrative', 'human resources', 'HR', 'assistant', 'office']
    }
  ],
  locations: [
    { id: 'richmond', label: 'Richmond, VA', aliases: ['Richmond', 'Richmond Virginia', '23219', '23220', '23221', '23222', '23223', '23224', '23225'], lat: 37.5407, lon: -77.4360 },
    { id: 'henrico', label: 'Henrico, VA', aliases: ['Henrico', 'Henrico Virginia', '23228', '23229', '23230', '23233'], lat: 37.6050, lon: -77.5340 },
    { id: 'chesterfield', label: 'Chesterfield, VA', aliases: ['Chesterfield', 'Chesterfield Virginia', '23832'], lat: 37.3771, lon: -77.5058 },
    { id: 'petersburg', label: 'Petersburg, VA', aliases: ['Petersburg', 'Petersburg Virginia', '23803', '23804'], lat: 37.2279, lon: -77.4019 },
    { id: 'charlottesville', label: 'Charlottesville, VA', aliases: ['Charlottesville', 'Charlottesville Virginia', '22901', '22902', '22903'], lat: 38.0293, lon: -78.4767 },
    { id: 'norfolk', label: 'Norfolk, VA', aliases: ['Norfolk', 'Norfolk Virginia', '23501', '23502', '23503', '23510'], lat: 36.8508, lon: -76.2859 }
  ]
};
