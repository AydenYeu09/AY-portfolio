export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		// {
		// 	title: 'About',
		// 	href: '/about',
		// },
		// {
		// 	title: 'Education',
		// 	href: '/education',
		// },
		// {
		// 	title: 'Skills',
		// 	href: '/skills',
		// },
		// {
		// 	title: 'Experience',
		// 	href: '/experience',
		// },
		{
			title: 'Projects',
			href: '/projects',
		},
		// {
		// 	title: 'Certificates',
		// 	href: '/certificates',
		// },
		// {
		// 	title: 'Blog',
		// 	href: '/blog',
		// },
		// {
		// 	title: 'Contact',
		// 	href: '/contact',
		// },
	],
	links: {
		github: 'https://github.com/yourusername',
		// linkedin: 'https://linkedin.com/in/yourusername',
		// twitter: 'https://twitter.com/yourusername',
		// facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		// whatsapp: 'https://wa.me/yourphonenumber',
		email: 'ayden.yeu@gmail.com',
		phone: 'tel:+1234567890',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Engineering Intern',
		company: 'Tech Company',
		location: 'City, Country',
		startDate: 'May 2023',
		endDate: 'Aug 2023',
		description: [
			'Worked on developing and testing software components for embedded systems',
			'Collaborated with senior engineers on project planning and execution',
			'Implemented test procedures for quality assurance',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Research Assistant',
		company: 'University Lab',
		location: 'City, Country',
		startDate: 'Jan 2023',
		endDate: 'Apr 2023',
		description: [
			'Assisted in research focusing on advanced materials for mechanical applications',
			'Conducted literature reviews and compiled research findings',
			'Performed data analysis and visualization of experimental results',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Morphing Quadcopter (Current)',
		description:
			'Currently designing and building a quadcopter with telescoping arms and active rotor tilt to study how these changes can enhance stability under varying gust patterns. I plan to implement a control system that adjusts the arm length and rotor tilt in real time based on sensor feedback.',
		image: '/images/md.png',
		tags: ['Onshape', 'MATLAB', 'Python', 'Control Systems', '3D Printing'],
		// link: '#',
		repo: 'https://aydenyeu09.github.io/AY-portfolio/morphing_quad/',
	},
	{
		title: 'Calctastrophe: Beetleweight Combat Robot (Current)',
		description:
			'Developed software for structural analysis of beams and trusses using numerical methods and visualization techniques.',
		image: '/images/cb.png',
		tags: ['Onshape', 'Fusion360', '3D Printing', 'CNC Machining', 'Soldering'],
		// link: '#',
		repo: 'https://aydenyeu09.github.io/AY-portfolio/3lb',
	},
	{
		title: 'FIRST Robotics Competition Software and CAD Work (2023-2026)',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: '/images/frc.png',
		tags: ['Java', 'Onshape'],
		// link: '#',
		repo: 'https://aydenyeu09.github.io/AY-portfolio/FRC',
	},

	{
		title: '150g Combat Robotics Projects (2024-2025)',
		description:
			'Constructed two 150g combat robots for the Fairyweight class, optimizing for speed and durability. Each robot features a custom-designed NylonX chassis and is powered by 2S LiPo batteries.',
		image: '/images/150g.png',
		tags: ['Onshape', 'Fusion360', '3D Printing', 'Soldering'],
		// link: '#',
		// repo: '#',
	},

	{
		title: 'Better Buildings (2024)',
		description:
			'Co-developed a web app for reporting and tracking school infrastructure issues, featuring student/teacher report submission, admin dashboard with repair prioritization, upvoting system, and maintenance announcements.',
		image: '/images/bb.png',
		tags: ['Web Development', 'JavaScript', 'Bootstrap', 'Node.js'],
		// link: '#',
		repo: 'https://aydenyeu09.github.io/AY-portfolio/better_buildings',
	},

	{
		title: 'W.A.R: War-Playing Automated Robot (2024)',
		description:
			'Programmed and constructed the electronic systems for my group\'s card playing robot, using AprilTag detection to identify card position and values as well as soldered and routed electronics for the robot.',
		image: '/images/WAR_robot.png',
		tags: ['Onshape', '3D Printing', 'Soldering'],
		repo: 'https://aydenyeu09.github.io/AY-portfolio/WAR',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Mechanical Engineering',
		institution: 'University Name',
		location: 'City, Country',
		startDate: 'Sep 2020',
		endDate: 'Present',
		gpa: '3.8/4.0',
		achievements: [
			'Dean\'s List (All Semesters)',
			'Academic Excellence Scholarship',
			'Senior Design Project Award',
		],
	},
	{
		degree: 'High School Diploma',
		field: 'Science and Mathematics',
		institution: 'High School Name',
		location: 'City, Country',
		startDate: 'Sep 2016',
		endDate: 'Jun 2020',
		gpa: '4.0/4.0',
		achievements: [
			'Valedictorian',
			'National Mathematics Competition Finalist',
			'Science Fair Gold Medal',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Mechanical Design', level: 9, category: 'technical' },
	{ name: 'Structural Analysis', level: 8, category: 'technical' },
	{ name: 'Thermodynamics', level: 7, category: 'technical' },
	{ name: 'Control Systems', level: 8, category: 'technical' },
	{ name: 'Circuit Design', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 9, category: 'software' },
	{ name: 'AutoCAD', level: 8, category: 'software' },
	{ name: 'SolidWorks', level: 9, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'C++', level: 6, category: 'software' },
	{ name: 'ANSYS', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 6, category: 'language' },
	{ name: 'French', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];