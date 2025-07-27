// Pre-defined quizzes for all domains
const QUIZZES = {
  frontend: [
    { question: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyper Text Marketing Language', 'Hyper Tool Markup Language'], answer: 1 },
    { question: 'Which CSS property is used to change text color?', options: ['font-style', 'text-color', 'color', 'background-color'], answer: 2 },
    { question: 'Which tag is used for inserting a line break in HTML?', options: ['<break>', '<br>', '<lb>', '<line>'], answer: 1 },
    { question: 'Which of the following is a JavaScript framework?', options: ['Django', 'Laravel', 'React', 'Flask'], answer: 2 },
    { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Sheets', 'Colorful Style Sheets'], answer: 0 }
  ],
  backend: [
    { question: 'Which language is commonly used for backend development?', options: ['HTML', 'CSS', 'Python', 'Photoshop'], answer: 2 },
    { question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Language', 'Sequential Query Language', 'Statement Query Language'], answer: 0 },
    { question: 'Which of these is a NoSQL database?', options: ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle'], answer: 1 },
    { question: 'What is REST used for?', options: ['Database design', 'API design', 'UI design', 'Testing'], answer: 1 },
    { question: 'Which protocol is commonly used to serve web pages?', options: ['FTP', 'SMTP', 'HTTP', 'SSH'], answer: 2 }
  ],
  devops: [
    { question: 'What does CI/CD stand for?', options: ['Continuous Integration/Continuous Deployment', 'Code Integration/Code Delivery', 'Continuous Improvement/Continuous Design', 'Code Implementation/Code Debugging'], answer: 0 },
    { question: 'Which tool is used for containerization?', options: ['Jenkins', 'Docker', 'Git', 'Nginx'], answer: 1 },
    { question: 'Which cloud provider is NOT among the big three?', options: ['AWS', 'Azure', 'GCP', 'DigitalOcean'], answer: 3 },
    { question: 'What is the main purpose of monitoring in DevOps?', options: ['UI design', 'Performance and reliability', 'Database management', 'Code styling'], answer: 1 },
    { question: 'Which of these is a version control system?', options: ['Git', 'Docker', 'Jenkins', 'AWS'], answer: 0 }
  ],
  react: [
    { question: 'What is a React component?', options: ['A CSS file', 'A reusable piece of UI', 'A database', 'A server'], answer: 1 },
    { question: 'Which hook is used to manage state in a functional component?', options: ['useState', 'useEffect', 'useContext', 'useRef'], answer: 0 },
    { question: 'What is JSX?', options: ['A CSS preprocessor', 'A JavaScript extension for writing HTML', 'A database', 'A testing tool'], answer: 1 },
    { question: 'Which method is used to pass data from parent to child in React?', options: ['State', 'Props', 'Context', 'Hooks'], answer: 1 },
    { question: 'What is the virtual DOM?', options: ['A browser API', 'A lightweight copy of the real DOM', 'A database', 'A server'], answer: 1 }
  ],
  nodejs: [
    { question: 'What is Node.js?', options: ['A frontend framework', 'A JavaScript runtime', 'A database', 'A CSS library'], answer: 1 },
    { question: 'Which module is used to create a server in Node.js?', options: ['http', 'fs', 'os', 'url'], answer: 0 },
    { question: 'Which command initializes a new Node.js project?', options: ['npm start', 'npm install', 'npm init', 'npm run'], answer: 2 },
    { question: 'Which of these is a package manager for Node.js?', options: ['npm', 'pip', 'composer', 'gem'], answer: 0 },
    { question: 'What is Express.js?', options: ['A database', 'A web framework for Node.js', 'A CSS library', 'A testing tool'], answer: 1 }
  ],
  python: [
    { question: 'Which keyword is used to define a function in Python?', options: ['function', 'def', 'func', 'define'], answer: 1 },
    { question: 'Which library is used for data analysis in Python?', options: ['NumPy', 'pandas', 'matplotlib', 'requests'], answer: 1 },
    { question: 'What is the output of print(2 ** 3)?', options: ['6', '8', '9', '5'], answer: 1 },
    { question: 'Which statement is used for exception handling?', options: ['try/except', 'catch/except', 'try/catch', 'handle/except'], answer: 0 },
    { question: 'Which of these is a Python web framework?', options: ['Flask', 'React', 'Laravel', 'Spring'], answer: 0 }
  ],
  ai: [
    { question: 'Which library is most commonly used for deep learning in Python?', options: ['scikit-learn', 'TensorFlow', 'pandas', 'matplotlib'], answer: 1 },
    { question: 'What does "supervised learning" mean?', options: ['Learning without labeled data', 'Learning with labeled data', 'Learning by reinforcement', 'Learning by clustering'], answer: 1 },
    { question: 'Which algorithm is used for classification tasks?', options: ['K-Means', 'Linear Regression', 'Decision Tree', 'PCA'], answer: 2 },
    { question: 'What is the main purpose of backpropagation?', options: ['Data cleaning', 'Model evaluation', 'Training neural networks', 'Feature selection'], answer: 2 },
    { question: 'Which of these is a type of neural network?', options: ['CNN', 'SVM', 'KNN', 'Random Forest'], answer: 0 }
  ],
  devsecops: [
    { question: 'What is the main goal of DevSecOps?', options: ['Faster deployment', 'Security integration', 'Better UI', 'More servers'], answer: 1 },
    { question: 'Which is a common security vulnerability?', options: ['SQL Injection', 'HTML Injection', 'CSS Injection', 'JS Injection'], answer: 0 },
    { question: 'What does OWASP stand for?', options: ['Open Web Application Security Project', 'Online Web Application Security Project', 'Open Web Application Security Program', 'Online Web Application Security Program'], answer: 0 },
    { question: 'Which tool is used for vulnerability scanning?', options: ['Nessus', 'Photoshop', 'Excel', 'Unity'], answer: 0 },
    { question: 'What is the purpose of penetration testing?', options: ['Find vulnerabilities', 'Build UI', 'Deploy code', 'Write documentation'], answer: 0 }
  ],
  qa: [
    { question: 'What does QA stand for?', options: ['Quality Assurance', 'Quick Access', 'Query Analysis', 'Queue Allocation'], answer: 0 },
    { question: 'Which is a test automation tool?', options: ['Selenium', 'Photoshop', 'Excel', 'Unity'], answer: 0 },
    { question: 'What is unit testing?', options: ['Testing individual units/components', 'Testing the whole system', 'Testing UI', 'Testing performance'], answer: 0 },
    { question: 'Which is a performance testing tool?', options: ['JMeter', 'React', 'Vue', 'Angular'], answer: 0 },
    { question: 'What is CI/CD in QA?', options: ['Continuous Integration/Continuous Deployment', 'Code Integration/Code Delivery', 'Continuous Improvement/Continuous Design', 'Code Implementation/Code Debugging'], answer: 0 }
  ],
  android: [
    { question: 'Which language is used for Android development?', options: ['Java', 'Swift', 'C#', 'Ruby'], answer: 0 },
    { question: 'What is Android Studio?', options: ['IDE', 'Database', 'Web server', 'Framework'], answer: 0 },
    { question: 'What is an Activity in Android?', options: ['A screen', 'A database', 'A service', 'A layout'], answer: 0 },
    { question: 'Which file is the entry point for an Android app?', options: ['MainActivity.java', 'index.html', 'app.js', 'main.py'], answer: 0 },
    { question: 'What is the package manager for Android?', options: ['npm', 'pip', 'apt', 'Gradle'], answer: 3 }
  ],
  ios: [
    { question: 'Which language is used for iOS development?', options: ['Swift', 'Java', 'C#', 'Ruby'], answer: 0 },
    { question: 'What is Xcode?', options: ['IDE', 'Database', 'Web server', 'Framework'], answer: 0 },
    { question: 'What is a ViewController in iOS?', options: ['A screen controller', 'A database', 'A service', 'A layout'], answer: 0 },
    { question: 'Which file is the entry point for an iOS app?', options: ['AppDelegate.swift', 'index.html', 'app.js', 'main.py'], answer: 0 },
    { question: 'What is the package manager for iOS?', options: ['npm', 'pip', 'CocoaPods', 'Gradle'], answer: 2 }
  ],
  blockchain: [
    { question: 'What is a blockchain?', options: ['A type of database', 'A web server', 'A programming language', 'A framework'], answer: 0 },
    { question: 'Which is the most popular blockchain for smart contracts?', options: ['Ethereum', 'Bitcoin', 'Litecoin', 'Ripple'], answer: 0 },
    { question: 'What is a smart contract?', options: ['A self-executing contract', 'A legal document', 'A web server', 'A database'], answer: 0 },
    { question: 'What is a DApp?', options: ['Decentralized Application', 'Desktop Application', 'Data Application', 'Dynamic App'], answer: 0 },
    { question: 'What is Solidity?', options: ['A programming language', 'A database', 'A web server', 'A framework'], answer: 0 }
  ],
  'cyber-security': [
    { question: 'What does CIA stand for in cybersecurity?', options: ['Confidentiality, Integrity, Availability', 'Central Intelligence Agency', 'Cybersecurity Information Agency', 'Confidentiality, Information, Access'], answer: 0 },
    { question: 'What is a firewall?', options: ['A network security device', 'A web server', 'A database', 'A programming language'], answer: 0 },
    { question: 'What is phishing?', options: ['A cyber attack', 'A web server', 'A database', 'A programming language'], answer: 0 },
    { question: 'What is penetration testing?', options: ['Testing for vulnerabilities', 'Testing UI', 'Testing performance', 'Testing code'], answer: 0 },
    { question: 'What is malware?', options: ['Malicious software', 'A web server', 'A database', 'A programming language'], answer: 0 }
  ],
  flutter: [
    { question: 'What language is used for Flutter development?', options: ['Dart', 'Java', 'Swift', 'Kotlin'], answer: 0 },
    { question: 'What is a widget in Flutter?', options: ['A UI component', 'A database', 'A web server', 'A programming language'], answer: 0 },
    { question: 'What is hot reload in Flutter?', options: ['Instant code updates', 'Database update', 'Web server update', 'Programming language'], answer: 0 },
    { question: 'What is the package manager for Flutter?', options: ['npm', 'pip', 'pub', 'Gradle'], answer: 2 },
    { question: 'What is the main file in a Flutter app?', options: ['main.dart', 'index.html', 'app.js', 'main.py'], answer: 0 }
  ],
  go: [
    { question: 'What is Go?', options: ['A programming language', 'A database', 'A web server', 'A framework'], answer: 0 },
    { question: 'What is the file extension for Go files?', options: ['.go', '.py', '.js', '.java'], answer: 0 },
    { question: 'Which company developed Go?', options: ['Google', 'Microsoft', 'Apple', 'Amazon'], answer: 0 },
    { question: 'What is a goroutine?', options: ['A lightweight thread', 'A database', 'A web server', 'A framework'], answer: 0 },
    { question: 'What is the package manager for Go?', options: ['go get', 'npm', 'pip', 'Gradle'], answer: 0 }
  ],
  java: [
    { question: 'What is Java?', options: ['A programming language', 'A database', 'A web server', 'A framework'], answer: 0 },
    { question: 'What is the file extension for Java files?', options: ['.java', '.py', '.js', '.go'], answer: 0 },
    { question: 'Which company developed Java?', options: ['Sun Microsystems', 'Microsoft', 'Apple', 'Amazon'], answer: 0 },
    { question: 'What is JVM?', options: ['Java Virtual Machine', 'Java Version Manager', 'Java Visual Model', 'Java Value Method'], answer: 0 },
    { question: 'What is the package manager for Java?', options: ['Maven', 'npm', 'pip', 'Gradle'], answer: 0 }
  ],
  typescript: [
    { question: 'What is TypeScript?', options: ['A superset of JavaScript', 'A database', 'A web server', 'A framework'], answer: 0 },
    { question: 'What is the file extension for TypeScript files?', options: ['.ts', '.js', '.py', '.java'], answer: 0 },
    { question: 'Which company developed TypeScript?', options: ['Microsoft', 'Google', 'Apple', 'Amazon'], answer: 0 },
    { question: 'What is a key feature of TypeScript?', options: ['Static typing', 'Dynamic typing', 'No typing', 'Weak typing'], answer: 0 },
    { question: 'What is the package manager for TypeScript?', options: ['npm', 'pip', 'pub', 'Gradle'], answer: 0 }
  ],
  javascript: [
    { question: 'What is JavaScript?', options: ['A programming language', 'A database', 'A web server', 'A framework'], answer: 0 },
    { question: 'What is the file extension for JavaScript files?', options: ['.js', '.py', '.java', '.ts'], answer: 0 },
    { question: 'Which company developed JavaScript?', options: ['Netscape', 'Microsoft', 'Apple', 'Amazon'], answer: 0 },
    { question: 'What is a key feature of JavaScript?', options: ['Dynamic typing', 'Static typing', 'No typing', 'Weak typing'], answer: 0 },
    { question: 'What is the package manager for JavaScript?', options: ['npm', 'pip', 'pub', 'Gradle'], answer: 0 }
  ],
  angular: [
    { question: 'What is Angular?', options: ['A frontend framework', 'A database', 'A web server', 'A programming language'], answer: 0 },
    { question: 'What is the file extension for Angular files?', options: ['.ts', '.js', '.py', '.java'], answer: 0 },
    { question: 'Which company developed Angular?', options: ['Google', 'Microsoft', 'Apple', 'Amazon'], answer: 0 },
    { question: 'What is a key feature of Angular?', options: ['Two-way data binding', 'One-way data binding', 'No data binding', 'Weak data binding'], answer: 0 },
    { question: 'What is the package manager for Angular?', options: ['npm', 'pip', 'pub', 'Gradle'], answer: 0 }
  ],
  vue: [
    { question: 'What is Vue?', options: ['A frontend framework', 'A database', 'A web server', 'A programming language'], answer: 0 },
    { question: 'What is the file extension for Vue files?', options: ['.vue', '.js', '.py', '.java'], answer: 0 },
    { question: 'Who created Vue?', options: ['Evan You', 'Brendan Eich', 'Guido van Rossum', 'Linus Torvalds'], answer: 0 },
    { question: 'What is a key feature of Vue?', options: ['Reactivity', 'No reactivity', 'Weak reactivity', 'Strong reactivity'], answer: 0 },
    { question: 'What is the package manager for Vue?', options: ['npm', 'pip', 'pub', 'Gradle'], answer: 0 }
  ],
  postgres: [
    { question: 'What is PostgreSQL?', options: ['A relational database', 'A web server', 'A programming language', 'A framework'], answer: 0 },
    { question: 'What is the file extension for PostgreSQL files?', options: ['.sql', '.js', '.py', '.java'], answer: 0 },
    { question: 'Who developed PostgreSQL?', options: ['PostgreSQL Global Development Group', 'Microsoft', 'Apple', 'Amazon'], answer: 0 },
    { question: 'What is a key feature of PostgreSQL?', options: ['ACID compliance', 'No ACID compliance', 'Weak ACID compliance', 'Strong ACID compliance'], answer: 0 },
    { question: 'What is the package manager for PostgreSQL?', options: ['apt', 'npm', 'pip', 'Gradle'], answer: 0 }
  ],
  c: [
    { question: 'What is C?', options: ['A programming language', 'A database', 'A web server', 'A framework'], answer: 0 },
    { question: 'What is the file extension for C files?', options: ['.c', '.js', '.py', '.java'], answer: 0 },
    { question: 'Who developed C?', options: ['Dennis Ritchie', 'Brendan Eich', 'Guido van Rossum', 'Linus Torvalds'], answer: 0 },
    { question: 'What is a key feature of C?', options: ['Low-level memory access', 'High-level memory access', 'No memory access', 'Weak memory access'], answer: 0 },
    { question: 'What is the package manager for C?', options: ['apt', 'npm', 'pip', 'Gradle'], answer: 0 }
  ],
  data_science: [
    { question: 'Which language is most popular for data science?', options: ['Java', 'Python', 'C++', 'PHP'], answer: 1 },
    { question: 'What is pandas used for?', options: ['Web development', 'Data manipulation', 'Image processing', 'Game development'], answer: 1 },
    { question: 'Which library is best for data visualization in Python?', options: ['NumPy', 'matplotlib', 'scikit-learn', 'TensorFlow'], answer: 1 },
    { question: 'What does ETL stand for?', options: ['Extract, Transform, Load', 'Evaluate, Train, Learn', 'Edit, Test, Launch', 'Encode, Transfer, Link'], answer: 0 },
    { question: 'Which of these is a supervised learning algorithm?', options: ['K-Means', 'Linear Regression', 'DBSCAN', 'Apriori'], answer: 1 }
  ],
  cloud_computing: [
    { question: 'Which is NOT a major cloud provider?', options: ['AWS', 'Azure', 'GCP', 'Oracle'], answer: 3 },
    { question: 'What does IaaS stand for?', options: ['Internet as a Service', 'Infrastructure as a Service', 'Integration as a Service', 'Instance as a Service'], answer: 1 },
    { question: 'Which AWS service is used for object storage?', options: ['EC2', 'S3', 'Lambda', 'RDS'], answer: 1 },
    { question: 'Which tool is used for container orchestration?', options: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'], answer: 1 },
    { question: 'What is the main benefit of cloud computing?', options: ['Manual scaling', 'On-premise hardware', 'Scalability and flexibility', 'Limited access'], answer: 2 }
  ],
  web3: [
    { question: 'What is a smart contract?', options: ['A legal document', 'A self-executing program on blockchain', 'A type of cryptocurrency', 'A web server'], answer: 1 },
    { question: 'Which blockchain is most associated with smart contracts?', options: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple'], answer: 1 },
    { question: 'What language is commonly used for Ethereum smart contracts?', options: ['Solidity', 'Python', 'Java', 'C++'], answer: 0 },
    { question: 'What does NFT stand for?', options: ['Non-Fungible Token', 'Network File Transfer', 'New Financial Technology', 'Node Function Table'], answer: 0 },
    { question: 'What is a DApp?', options: ['Desktop Application', 'Decentralized Application', 'Data Application', 'Dynamic App'], answer: 1 }
  ],
  ar_vr: [
    { question: 'Which engine is popular for AR/VR development?', options: ['Unity', 'React', 'Django', 'Laravel'], answer: 0 },
    { question: 'What does AR stand for?', options: ['Artificial Reality', 'Augmented Reality', 'Automated Rendering', 'Advanced Robotics'], answer: 1 },
    { question: 'Which device is used for VR?', options: ['Oculus Rift', 'Raspberry Pi', 'Arduino', 'iPad'], answer: 0 },
    { question: 'Which language is commonly used in Unity?', options: ['C#', 'Python', 'Java', 'Swift'], answer: 0 },
    { question: 'What is ARKit?', options: ['Apple’s AR framework', 'Android’s AR framework', 'A VR headset', 'A game engine'], answer: 0 }
  ],
  embedded_systems: [
    { question: 'What is Arduino?', options: ['A microcontroller platform', 'A database', 'A web server', 'A programming language'], answer: 0 },
    { question: 'Which language is commonly used for embedded systems?', options: ['Python', 'C', 'JavaScript', 'Ruby'], answer: 1 },
    { question: 'What is Raspberry Pi?', options: ['A microcontroller', 'A single-board computer', 'A database', 'A web server'], answer: 1 },
    { question: 'What is IoT?', options: ['Internet of Things', 'Input Output Technology', 'Internal Operating Tool', 'Internet of Technology'], answer: 0 },
    { question: 'Which protocol is common in IoT?', options: ['HTTP', 'MQTT', 'FTP', 'SMTP'], answer: 1 }
  ],
  data_engineering: [
    { question: 'What does ETL stand for?', options: ['Extract, Transform, Load', 'Evaluate, Train, Learn', 'Edit, Test, Launch', 'Encode, Transfer, Link'], answer: 0 },
    { question: 'Which tool is used for big data processing?', options: ['Spark', 'React', 'Flask', 'Vue'], answer: 0 },
    { question: 'What is a data warehouse?', options: ['A place to store data', 'A type of database optimized for analytics', 'A web server', 'A programming language'], answer: 1 },
    { question: 'Which is a distributed file system?', options: ['HDFS', 'MySQL', 'MongoDB', 'Redis'], answer: 0 },
    { question: 'Which language is popular for data engineering?', options: ['Python', 'Java', 'Scala', 'All of the above'], answer: 3 }
  ]
}; 