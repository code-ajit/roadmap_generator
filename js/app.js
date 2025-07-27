// --- HARD-CODED ROADMAPS FOR MAJOR DOMAINS ---
const ROADMAPS = {
  frontend: [
    { step: 'Learn HTML', description: 'Understand the structure of web pages and semantic markup.', youtube: 'https://www.youtube.com/results?search_query=learn+html', resources: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML',
      'https://www.w3schools.com/html/',
      'https://html.com/'
    ] },
    { step: 'Learn CSS', description: 'Style your web pages and learn about layouts, Flexbox, and Grid.', youtube: 'https://www.youtube.com/results?search_query=learn+css', resources: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS',
      'https://www.w3schools.com/css/',
      'https://css-tricks.com/guides/'
    ] },
    { step: 'Learn JavaScript', description: 'Make your pages interactive and learn ES6+ features.', youtube: 'https://www.youtube.com/results?search_query=learn+javascript', resources: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      'https://javascript.info/',
      'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
    ] },
    { step: 'Version Control', description: 'Use Git and GitHub for code management.', youtube: 'https://www.youtube.com/results?search_query=git+and+github', resources: [
      'https://git-scm.com/doc',
      'https://www.atlassian.com/git/tutorials',
      'https://docs.github.com/en/get-started/quickstart'
    ] },
    { step: 'Frameworks', description: 'Learn React, Vue, or Angular for building complex UIs.', youtube: 'https://www.youtube.com/results?search_query=react+vue+angular', resources: [
      'https://reactjs.org/docs/getting-started.html',
      'https://vuejs.org/guide/introduction.html',
      'https://angular.io/start'
    ] },
    { step: 'Build Tools', description: 'Understand npm, Webpack, and modern build processes.', youtube: 'https://www.youtube.com/results?search_query=webpack+and+npm', resources: [
      'https://webpack.js.org/concepts/',
      'https://docs.npmjs.com/',
      'https://parceljs.org/getting_started.html'
    ] }
  ],
  backend: [
    { step: 'Learn a Backend Language', description: 'Choose Node.js, Python, Java, Go, or PHP.', youtube: 'https://www.youtube.com/results?search_query=backend+language+tutorial', resources: [
      'https://nodejs.org/en/docs/',
      'https://docs.python.org/3/tutorial/',
      'https://www.php.net/manual/en/'
    ] },
    { step: 'Databases', description: 'Learn SQL and NoSQL databases.', youtube: 'https://www.youtube.com/results?search_query=sql+vs+nosql', resources: [
      'https://www.mysql.com/',
      'https://www.mongodb.com/docs/',
      'https://www.postgresql.org/docs/'
    ] },
    { step: 'APIs', description: 'Build RESTful and GraphQL APIs.', youtube: 'https://www.youtube.com/results?search_query=rest+and+graphql+api+tutorial', resources: [
      'https://restfulapi.net/',
      'https://graphql.org/learn/',
      'https://expressjs.com/en/starter/basic-routing.html'
    ] },
    { step: 'Authentication', description: 'Implement user authentication and authorization.', youtube: 'https://www.youtube.com/results?search_query=authentication+and+authorization+tutorial', resources: [
      'https://jwt.io/introduction',
      'https://auth0.com/docs/get-started',
      'https://developer.okta.com/docs/guides/'
    ] },
    { step: 'Deployment', description: 'Deploy your backend to the cloud.', youtube: 'https://www.youtube.com/results?search_query=deploy+backend+to+cloud', resources: [
      'https://www.heroku.com/',
      'https://docs.aws.amazon.com/',
      'https://cloud.google.com/docs'
    ] }
  ],
  devops: [
    { step: 'Learn Linux Basics', description: 'Understand the command line and basic shell scripting.', youtube: 'https://www.youtube.com/results?search_query=learn+linux+basics', resources: [
      'https://linux.die.net/man/',
      'https://www.gnu.org/software/bash/',
      'https://www.redhat.com/sysadmin/introduction-to-shell-scripting'
    ] },
    { step: 'Version Control', description: 'Master Git and branching strategies.', youtube: 'https://www.youtube.com/results?search_query=git+branching+strategies', resources: [
      'https://git-scm.com/book/en/v2',
      'https://www.atlassian.com/git/tutorials',
      'https://www.udemy.com/course/git-and-github-bootcamp/'
    ] },
    { step: 'CI/CD', description: 'Set up continuous integration and deployment pipelines.', youtube: 'https://www.youtube.com/results?search_query=ci/cd+pipeline+tutorial', resources: [
      'https://www.jenkins.io/doc/',
      'https://www.gitlab.com/gitlab-ci/',
      'https://www.docker.com/products/docker-enterprise'
    ] },
    { step: 'Containers', description: 'Learn Docker and container orchestration (Kubernetes).', youtube: 'https://www.youtube.com/results?search_query=docker+kubernetes+tutorial', resources: [
      'https://docs.docker.com/',
      'https://kubernetes.io/docs/',
      'https://www.docker.com/products/docker-enterprise'
    ] },
    { step: 'Cloud Providers', description: 'Get familiar with AWS, Azure, or GCP.', youtube: 'https://www.youtube.com/results?search_query=aws+azure+gcp+tutorial', resources: [
      'https://aws.amazon.com/getting-started/',
      'https://docs.microsoft.com/en-us/azure/',
      'https://cloud.google.com/docs'
    ] },
    { step: 'Monitoring', description: 'Set up logging and monitoring for your systems.', youtube: 'https://www.youtube.com/results?search_query=logging+monitoring+tutorial', resources: [
      'https://www.elastic.co/observability/logs',
      'https://prometheus.io/docs/introduction/overview/',
      'https://www.datadoghq.com/product/logs/'
    ] }
  ],
  react: [
    { step: 'React Basics', description: 'Learn about components, props, and state.', youtube: 'https://www.youtube.com/results?search_query=react+components+props+state', resources: [
      'https://react.dev/learn',
      'https://reactjs.org/docs/getting-started.html',
      'https://www.udemy.com/course/react-redux/'
    ] },
    { step: 'Hooks', description: 'Understand useState, useEffect, and custom hooks.', youtube: 'https://www.youtube.com/results?search_query=react+hooks+usestate+useeffect', resources: [
      'https://react.dev/reference/react',
      'https://reactjs.org/docs/hooks-intro.html',
      'https://www.udemy.com/course/react-hooks/'
    ] },
    { step: 'Routing', description: 'Implement navigation with React Router.', youtube: 'https://www.youtube.com/results?search_query=react+router+tutorial', resources: [
      'https://reactrouter.com/en/main',
      'https://www.udemy.com/course/react-router-redux/',
      'https://www.freecodecamp.org/news/react-router-tutorial-for-beginners/'
    ] },
    { step: 'State Management', description: 'Use Context API, Redux, or Zustand.', youtube: 'https://www.youtube.com/results?search_query=react+state+management+redux+zustand', resources: [
      'https://react.dev/reference/react',
      'https://redux.js.org/introduction/getting-started',
      'https://www.zustand-demo.pmnd.rs/'
    ] },
    { step: 'Testing', description: 'Test your React components.', youtube: 'https://www.youtube.com/results?search_query=react+testing+components', resources: [
      'https://jestjs.io/docs/getting-started',
      'https://testing-library.com/docs/react-testing-library/intro/',
      'https://www.cypress.io/'
    ] }
  ],
  nodejs: [
    { step: 'Node.js Basics', description: 'Understand the event loop and asynchronous programming.', youtube: 'https://www.youtube.com/results?search_query=node.js+event+loop+async', resources: [
      'https://nodejs.org/en/docs/',
      'https://www.udemy.com/course/nodejs-express-mongodb/',
      'https://www.freecodecamp.org/learn/apis-and-microservices/'
    ] },
    { step: 'Express.js', description: 'Build REST APIs with Express.', youtube: 'https://www.youtube.com/results?search_query=express.js+rest+api+tutorial', resources: [
      'https://expressjs.com/en/starter/installing.html',
      'https://www.udemy.com/course/nodejs-express-mongodb/',
      'https://www.freecodecamp.org/news/how-to-build-a-restful-api-with-node-js-the-right-way/'
    ] },
    { step: 'Databases', description: 'Connect Node.js to MongoDB or SQL databases.', youtube: 'https://www.youtube.com/results?search_query=node.js+mongodb+sql+database', resources: [
      'https://docs.mongodb.com/manual/',
      'https://dev.mysql.com/doc/',
      'https://www.postgresql.org/docs/'
    ] },
    { step: 'Authentication', description: 'Implement JWT or OAuth authentication.', youtube: 'https://www.youtube.com/results?search_query=jwt+oauth+authentication', resources: [
      'https://jwt.io/',
      'https://www.oauth.com/',
      'https://www.django-rest-framework.org/api-guide/authentication/'
    ] },
    { step: 'Testing', description: 'Test your Node.js applications.', youtube: 'https://www.youtube.com/results?search_query=node.js+testing', resources: [
      'https://jestjs.io/docs/getting-started',
      'https://testing-library.com/docs/react-testing-library/intro/',
      'https://www.cypress.io/'
    ] }
  ],
  python: [
    { step: 'Python Basics', description: 'Learn syntax, data types, and control structures.', youtube: 'https://www.youtube.com/results?search_query=python+basics+syntax+data+types', resources: [
      'https://docs.python.org/3/',
      'https://www.udemy.com/course/python-for-everybody/',
      'https://www.freecodecamp.org/learn/scientific-computing-with-python/'
    ] },
    { step: 'OOP', description: 'Understand object-oriented programming in Python.', youtube: 'https://www.youtube.com/results?search_query=python+oop+object+oriented', resources: [
      'https://realpython.com/python3-object-oriented-programming/',
      'https://www.udemy.com/course/python-for-everybody/',
      'https://www.freecodecamp.org/learn/object-oriented-programming/'
    ] },
    { step: 'Popular Libraries', description: 'Use libraries like requests, pandas, and numpy.', youtube: 'https://www.youtube.com/results?search_query=python+libraries+requests+pandas+numpy', resources: [
      'https://requests.readthedocs.io/',
      'https://pandas.pydata.org/pandas-docs/stable/',
      'https://numpy.org/doc/stable/'
    ] },
    { step: 'Web Development', description: 'Build web apps with Flask or Django.', youtube: 'https://www.youtube.com/results?search_query=flask+django+web+development', resources: [
      'https://flask.palletsprojects.com/en/2.2.x/',
      'https://www.djangoproject.com/download/',
      'https://www.freecodecamp.org/news/how-to-build-a-web-application-using-flask-and-python-3/'
    ] },
    { step: 'Testing', description: 'Write tests using unittest or pytest.', youtube: 'https://www.youtube.com/results?search_query=python+testing+unittest+pytest', resources: [
      'https://docs.python.org/3/library/unittest.html',
      'https://docs.pytest.org/en/7.1.x/',
      'https://www.udemy.com/course/python-testing-for-beginners/'
    ] }
  ],
  ai: [
    { step: 'Math Foundations', description: 'Brush up on linear algebra, calculus, and probability.', youtube: 'https://www.youtube.com/results?search_query=math+foundations+linear+algebra+calculus+probability', resources: [
      'https://www.khanacademy.org/math/linear-algebra',
      'https://www.coursera.org/learn/calculus-1',
      'https://www.udemy.com/course/mathematics-for-machine-learning-and-data-science/'
    ] },
    { step: 'Python for AI', description: 'Use numpy, pandas, and matplotlib.', youtube: 'https://www.youtube.com/results?search_query=python+for+ai+numpy+pandas+matplotlib', resources: [
      'https://numpy.org/doc/stable/',
      'https://pandas.pydata.org/pandas-docs/stable/',
      'https://matplotlib.org/stable/contents.html'
    ] },
    { step: 'Machine Learning', description: 'Learn scikit-learn, supervised and unsupervised learning.', youtube: 'https://www.youtube.com/results?search_query=machine+learning+scikit-learn+supervised+unsupervised', resources: [
      'https://scikit-learn.org/stable/user_guide.html',
      'https://www.coursera.org/learn/machine-learning',
      'https://www.udemy.com/course/machine-learning-with-python/'
    ] },
    { step: 'Deep Learning', description: 'Use TensorFlow or PyTorch for neural networks.', youtube: 'https://www.youtube.com/results?search_query=deep+learning+tensorflow+pytorch', resources: [
      'https://www.tensorflow.org/guide',
      'https://pytorch.org/tutorials/',
      'https://www.udemy.com/course/deep-learning-tensorflow-pytorch/'
    ] },
    { step: 'Projects', description: 'Build and deploy AI models.', youtube: 'https://www.youtube.com/results?search_query=ai+projects+deploy', resources: [
      'https://www.kaggle.com/',
      'https://www.tensorflow.org/tutorials',
      'https://www.udemy.com/course/ai-for-everyone/'
    ] }
  ],
  devsecops: [
    { step: 'Security Basics', description: 'Understand security principles and best practices.', youtube: 'https://www.youtube.com/results?search_query=security+basics+principles+best+practices', resources: [
      'https://www.owasp.org/index.php/Main_Page',
      'https://www.coursera.org/learn/security-analysis',
      'https://www.udemy.com/course/devsecops-the-complete-guide/'
    ] },
    { step: 'Secure Coding', description: 'Write code with security in mind.', youtube: 'https://www.youtube.com/results?search_query=secure+coding+best+practices', resources: [
      'https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project',
      'https://www.coursera.org/learn/secure-coding',
      'https://www.udemy.com/course/secure-coding-for-developers/'
    ] },
    { step: 'Vulnerability Scanning', description: 'Use tools to scan for vulnerabilities.', youtube: 'https://www.youtube.com/results?search_query=vulnerability+scanning+tools', resources: [
      'https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project',
      'https://www.coursera.org/learn/vulnerability-analysis',
      'https://www.udemy.com/course/penetration-testing-ethical-hacking/'
    ] },
    { step: 'Incident Response', description: 'Learn how to respond to security incidents.', youtube: 'https://www.youtube.com/results?search_query=incident+response+security', resources: [
      'https://www.sans.org/security-resources/',
      'https://www.coursera.org/learn/incident-response',
      'https://www.udemy.com/course/incident-response-for-it-pros/'
    ] },
    { step: 'Compliance', description: 'Understand compliance frameworks.', youtube: 'https://www.youtube.com/results?search_query=compliance+frameworks', resources: [
      'https://www.iso.org/isoiec-27001-information-security.html',
      'https://www.coursera.org/learn/compliance-standards',
      'https://www.udemy.com/course/iso-27001-information-security-manager/'
    ] }
  ],
  qa: [
    { step: 'Testing Basics', description: 'Understand manual and automated testing.', youtube: 'https://www.youtube.com/results?search_query=testing+basics+manual+automated', resources: [
      'https://www.softwaretestingboard.org/certification/software-testing-fundamentals/',
      'https://www.udemy.com/course/software-testing-for-beginners/',
      'https://www.coursera.org/learn/software-testing-automation'
    ] },
    { step: 'Test Automation', description: 'Use Selenium, Cypress, or Playwright.', youtube: 'https://www.youtube.com/results?search_query=test+automation+selenium+cypress+playwright', resources: [
      'https://www.selenium.dev/documentation/webdriver/',
      'https://www.cypress.io/docs/',
      'https://playwright.dev/docs/intro/'
    ] },
    { step: 'API Testing', description: 'Test APIs with Postman or similar tools.', youtube: 'https://www.youtube.com/results?search_query=api+testing+postman', resources: [
      'https://www.postman.com/product/postman-api-client/',
      'https://www.udemy.com/course/rest-api-testing-with-postman/',
      'https://www.coursera.org/learn/api-testing'
    ] },
    { step: 'Performance Testing', description: 'Use JMeter or similar tools.', youtube: 'https://www.youtube.com/results?search_query=performance+testing+jmeter', resources: [
      'https://jmeter.apache.org/usermanual/index.html',
      'https://www.udemy.com/course/load-testing-with-jmeter/',
      'https://www.coursera.org/learn/performance-testing'
    ] },
    { step: 'CI/CD Integration', description: 'Integrate tests into CI/CD pipelines.', youtube: 'https://www.youtube.com/results?search_query=ci/cd+integration+tests', resources: [
      'https://www.jenkins.io/doc/',
      'https://www.gitlab.com/gitlab-ci/',
      'https://www.docker.com/products/docker-enterprise'
    ] }
  ],
  android: [
    { step: 'Java/Kotlin Basics', description: 'Learn the basics of Java or Kotlin for Android development.', youtube: 'https://www.youtube.com/results?search_query=android+development+java+kotlin+basics', resources: [
      'https://developer.android.com/docs',
      'https://www.udemy.com/course/android-kotlin-developer/',
      'https://www.coursera.org/learn/android-development'
    ] },
    { step: 'Android Studio', description: 'Get familiar with Android Studio IDE.', youtube: 'https://www.youtube.com/results?search_query=android+studio+ide', resources: [
      'https://developer.android.com/studio',
      'https://www.udemy.com/course/android-studio-for-beginners/',
      'https://www.coursera.org/learn/android-development'
    ] },
    { step: 'UI Design', description: 'Understand layouts, views, and Material Design.', youtube: 'https://www.youtube.com/results?search_query=android+ui+design+layouts+views+material', resources: [
      'https://developer.android.com/guide/topics/ui/look-and-feel',
      'https://www.udemy.com/course/android-ui-design-for-beginners/',
      'https://www.coursera.org/learn/android-ui-design'
    ] },
    { step: 'APIs & Networking', description: 'Work with REST APIs and handle network requests.', youtube: 'https://www.youtube.com/results?search_query=android+apis+networking+rest+api', resources: [
      'https://developer.android.com/training/basics/network-ops/connecting',
      'https://www.udemy.com/course/android-networking-for-beginners/',
      'https://www.coursera.org/learn/android-networking'
    ] },
    { step: 'Publishing', description: 'Learn how to publish apps to the Google Play Store.', youtube: 'https://www.youtube.com/results?search_query=google+play+store+publishing', resources: [
      'https://developer.android.com/distribute/best-practices',
      'https://www.udemy.com/course/google-play-store-app-publishing/',
      'https://www.coursera.org/learn/google-play-store-app-publishing'
    ] }
  ],
  ios: [
    { step: 'Swift Basics', description: 'Learn the basics of Swift programming.', youtube: 'https://www.youtube.com/results?search_query=swift+programming+basics', resources: [
      'https://docs.swift.org/swift-book/',
      'https://www.udemy.com/course/swift-for-beginners/',
      'https://www.coursera.org/learn/swift-programming'
    ] },
    { step: 'Xcode', description: 'Get familiar with Xcode IDE.', youtube: 'https://www.youtube.com/results?search_query=xcode+ide', resources: [
      'https://developer.apple.com/xcode/',
      'https://www.udemy.com/course/ios-13-app-development-with-swift/',
      'https://www.coursera.org/learn/ios-app-development'
    ] },
    { step: 'UIKit/SwiftUI', description: 'Build interfaces using UIKit or SwiftUI.', youtube: 'https://www.youtube.com/results?search_query=ui+kit+swiftui+interface+builder', resources: [
      'https://developer.apple.com/documentation/uikit',
      'https://developer.apple.com/documentation/swiftui',
      'https://www.udemy.com/course/ios-app-development-with-swiftui/'
    ] },
    { step: 'APIs & Networking', description: 'Work with REST APIs and handle network requests.', youtube: 'https://www.youtube.com/results?search_query=ios+apis+networking+rest+api', resources: [
      'https://developer.apple.com/documentation/foundation/url_loading_system',
      'https://developer.apple.com/documentation/network',
      'https://www.udemy.com/course/ios-networking-for-beginners/'
    ] },
    { step: 'Publishing', description: 'Learn how to publish apps to the App Store.', youtube: 'https://www.youtube.com/results?search_query=app+store+publishing', resources: [
      'https://developer.apple.com/app-store/resources/',
      'https://www.udemy.com/course/ios-app-store-app-marketing/',
      'https://www.coursera.org/learn/app-store-app-marketing'
    ] }
  ],
  blockchain: [
    { step: 'Blockchain Basics', description: 'Understand what a blockchain is and how it works.', youtube: 'https://www.youtube.com/results?search_query=blockchain+basics+what+is+blockchain', resources: [
      'https://www.investopedia.com/terms/b/blockchain.asp',
      'https://www.coursera.org/learn/blockchain-basics',
      'https://www.udemy.com/course/blockchain-for-beginners/'
    ] },
    { step: 'Smart Contracts', description: 'Learn to write smart contracts (e.g., Solidity for Ethereum).', youtube: 'https://www.youtube.com/results?search_query=smart+contracts+solidity+ethereum', resources: [
      'https://solidity.readthedocs.io/',
      'https://www.udemy.com/course/solidity-for-beginners/',
      'https://www.coursera.org/learn/smart-contracts-ethereum'
    ] },
    { step: 'DApps', description: 'Build decentralized applications.', youtube: 'https://www.youtube.com/results?search_query=dapps+decentralized+applications', resources: [
      'https://www.dappuniversity.com/',
      'https://www.udemy.com/course/build-a-decentralized-web-app/',
      'https://www.coursera.org/learn/decentralized-applications'
    ] },
    { step: 'Security', description: 'Understand blockchain security best practices.', youtube: 'https://www.youtube.com/results?search_query=blockchain+security+best+practices', resources: [
      'https://www.coursera.org/learn/blockchain-security',
      'https://www.udemy.com/course/blockchain-security-and-cryptography/',
      'https://www.coursera.org/learn/blockchain-security'
    ] },
    { step: 'Deployment', description: 'Deploy smart contracts to testnets and mainnets.', youtube: 'https://www.youtube.com/results?search_query=deploy+smart+contracts+testnets+mainnets', resources: [
      'https://www.alchemy.com/',
      'https://www.infura.io/',
      'https://www.coursera.org/learn/blockchain-development'
    ] }
  ],
  'cyber-security': [
    { step: 'Security Fundamentals', description: 'Learn about confidentiality, integrity, and availability.', youtube: 'https://www.youtube.com/results?search_query=security+fundamentals+confidentiality+integrity+availability', resources: [
      'https://www.coursera.org/learn/cybersecurity-fundamentals',
      'https://www.udemy.com/course/cybersecurity-fundamentals/',
      'https://www.coursera.org/learn/cybersecurity-fundamentals'
    ] },
    { step: 'Networking', description: 'Understand TCP/IP, firewalls, and VPNs.', youtube: 'https://www.youtube.com/results?search_query=networking+tcp/ip+firewalls+vpns', resources: [
      'https://www.coursera.org/learn/networking-fundamentals',
      'https://www.udemy.com/course/network-security-fundamentals/',
      'https://www.coursera.org/learn/network-security'
    ] },
    { step: 'Threats & Vulnerabilities', description: 'Study common threats and vulnerabilities.', youtube: 'https://www.youtube.com/results?search_query=threats+vulnerabilities+cybersecurity', resources: [
      'https://www.coursera.org/learn/cybersecurity-threats-vulnerabilities',
      'https://www.udemy.com/course/cybersecurity-threats-vulnerabilities/',
      'https://www.coursera.org/learn/cybersecurity-threats-vulnerabilities'
    ] },
    { step: 'Penetration Testing', description: 'Learn about ethical hacking and pen testing tools.', youtube: 'https://www.youtube.com/results?search_query=penetration+testing+ethical+hacking+tools', resources: [
      'https://www.coursera.org/learn/ethical-hacking',
      'https://www.udemy.com/course/ethical-hacking-for-beginners/',
      'https://www.coursera.org/learn/ethical-hacking'
    ] },
    { step: 'Incident Response', description: 'Know how to respond to and recover from security incidents.', youtube: 'https://www.youtube.com/results?search_query=incident+response+security+incidents', resources: [
      'https://www.coursera.org/learn/incident-response',
      'https://www.udemy.com/course/incident-response-for-it-pros/',
      'https://www.coursera.org/learn/incident-response'
    ] }
  ],
  flutter: [
    { step: 'Dart Basics', description: 'Learn the Dart programming language.', youtube: 'https://www.youtube.com/results?search_query=dart+programming+language', resources: [
      'https://dart.dev/guides',
      'https://www.udemy.com/course/dart-programming-for-beginners/',
      'https://www.coursera.org/learn/dart-programming'
    ] },
    { step: 'Flutter Basics', description: 'Understand widgets, layouts, and navigation.', youtube: 'https://www.youtube.com/results?search_query=flutter+basics+widgets+layouts+navigation', resources: [
      'https://flutter.dev/docs',
      'https://www.udemy.com/course/flutter-app-development-for-beginners/',
      'https://www.coursera.org/learn/flutter-app-development'
    ] },
    { step: 'State Management', description: 'Use Provider, Bloc, or Riverpod for state management.', youtube: 'https://www.youtube.com/results?search_query=flutter+state+management+provider+bloc+riverpod', resources: [
      'https://flutter.dev/docs/development/data-and-backend/state-mgmt/provider',
      'https://www.udemy.com/course/flutter-state-management/',
      'https://www.coursera.org/learn/flutter-state-management'
    ] },
    { step: 'APIs & Networking', description: 'Fetch data from REST APIs.', youtube: 'https://www.youtube.com/results?search_query=flutter+apis+networking+rest+api', resources: [
      'https://flutter.dev/docs/cookbook',
      'https://www.udemy.com/course/flutter-rest-api-with-http-package/',
      'https://www.coursera.org/learn/flutter-rest-api'
    ] },
    { step: 'Publishing', description: 'Publish your app to the Play Store or App Store.', youtube: 'https://www.youtube.com/results?search_query=flutter+app+store+publishing', resources: [
      'https://flutter.dev/docs/deployment/android',
      'https://flutter.dev/docs/deployment/ios',
      'https://www.udemy.com/course/flutter-app-store-app-marketing/'
    ] }
  ],
  go: [
    { step: 'Go Basics', description: 'Learn Go syntax, types, and control structures.', youtube: 'https://www.youtube.com/results?search_query=go+programming+basics+syntax+types', resources: [
      'https://golang.org/doc/',
      'https://www.udemy.com/course/go-programming-for-beginners/',
      'https://www.coursera.org/learn/go-programming'
    ] },
    { step: 'Concurrency', description: 'Understand goroutines and channels.', youtube: 'https://www.youtube.com/results?search_query=go+concurrency+goroutines+channels', resources: [
      'https://golang.org/doc/effective_go.html#concurrency',
      'https://www.udemy.com/course/go-concurrency/',
      'https://www.coursera.org/learn/go-concurrency'
    ] },
    { step: 'Web Development', description: 'Build web servers with net/http.', youtube: 'https://www.youtube.com/results?search_query=go+web+development+net/http', resources: [
      'https://golang.org/doc/net/',
      'https://www.udemy.com/course/go-web-development/',
      'https://www.coursera.org/learn/go-web-development'
    ] },
    { step: 'Testing', description: "Write tests using Go's testing package.", youtube: 'https://www.youtube.com/results?search_query=go+testing+package', resources: [
      'https://golang.org/pkg/testing/',
      'https://www.udemy.com/course/go-testing/',
      'https://www.coursera.org/learn/go-testing'
    ] },
    { step: 'Deployment', description: 'Deploy Go applications.', youtube: 'https://www.youtube.com/results?search_query=go+deployment', resources: [
      'https://www.digitalocean.com/community/tutorials/how-to-deploy-a-go-application-with-docker-and-compose-on-ubuntu-18-04',
      'https://www.udemy.com/course/go-deployment/',
      'https://www.coursera.org/learn/go-deployment'
    ] }
  ],  
  java: [
    { step: 'Java Basics', description: 'Learn Java syntax, OOP, and collections.', youtube: 'https://www.youtube.com/results?search_query=java+programming+basics+syntax+oop+collections', resources: [
      'https://docs.oracle.com/javase/tutorial/',
      'https://www.udemy.com/course/java-programming-for-beginners/',
      'https://www.coursera.org/learn/java-programming'
    ] },
    { step: 'Build Tools', description: 'Use Maven or Gradle for project management.', youtube: 'https://www.youtube.com/results?search_query=maven+gradle+project+management', resources: [
      'https://maven.apache.org/guides/',
      'https://www.udemy.com/course/maven-for-beginners/',
      'https://www.coursera.org/learn/maven-for-developers'
    ] },
    { step: 'Web Development', description: 'Build web apps with Spring or Java EE.', youtube: 'https://www.youtube.com/results?search_query=spring+java+ee+web+development', resources: [
      'https://spring.io/guides/',
      'https://www.udemy.com/course/spring-boot-for-beginners/',
      'https://www.coursera.org/learn/spring-boot'
    ] },
    { step: 'Testing', description: 'Write tests using JUnit or TestNG.', youtube: 'https://www.youtube.com/results?search_query=java+testing+junit+testng', resources: [
      'https://junit.org/junit5/',
      'https://testng.org/doc/',
      'https://www.udemy.com/course/java-unit-testing/'
    ] },
    { step: 'Deployment', description: 'Deploy Java applications.', youtube: 'https://www.youtube.com/results?search_query=java+deployment', resources: [
      'https://www.digitalocean.com/community/tutorials/how-to-deploy-a-java-application-using-docker',
      'https://www.udemy.com/course/java-deployment/',
      'https://www.coursera.org/learn/java-deployment'
    ] }
  ],
  typescript: [
    { step: 'TypeScript Basics', description: 'Learn types, interfaces, and generics.', youtube: 'https://www.youtube.com/results?search_query=typescript+programming+basics+types+interfaces', resources: [
      'https://www.typescriptlang.org/docs/',
      'https://www.udemy.com/course/typescript-for-beginners/',
      'https://www.coursera.org/learn/typescript-for-developers'
    ] },
    { step: 'Tooling', description: 'Set up TypeScript with npm and tsconfig.', youtube: 'https://www.youtube.com/results?search_query=typescript+npm+tsconfig', resources: [
      'https://www.typescriptlang.org/docs/handbook/compiler-options.html',
      'https://www.udemy.com/course/typescript-for-beginners/',
      'https://www.coursera.org/learn/typescript-for-developers'
    ] },
    { step: 'Integration', description: 'Use TypeScript with React, Node.js, or Angular.', youtube: 'https://www.youtube.com/results?search_query=typescript+integration+react+node.js+angular', resources: [
      'https://www.typescriptlang.org/docs/handbook/react.html',
      'https://www.udemy.com/course/typescript-for-react/',
      'https://www.coursera.org/learn/typescript-for-react'
    ] },
    { step: 'Advanced Types', description: 'Learn about mapped types, conditional types, etc.', youtube: 'https://www.youtube.com/results?search_query=typescript+advanced+types+mapped+conditional', resources: [
      'https://www.typescriptlang.org/docs/handbook/advanced-types.html',
      'https://www.udemy.com/course/typescript-advanced-types/',
      'https://www.coursera.org/learn/typescript-advanced-types'
    ] },
    { step: 'Testing', description: 'Test TypeScript code with Jest or Mocha.', youtube: 'https://www.youtube.com/results?search_query=typescript+testing+jest+mocha', resources: [
      'https://jestjs.io/docs/getting-started',
      'https://www.udemy.com/course/typescript-testing/',
      'https://www.coursera.org/learn/typescript-testing'
    ] }
  ],
  javascript: [
    { step: 'JavaScript Basics', description: 'Learn syntax, data types, and control flow.', youtube: 'https://www.youtube.com/results?search_query=javascript+programming+basics+syntax+data+types', resources: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      'https://javascript.info/',
      'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
    ] },
    { step: 'DOM Manipulation', description: 'Interact with the DOM and handle events.', youtube: 'https://www.youtube.com/results?search_query=javascript+dom+manipulation+events', resources: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
      'https://www.udemy.com/course/javascript-dom-manipulation/',
      'https://www.coursera.org/learn/javascript-dom-manipulation'
    ] },
    { step: 'ES6+ Features', description: 'Use modern JavaScript features.', youtube: 'https://www.youtube.com/results?search_query=javascript+es6+features', resources: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript',
      'https://javascript.info/',
      'https://www.freecodecamp.org/news/javascript-es6-features/'
    ] },
    { step: 'Async Programming', description: 'Understand promises, async/await, and callbacks.', youtube: 'https://www.youtube.com/results?search_query=javascript+async+await+promises+callbacks', resources: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      'https://javascript.info/async-await',
      'https://www.freecodecamp.org/news/javascript-async-await/'
    ] },
    { step: 'Testing', description: 'Test JavaScript code with Jest or Mocha.', youtube: 'https://www.youtube.com/results?search_query=javascript+testing+jest+mocha', resources: [
      'https://jestjs.io/docs/getting-started',
      'https://www.udemy.com/course/javascript-testing/',
      'https://www.coursera.org/learn/javascript-testing'
    ] }
  ],
  angular: [
    { step: 'Angular Basics', description: 'Learn about modules, components, and templates.', youtube: 'https://www.youtube.com/results?search_query=angular+programming+basics+modules+components', resources: [
      'https://angular.io/start',
      'https://www.udemy.com/course/angular-for-beginners/',
      'https://www.coursera.org/learn/angular-fundamentals'
    ] },
    { step: 'Services & Dependency Injection', description: 'Understand services and DI in Angular.', youtube: 'https://www.youtube.com/results?search_query=angular+services+dependency+injection', resources: [
      'https://angular.io/guide/architecture-services',
      'https://www.udemy.com/course/angular-dependency-injection/',
      'https://www.coursera.org/learn/angular-services'
    ] },
    { step: 'Routing', description: 'Implement navigation with Angular Router.', youtube: 'https://www.youtube.com/results?search_query=angular+router+navigation', resources: [
      'https://angular.io/guide/router',
      'https://www.udemy.com/course/angular-routing/',
      'https://www.coursera.org/learn/angular-routing'
    ] },
    { step: 'Forms', description: 'Work with template-driven and reactive forms.', youtube: 'https://www.youtube.com/results?search_query=angular+forms+template+driven+reactive', resources: [
      'https://angular.io/guide/forms',
      'https://www.udemy.com/course/angular-forms/',
      'https://www.coursera.org/learn/angular-forms'
    ] },
    { step: 'Testing', description: 'Test Angular applications.', youtube: 'https://www.youtube.com/results?search_query=angular+testing+applications', resources: [
      'https://angular.io/guide/testing',
      'https://www.udemy.com/course/angular-testing/',
      'https://www.coursera.org/learn/angular-testing'
    ] }
  ],
  vue: [
    { step: 'Vue Basics', description: 'Learn about Vue instances, directives, and templates.', youtube: 'https://www.youtube.com/results?search_query=vue+programming+basics+instances+directives', resources: [
      'https://vuejs.org/guide/introduction.html',
      'https://www.udemy.com/course/vue-for-beginners/',
      'https://www.coursera.org/learn/vue-fundamentals'
    ] },
    { step: 'Components', description: 'Build reusable components.', youtube: 'https://www.youtube.com/results?search_query=vue+components+reusable', resources: [
      'https://vuejs.org/guide/essentials/component-basics.html',
      'https://www.udemy.com/course/vue-components/',
      'https://www.coursera.org/learn/vue-components'
    ] },
    { step: 'Routing', description: 'Use Vue Router for navigation.', youtube: 'https://www.youtube.com/results?search_query=vue+router+navigation', resources: [
      'https://router.vuejs.org/guide/',
      'https://www.udemy.com/course/vue-router/',
      'https://www.coursera.org/learn/vue-router'
    ] },
    { step: 'State Management', description: 'Manage state with Vuex or Pinia.', youtube: 'https://www.youtube.com/results?search_query=vue+state+management+vuex+pinia', resources: [
      'https://vuex.vuejs.org/',
      'https://pinia.vuejs.org/',
      'https://www.udemy.com/course/vue-state-management/'
    ] },
    { step: 'Testing', description: 'Test Vue applications.', youtube: 'https://www.youtube.com/results?search_query=vue+testing+applications', resources: [
      'https://vuejs.org/guide/tests/',
      'https://www.udemy.com/course/vue-testing/',
      'https://www.coursera.org/learn/vue-testing'
    ] }
  ],
  postgres: [
    { step: 'PostgreSQL Basics', description: 'Install and set up PostgreSQL.', youtube: 'https://www.youtube.com/results?search_query=postgresql+installation+setup', resources: [
      'https://www.postgresql.org/docs/',
      'https://www.udemy.com/course/postgresql-for-beginners/',
      'https://www.coursera.org/learn/postgresql-database'
    ] },
    { step: 'SQL Queries', description: 'Write SELECT, INSERT, UPDATE, DELETE queries.', youtube: 'https://www.youtube.com/results?search_query=postgresql+sql+queries+select+insert+update+delete', resources: [
      'https://www.postgresql.org/docs/current/sql-commands.html',
      'https://www.udemy.com/course/postgresql-for-beginners/',
      'https://www.coursera.org/learn/postgresql-database'
    ] },
    { step: 'Indexes & Constraints', description: 'Optimize tables with indexes and constraints.', youtube: 'https://www.youtube.com/results?search_query=postgresql+indexes+constraints+optimization', resources: [
      'https://www.postgresql.org/docs/current/indexes-intro.html',
      'https://www.udemy.com/course/postgresql-indexes/',
      'https://www.coursera.org/learn/postgresql-indexes'
    ] },
    { step: 'Joins & Aggregations', description: 'Work with JOINs and aggregate functions.', youtube: 'https://www.youtube.com/results?search_query=postgresql+joins+aggregations', resources: [
      'https://www.postgresql.org/docs/current/queries-table-expressions.html',
      'https://www.udemy.com/course/postgresql-joins/',
      'https://www.coursera.org/learn/postgresql-joins'
    ] },
    { step: 'Backup & Restore', description: 'Backup and restore databases.', youtube: 'https://www.youtube.com/results?search_query=postgresql+backup+restore', resources: [
      'https://www.postgresql.org/docs/current/backup.html',
      'https://www.udemy.com/course/postgresql-backup-restore/',
      'https://www.coursera.org/learn/postgresql-backup-restore'
    ] }
  ],
  c: [
    { step: 'C Basics', description: 'Learn C syntax, data types, and control structures.', youtube: 'https://www.youtube.com/results?search_query=c+programming+basics+syntax+data+types', resources: [
      'https://www.learn-c.com/',
      'https://www.udemy.com/course/c-programming-for-beginners/',
      'https://www.coursera.org/learn/c-programming'
    ] },
    { step: 'Pointers & Memory', description: 'Understand pointers, memory allocation, and arrays.', youtube: 'https://www.youtube.com/results?search_query=c+pointers+memory+allocation+arrays', resources: [
      'https://www.learn-c.com/c-programming-in-easy-steps/',
      'https://www.udemy.com/course/c-programming-for-beginners/',
      'https://www.coursera.org/learn/c-programming'
    ] },
    { step: 'Functions & Structs', description: 'Write modular code using functions and structs.', youtube: 'https://www.youtube.com/results?search_query=c+functions+structs+modular', resources: [
      'https://www.learn-c.com/c-programming-in-easy-steps/',
      'https://www.udemy.com/course/c-programming-for-beginners/',
      'https://www.coursera.org/learn/c-programming'
    ] },
    { step: 'File I/O', description: 'Read and write files in C.', youtube: 'https://www.youtube.com/results?search_query=c+file+io+read+write', resources: [
      'https://www.learn-c.com/c-programming-in-easy-steps/',
      'https://www.udemy.com/course/c-programming-for-beginners/',
      'https://www.coursera.org/learn/c-programming'
    ] },
    { step: 'Debugging', description: 'Use gdb and valgrind for debugging and memory checks.', youtube: 'https://www.youtube.com/results?search_query=c+debugging+gdb+valgrind', resources: [
      'https://www.gnu.org/software/gdb/',
      'https://www.valgrind.org/docs/manual/quick-start.html',
      'https://www.udemy.com/course/c-debugging/'
    ] }
  ],
  'c++': [
    { step: 'C++ Basics', description: 'Learn C++ syntax, OOP, and STL.', youtube: 'https://www.youtube.com/results?search_query=c+++programming+basics+syntax+oop+stl', resources: [
      'https://www.learncpp.com/',
      'https://www.udemy.com/course/c-plus-plus-for-beginners/',
      'https://www.coursera.org/learn/c-plus-plus'
    ] },
    { step: 'Classes & Inheritance', description: 'Understand classes, inheritance, and polymorphism.', youtube: 'https://www.youtube.com/results?search_query=c+++classes+inheritance+polymorphism', resources: [
      'https://www.learncpp.com/cpp-tutorial/inheritance-and-polymorphism/',
      'https://www.udemy.com/course/c-plus-plus-for-beginners/',
      'https://www.coursera.org/learn/c-plus-plus'
    ] },
    { step: 'Templates', description: 'Use templates for generic programming.', youtube: 'https://www.youtube.com/results?search_query=c+++templates+generic+programming', resources: [
      'https://www.learncpp.com/cpp-tutorial/templates/',
      'https://www.udemy.com/course/c-plus-plus-for-beginners/',
      'https://www.coursera.org/learn/c-plus-plus'
    ] },
    { step: 'Memory Management', description: 'Handle memory with pointers and smart pointers.', youtube: 'https://www.youtube.com/results?search_query=c+++memory+management+pointers+smart+pointers', resources: [
      'https://www.learncpp.com/cpp-tutorial/smart-pointers/',
      'https://www.udemy.com/course/c-plus-plus-for-beginners/',
      'https://www.coursera.org/learn/c-plus-plus'
    ] },
    { step: 'Advanced Topics', description: 'Explore multithreading and modern C++ features.', youtube: 'https://www.youtube.com/results?search_query=c+++advanced+topics+multithreading', resources: [
      'https://www.learncpp.com/cpp-tutorial/multithreading/',
      'https://www.udemy.com/course/c-plus-plus-for-beginners/',
      'https://www.coursera.org/learn/c-plus-plus'
    ] }
  ],
  ruby: [
    { step: 'Ruby Basics', description: 'Learn Ruby syntax and object-oriented programming.', youtube: 'https://www.youtube.com/results?search_query=ruby+programming+basics+syntax+oop', resources: [
      'https://www.learnrubyonline.org/',
      'https://www.udemy.com/course/ruby-programming-for-beginners/',
      'https://www.coursera.org/learn/ruby-programming'
    ] },
    { step: 'Gems & Bundler', description: 'Use RubyGems and Bundler for package management.', youtube: 'https://www.youtube.com/results?search_query=ruby+gems+bundler+package+management', resources: [
      'https://guides.rubygems.org/',
      'https://bundler.io/',
      'https://www.udemy.com/course/ruby-gems-bundler/'
    ] },
    { step: 'Web Development', description: 'Build web apps with Ruby on Rails.', youtube: 'https://www.youtube.com/results?search_query=ruby+on+rails+web+development', resources: [
      'https://rubyonrails.org/',
      'https://www.udemy.com/course/ruby-on-rails-for-beginners/',
      'https://www.coursera.org/learn/ruby-on-rails'
    ] },
    { step: 'Testing', description: 'Test Ruby code with RSpec or Minitest.', youtube: 'https://www.youtube.com/results?search_query=ruby+testing+rspec+minitest', resources: [
      'https://rspec.info/',
      'https://www.udemy.com/course/ruby-rspec-minitest/',
      'https://www.coursera.org/learn/ruby-testing'
    ] },
    { step: 'Deployment', description: 'Deploy Ruby apps to Heroku or other platforms.', youtube: 'https://www.youtube.com/results?search_query=ruby+deployment+heroku', resources: [
      'https://devcenter.heroku.com/articles/getting-started-with-ruby',
      'https://www.udemy.com/course/ruby-deployment/',
      'https://www.coursera.org/learn/ruby-deployment'
    ] }
  ],
  php: [
    { step: 'PHP Basics', description: 'Learn PHP syntax and server-side scripting.', youtube: 'https://www.youtube.com/results?search_query=php+programming+basics+syntax+server-side', resources: [
      'https://www.learnphp.com/',
      'https://www.udemy.com/course/php-for-beginners/',
      'https://www.coursera.org/learn/php-programming'
    ] },
    { step: 'Databases', description: 'Connect PHP to MySQL or PostgreSQL.', youtube: 'https://www.youtube.com/results?search_query=php+mysql+postgresql+database', resources: [
      'https://www.learnphp.com/php-mysql-tutorial/',
      'https://www.udemy.com/course/php-mysql-database/',
      'https://www.coursera.org/learn/php-database'
    ] },
    { step: 'Frameworks', description: 'Use Laravel or Symfony for modern PHP development.', youtube: 'https://www.youtube.com/results?search_query=laravel+symfony+modern+php+development', resources: [
      'https://laravel.com/docs',
      'https://symfony.com/doc/current/index.html',
      'https://www.udemy.com/course/laravel-symfony-for-beginners/'
    ] },
    { step: 'APIs', description: 'Build and consume REST APIs with PHP.', youtube: 'https://www.youtube.com/results?search_query=php+rest+api+laravel+symfony', resources: [
      'https://www.php.net/manual/en/book.curl.php',
      'https://www.udemy.com/course/restful-api-with-laravel-and-vuejs/',
      'https://www.coursera.org/learn/restful-api-design-and-implementation'
    ] },
    { step: 'Security', description: 'Follow best practices for secure PHP code.', youtube: 'https://www.youtube.com/results?search_query=php+security+best+practices', resources: [
      'https://www.php.net/manual/en/security.php',
      'https://www.udemy.com/course/php-security/',
      'https://www.coursera.org/learn/php-security'
    ] }
  ],
  kotlin: [
    { step: 'Kotlin Basics', description: 'Learn Kotlin syntax and interoperability with Java.', youtube: 'https://www.youtube.com/results?search_query=kotlin+programming+basics+syntax+interoperability', resources: [
      'https://kotlinlang.org/docs/getting-started.html',
      'https://www.udemy.com/course/kotlin-for-beginners/',
      'https://www.coursera.org/learn/kotlin-for-java-developers'
    ] },
    { step: 'OOP & Functional', description: 'Use object-oriented and functional programming in Kotlin.', youtube: 'https://www.youtube.com/results?search_query=kotlin+oop+functional+programming', resources: [
      'https://kotlinlang.org/docs/object-oriented-programming.html',
      'https://www.udemy.com/course/kotlin-for-beginners/',
      'https://www.coursera.org/learn/kotlin-for-java-developers'
    ] },
    { step: 'Android Development', description: 'Build Android apps with Kotlin.', youtube: 'https://www.youtube.com/results?search_query=kotlin+android+development', resources: [
      'https://developer.android.com/docs',
      'https://www.udemy.com/course/kotlin-for-android-development/',
      'https://www.coursera.org/learn/kotlin-for-android-development'
    ] },
    { step: 'Coroutines', description: 'Handle async code with coroutines.', youtube: 'https://www.youtube.com/results?search_query=kotlin+coroutines+async', resources: [
      'https://kotlinlang.org/docs/coroutines-overview.html',
      'https://www.udemy.com/course/kotlin-coroutines/',
      'https://www.coursera.org/learn/kotlin-coroutines'
    ] },
    { step: 'Testing', description: 'Test Kotlin code with JUnit.', youtube: 'https://www.youtube.com/results?search_query=kotlin+testing+junit', resources: [
      'https://junit.org/junit5/',
      'https://www.udemy.com/course/kotlin-testing/',
      'https://www.coursera.org/learn/kotlin-testing'
    ] }
  ],
  swift: [
    { step: 'Swift Basics', description: 'Learn Swift syntax and data types.', youtube: 'https://www.youtube.com/results?search_query=swift+programming+basics+syntax+data+types', resources: [
      'https://docs.swift.org/swift-book/',
      'https://www.udemy.com/course/swift-for-beginners/',
      'https://www.coursera.org/learn/swift-programming'
    ] },
    { step: 'OOP in Swift', description: 'Use classes, structs, and protocols.', youtube: 'https://www.youtube.com/results?search_query=swift+oop+classes+structs+protocols', resources: [
      'https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html',
      'https://www.udemy.com/course/swift-oop/',
      'https://www.coursera.org/learn/swift-oop'
    ] },
    { step: 'iOS Development', description: 'Build iOS apps with Swift and SwiftUI.', youtube: 'https://www.youtube.com/results?search_query=swift+swiftui+ios+development', resources: [
      'https://developer.apple.com/documentation/swiftui',
      'https://www.udemy.com/course/ios-app-development-with-swiftui/',
      'https://www.coursera.org/learn/ios-app-development'
    ] },
    { step: 'Concurrency', description: 'Use async/await and Grand Central Dispatch.', youtube: 'https://www.youtube.com/results?search_query=swift+concurrency+async/await+grand+central+dispatch', resources: [
      'https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html',
      'https://www.udemy.com/course/swift-concurrency/',
      'https://www.coursera.org/learn/swift-concurrency'
    ] },
    { step: 'Testing', description: 'Test Swift code with XCTest.', youtube: 'https://www.youtube.com/results?search_query=swift+testing+xctest', resources: [
      'https://developer.apple.com/documentation/xctest',
      'https://www.udemy.com/course/swift-testing/',
      'https://www.coursera.org/learn/swift-testing'
    ] }
  ],
  rust: [
    { step: 'Rust Basics', description: 'Learn Rust syntax, ownership, and borrowing.', youtube: 'https://www.youtube.com/results?search_query=rust+programming+basics+syntax+ownership+borrowing', resources: [
      'https://www.rust-lang.org/learn',
      'https://www.udemy.com/course/rust-programming-for-beginners/',
      'https://www.coursera.org/learn/rust-programming'
    ] },
    { step: 'Error Handling', description: 'Handle errors with Result and Option types.', youtube: 'https://www.youtube.com/results?search_query=rust+error+handling+result+option', resources: [
      'https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html',
      'https://www.udemy.com/course/rust-error-handling/',
      'https://www.coursera.org/learn/rust-error-handling'
    ] },
    { step: 'Cargo & Crates', description: 'Use Cargo for project management and crates for libraries.', youtube: 'https://www.youtube.com/results?search_query=rust+cargo+crates+project+management', resources: [
      'https://doc.rust-lang.org/cargo/',
      'https://www.udemy.com/course/rust-cargo-crates/',
      'https://www.coursera.org/learn/rust-cargo-crates'
    ] },
    { step: 'Concurrency', description: 'Write safe concurrent code in Rust.', youtube: 'https://www.youtube.com/results?search_query=rust+concurrency+safe', resources: [
      'https://www.rust-lang.org/learn/concurrency',
      'https://www.udemy.com/course/rust-concurrency/',
      'https://www.coursera.org/learn/rust-concurrency'
    ] },
    { step: 'WebAssembly', description: 'Compile Rust to WebAssembly.', youtube: 'https://www.youtube.com/results?search_query=rust+webassembly+compile', resources: [
      'https://www.wasm.rs/',
      'https://www.udemy.com/course/rust-webassembly/',
      'https://www.coursera.org/learn/rust-webassembly'
    ] }
  ],
  'data-science': [
    { step: 'Python for Data Science', description: 'Use pandas, numpy, and matplotlib.', youtube: 'https://www.youtube.com/results?search_query=python+for+data+science+pandas+numpy+matplotlib', resources: [
      'https://pandas.pydata.org/pandas-docs/stable/',
      'https://numpy.org/doc/stable/',
      'https://matplotlib.org/stable/contents.html'
    ] },
    { step: 'Data Cleaning', description: 'Clean and preprocess data.', youtube: 'https://www.youtube.com/results?search_query=data+cleaning+preprocessing', resources: [
      'https://www.kaggle.com/learn/data-cleaning',
      'https://www.udemy.com/course/data-cleaning-for-beginners/',
      'https://www.coursera.org/learn/data-cleaning'
    ] },
    { step: 'Exploratory Analysis', description: 'Visualize and analyze data.', youtube: 'https://www.youtube.com/results?search_query=exploratory+analysis+visualization+data', resources: [
      'https://www.kaggle.com/learn/data-visualization',
      'https://www.udemy.com/course/data-visualization-for-beginners/',
      'https://www.coursera.org/learn/data-visualization'
    ] },
    { step: 'Statistical Analysis', description: 'Apply statistical methods to data.', youtube: 'https://www.youtube.com/results?search_query=statistical+analysis+methods+data', resources: [
      'https://www.coursera.org/learn/statistical-inference',
      'https://www.udemy.com/course/statistics-for-data-science/',
      'https://www.coursera.org/learn/statistical-inference'
    ] },
    { step: 'Machine Learning', description: 'Build models with scikit-learn.', youtube: 'https://www.youtube.com/results?search_query=machine+learning+scikit-learn', resources: [
      'https://scikit-learn.org/stable/user_guide.html',
      'https://www.udemy.com/course/machine-learning-with-python/',
      'https://www.coursera.org/learn/machine-learning'
    ] }
  ],
  'machine-learning': [
    { step: 'Math & Stats', description: 'Brush up on statistics, probability, and linear algebra.', youtube: 'https://www.youtube.com/results?search_query=math+stats+probability+linear+algebra', resources: [
      'https://www.coursera.org/learn/probability-and-statistics',
      'https://www.udemy.com/course/statistics-for-data-science/',
      'https://www.coursera.org/learn/statistics-for-data-science'
    ] },
    { step: 'Supervised Learning', description: 'Learn regression and classification algorithms.', youtube: 'https://www.youtube.com/results?search_query=supervised+learning+regression+classification', resources: [
      'https://www.coursera.org/learn/machine-learning',
      'https://www.udemy.com/course/machine-learning-with-python/',
      'https://www.coursera.org/learn/machine-learning'
    ] },
    { step: 'Unsupervised Learning', description: 'Explore clustering and dimensionality reduction.', youtube: 'https://www.youtube.com/results?search_query=unsupervised+learning+clustering+dimensionality+reduction', resources: [
      'https://www.coursera.org/learn/clustering-and-classification',
      'https://www.udemy.com/course/unsupervised-learning/',
      'https://www.coursera.org/learn/unsupervised-learning'
    ] },
    { step: 'Model Evaluation', description: 'Evaluate models with metrics and cross-validation.', youtube: 'https://www.youtube.com/results?search_query=model+evaluation+metrics+cross-validation', resources: [
      'https://www.coursera.org/learn/machine-learning-with-python',
      'https://www.udemy.com/course/machine-learning-with-python/',
      'https://www.coursera.org/learn/machine-learning'
    ] },
    { step: 'Deep Learning', description: 'Use TensorFlow or PyTorch for neural networks.', youtube: 'https://www.youtube.com/results?search_query=deep+learning+tensorflow+pytorch', resources: [
      'https://www.tensorflow.org/guide',
      'https://pytorch.org/tutorials/',
      'https://www.udemy.com/course/deep-learning-tensorflow-pytorch/'
    ] }
  ],
  cloud: [
    { step: 'Cloud Basics', description: 'Understand cloud computing concepts.', youtube: 'https://www.youtube.com/results?search_query=cloud+computing+concepts', resources: [
      'https://www.coursera.org/learn/cloud-computing-fundamentals',
      'https://www.udemy.com/course/cloud-computing-fundamentals/',
      'https://www.coursera.org/learn/cloud-computing'
    ] },
    { step: 'AWS/Azure/GCP', description: 'Get familiar with major cloud providers.', youtube: 'https://www.youtube.com/results?search_query=aws+azure+gcp+tutorial', resources: [
      'https://aws.amazon.com/getting-started/',
      'https://docs.microsoft.com/en-us/azure/',
      'https://cloud.google.com/docs'
    ] },
    { step: 'Compute & Storage', description: 'Use VMs, containers, and cloud storage.', youtube: 'https://www.youtube.com/results?search_query=cloud+computing+vms+containers+storage', resources: [
      'https://www.coursera.org/learn/cloud-computing-fundamentals',
      'https://www.udemy.com/course/cloud-computing-fundamentals/',
      'https://www.coursera.org/learn/cloud-computing'
    ] },
    { step: 'Networking', description: 'Set up VPCs, load balancers, and firewalls.', youtube: 'https://www.youtube.com/results?search_query=networking+vpc+load+balancer+firewall', resources: [
      'https://www.coursera.org/learn/networking-fundamentals',
      'https://www.udemy.com/course/networking-for-beginners/',
      'https://www.coursera.org/learn/networking'
    ] },
    { step: 'Serverless', description: 'Explore serverless computing (Lambda, Functions).', youtube: 'https://www.youtube.com/results?search_query=serverless+computing+lambda+functions', resources: [
      'https://www.coursera.org/learn/serverless-architecture',
      'https://www.udemy.com/course/aws-lambda-for-beginners/',
      'https://www.coursera.org/learn/serverless-architecture'
    ] }
  ],
  docker: [
    { step: 'Docker Basics', description: 'Learn about containers and Docker CLI.', youtube: 'https://www.youtube.com/results?search_query=docker+basics+containers+cli', resources: [
      'https://docs.docker.com/',
      'https://www.udemy.com/course/docker-for-beginners/',
      'https://www.coursera.org/learn/docker-fundamentals'
    ] },
    { step: 'Dockerfiles', description: 'Write Dockerfiles to containerize applications.', youtube: 'https://www.youtube.com/results?search_query=docker+dockerfiles+containerize', resources: [
      'https://docs.docker.com/engine/reference/builder/',
      'https://www.udemy.com/course/docker-for-beginners/',
      'https://www.coursera.org/learn/docker-fundamentals'
    ] },
    { step: 'Docker Compose', description: 'Manage multi-container apps with Compose.', youtube: 'https://www.youtube.com/results?search_query=docker+compose+multi-container', resources: [
      'https://docs.docker.com/compose/getting-started/',
      'https://www.udemy.com/course/docker-compose/',
      'https://www.coursera.org/learn/docker-compose'
    ] },
    { step: 'Images & Registries', description: 'Work with Docker images and registries.', youtube: 'https://www.youtube.com/results?search_query=docker+images+registries', resources: [
      'https://docs.docker.com/registry/',
      'https://www.udemy.com/course/docker-images-registries/',
      'https://www.coursera.org/learn/docker-images-registries'
    ] },
    { step: 'Deployment', description: 'Deploy containers to production.', youtube: 'https://www.youtube.com/results?search_query=docker+deployment+production', resources: [
      'https://docs.docker.com/get-started/',
      'https://www.udemy.com/course/docker-deployment/',
      'https://www.coursera.org/learn/docker-deployment'
    ] }
  ],
  kubernetes: [
    { step: 'Kubernetes Basics', description: 'Understand clusters, nodes, and pods.', youtube: 'https://www.youtube.com/results?search_query=kubernetes+basics+clusters+nodes+pods', resources: [
      'https://kubernetes.io/docs/concepts/',
      'https://www.udemy.com/course/kubernetes-for-beginners/',
      'https://www.coursera.org/learn/kubernetes-fundamentals'
    ] },
    { step: 'Deployments & Services', description: 'Manage deployments and expose services.', youtube: 'https://www.youtube.com/results?search_query=kubernetes+deployments+services', resources: [
      'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
      'https://www.udemy.com/course/kubernetes-deployments/',
      'https://www.coursera.org/learn/kubernetes-deployments'
    ] },
    { step: 'Config & Secrets', description: 'Handle config maps and secrets.', youtube: 'https://www.youtube.com/results?search_query=kubernetes+config+secrets', resources: [
      'https://kubernetes.io/docs/concepts/configuration/configmap/',
      'https://kubernetes.io/docs/concepts/configuration/secret/',
      'https://www.udemy.com/course/kubernetes-config-secrets/'
    ] },
    { step: 'Scaling & Monitoring', description: 'Scale apps and monitor clusters.', youtube: 'https://www.youtube.com/results?search_query=kubernetes+scaling+monitoring', resources: [
      'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
      'https://www.udemy.com/course/kubernetes-scaling/',
      'https://www.coursera.org/learn/kubernetes-scaling'
    ] },
    { step: 'Helm', description: 'Use Helm for package management.', youtube: 'https://www.youtube.com/results?search_query=helm+package+management', resources: [
      'https://helm.sh/docs/',
      'https://www.udemy.com/course/helm-for-beginners/',
      'https://www.coursera.org/learn/helm-for-developers'
    ] }
  ],
  sql: [
    { step: 'SQL Basics', description: 'Learn SELECT, INSERT, UPDATE, DELETE queries.', youtube: 'https://www.youtube.com/results?search_query=sql+basics+select+insert+update+delete', resources: [
      'https://www.w3schools.com/sql/',
      'https://www.udemy.com/course/sql-for-beginners/',
      'https://www.coursera.org/learn/sql-for-data-science'
    ] },
    { step: 'Joins', description: 'Work with INNER, LEFT, RIGHT, and FULL joins.', youtube: 'https://www.youtube.com/results?search_query=sql+joins+inner+left+right+full', resources: [
      'https://www.w3schools.com/sql/sql_join.asp',
      'https://www.udemy.com/course/sql-joins/',
      'https://www.coursera.org/learn/sql-joins'
    ] },
    { step: 'Indexes', description: 'Optimize queries with indexes.', youtube: 'https://www.youtube.com/results?search_query=sql+indexes+optimization', resources: [
      'https://www.postgresql.org/docs/current/indexes-intro.html',
      'https://www.udemy.com/course/postgresql-indexes/',
      'https://www.coursera.org/learn/postgresql-indexes'
    ] },
    { step: 'Transactions', description: 'Understand transactions and ACID properties.', youtube: 'https://www.youtube.com/results?search_query=sql+transactions+acid', resources: [
      'https://www.postgresql.org/docs/current/transaction-iso.html',
      'https://www.udemy.com/course/sql-transactions/',
      'https://www.coursera.org/learn/sql-transactions'
    ] },
    { step: 'Stored Procedures', description: 'Write and use stored procedures.', youtube: 'https://www.youtube.com/results?search_query=sql+stored+procedures', resources: [
      'https://www.postgresql.org/docs/current/sql-create-procedure.html',
      'https://www.udemy.com/course/postgresql-stored-procedures/',
      'https://www.coursera.org/learn/postgresql-stored-procedures'
    ] }
  ],
  'no-sql': [
    { step: 'NoSQL Basics', description: 'Understand document, key-value, and graph databases.', youtube: 'https://www.youtube.com/results?search_query=nosql+basics+document+key-value+graph', resources: [
      'https://www.mongodb.com/docs/',
      'https://www.udemy.com/course/mongodb-for-beginners/',
      'https://www.coursera.org/learn/mongodb-database'
    ] },
    { step: 'MongoDB', description: 'Learn CRUD operations in MongoDB.', youtube: 'https://www.youtube.com/results?search_query=mongodb+crud+operations', resources: [
      'https://docs.mongodb.com/manual/',
      'https://www.udemy.com/course/mongodb-for-beginners/',
      'https://www.coursera.org/learn/mongodb-database'
    ] },
    { step: 'Indexing & Aggregation', description: 'Use indexes and aggregation pipelines.', youtube: 'https://www.youtube.com/results?search_query=mongodb+indexes+aggregation', resources: [
      'https://docs.mongodb.com/manual/indexes/',
      'https://www.udemy.com/course/mongodb-indexes/',
      'https://www.coursera.org/learn/mongodb-indexes'
    ] },
    { step: 'Data Modeling', description: 'Model data for NoSQL databases.', youtube: 'https://www.youtube.com/results?search_query=nosql+data+modeling', resources: [
      'https://www.mongodb.com/docs/manual/core/data-modeling/',
      'https://www.udemy.com/course/mongodb-data-modeling/',
      'https://www.coursera.org/learn/mongodb-data-modeling'
    ] },
    { step: 'Scaling', description: 'Scale NoSQL databases horizontally.', youtube: 'https://www.youtube.com/results?search_query=nosql+scaling+horizontal', resources: [
      'https://www.mongodb.com/docs/manual/sharding/',
      'https://www.udemy.com/course/mongodb-sharding/',
      'https://www.coursera.org/learn/mongodb-sharding'
    ] }
  ],
  wordpress: [
    { step: 'WordPress Basics', description: 'Install and set up WordPress.', youtube: 'https://www.youtube.com/results?search_query=wordpress+installation+setup', resources: [
      'https://wordpress.org/support/article/how-to-install-wordpress/',
      'https://www.udemy.com/course/wordpress-for-beginners/',
      'https://www.coursera.org/learn/wordpress-fundamentals'
    ] },
    { step: 'Themes & Plugins', description: 'Customize sites with themes and plugins.', youtube: 'https://www.youtube.com/results?search_query=wordpress+themes+plugins+customization', resources: [
      'https://developer.wordpress.org/themes/',
      'https://www.udemy.com/course/wordpress-themes-plugins/',
      'https://www.coursera.org/learn/wordpress-themes-plugins'
    ] },
    { step: 'Content Management', description: 'Manage posts, pages, and media.', youtube: 'https://www.youtube.com/results?search_query=wordpress+content+management+posts+pages+media', resources: [
      'https://codex.wordpress.org/',
      'https://www.udemy.com/course/wordpress-content-management/',
      'https://www.coursera.org/learn/wordpress-content-management'
    ] },
    { step: 'Security', description: 'Secure your WordPress site.', youtube: 'https://www.youtube.com/results?search_query=wordpress+security', resources: [
      'https://codex.wordpress.org/Hardening_WordPress',
      'https://www.udemy.com/course/wordpress-security/',
      'https://www.coursera.org/learn/wordpress-security'
    ] },
    { step: 'SEO', description: 'Optimize your site for search engines.', youtube: 'https://www.youtube.com/results?search_query=wordpress+seo', resources: [
      'https://www.wpbeginner.com/beginners-guide-to-seo/',
      'https://www.udemy.com/course/wordpress-seo/',
      'https://www.coursera.org/learn/wordpress-seo'
    ] }
  ],
  'ux-ui': [
    { step: 'Design Principles', description: 'Learn about color, typography, and layout.', youtube: 'https://www.youtube.com/results?search_query=design+principles+color+typography+layout', resources: [
      'https://www.interaction-design.org/literature/article/color-theory-for-designers',
      'https://www.udemy.com/course/ux-design-for-beginners/',
      'https://www.coursera.org/learn/ux-design'
    ] },
    { step: 'Wireframing', description: 'Create wireframes and prototypes.', youtube: 'https://www.youtube.com/results?search_query=wireframing+wireframes+prototypes', resources: [
      'https://www.uxpin.com/studio/blog/wireframe-vs-prototype/',
      'https://www.udemy.com/course/wireframing-prototyping/',
      'https://www.coursera.org/learn/wireframing-prototyping'
    ] },
    { step: 'User Research', description: 'Conduct user interviews and usability testing.', youtube: 'https://www.youtube.com/results?search_query=user+research+user+interviews+usability+testing', resources: [
      'https://www.nngroup.com/articles/user-research-101-introduction/',
      'https://www.udemy.com/course/user-research-for-beginners/',
      'https://www.coursera.org/learn/user-research'
    ] },
    { step: 'UI Tools', description: 'Use Figma, Sketch, or Adobe XD.', youtube: 'https://www.youtube.com/results?search_query=ui+tools+figma+sketch+adobe+xd', resources: [
      'https://www.figma.com/',
      'https://www.sketch.com/',
      'https://www.adobe.com/products/xd.html'
    ] },
    { step: 'Accessibility', description: 'Design for accessibility and inclusivity.', youtube: 'https://www.youtube.com/results?search_query=accessibility+design+inclusivity', resources: [
      'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
      'https://www.udemy.com/course/accessibility-for-beginners/',
      'https://www.coursera.org/learn/accessibility'
    ] }
  ],
  'game-dev': [
    { step: 'Game Design Basics', description: 'Understand game mechanics and storytelling.', youtube: 'https://www.youtube.com/results?search_query=game+design+basics+mechanics+storytelling', resources: [
      'https://www.gamasutra.com/view/feature/131790/the_anatomy_of_game_design.php',
      'https://www.udemy.com/course/game-design-for-beginners/',
      'https://www.coursera.org/learn/game-design'
    ] },
    { step: 'Game Engines', description: 'Use Unity, Unreal, or Godot.', youtube: 'https://www.youtube.com/results?search_query=game+engines+unity+unreal+godot', resources: [
      'https://learn.unity.com/',
      'https://www.unrealengine.com/en-US/learn',
      'https://godotengine.org/learn'
    ] },
    { step: 'Programming', description: 'Write game logic in C#, C++, or GDScript.', youtube: 'https://www.youtube.com/results?search_query=game+programming+c#+c+++gdscript', resources: [
      'https://learn.microsoft.com/en-us/dotnet/csharp/',
      'https://www.udemy.com/course/c-sharp-for-beginners/',
      'https://www.coursera.org/learn/c-sharp'
    ] },
    { step: 'Graphics & Audio', description: 'Work with sprites, 3D models, and sound.', youtube: 'https://www.youtube.com/results?search_query=game+graphics+audio+sprites+3d+models+sound', resources: [
      'https://www.gamedev.net/tutorials/programming/',
      'https://www.udemy.com/course/game-art-for-beginners/',
      'https://www.coursera.org/learn/game-art'
    ] },
    { step: 'Publishing', description: 'Publish games to various platforms.', youtube: 'https://www.youtube.com/results?search_query=game+publishing+platforms', resources: [
      'https://www.gamasutra.com/view/feature/131790/the_anatomy_of_game_design.php',
      'https://www.udemy.com/course/game-development-for-beginners/',
      'https://www.coursera.org/learn/game-development'
    ] }
  ],
  'ar-vr': [
    { step: 'AR/VR Basics', description: 'Learn about augmented and virtual reality.', youtube: 'https://www.youtube.com/results?search_query=ar/vr+basics+augmented+virtual', resources: [
      'https://www.coursera.org/learn/augmented-reality',
      'https://www.udemy.com/course/augmented-reality-for-beginners/',
      'https://www.coursera.org/learn/augmented-reality'
    ] },
    { step: 'Development Tools', description: 'Use Unity or Unreal for AR/VR.', youtube: 'https://www.youtube.com/results?search_query=ar/vr+development+tools+unity+unreal', resources: [
      'https://learn.unity.com/',
      'https://www.unrealengine.com/en-US/learn',
      'https://godotengine.org/learn'
    ] },
    { step: '3D Modeling', description: 'Create 3D assets for AR/VR.', youtube: 'https://www.youtube.com/results?search_query=ar/vr+3d+modeling', resources: [
      'https://www.cg-wiki.com/',
      'https://www.udemy.com/course/3d-modeling-for-beginners/',
      'https://www.coursera.org/learn/3d-modeling'
    ] },
    { step: 'Interaction Design', description: 'Design intuitive AR/VR interactions.', youtube: 'https://www.youtube.com/results?search_query=ar/vr+interaction+design', resources: [
      'https://www.interaction-design.org/literature/article/augmented-reality-design-principles',
      'https://www.udemy.com/course/augmented-reality-design/',
      'https://www.coursera.org/learn/augmented-reality-design'
    ] },
    { step: 'Deployment', description: 'Deploy AR/VR apps to devices.', youtube: 'https://www.youtube.com/results?search_query=ar/vr+deployment+devices', resources: [
      'https://developer.oculus.com/documentation/unity/getting-started-unity/',
      'https://www.udemy.com/course/ar-vr-development-for-beginners/',
      'https://www.coursera.org/learn/ar-vr-development'
    ] }
  ],
  sap: [
    { step: 'SAP Basics', description: 'Understand SAP modules and architecture.', youtube: 'https://www.youtube.com/results?search_query=sap+basics+modules+architecture', resources: [
      'https://www.sap.com/products/erp/erp-core-components.html',
      'https://www.udemy.com/course/sap-erp-for-beginners/',
      'https://www.coursera.org/learn/sap-erp'
    ] },
    { step: 'ERP Concepts', description: 'Learn about ERP and business processes.', youtube: 'https://www.youtube.com/results?search_query=erp+concepts+business+processes', resources: [
      'https://www.sap.com/products/erp/erp-core-components.html',
      'https://www.udemy.com/course/sap-erp-for-beginners/',
      'https://www.coursera.org/learn/sap-erp'
    ] },
    { step: 'SAP ABAP', description: 'Write code in SAP ABAP.', youtube: 'https://www.youtube.com/results?search_query=sap+abap+programming', resources: [
      'https://www.sap.com/products/abap-platform/abap-development',
      'https://www.udemy.com/course/sap-abap-for-beginners/',
      'https://www.coursera.org/learn/sap-abap'
    ] },
    { step: 'SAP Fiori', description: 'Develop SAP Fiori apps.', youtube: 'https://www.youtube.com/results?search_query=sap+fiori+apps', resources: [
      'https://www.sap.com/products/fiori/',
      'https://www.udemy.com/course/sap-fiori-for-beginners/',
      'https://www.coursera.org/learn/sap-fiori'
    ] },
    { step: 'Integration', description: 'Integrate SAP with other systems.', youtube: 'https://www.youtube.com/results?search_query=sap+integration+other+systems', resources: [
      'https://www.sap.com/products/cloud-platform/integration',
      'https://www.udemy.com/course/sap-integration-for-beginners/',
      'https://www.coursera.org/learn/sap-integration'
    ] }
  ],
  salesforce: [
    { step: 'Salesforce Basics', description: 'Understand CRM and Salesforce ecosystem.', youtube: 'https://www.youtube.com/results?search_query=salesforce+basics+crm+ecosystem', resources: [
      'https://www.salesforce.com/us/developer/docs/',
      'https://www.udemy.com/course/salesforce-developer-for-beginners/',
      'https://www.coursera.org/learn/salesforce-developer'
    ] },
    { step: 'Data Modeling', description: 'Model data with objects and fields.', youtube: 'https://www.youtube.com/results?search_query=salesforce+data+modeling+objects+fields', resources: [
      'https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects.htm',
      'https://www.udemy.com/course/salesforce-data-modeling/',
      'https://www.coursera.org/learn/salesforce-data-modeling'
    ] },
    { step: 'Automation', description: 'Automate processes with workflows and flows.', youtube: 'https://www.youtube.com/results?search_query=salesforce+automation+workflows+flows', resources: [
      'https://developer.salesforce.com/docs/atlas.en-us.process_automation.meta/process_automation/process-automation-home.htm',
      'https://www.udemy.com/course/salesforce-automation/',
      'https://www.coursera.org/learn/salesforce-automation'
    ] },
    { step: 'Apex Programming', description: 'Write code with Apex and Lightning Components.', youtube: 'https://www.youtube.com/results?search_query=salesforce+apex+programming+lightning+components', resources: [
      'https://developer.salesforce.com/docs/atlas.en-us.apex-dev-guide.meta/apex-dev-guide/apex_intro.htm',
      'https://www.udemy.com/course/salesforce-apex-programming/',
      'https://www.coursera.org/learn/salesforce-apex'
    ] },
    { step: 'Deployment', description: 'Deploy Salesforce apps and manage releases.', youtube: 'https://www.youtube.com/results?search_query=salesforce+deployment+apps+releases', resources: [
      'https://developer.salesforce.com/docs/atlas.en-us.packaging.meta/packaging/packaging-home.htm',
      'https://www.udemy.com/course/salesforce-deployment/',
      'https://www.coursera.org/learn/salesforce-deployment'
    ] }
  ],
  matlab: [
    { step: 'MATLAB Basics', description: 'Learn MATLAB syntax, variables, and arrays.', youtube: 'https://www.youtube.com/results?search_query=matlab+programming+basics+syntax+variables+arrays', resources: [
      'https://www.mathworks.com/help/matlab/',
      'https://www.udemy.com/course/matlab-for-beginners/',
      'https://www.coursera.org/learn/matlab-programming'
    ] },
    { step: 'Data Visualization', description: 'Plot and visualize data in MATLAB.', youtube: 'https://www.youtube.com/results?search_query=matlab+data+visualization+plot+visualize', resources: [
      'https://www.mathworks.com/help/matlab/visualization.html',
      'https://www.udemy.com/course/matlab-data-visualization/',
      'https://www.coursera.org/learn/matlab-data-visualization'
    ] },
    { step: 'Scripts & Functions', description: 'Write reusable scripts and functions.', youtube: 'https://www.youtube.com/results?search_query=matlab+scripts+functions+reusable', resources: [
      'https://www.mathworks.com/help/matlab/matlab_prog.html',
      'https://www.udemy.com/course/matlab-scripts-functions/',
      'https://www.coursera.org/learn/matlab-scripts-functions'
    ] },
    { step: 'Toolboxes', description: 'Use specialized toolboxes for engineering and science.', youtube: 'https://www.youtube.com/results?search_query=matlab+toolboxes+engineering+science', resources: [
      'https://www.mathworks.com/products/toolboxes/',
      'https://www.udemy.com/course/matlab-toolboxes/',
      'https://www.coursera.org/learn/matlab-toolboxes'
    ] },
    { step: 'Simulink', description: 'Model and simulate systems with Simulink.', youtube: 'https://www.youtube.com/results?search_query=matlab+simulink+model+simulate', resources: [
      'https://www.mathworks.com/products/simulink/',
      'https://www.udemy.com/course/matlab-simulink/',
      'https://www.coursera.org/learn/matlab-simulink'
    ] }
  ],
  r: [
    { step: 'R Basics', description: 'Learn R syntax, data types, and vectors.', youtube: 'https://www.youtube.com/results?search_query=r+programming+basics+syntax+data+types+vectors', resources: [
      'https://www.r-project.org/',
      'https://www.udemy.com/course/r-programming-for-beginners/',
      'https://www.coursera.org/learn/r-programming'
    ] },
    { step: 'Data Manipulation', description: 'Use dplyr and tidyr for data wrangling.', youtube: 'https://www.youtube.com/results?search_query=r+data+manipulation+dplyr+tidyr', resources: [
      'https://dplyr.tidyverse.org/',
      'https://www.udemy.com/course/r-data-manipulation/',
      'https://www.coursera.org/learn/r-data-manipulation'
    ] },
    { step: 'Visualization', description: 'Create plots with ggplot2.', youtube: 'https://www.youtube.com/results?search_query=r+visualization+ggplot2', resources: [
      'https://ggplot2.tidyverse.org/',
      'https://www.udemy.com/course/r-data-visualization/',
      'https://www.coursera.org/learn/r-data-visualization'
    ] },
    { step: 'Statistical Analysis', description: 'Perform statistical tests and modeling.', youtube: 'https://www.youtube.com/results?search_query=r+statistical+analysis+tests+modeling', resources: [
      'https://www.coursera.org/learn/statistical-inference',
      'https://www.udemy.com/course/r-statistical-analysis/',
      'https://www.coursera.org/learn/r-statistical-analysis'
    ] },
    { step: 'Reporting', description: 'Generate reports with R Markdown.', youtube: 'https://www.youtube.com/results?search_query=r+reporting+rmarkdown', resources: [
      'https://rmarkdown.rstudio.com/',
      'https://www.udemy.com/course/r-markdown/',
      'https://www.coursera.org/learn/r-markdown'
    ] }
  ],
  perl: [
    { step: 'Perl Basics', description: 'Learn Perl syntax, variables, and control flow.', youtube: 'https://www.youtube.com/results?search_query=perl+programming+basics+syntax+variables+control+flow', resources: [
      'https://www.perl.org/learn.html',
      'https://www.udemy.com/course/perl-programming-for-beginners/',
      'https://www.coursera.org/learn/perl-programming'
    ] },
    { step: 'Regular Expressions', description: 'Master regex for text processing.', youtube: 'https://www.youtube.com/results?search_query=perl+regex+text+processing', resources: [
      'https://www.regular-expressions.info/',
      'https://www.udemy.com/course/perl-regular-expressions/',
      'https://www.coursera.org/learn/perl-regular-expressions'
    ] },
    { step: 'File I/O', description: 'Read and write files in Perl.', youtube: 'https://www.youtube.com/results?search_query=perl+file+io+read+write', resources: [
      'https://www.perl.org/olddoc/perlbook/html/perlbook.html',
      'https://www.udemy.com/course/perl-file-io/',
      'https://www.coursera.org/learn/perl-file-io'
    ] },
    { step: 'CPAN Modules', description: 'Use modules from CPAN.', youtube: 'https://www.youtube.com/results?search_query=perl+cpan+modules', resources: [
      'https://www.cpan.org/',
      'https://www.udemy.com/course/perl-cpan-modules/',
      'https://www.coursera.org/learn/perl-cpan-modules'
    ] },
    { step: 'Scripting', description: 'Automate tasks with Perl scripts.', youtube: 'https://www.youtube.com/results?search_query=perl+scripting+automate', resources: [
      'https://www.perl.org/olddoc/perlbook/html/perlbook.html',
      'https://www.udemy.com/course/perl-scripting/',
      'https://www.coursera.org/learn/perl-scripting'
    ] }
  ],
  shell: [
    { step: 'Shell Basics', description: 'Learn bash/zsh syntax and commands.', youtube: 'https://www.youtube.com/results?search_query=bash+zsh+syntax+commands', resources: [
      'https://www.gnu.org/software/bash/',
      'https://www.udemy.com/course/bash-scripting/',
      'https://www.coursera.org/learn/bash-scripting'
    ] },
    { step: 'Scripting', description: 'Write shell scripts to automate tasks.', youtube: 'https://www.youtube.com/results?search_query=shell+scripting+automate', resources: [
      'https://www.gnu.org/software/bash/manual/',
      'https://www.udemy.com/course/shell-scripting/',
      'https://www.coursera.org/learn/shell-scripting'
    ] },
    { step: 'Process Management', description: 'Manage processes and jobs.', youtube: 'https://www.youtube.com/results?search_query=shell+process+management+processes+jobs', resources: [
      'https://www.gnu.org/software/bash/manual/bash.html#Jobs',
      'https://www.udemy.com/course/linux-process-management/',
      'https://www.coursera.org/learn/linux-process-management'
    ] },
    { step: 'Text Processing', description: 'Use grep, awk, sed for text manipulation.', youtube: 'https://www.youtube.com/results?search_query=shell+text+processing+grep+awk+sed', resources: [
      'https://www.gnu.org/software/grep/',
      'https://www.gnu.org/software/gawk/',
      'https://www.gnu.org/software/sed/'
    ] },
    { step: 'System Administration', description: 'Automate sysadmin tasks.', youtube: 'https://www.youtube.com/results?search_query=shell+sysadmin+tasks', resources: [
      'https://www.coursera.org/learn/linux-system-administration',
      'https://www.udemy.com/course/linux-system-administration/',
      'https://www.coursera.org/learn/linux-system-administration'
    ] }
  ],
  powershell: [
    { step: 'PowerShell Basics', description: 'Learn cmdlets, variables, and pipelines.', youtube: 'https://www.youtube.com/results?search_query=powershell+basics+cmdlets+variables+pipelines', resources: [
      'https://docs.microsoft.com/en-us/powershell/',
      'https://www.udemy.com/course/powershell-for-beginners/',
      'https://www.coursera.org/learn/powershell-for-beginners'
    ] },
    { step: 'Scripting', description: 'Write PowerShell scripts for automation.', youtube: 'https://www.youtube.com/results?search_query=powershell+scripting+automation', resources: [
      'https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-script-block',
      'https://www.udemy.com/course/powershell-scripting/',
      'https://www.coursera.org/learn/powershell-scripting'
    ] },
    { step: 'Modules', description: 'Use and create PowerShell modules.', youtube: 'https://www.youtube.com/results?search_query=powershell+modules', resources: [
      'https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-module',
      'https://www.udemy.com/course/powershell-modules/',
      'https://www.coursera.org/learn/powershell-modules'
    ] },
    { step: 'Remoting', description: 'Manage remote systems with PowerShell.', youtube: 'https://www.youtube.com/results?search_query=powershell+remoting+remote+systems', resources: [
      'https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-remote',
      'https://www.udemy.com/course/powershell-remoting/',
      'https://www.coursera.org/learn/powershell-remoting'
    ] },
    { step: 'Administration', description: 'Automate Windows administration.', youtube: 'https://www.youtube.com/results?search_query=powershell+administration+automation', resources: [
      'https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-script-block',
      'https://www.udemy.com/course/powershell-scripting/',
      'https://www.coursera.org/learn/powershell-scripting'
    ] }
  ],
  assembly: [
    { step: 'Assembly Basics', description: 'Learn assembly syntax and instructions.', youtube: 'https://www.youtube.com/results?search_query=assembly+programming+basics+syntax+instructions', resources: [
      'https://www.nasm.us/',
      'https://www.udemy.com/course/assembly-language-for-beginners/',
      'https://www.coursera.org/learn/assembly-language'
    ] },
    { step: 'Registers & Memory', description: 'Understand CPU registers and memory addressing.', youtube: 'https://www.youtube.com/results?search_query=assembly+registers+memory+addressing', resources: [
      'https://www.nasm.us/',
      'https://www.udemy.com/course/assembly-language-for-beginners/',
      'https://www.coursera.org/learn/assembly-language'
    ] },
    { step: 'Procedures', description: 'Write and call assembly procedures.', youtube: 'https://www.youtube.com/results?search_query=assembly+procedures+write+call', resources: [
      'https://www.nasm.us/',
      'https://www.udemy.com/course/assembly-language-for-beginners/',
      'https://www.coursera.org/learn/assembly-language'
    ] },
    { step: 'Debugging', description: 'Debug assembly code with tools.', youtube: 'https://www.youtube.com/results?search_query=assembly+debugging+tools', resources: [
      'https://www.nasm.us/',
      'https://www.udemy.com/course/assembly-language-for-beginners/',
      'https://www.coursera.org/learn/assembly-language'
    ] },
    { step: 'Optimization', description: 'Optimize code for performance.', youtube: 'https://www.youtube.com/results?search_query=assembly+optimization+performance', resources: [
      'https://www.nasm.us/',
      'https://www.udemy.com/course/assembly-language-for-beginners/',
      'https://www.coursera.org/learn/assembly-language'
    ] }
  ],
  embedded: [
    { step: 'Microcontroller Basics', description: 'Learn about microcontrollers and their architecture.', youtube: 'https://www.youtube.com/results?search_query=microcontroller+basics+architecture', resources: [
      'https://www.microchip.com/mplab/avr/',
      'https://www.udemy.com/course/microcontroller-basics/',
      'https://www.coursera.org/learn/microcontroller-basics'
    ] },
    { step: 'C for Embedded', description: 'Write embedded code in C.', youtube: 'https://www.youtube.com/results?search_query=c+embedded+programming', resources: [
      'https://www.learn-c.com/',
      'https://www.udemy.com/course/c-programming-for-beginners/',
      'https://www.coursera.org/learn/c-programming'
    ] },
    { step: 'Peripherals', description: 'Interface with sensors and actuators.', youtube: 'https://www.youtube.com/results?search_query=embedded+peripherals+sensors+actuators', resources: [
      'https://www.microchip.com/mplab/avr/docs/20001975/',
      'https://www.udemy.com/course/embedded-systems-peripherals/',
      'https://www.coursera.org/learn/embedded-systems-peripherals'
    ] },
    { step: 'RTOS', description: 'Use real-time operating systems.', youtube: 'https://www.youtube.com/results?search_query=real-time+operating+systems+rtos', resources: [
      'https://www.freertos.org/',
      'https://www.udemy.com/course/real-time-operating-systems/',
      'https://www.coursera.org/learn/real-time-operating-systems'
    ] },
    { step: 'Debugging', description: 'Debug embedded systems.', youtube: 'https://www.youtube.com/results?search_query=embedded+debugging', resources: [
      'https://www.microchip.com/mplab/avr/docs/20001975/',
      'https://www.udemy.com/course/embedded-systems-debugging/',
      'https://www.coursera.org/learn/embedded-systems-debugging'
    ] }
  ],
  electronics: [
    { step: 'Circuit Theory', description: 'Understand voltage, current, and resistance.', youtube: 'https://www.youtube.com/results?search_query=circuit+theory+voltage+current+resistance', resources: [
      'https://www.allaboutcircuits.com/',
      'https://www.udemy.com/course/circuit-theory-for-beginners/',
      'https://www.coursera.org/learn/circuit-theory'
    ] },
    { step: 'Components', description: 'Learn about resistors, capacitors, and transistors.', youtube: 'https://www.youtube.com/results?search_query=electronic+components+resistors+capacitors+transistors', resources: [
      'https://www.allaboutcircuits.com/',
      'https://www.udemy.com/course/electronic-components-for-beginners/',
      'https://www.coursera.org/learn/electronic-components'
    ] },
    { step: 'PCB Design', description: 'Design printed circuit boards.', youtube: 'https://www.youtube.com/results?search_query=pcb+design+printed+circuit+boards', resources: [
      'https://www.allaboutcircuits.com/',
      'https://www.udemy.com/course/pcb-design-for-beginners/',
      'https://www.coursera.org/learn/pcb-design'
    ] },
    { step: 'Microcontrollers', description: 'Use microcontrollers in projects.', youtube: 'https://www.youtube.com/results?search_query=microcontrollers+projects', resources: [
      'https://www.microchip.com/mplab/avr/',
      'https://www.udemy.com/course/microcontroller-basics/',
      'https://www.coursera.org/learn/microcontroller-basics'
    ] },
    { step: 'Testing', description: 'Test and troubleshoot circuits.', youtube: 'https://www.youtube.com/results?search_query=electronics+testing+troubleshooting', resources: [
      'https://www.allaboutcircuits.com/',
      'https://www.udemy.com/course/electronics-testing-troubleshooting/',
      'https://www.coursera.org/learn/electronics-testing'
    ] }
  ],
  networking: [
    { step: 'Networking Basics', description: 'Learn about OSI model and TCP/IP.', youtube: 'https://www.youtube.com/results?search_query=networking+osi+model+tcp/ip', resources: [
      'https://www.coursera.org/learn/networking-fundamentals',
      'https://www.udemy.com/course/networking-for-beginners/',
      'https://www.coursera.org/learn/networking'
    ] },
    { step: 'Routing & Switching', description: 'Understand routers, switches, and VLANs.', youtube: 'https://www.youtube.com/results?search_query=networking+routers+switches+vlans', resources: [
      'https://www.coursera.org/learn/networking-fundamentals',
      'https://www.udemy.com/course/networking-for-beginners/',
      'https://www.coursera.org/learn/networking'
    ] },
    { step: 'Protocols', description: 'Study HTTP, DNS, DHCP, and more.', youtube: 'https://www.youtube.com/results?search_query=networking+protocols+http+dns+dhcp', resources: [
      'https://www.coursera.org/learn/networking-fundamentals',
      'https://www.udemy.com/course/networking-for-beginners/',
      'https://www.coursera.org/learn/networking'
    ] },
    { step: 'Security', description: 'Implement network security best practices.', youtube: 'https://www.youtube.com/results?search_query=networking+security+best+practices', resources: [
      'https://www.coursera.org/learn/network-security',
      'https://www.udemy.com/course/network-security-fundamentals/',
      'https://www.coursera.org/learn/network-security'
    ] },
    { step: 'Troubleshooting', description: 'Diagnose and fix network issues.', youtube: 'https://www.youtube.com/results?search_query=networking+troubleshooting', resources: [
      'https://www.coursera.org/learn/networking-troubleshooting',
      'https://www.udemy.com/course/networking-troubleshooting/',
      'https://www.coursera.org/learn/networking-troubleshooting'
    ] }
  ],
  'big-data': [
    { step: 'Big Data Concepts', description: 'Understand volume, velocity, and variety.', youtube: 'https://www.youtube.com/results?search_query=big+data+concepts+volume+velocity+variety', resources: [
      'https://www.coursera.org/learn/big-data-concepts',
      'https://www.udemy.com/course/big-data-for-beginners/',
      'https://www.coursera.org/learn/big-data-concepts'
    ] },
    { step: 'Hadoop Ecosystem', description: 'Learn about HDFS, MapReduce, and YARN.', youtube: 'https://www.youtube.com/results?search_query=hadoop+ecosystem+hdfs+mapreduce+yarn', resources: [
      'https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html',
      'https://hadoop.apache.org/docs/r1.2.1/mapred_tutorial.html',
      'https://hadoop.apache.org/docs/r1.2.1/yarn_architecture.html'
    ] },
    { step: 'Spark', description: 'Process data with Apache Spark.', youtube: 'https://www.youtube.com/results?search_query=apache+spark+process+data', resources: [
      'https://spark.apache.org/docs/latest/index.html',
      'https://www.udemy.com/course/apache-spark-for-beginners/',
      'https://www.coursera.org/learn/apache-spark'
    ] },
    { step: 'Data Warehousing', description: 'Use Hive, Pig, or similar tools.', youtube: 'https://www.youtube.com/results?search_query=hive+pig+data+warehousing', resources: [
      'https://hive.apache.org/docs/r1.2.1/index.html',
      'https://pig.apache.org/docs/r0.17.0/index.html',
      'https://www.udemy.com/course/hive-pig-for-beginners/'
    ] },
    { step: 'Visualization', description: 'Visualize big data insights.', youtube: 'https://www.youtube.com/results?search_query=big+data+visualization+insights', resources: [
      'https://www.coursera.org/learn/big-data-visualization',
      'https://www.udemy.com/course/big-data-visualization-for-beginners/',
      'https://www.coursera.org/learn/big-data-visualization'
    ] }
  ],
  hadoop: [
    { step: 'Hadoop Basics', description: 'Install and configure Hadoop.', youtube: 'https://www.youtube.com/results?search_query=hadoop+installation+configuration', resources: [
      'https://hadoop.apache.org/docs/r1.2.1/hadoop-project-dist/hadoop-core/ClusterSetup.html',
      'https://www.udemy.com/course/hadoop-for-beginners/',
      'https://www.coursera.org/learn/hadoop-fundamentals'
    ] },
    { step: 'HDFS', description: 'Store and manage data in HDFS.', youtube: 'https://www.youtube.com/results?search_query=hadoop+hdfs+store+manage+data', resources: [
      'https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html',
      'https://www.udemy.com/course/hadoop-hdfs/',
      'https://www.coursera.org/learn/hadoop-hdfs'
    ] },
    { step: 'MapReduce', description: 'Write MapReduce jobs.', youtube: 'https://www.youtube.com/results?search_query=hadoop+mapreduce+write+jobs', resources: [
      'https://hadoop.apache.org/docs/r1.2.1/mapred_tutorial.html',
      'https://www.udemy.com/course/hadoop-mapreduce/',
      'https://www.coursera.org/learn/hadoop-mapreduce'
    ] },
    { step: 'Hive & Pig', description: 'Query data with Hive and Pig.', youtube: 'https://www.youtube.com/results?search_query=hive+pig+query+data', resources: [
      'https://hive.apache.org/docs/r1.2.1/index.html',
      'https://pig.apache.org/docs/r0.17.0/index.html',
      'https://www.udemy.com/course/hive-pig-for-beginners/'
    ] },
    { step: 'Cluster Management', description: 'Manage Hadoop clusters.', youtube: 'https://www.youtube.com/results?search_query=hadoop+cluster+management', resources: [
      'https://hadoop.apache.org/docs/r1.2.1/ClusterSetup.html',
      'https://www.udemy.com/course/hadoop-cluster-management/',
      'https://www.coursera.org/learn/hadoop-cluster-management'
    ] }
  ],
  spark: [
    { step: 'Spark Basics', description: 'Install and configure Apache Spark.', youtube: 'https://www.youtube.com/results?search_query=apache+spark+installation+configuration', resources: [
      'https://spark.apache.org/docs/latest/index.html',
      'https://www.udemy.com/course/apache-spark-for-beginners/',
      'https://www.coursera.org/learn/apache-spark'
    ] },
    { step: 'RDDs & DataFrames', description: 'Work with RDDs and DataFrames.', youtube: 'https://www.youtube.com/results?search_query=spark+rdds+dataframes', resources: [
      'https://spark.apache.org/docs/latest/rdd-programming-guide.html',
      'https://spark.apache.org/docs/latest/sql-programming-guide.html',
      'https://www.udemy.com/course/apache-spark-rdd-dataframes/'
    ] },
    { step: 'Spark SQL', description: 'Query data with Spark SQL.', youtube: 'https://www.youtube.com/results?search_query=spark+sql+query+data', resources: [
      'https://spark.apache.org/docs/latest/sql-programming-guide.html',
      'https://www.udemy.com/course/apache-spark-sql/',
      'https://www.coursera.org/learn/apache-spark-sql'
    ] },
    { step: 'MLlib', description: 'Use Spark MLlib for machine learning.', youtube: 'https://www.youtube.com/results?search_query=spark+mllib+machine+learning', resources: [
      'https://spark.apache.org/docs/latest/mllib-guide.html',
      'https://www.udemy.com/course/apache-spark-machine-learning/',
      'https://www.coursera.org/learn/apache-spark-machine-learning'
    ] },
    { step: 'Streaming', description: 'Process real-time data with Spark Streaming.', youtube: 'https://www.youtube.com/results?search_query=spark+streaming+real-time+data', resources: [
      'https://spark.apache.org/docs/latest/streaming-programming-guide.html',
      'https://www.udemy.com/course/apache-spark-streaming/',
      'https://www.coursera.org/learn/apache-spark-streaming'
    ] }
  ],
  tableau: [
    { step: 'Tableau Basics', description: 'Install and set up Tableau.', youtube: 'https://www.youtube.com/results?search_query=tableau+installation+setup', resources: [
      'https://www.tableau.com/learn/training/tableau-basics',
      'https://www.udemy.com/course/tableau-for-beginners/',
      'https://www.coursera.org/learn/tableau-basics'
    ] },
    { step: 'Data Connections', description: 'Connect Tableau to various data sources.', youtube: 'https://www.youtube.com/results?search_query=tableau+data+connections', resources: [
      'https://www.tableau.com/learn/data-sources',
      'https://www.udemy.com/course/tableau-data-connections/',
      'https://www.coursera.org/learn/tableau-data-connections'
    ] },
    { step: 'Visualizations', description: 'Create charts and dashboards.', youtube: 'https://www.youtube.com/results?search_query=tableau+visualizations+charts+dashboards', resources: [
      'https://www.tableau.com/learn/data-visualization',
      'https://www.udemy.com/course/tableau-data-visualization/',
      'https://www.coursera.org/learn/tableau-data-visualization'
    ] },
    { step: 'Calculated Fields', description: 'Use calculated fields for analysis.', youtube: 'https://www.youtube.com/results?search_query=tableau+calculated+fields+analysis', resources: [
      'https://www.tableau.com/learn/data-analysis',
      'https://www.udemy.com/course/tableau-calculated-fields/',
      'https://www.coursera.org/learn/tableau-calculated-fields'
    ] },
    { step: 'Sharing', description: 'Share dashboards and reports.', youtube: 'https://www.youtube.com/results?search_query=tableau+sharing+dashboards+reports', resources: [
      'https://www.tableau.com/learn/data-visualization',
      'https://www.udemy.com/course/tableau-data-visualization/',
      'https://www.coursera.org/learn/tableau-data-visualization'
    ] }
  ],
  powerbi: [
    { step: 'Power BI Basics', description: 'Install and set up Power BI.', youtube: 'https://www.youtube.com/results?search_query=powerbi+installation+setup', resources: [
      'https://docs.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview',
      'https://www.udemy.com/course/power-bi-for-beginners/',
      'https://www.coursera.org/learn/power-bi-fundamentals'
    ] },
    { step: 'Data Import', description: 'Import data from various sources.', youtube: 'https://www.youtube.com/results?search_query=powerbi+data+import', resources: [
      'https://docs.microsoft.com/en-us/power-bi/connect-data/service-get-data',
      'https://www.udemy.com/course/power-bi-data-import/',
      'https://www.coursera.org/learn/power-bi-data-import'
    ] },
    { step: 'Data Modeling', description: 'Model data with relationships and DAX.', youtube: 'https://www.youtube.com/results?search_query=powerbi+data+modeling+relationships+dax', resources: [
      'https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-create-relationship-between-objects',
      'https://www.udemy.com/course/power-bi-data-modeling/',
      'https://www.coursera.org/learn/power-bi-data-modeling'
    ] },
    { step: 'Visualizations', description: 'Create interactive reports.', youtube: 'https://www.youtube.com/results?search_query=powerbi+visualizations+interactive+reports', resources: [
      'https://docs.microsoft.com/en-us/power-bi/create-reports/power-bi-report-view',
      'https://www.udemy.com/course/power-bi-data-visualization/',
      'https://www.coursera.org/learn/power-bi-data-visualization'
    ] },
    { step: 'Publishing', description: 'Publish and share Power BI reports.', youtube: 'https://www.youtube.com/results?search_query=powerbi+publishing+reports', resources: [
      'https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web',
      'https://www.udemy.com/course/power-bi-publishing/',
      'https://www.coursera.org/learn/power-bi-publishing'
    ] }
  ],
  excel: [
    { step: 'Excel Basics', description: 'Learn about cells, formulas, and functions.', youtube: 'https://www.youtube.com/results?search_query=excel+basics+cells+formulas+functions', resources: [
      'https://www.excel-easy.com/',
      'https://www.udemy.com/course/excel-for-beginners/',
      'https://www.coursera.org/learn/excel-fundamentals'
    ] },
    { step: 'Data Analysis', description: 'Use pivot tables and charts.', youtube: 'https://www.youtube.com/results?search_query=excel+data+analysis+pivot+tables+charts', resources: [
      'https://www.excel-easy.com/',
      'https://www.udemy.com/course/excel-data-analysis/',
      'https://www.coursera.org/learn/excel-data-analysis'
    ] },
    { step: 'Automation', description: 'Automate tasks with macros and VBA.', youtube: 'https://www.youtube.com/results?search_query=excel+automation+macros+vba', resources: [
      'https://www.excel-easy.com/',
      'https://www.udemy.com/course/excel-vba-for-beginners/',
      'https://www.coursera.org/learn/excel-vba'
    ] },
    { step: 'Data Cleaning', description: 'Clean and preprocess data in Excel.', youtube: 'https://www.youtube.com/results?search_query=excel+data+cleaning+preprocessing', resources: [
      'https://www.excel-easy.com/',
      'https://www.udemy.com/course/excel-data-cleaning/',
      'https://www.coursera.org/learn/excel-data-cleaning'
    ] },
    { step: 'Reporting', description: 'Create professional reports.', youtube: 'https://www.youtube.com/results?search_query=excel+reporting+professional', resources: [
      'https://www.excel-easy.com/',
      'https://www.udemy.com/course/excel-for-beginners/',
      'https://www.coursera.org/learn/excel-fundamentals'
    ] }
  ],
  statistics: [
    { step: 'Descriptive Stats', description: 'Learn about mean, median, mode, and standard deviation.', youtube: 'https://www.youtube.com/results?search_query=statistics+descriptive+stats+mean+median+mode+standard+deviation', resources: [
      'https://www.coursera.org/learn/statistical-inference',
      'https://www.udemy.com/course/statistics-for-data-science/',
      'https://www.coursera.org/learn/statistical-inference'
    ] },
    { step: 'Probability', description: 'Understand probability theory.', youtube: 'https://www.youtube.com/results?search_query=probability+theory', resources: [
      'https://www.coursera.org/learn/probability-theory',
      'https://www.udemy.com/course/probability-for-data-science/',
      'https://www.coursera.org/learn/probability-theory'
    ] },
    { step: 'Inferential Stats', description: 'Perform hypothesis testing and confidence intervals.', youtube: 'https://www.youtube.com/results?search_query=statistics+inferential+hypothesis+testing+confidence+intervals', resources: [
      'https://www.coursera.org/learn/statistical-inference',
      'https://www.udemy.com/course/statistics-for-data-science/',
      'https://www.coursera.org/learn/statistical-inference'
    ] },
    { step: 'Regression', description: 'Learn about linear and logistic regression.', youtube: 'https://www.youtube.com/results?search_query=statistics+regression+linear+logistic', resources: [
      'https://www.coursera.org/learn/linear-regression',
      'https://www.udemy.com/course/logistic-regression-for-beginners/',
      'https://www.coursera.org/learn/logistic-regression'
    ] },
    { step: 'Statistical Software', description: 'Use R, SPSS, or SAS for analysis.', youtube: 'https://www.youtube.com/results?search_query=statistical+software+r+spss+sas', resources: [
      'https://www.r-project.org/',
      'https://www.udemy.com/course/r-programming-for-beginners/',
      'https://www.coursera.org/learn/r-programming'
    ] }
  ],
  math: [
    { step: 'Algebra', description: 'Master algebraic expressions and equations.', youtube: 'https://www.youtube.com/results?search_query=algebra+algebraic+expressions+equations', resources: [
      'https://www.khanacademy.org/math/algebra',
      'https://www.udemy.com/course/algebra-for-beginners/',
      'https://www.coursera.org/learn/algebra'
    ] },
    { step: 'Calculus', description: 'Learn differentiation and integration.', youtube: 'https://www.youtube.com/results?search_query=calculus+differentiation+integration', resources: [
      'https://www.khanacademy.org/math/calculus-1',
      'https://www.udemy.com/course/calculus-1/',
      'https://www.coursera.org/learn/calculus-1'
    ] },
    { step: 'Linear Algebra', description: 'Study vectors, matrices, and systems of equations.', youtube: 'https://www.youtube.com/results?search_query=linear+algebra+vectors+matrices+systems', resources: [
      'https://www.khanacademy.org/math/linear-algebra',
      'https://www.udemy.com/course/linear-algebra-for-beginners/',
      'https://www.coursera.org/learn/linear-algebra'
    ] },
    { step: 'Discrete Math', description: 'Understand logic, sets, and combinatorics.', youtube: 'https://www.youtube.com/results?search_query=discrete+math+logic+sets+combinatorics', resources: [
      'https://www.khanacademy.org/math/discrete-mathematics',
      'https://www.udemy.com/course/discrete-mathematics-for-beginners/',
      'https://www.coursera.org/learn/discrete-mathematics'
    ] },
    { step: 'Applied Math', description: 'Apply math in engineering and science.', youtube: 'https://www.youtube.com/results?search_query=applied+math+engineering+science', resources: [
      'https://www.coursera.org/learn/mathematics-for-computer-science',
      'https://www.udemy.com/course/applied-mathematics-for-beginners/',
      'https://www.coursera.org/learn/applied-mathematics'
    ] }
  ],
  robotics: [
    { step: 'Robotics Basics', description: 'Understand kinematics and dynamics.', youtube: 'https://www.youtube.com/results?search_query=robotics+basics+kinematics+dynamics', resources: [
      'https://www.coursera.org/learn/robotics-fundamentals',
      'https://www.udemy.com/course/robotics-for-beginners/',
      'https://www.coursera.org/learn/robotics-fundamentals'
    ] },
    { step: 'Sensors & Actuators', description: 'Work with sensors and actuators.', youtube: 'https://www.youtube.com/results?search_query=robotics+sensors+actuators', resources: [
      'https://www.coursera.org/learn/robotics-sensors-actuators',
      'https://www.udemy.com/course/robotics-sensors-actuators/',
      'https://www.coursera.org/learn/robotics-sensors-actuators'
    ] },
    { step: 'Control Systems', description: 'Implement PID and other controllers.', youtube: 'https://www.youtube.com/results?search_query=robotics+control+systems+pid', resources: [
      'https://www.coursera.org/learn/robotics-control-systems',
      'https://www.udemy.com/course/robotics-control-systems/',
      'https://www.coursera.org/learn/robotics-control-systems'
    ] },
    { step: 'Programming', description: 'Program robots with ROS or Arduino.', youtube: 'https://www.youtube.com/results?search_query=robotics+programming+ros+arduino', resources: [
      'https://www.coursera.org/learn/robotics-programming',
      'https://www.udemy.com/course/robotics-programming-for-beginners/',
      'https://www.coursera.org/learn/robotics-programming'
    ] },
    { step: 'Projects', description: 'Build and test robotic systems.', youtube: 'https://www.youtube.com/results?search_query=robotics+projects+build+test', resources: [
      'https://www.coursera.org/learn/robotics-projects',
      'https://www.udemy.com/course/robotics-projects/',
      'https://www.coursera.org/learn/robotics-projects'
    ] }
  ],
  automation: [
    { step: 'Automation Basics', description: 'Learn about automation concepts and tools.', youtube: 'https://www.youtube.com/results?search_query=automation+basics+concepts+tools', resources: [
      'https://www.coursera.org/learn/automation-fundamentals',
      'https://www.udemy.com/course/automation-for-beginners/',
      'https://www.coursera.org/learn/automation-fundamentals'
    ] },
    { step: 'Scripting', description: 'Automate tasks with scripts.', youtube: 'https://www.youtube.com/results?search_query=automation+scripting+automate', resources: [
      'https://www.coursera.org/learn/automation-fundamentals',
      'https://www.udemy.com/course/automation-for-beginners/',
      'https://www.coursera.org/learn/automation-fundamentals'
    ] },
    { step: 'RPA', description: 'Use Robotic Process Automation tools.', youtube: 'https://www.youtube.com/results?search_query=rpa+robotic+process+automation', resources: [
      'https://www.coursera.org/learn/robotic-process-automation',
      'https://www.udemy.com/course/rpa-for-beginners/',
      'https://www.coursera.org/learn/robotic-process-automation'
    ] },
    { step: 'CI/CD', description: 'Automate software delivery pipelines.', youtube: 'https://www.youtube.com/results?search_query=ci/cd+automation+pipelines', resources: [
      'https://www.coursera.org/learn/devops-fundamentals',
      'https://www.udemy.com/course/devops-for-beginners/',
      'https://www.coursera.org/learn/devops-fundamentals'
    ] },
    { step: 'Monitoring', description: 'Monitor and maintain automated systems.', youtube: 'https://www.youtube.com/results?search_query=automation+monitoring+maintain', resources: [
      'https://www.coursera.org/learn/devops-fundamentals',
      'https://www.udemy.com/course/devops-for-beginners/',
      'https://www.coursera.org/learn/devops-fundamentals'
    ] }
  ],
  ecommerce: [
    { step: 'Ecommerce Basics', description: 'Understand online business models.', youtube: 'https://www.youtube.com/results?search_query=ecommerce+basics+online+business+models', resources: [
      'https://www.coursera.org/learn/e-commerce-fundamentals',
      'https://www.udemy.com/course/e-commerce-for-beginners/',
      'https://www.coursera.org/learn/e-commerce-fundamentals'
    ] },
    { step: 'Platforms', description: 'Use Shopify, WooCommerce, or Magento.', youtube: 'https://www.youtube.com/results?search_query=ecommerce+platforms+shopify+woocommerce+magento', resources: [
      'https://www.shopify.com/',
      'https://www.woocommerce.com/',
      'https://www.magento.com/'
    ] },
    { step: 'Payment Gateways', description: 'Integrate payment solutions.', youtube: 'https://www.youtube.com/results?search_query=ecommerce+payment+gateways+solutions', resources: [
      'https://www.coursera.org/learn/e-commerce-payment-gateways',
      'https://www.udemy.com/course/e-commerce-payment-gateways/',
      'https://www.coursera.org/learn/e-commerce-payment-gateways'
    ] },
    { step: 'Marketing', description: 'Promote products with digital marketing.', youtube: 'https://www.youtube.com/results?search_query=ecommerce+marketing+digital', resources: [
      'https://www.coursera.org/learn/digital-marketing-fundamentals',
      'https://www.udemy.com/course/digital-marketing-for-beginners/',
      'https://www.coursera.org/learn/digital-marketing-fundamentals'
    ] },
    { step: 'Analytics', description: 'Track sales and user behavior.', youtube: 'https://www.youtube.com/results?search_query=ecommerce+analytics+sales+user+behavior', resources: [
      'https://www.coursera.org/learn/e-commerce-analytics',
      'https://www.udemy.com/course/e-commerce-analytics-for-beginners/',
      'https://www.coursera.org/learn/e-commerce-analytics'
    ] }
  ],
  seo: [
    { step: 'SEO Basics', description: 'Learn about search engine optimization.', youtube: 'https://www.youtube.com/results?search_query=seo+basics+search+engine+optimization', resources: [
      'https://www.coursera.org/learn/search-engine-optimization',
      'https://www.udemy.com/course/seo-for-beginners/',
      'https://www.coursera.org/learn/seo-fundamentals'
    ] },
    { step: 'On-Page SEO', description: 'Optimize content and meta tags.', youtube: 'https://www.youtube.com/results?search_query=seo+on-page+content+meta+tags', resources: [
      'https://www.coursera.org/learn/seo-fundamentals',
      'https://www.udemy.com/course/seo-for-beginners/',
      'https://www.coursera.org/learn/seo-fundamentals'
    ] },
    { step: 'Off-Page SEO', description: 'Build backlinks and authority.', youtube: 'https://www.youtube.com/results?search_query=seo+off-page+backlinks+authority', resources: [
      'https://www.coursera.org/learn/backlink-building',
      'https://www.udemy.com/course/seo-backlinks/',
      'https://www.coursera.org/learn/seo-backlinks'
    ] },
    { step: 'Technical SEO', description: 'Improve site speed and mobile-friendliness.', youtube: 'https://www.youtube.com/results?search_query=seo+technical+site+speed+mobile-friendliness', resources: [
      'https://www.coursera.org/learn/seo-technical',
      'https://www.udemy.com/course/seo-technical-for-beginners/',
      'https://www.coursera.org/learn/seo-technical'
    ] },
    { step: 'Analytics', description: 'Monitor SEO performance.', youtube: 'https://www.youtube.com/results?search_query=seo+analytics+performance', resources: [
      'https://www.coursera.org/learn/seo-analytics',
      'https://www.udemy.com/course/seo-analytics-for-beginners/',
      'https://www.coursera.org/learn/seo-analytics'
    ] }
  ],
  'digital-marketing': [
    { step: 'Digital Marketing Basics', description: 'Understand digital marketing channels.', youtube: 'https://www.youtube.com/results?search_query=digital+marketing+basics+channels', resources: [
      'https://www.coursera.org/learn/digital-marketing-fundamentals',
      'https://www.udemy.com/course/digital-marketing-for-beginners/',
      'https://www.coursera.org/learn/digital-marketing-fundamentals'
    ] },
    { step: 'Content Marketing', description: 'Create and distribute valuable content.', youtube: 'https://www.youtube.com/results?search_query=digital+marketing+content+marketing+valuable+content', resources: [
      'https://www.coursera.org/learn/content-marketing',
      'https://www.udemy.com/course/content-marketing-for-beginners/',
      'https://www.coursera.org/learn/content-marketing'
    ] },
    { step: 'Social Media', description: 'Leverage social media platforms.', youtube: 'https://www.youtube.com/results?search_query=digital+marketing+social+media+platforms', resources: [
      'https://www.coursera.org/learn/social-media-marketing',
      'https://www.udemy.com/course/social-media-marketing-for-beginners/',
      'https://www.coursera.org/learn/social-media-marketing'
    ] },
    { step: 'Email Marketing', description: 'Build and manage email campaigns.', youtube: 'https://www.youtube.com/results?search_query=digital+marketing+email+marketing+campaigns', resources: [
      'https://www.coursera.org/learn/email-marketing',
      'https://www.udemy.com/course/email-marketing-for-beginners/',
      'https://www.coursera.org/learn/email-marketing'
    ] },
    { step: 'Analytics', description: 'Measure and optimize marketing efforts.', youtube: 'https://www.youtube.com/results?search_query=digital+marketing+analytics+optimize', resources: [
      'https://www.coursera.org/learn/digital-marketing-analytics',
      'https://www.udemy.com/course/digital-marketing-analytics-for-beginners/',
      'https://www.coursera.org/learn/digital-marketing-analytics'
    ] }
  ],
  'content-writing': [
    { step: 'Writing Basics', description: 'Master grammar, style, and tone.', youtube: 'https://www.youtube.com/results?search_query=content+writing+basics+grammar+style+tone', resources: [
      'https://www.coursera.org/learn/writing-for-business',
      'https://www.udemy.com/course/content-writing-for-beginners/',
      'https://www.coursera.org/learn/content-writing'
    ] },
    { step: 'SEO Writing', description: 'Write content optimized for search engines.', youtube: 'https://www.youtube.com/results?search_query=content+writing+seo+optimized', resources: [
      'https://www.coursera.org/learn/seo-writing',
      'https://www.udemy.com/course/seo-writing-for-beginners/',
      'https://www.coursera.org/learn/seo-writing'
    ] },
    { step: 'Editing', description: 'Edit and proofread your work.', youtube: 'https://www.youtube.com/results?search_query=content+writing+editing+proofreading', resources: [
      'https://www.coursera.org/learn/editing-for-business',
      'https://www.udemy.com/course/content-editing-for-beginners/',
      'https://www.coursera.org/learn/content-editing'
    ] },
    { step: 'Content Strategy', description: 'Plan and organize content.', youtube: 'https://www.youtube.com/results?search_query=content+writing+strategy+plan+organize', resources: [
      'https://www.coursera.org/learn/content-strategy',
      'https://www.udemy.com/course/content-strategy-for-beginners/',
      'https://www.coursera.org/learn/content-strategy'
    ] },
    { step: 'Publishing', description: 'Publish and promote your content.', youtube: 'https://www.youtube.com/results?search_query=content+writing+publishing+promote', resources: [
      'https://www.coursera.org/learn/content-marketing',
      'https://www.udemy.com/course/content-marketing-for-beginners/',
      'https://www.coursera.org/learn/content-marketing'
    ] }
  ],
  'video-editing': [
    { step: 'Video Editing Basics', description: 'Learn about timelines and editing tools.', youtube: 'https://www.youtube.com/results?search_query=video+editing+basics+timelines+tools', resources: [
      'https://www.coursera.org/learn/video-editing-fundamentals',
      'https://www.udemy.com/course/video-editing-for-beginners/',
      'https://www.coursera.org/learn/video-editing-fundamentals'
    ] },
    { step: 'Transitions & Effects', description: 'Add transitions and visual effects.', youtube: 'https://www.youtube.com/results?search_query=video+editing+transitions+effects', resources: [
      'https://www.coursera.org/learn/video-editing-effects',
      'https://www.udemy.com/course/video-editing-effects/',
      'https://www.coursera.org/learn/video-editing-effects'
    ] },
    { step: 'Audio Editing', description: 'Edit and mix audio tracks.', youtube: 'https://www.youtube.com/results?search_query=video+editing+audio+editing+mix', resources: [
      'https://www.coursera.org/learn/audio-editing-fundamentals',
      'https://www.udemy.com/course/audio-editing-for-beginners/',
      'https://www.coursera.org/learn/audio-editing-fundamentals'
    ] },
    { step: 'Color Grading', description: 'Adjust colors for mood and style.', youtube: 'https://www.youtube.com/results?search_query=video+editing+color+grading+mood+style', resources: [
      'https://www.coursera.org/learn/video-color-grading',
      'https://www.udemy.com/course/video-color-grading-for-beginners/',
      'https://www.coursera.org/learn/video-color-grading'
    ] },
    { step: 'Exporting', description: 'Export videos for different platforms.', youtube: 'https://www.youtube.com/results?search_query=video+editing+exporting', resources: [
      'https://www.coursera.org/learn/video-editing-exporting',
      'https://www.udemy.com/course/video-editing-for-beginners/',
      'https://www.coursera.org/learn/video-editing-exporting'
    ] }
  ],
  'audio-production': [
    { step: 'Audio Basics', description: 'Understand sound waves and recording.', youtube: 'https://www.youtube.com/results?search_query=audio+basics+sound+waves+recording', resources: [
      'https://www.coursera.org/learn/audio-production-fundamentals',
      'https://www.udemy.com/course/audio-production-for-beginners/',
      'https://www.coursera.org/learn/audio-production-fundamentals'
    ] },
    { step: 'Editing', description: 'Edit audio with DAWs.', youtube: 'https://www.youtube.com/results?search_query=audio+editing+daws', resources: [
      'https://www.coursera.org/learn/audio-editing-fundamentals',
      'https://www.udemy.com/course/audio-editing-for-beginners/',
      'https://www.coursera.org/learn/audio-editing-fundamentals'
    ] },
    { step: 'Mixing', description: 'Mix multiple audio tracks.', youtube: 'https://www.youtube.com/results?search_query=audio+mixing+multiple+tracks', resources: [
      'https://www.coursera.org/learn/audio-mixing-fundamentals',
      'https://www.udemy.com/course/audio-mixing-for-beginners/',
      'https://www.coursera.org/learn/audio-mixing-fundamentals'
    ] },
    { step: 'Mastering', description: 'Finalize audio for distribution.', youtube: 'https://www.youtube.com/results?search_query=audio+mastering+finalize+distribution', resources: [
      'https://www.coursera.org/learn/audio-mastering-fundamentals',
      'https://www.udemy.com/course/audio-mastering-for-beginners/',
      'https://www.coursera.org/learn/audio-mastering-fundamentals'
    ] },
    { step: 'Publishing', description: 'Publish audio to streaming platforms.', youtube: 'https://www.youtube.com/results?search_query=audio+publishing+streaming+platforms', resources: [
      'https://www.coursera.org/learn/audio-distribution-fundamentals',
      'https://www.udemy.com/course/audio-distribution-for-beginners/',
      'https://www.coursera.org/learn/audio-distribution-fundamentals'
    ] }
  ],
  photography: [
    { step: 'Photography Basics', description: 'Learn about cameras, lenses, and exposure.', youtube: 'https://www.youtube.com/results?search_query=photography+basics+cameras+lenses+exposure', resources: [
      'https://www.coursera.org/learn/photography-fundamentals',
      'https://www.udemy.com/course/photography-for-beginners/',
      'https://www.coursera.org/learn/photography-fundamentals'
    ] },
    { step: 'Composition', description: 'Master composition and framing.', youtube: 'https://www.youtube.com/results?search_query=photography+composition+framing', resources: [
      'https://www.coursera.org/learn/photography-composition',
      'https://www.udemy.com/course/photography-composition/',
      'https://www.coursera.org/learn/photography-composition'
    ] },
    { step: 'Lighting', description: 'Use natural and artificial lighting.', youtube: 'https://www.youtube.com/results?search_query=photography+lighting+natural+artificial', resources: [
      'https://www.coursera.org/learn/photography-lighting',
      'https://www.udemy.com/course/photography-lighting-for-beginners/',
      'https://www.coursera.org/learn/photography-lighting'
    ] },
    { step: 'Editing', description: 'Edit photos with Lightroom or Photoshop.', youtube: 'https://www.youtube.com/results?search_query=photography+editing+lightroom+photoshop', resources: [
      'https://www.coursera.org/learn/photography-editing',
      'https://www.udemy.com/course/photography-editing-for-beginners/',
      'https://www.coursera.org/learn/photography-editing'
    ] },
    { step: 'Portfolio', description: 'Build a photography portfolio.', youtube: 'https://www.youtube.com/results?search_query=photography+portfolio', resources: [
      'https://www.coursera.org/learn/photography-portfolio',
      'https://www.udemy.com/course/photography-portfolio-for-beginners/',
      'https://www.coursera.org/learn/photography-portfolio'
    ] }
  ],
  'blockchain-dev': [
    { step: 'Blockchain Dev Basics', description: 'Understand blockchain development principles.', youtube: 'https://www.youtube.com/results?search_query=blockchain+development+basics+principles', resources: [
      'https://www.coursera.org/learn/blockchain-fundamentals',
      'https://www.udemy.com/course/blockchain-for-beginners/',
      'https://www.coursera.org/learn/blockchain-fundamentals'
    ] },
    { step: 'Smart Contracts', description: 'Write and deploy smart contracts.', youtube: 'https://www.youtube.com/results?search_query=blockchain+smart+contracts+write+deploy', resources: [
      'https://www.coursera.org/learn/smart-contracts-ethereum',
      'https://www.udemy.com/course/blockchain-smart-contracts/',
      'https://www.coursera.org/learn/smart-contracts-ethereum'
    ] },
    { step: 'DApp Development', description: 'Build decentralized applications.', youtube: 'https://www.youtube.com/results?search_query=blockchain+dapps+decentralized+applications', resources: [
      'https://www.coursera.org/learn/decentralized-applications',
      'https://www.udemy.com/course/blockchain-dapps/',
      'https://www.coursera.org/learn/decentralized-applications'
    ] },
    { step: 'Security', description: 'Implement security best practices.', youtube: 'https://www.youtube.com/results?search_query=blockchain+security+best+practices', resources: [
      'https://www.coursera.org/learn/blockchain-security',
      'https://www.udemy.com/course/blockchain-security-and-cryptography/',
      'https://www.coursera.org/learn/blockchain-security'
    ] },
    { step: 'Testing & Deployment', description: 'Test and deploy blockchain solutions.', youtube: 'https://www.youtube.com/results?search_query=blockchain+testing+deployment', resources: [
      'https://www.coursera.org/learn/blockchain-testing',
      'https://www.udemy.com/course/blockchain-testing/',
      'https://www.coursera.org/learn/blockchain-testing'
    ] }
  ],
  fintech: [
    { step: 'Fintech Basics', description: 'Understand financial technology concepts.', youtube: 'https://www.youtube.com/results?search_query=fintech+basics+financial+technology', resources: [
      'https://www.coursera.org/learn/fintech-fundamentals',
      'https://www.udemy.com/course/fintech-for-beginners/',
      'https://www.coursera.org/learn/fintech-fundamentals'
    ] },
    { step: 'Payments', description: 'Learn about payment gateways and APIs.', youtube: 'https://www.youtube.com/results?search_query=fintech+payments+payment+gateways+apis', resources: [
      'https://www.coursera.org/learn/e-commerce-payment-gateways',
      'https://www.udemy.com/course/e-commerce-payment-gateways/',
      'https://www.coursera.org/learn/e-commerce-payment-gateways'
    ] },
    { step: 'Regulations', description: 'Study financial regulations and compliance.', youtube: 'https://www.youtube.com/results?search_query=fintech+regulations+compliance', resources: [
      'https://www.coursera.org/learn/financial-regulations',
      'https://www.udemy.com/course/financial-regulations-for-beginners/',
      'https://www.coursera.org/learn/financial-regulations'
    ] },
    { step: 'Security', description: 'Implement security in fintech apps.', youtube: 'https://www.youtube.com/results?search_query=fintech+security+apps', resources: [
      'https://www.coursera.org/learn/fintech-security',
      'https://www.udemy.com/course/fintech-security-for-beginners/',
      'https://www.coursera.org/learn/fintech-security'
    ] },
    { step: 'Analytics', description: 'Analyze financial data.', youtube: 'https://www.youtube.com/results?search_query=fintech+analytics+financial+data', resources: [
      'https://www.coursera.org/learn/financial-analytics',
      'https://www.udemy.com/course/financial-analytics-for-beginners/',
      'https://www.coursera.org/learn/financial-analytics'
    ] }
  ],
  'healthcare-it': [
    { step: 'Healthcare IT Basics', description: 'Learn about healthcare systems and EHR.', youtube: 'https://www.youtube.com/results?search_query=healthcare+it+basics+healthcare+systems+ehr', resources: [
      'https://www.coursera.org/learn/healthcare-it-fundamentals',
      'https://www.udemy.com/course/healthcare-it-for-beginners/',
      'https://www.coursera.org/learn/healthcare-it-fundamentals'
    ] },
    { step: 'Compliance', description: 'Understand HIPAA and other regulations.', youtube: 'https://www.youtube.com/results?search_query=healthcare+compliance+hipaa+regulations', resources: [
      'https://www.hhs.gov/hipaa/for-professionals/privacy/index.html',
      'https://www.udemy.com/course/hipaa-compliance-for-beginners/',
      'https://www.coursera.org/learn/hipaa-compliance'
    ] },
    { step: 'Interoperability', description: 'Integrate healthcare systems.', youtube: 'https://www.youtube.com/results?search_query=healthcare+interoperability+systems', resources: [
      'https://www.coursera.org/learn/healthcare-interoperability',
      'https://www.udemy.com/course/healthcare-interoperability-for-beginners/',
      'https://www.coursera.org/learn/healthcare-interoperability'
    ] },
    { step: 'Security', description: 'Secure healthcare data.', youtube: 'https://www.youtube.com/results?search_query=healthcare+security+data', resources: [
      'https://www.coursera.org/learn/healthcare-security',
      'https://www.udemy.com/course/healthcare-security-for-beginners/',
      'https://www.coursera.org/learn/healthcare-security'
    ] },
    { step: 'Analytics', description: 'Analyze healthcare data.', youtube: 'https://www.youtube.com/results?search_query=healthcare+analytics+data', resources: [
      'https://www.coursera.org/learn/healthcare-analytics',
      'https://www.udemy.com/course/healthcare-analytics-for-beginners/',
      'https://www.coursera.org/learn/healthcare-analytics'
    ] }
  ],
  legaltech: [
    { step: 'LegalTech Basics', description: 'Understand technology in the legal industry.', youtube: 'https://www.youtube.com/results?search_query=legaltech+basics+technology+legal', resources: [
      'https://www.coursera.org/learn/legal-tech-fundamentals',
      'https://www.udemy.com/course/legal-tech-for-beginners/',
      'https://www.coursera.org/learn/legal-tech-fundamentals'
    ] },
    { step: 'Document Automation', description: 'Automate legal documents.', youtube: 'https://www.youtube.com/results?search_query=legaltech+document+automation', resources: [
      'https://www.coursera.org/learn/legal-tech-document-automation',
      'https://www.udemy.com/course/legal-tech-document-automation/',
      'https://www.coursera.org/learn/legal-tech-document-automation'
    ] },
    { step: 'E-Discovery', description: 'Use e-discovery tools.', youtube: 'https://www.youtube.com/results?search_query=legaltech+e-discovery', resources: [
      'https://www.coursera.org/learn/legal-tech-e-discovery',
      'https://www.udemy.com/course/legal-tech-e-discovery/',
      'https://www.coursera.org/learn/legal-tech-e-discovery'
    ] },
    { step: 'Case Management', description: 'Manage cases with software.', youtube: 'https://www.youtube.com/results?search_query=legaltech+case+management', resources: [
      'https://www.coursera.org/learn/legal-tech-case-management',
      'https://www.udemy.com/course/legal-tech-case-management/',
      'https://www.coursera.org/learn/legal-tech-case-management'
    ] },
    { step: 'Compliance', description: 'Ensure legal compliance.', youtube: 'https://www.youtube.com/results?search_query=legaltech+compliance', resources: [
      'https://www.coursera.org/learn/legal-tech-compliance',
      'https://www.udemy.com/course/legal-tech-compliance-for-beginners/',
      'https://www.coursera.org/learn/legal-tech-compliance'
    ] }
  ],
  edtech: [
    { step: 'EdTech Basics', description: 'Learn about technology in education.', youtube: 'https://www.youtube.com/results?search_query=edtech+basics+technology+education', resources: [
      'https://www.coursera.org/learn/edtech-fundamentals',
      'https://www.udemy.com/course/edtech-for-beginners/',
      'https://www.coursera.org/learn/edtech-fundamentals'
    ] },
    { step: 'LMS', description: 'Use Learning Management Systems.', youtube: 'https://www.youtube.com/results?search_query=edtech+lms+learning+management', resources: [
      'https://www.coursera.org/learn/learning-management-systems',
      'https://www.udemy.com/course/lms-for-beginners/',
      'https://www.coursera.org/learn/lms-fundamentals'
    ] },
    { step: 'Content Creation', description: 'Create digital learning content.', youtube: 'https://www.youtube.com/results?search_query=edtech+content+creation', resources: [
      'https://www.coursera.org/learn/digital-content-creation',
      'https://www.udemy.com/course/digital-content-creation-for-beginners/',
      'https://www.coursera.org/learn/digital-content-creation'
    ] },
    { step: 'Analytics', description: 'Analyze learning outcomes.', youtube: 'https://www.youtube.com/results?search_query=edtech+analytics+learning', resources: [
      'https://www.coursera.org/learn/learning-analytics',
      'https://www.udemy.com/course/learning-analytics-for-beginners/',
      'https://www.coursera.org/learn/learning-analytics'
    ] },
    { step: 'Gamification', description: 'Apply gamification in education.', youtube: 'https://www.youtube.com/results?search_query=edtech+gamification', resources: [
      'https://www.coursera.org/learn/gamification-in-education',
      'https://www.udemy.com/course/gamification-in-education-for-beginners/',
      'https://www.coursera.org/learn/gamification-in-education'
    ] }
  ],
  agritech: [
    { step: 'AgriTech Basics', description: 'Understand technology in agriculture.', youtube: 'https://www.youtube.com/results?search_query=agritech+basics+technology+agriculture', resources: [
      'https://www.coursera.org/learn/agritech-fundamentals',
      'https://www.udemy.com/course/agritech-for-beginners/',
      'https://www.coursera.org/learn/agritech-fundamentals'
    ] },
    { step: 'Sensors & IoT', description: 'Use sensors and IoT in farming.', youtube: 'https://www.youtube.com/results?search_query=agritech+sensors+iot+farming', resources: [
      'https://www.coursera.org/learn/agritech-sensors-iot',
      'https://www.udemy.com/course/agritech-sensors-iot/',
      'https://www.coursera.org/learn/agritech-sensors-iot'
    ] },
    { step: 'Data Analysis', description: 'Analyze agricultural data.', youtube: 'https://www.youtube.com/results?search_query=agritech+data+analysis', resources: [
      'https://www.coursera.org/learn/agritech-data-analysis',
      'https://www.udemy.com/course/agritech-data-analysis-for-beginners/',
      'https://www.coursera.org/learn/agritech-data-analysis'
    ] },
    { step: 'Automation', description: 'Automate farming processes.', youtube: 'https://www.youtube.com/results?search_query=agritech+automation', resources: [
      'https://www.coursera.org/learn/agritech-automation',
      'https://www.udemy.com/course/agritech-automation-for-beginners/',
      'https://www.coursera.org/learn/agritech-automation'
    ] },
    { step: 'Sustainability', description: 'Implement sustainable practices.', youtube: 'https://www.youtube.com/results?search_query=agritech+sustainability', resources: [
      'https://www.coursera.org/learn/agritech-sustainability',
      'https://www.udemy.com/course/agritech-sustainability-for-beginners/',
      'https://www.coursera.org/learn/agritech-sustainability'
    ] }
  ],
  logistics: [
    { step: 'Logistics Basics', description: 'Learn about supply chain and logistics.', youtube: 'https://www.youtube.com/results?search_query=logistics+basics+supply+chain+logistics', resources: [
      'https://www.coursera.org/learn/supply-chain-management',
      'https://www.udemy.com/course/logistics-for-beginners/',
      'https://www.coursera.org/learn/logistics-fundamentals'
    ] },
    { step: 'Inventory Management', description: 'Manage inventory and warehousing.', youtube: 'https://www.youtube.com/results?search_query=logistics+inventory+management+warehousing', resources: [
      'https://www.coursera.org/learn/inventory-management',
      'https://www.udemy.com/course/inventory-management-for-beginners/',
      'https://www.coursera.org/learn/inventory-management'
    ] },
    { step: 'Transportation', description: 'Optimize transportation and delivery.', youtube: 'https://www.youtube.com/results?search_query=logistics+transportation+delivery', resources: [
      'https://www.coursera.org/learn/supply-chain-management',
      'https://www.udemy.com/course/logistics-for-beginners/',
      'https://www.coursera.org/learn/logistics-fundamentals'
    ] },
    { step: 'Tracking', description: 'Track shipments and assets.', youtube: 'https://www.youtube.com/results?search_query=logistics+tracking+shipments+assets', resources: [
      'https://www.coursera.org/learn/supply-chain-management',
      'https://www.udemy.com/course/logistics-for-beginners/',
      'https://www.coursera.org/learn/logistics-fundamentals'
    ] },
    { step: 'Analytics', description: 'Analyze logistics data.', youtube: 'https://www.youtube.com/results?search_query=logistics+analytics', resources: [
      'https://www.coursera.org/learn/logistics-analytics',
      'https://www.udemy.com/course/logistics-analytics-for-beginners/',
      'https://www.coursera.org/learn/logistics-analytics'
    ] }
  ],
  'supply-chain': [
    { step: 'Supply Chain Basics', description: 'Understand supply chain management.', youtube: 'https://www.youtube.com/results?search_query=supply+chain+basics+management', resources: [
      'https://www.coursera.org/learn/supply-chain-management',
      'https://www.udemy.com/course/supply-chain-management-for-beginners/',
      'https://www.coursera.org/learn/supply-chain-management'
    ] },
    { step: 'Procurement', description: 'Learn about procurement and sourcing.', youtube: 'https://www.youtube.com/results?search_query=supply+chain+procurement+sourcing', resources: [
      'https://www.coursera.org/learn/supply-chain-management',
      'https://www.udemy.com/course/supply-chain-management-for-beginners/',
      'https://www.coursera.org/learn/supply-chain-management'
    ] },
    { step: 'Production', description: 'Manage production and manufacturing.', youtube: 'https://www.youtube.com/results?search_query=supply+chain+production+manufacturing', resources: [
      'https://www.coursera.org/learn/supply-chain-management',
      'https://www.udemy.com/course/supply-chain-management-for-beginners/',
      'https://www.coursera.org/learn/supply-chain-management'
    ] },
    { step: 'Distribution', description: 'Distribute products efficiently.', youtube: 'https://www.youtube.com/results?search_query=supply+chain+distribution+efficient', resources: [
      'https://www.coursera.org/learn/supply-chain-management',
      'https://www.udemy.com/course/supply-chain-management-for-beginners/',
      'https://www.coursera.org/learn/supply-chain-management'
    ] },
    { step: 'Risk Management', description: 'Mitigate supply chain risks.', youtube: 'https://www.youtube.com/results?search_query=supply+chain+risk+management', resources: [
      'https://www.coursera.org/learn/supply-chain-risk-management',
      'https://www.udemy.com/course/supply-chain-risk-management-for-beginners/',
      'https://www.coursera.org/learn/supply-chain-risk-management'
    ] }
  ],
  aerospace: [
    { step: 'Aerospace Basics', description: 'Learn about aerodynamics and flight mechanics.', youtube: 'https://www.youtube.com/results?search_query=aerospace+basics+aerodynamics+flight+mechanics', resources: [
      'https://www.coursera.org/learn/aerospace-engineering',
      'https://www.udemy.com/course/aerospace-engineering-for-beginners/',
      'https://www.coursera.org/learn/aerospace-engineering'
    ] },
    { step: 'Materials', description: 'Study aerospace materials.', youtube: 'https://www.youtube.com/results?search_query=aerospace+materials', resources: [
      'https://www.coursera.org/learn/aerospace-materials',
      'https://www.udemy.com/course/aerospace-materials-for-beginners/',
      'https://www.coursera.org/learn/aerospace-materials'
    ] },
    { step: 'Propulsion', description: 'Understand propulsion systems.', youtube: 'https://www.youtube.com/results?search_query=aerospace+propulsion+systems', resources: [
      'https://www.coursera.org/learn/aerospace-propulsion',
      'https://www.udemy.com/course/aerospace-propulsion-for-beginners/',
      'https://www.coursera.org/learn/aerospace-propulsion'
    ] },
    { step: 'Avionics', description: 'Work with avionics and control systems.', youtube: 'https://www.youtube.com/results?search_query=aerospace+avionics+control', resources: [
      'https://www.coursera.org/learn/aerospace-avionics',
      'https://www.udemy.com/course/aerospace-avionics-for-beginners/',
      'https://www.coursera.org/learn/aerospace-avionics'
    ] },
    { step: 'Testing', description: 'Test and certify aerospace systems.', youtube: 'https://www.youtube.com/results?search_query=aerospace+testing+certification', resources: [
      'https://www.coursera.org/learn/aerospace-testing',
      'https://www.udemy.com/course/aerospace-testing-for-beginners/',
      'https://www.coursera.org/learn/aerospace-testing'
    ] }
  ],
  automotive: [
    { step: 'Automotive Basics', description: 'Understand vehicle systems and design.', youtube: 'https://www.youtube.com/results?search_query=automotive+basics+vehicle+systems+design', resources: [
      'https://www.coursera.org/learn/automotive-engineering',
      'https://www.udemy.com/course/automotive-engineering-for-beginners/',
      'https://www.coursera.org/learn/automotive-engineering'
    ] },
    { step: 'Engines', description: 'Learn about internal combustion and electric engines.', youtube: 'https://www.youtube.com/results?search_query=automotive+engines+internal+combustion+electric', resources: [
      'https://www.coursera.org/learn/automotive-engines',
      'https://www.udemy.com/course/automotive-engines-for-beginners/',
      'https://www.coursera.org/learn/automotive-engines'
    ] },
    { step: 'Electronics', description: 'Work with automotive electronics.', youtube: 'https://www.youtube.com/results?search_query=automotive+electronics', resources: [
      'https://www.coursera.org/learn/automotive-electronics',
      'https://www.udemy.com/course/automotive-electronics-for-beginners/',
      'https://www.coursera.org/learn/automotive-electronics'
    ] },
    { step: 'Safety', description: 'Implement safety features.', youtube: 'https://www.youtube.com/results?search_query=automotive+safety+features', resources: [
      'https://www.coursera.org/learn/automotive-safety',
      'https://www.udemy.com/course/automotive-safety-for-beginners/',
      'https://www.coursera.org/learn/automotive-safety'
    ] },
    { step: 'Testing', description: 'Test and validate vehicles.', youtube: 'https://www.youtube.com/results?search_query=automotive+testing+validation', resources: [
      'https://www.coursera.org/learn/automotive-testing',
      'https://www.udemy.com/course/automotive-testing-for-beginners/',
      'https://www.coursera.org/learn/automotive-testing'
    ] }
  ],
  energy: [
    { step: 'Energy Basics', description: 'Learn about energy sources and systems.', youtube: 'https://www.youtube.com/results?search_query=energy+basics+sources+systems', resources: [
      'https://www.coursera.org/learn/energy-fundamentals',
      'https://www.udemy.com/course/energy-for-beginners/',
      'https://www.coursera.org/learn/energy-fundamentals'
    ] },
    { step: 'Renewables', description: 'Study solar, wind, and other renewables.', youtube: 'https://www.youtube.com/results?search_query=energy+renewables+solar+wind', resources: [
      'https://www.coursera.org/learn/renewable-energy',
      'https://www.udemy.com/course/solar-energy-for-beginners/',
      'https://www.coursera.org/learn/renewable-energy'
    ] },
    { step: 'Grid', description: 'Understand power grids and distribution.', youtube: 'https://www.youtube.com/results?search_query=energy+grid+distribution', resources: [
      'https://www.coursera.org/learn/power-systems',
      'https://www.udemy.com/course/power-systems-for-beginners/',
      'https://www.coursera.org/learn/power-systems'
    ] },
    { step: 'Storage', description: 'Learn about energy storage technologies.', youtube: 'https://www.youtube.com/results?search_query=energy+storage+technologies', resources: [
      'https://www.coursera.org/learn/energy-storage',
      'https://www.udemy.com/course/energy-storage-for-beginners/',
      'https://www.coursera.org/learn/energy-storage'
    ] },
    { step: 'Efficiency', description: 'Improve energy efficiency.', youtube: 'https://www.youtube.com/results?search_query=energy+efficiency', resources: [
      'https://www.coursera.org/learn/energy-efficiency',
      'https://www.udemy.com/course/energy-efficiency-for-beginners/',
      'https://www.coursera.org/learn/energy-efficiency'
    ] }
  ],
  environment: [
    { step: 'Environmental Science', description: 'Study ecosystems and biodiversity.', youtube: 'https://www.youtube.com/results?search_query=environmental+science+ecosystems+biodiversity', resources: [
      'https://www.coursera.org/learn/environmental-science',
      'https://www.udemy.com/course/environmental-science-for-beginners/',
      'https://www.coursera.org/learn/environmental-science'
    ] },
    { step: 'Pollution', description: 'Understand pollution and its effects.', youtube: 'https://www.youtube.com/results?search_query=environmental+pollution+effects', resources: [
      'https://www.coursera.org/learn/environmental-pollution',
      'https://www.udemy.com/course/environmental-pollution-for-beginners/',
      'https://www.coursera.org/learn/environmental-pollution'
    ] },
    { step: 'Climate Change', description: 'Learn about climate change science.', youtube: 'https://www.youtube.com/results?search_query=environmental+climate+change+science', resources: [
      'https://www.coursera.org/learn/climate-change-science',
      'https://www.udemy.com/course/climate-change-for-beginners/',
      'https://www.coursera.org/learn/climate-change-science'
    ] },
    { step: 'Sustainability', description: 'Implement sustainable practices.', youtube: 'https://www.youtube.com/results?search_query=environmental+sustainability', resources: [
      'https://www.coursera.org/learn/sustainability-fundamentals',
      'https://www.udemy.com/course/sustainability-for-beginners/',
      'https://www.coursera.org/learn/sustainability-fundamentals'
    ] },
    { step: 'Policy', description: 'Study environmental policy and law.', youtube: 'https://www.youtube.com/results?search_query=environmental+policy+law', resources: [
      'https://www.coursera.org/learn/environmental-policy',
      'https://www.udemy.com/course/environmental-policy-for-beginners/',
      'https://www.coursera.org/learn/environmental-policy'
    ] }
  ],
  marine: [
    { step: 'Marine Science', description: 'Learn about oceans and marine life.', youtube: 'https://www.youtube.com/results?search_query=marine+science+oceans+marine+life', resources: [
      'https://www.coursera.org/learn/marine-biology',
      'https://www.udemy.com/course/marine-biology-for-beginners/',
      'https://www.coursera.org/learn/marine-biology'
    ] },
    { step: 'Navigation', description: 'Understand marine navigation.', youtube: 'https://www.youtube.com/results?search_query=marine+navigation', resources: [
      'https://www.coursera.org/learn/marine-navigation',
      'https://www.udemy.com/course/marine-navigation-for-beginners/',
      'https://www.coursera.org/learn/marine-navigation'
    ] },
    { step: 'Marine Engineering', description: 'Work with marine engineering systems.', youtube: 'https://www.youtube.com/results?search_query=marine+engineering+systems', resources: [
      'https://www.coursera.org/learn/marine-engineering',
      'https://www.udemy.com/course/marine-engineering-for-beginners/',
      'https://www.coursera.org/learn/marine-engineering'
    ] },
    { step: 'Conservation', description: 'Study marine conservation.', youtube: 'https://www.youtube.com/results?search_query=marine+conservation', resources: [
      'https://www.coursera.org/learn/marine-conservation',
      'https://www.udemy.com/course/marine-conservation-for-beginners/',
      'https://www.coursera.org/learn/marine-conservation'
    ] },
    { step: 'Research', description: 'Conduct marine research.', youtube: 'https://www.youtube.com/results?search_query=marine+research', resources: [
      'https://www.coursera.org/learn/marine-research',
      'https://www.udemy.com/course/marine-research-for-beginners/',
      'https://www.coursera.org/learn/marine-research'
    ] }
  ],
  civil: [
    { step: 'Civil Engineering Basics', description: 'Learn about structures and materials.', youtube: 'https://www.youtube.com/results?search_query=civil+engineering+basics+structures+materials', resources: [
      'https://www.coursera.org/learn/civil-engineering-fundamentals',
      'https://www.udemy.com/course/civil-engineering-for-beginners/',
      'https://www.coursera.org/learn/civil-engineering-fundamentals'
    ] },
    { step: 'Surveying', description: 'Understand land surveying.', youtube: 'https://www.youtube.com/results?search_query=civil+engineering+surveying', resources: [
      'https://www.coursera.org/learn/surveying',
      'https://www.udemy.com/course/surveying-for-beginners/',
      'https://www.coursera.org/learn/surveying'
    ] },
    { step: 'Construction', description: 'Manage construction projects.', youtube: 'https://www.youtube.com/results?search_query=civil+engineering+construction+projects', resources: [
      'https://www.coursera.org/learn/construction-management',
      'https://www.udemy.com/course/construction-management-for-beginners/',
      'https://www.coursera.org/learn/construction-management'
    ] },
    { step: 'Geotechnical', description: 'Study soil and foundation engineering.', youtube: 'https://www.youtube.com/results?search_query=civil+engineering+geotechnical', resources: [
      'https://www.coursera.org/learn/geotechnical-engineering',
      'https://www.udemy.com/course/geotechnical-engineering-for-beginners/',
      'https://www.coursera.org/learn/geotechnical-engineering'
    ] },
    { step: 'Transportation', description: 'Work with transportation systems.', youtube: 'https://www.youtube.com/results?search_query=civil+engineering+transportation', resources: [
      'https://www.coursera.org/learn/transportation-engineering',
      'https://www.udemy.com/course/transportation-engineering-for-beginners/',
      'https://www.coursera.org/learn/transportation-engineering'
    ] }
  ],
  architecture: [
    { step: 'Architecture Basics', description: 'Learn about design principles and history.', youtube: 'https://www.youtube.com/results?search_query=architecture+basics+design+principles+history', resources: [
      'https://www.coursera.org/learn/architecture-fundamentals',
      'https://www.udemy.com/course/architecture-for-beginners/',
      'https://www.coursera.org/learn/architecture-fundamentals'
    ] },
    { step: 'CAD & BIM', description: 'Use CAD and BIM software.', youtube: 'https://www.youtube.com/results?search_query=architecture+cad+bim+software', resources: [
      'https://www.coursera.org/learn/architecture-cad-bim',
      'https://www.udemy.com/course/architecture-cad-bim/',
      'https://www.coursera.org/learn/architecture-cad-bim'
    ] },
    { step: 'Building Codes', description: 'Understand building codes and regulations.', youtube: 'https://www.youtube.com/results?search_query=architecture+building+codes+regulations', resources: [
      'https://www.coursera.org/learn/building-codes',
      'https://www.udemy.com/course/building-codes-for-beginners/',
      'https://www.coursera.org/learn/building-codes'
    ] },
    { step: 'Sustainability', description: 'Design sustainable buildings.', youtube: 'https://www.youtube.com/results?search_query=architecture+sustainability+sustainable+buildings', resources: [
      'https://www.coursera.org/learn/sustainable-architecture',
      'https://www.udemy.com/course/sustainable-architecture-for-beginners/',
      'https://www.coursera.org/learn/sustainable-architecture'
    ] },
    { step: 'Project Management', description: 'Manage architectural projects.', youtube: 'https://www.youtube.com/results?search_query=architecture+project+management', resources: [
      'https://www.coursera.org/learn/architecture-project-management',
      'https://www.udemy.com/course/architecture-project-management-for-beginners/',
      'https://www.coursera.org/learn/architecture-project-management'
    ] }
  ],
  construction: [
    { step: 'Construction Basics', description: 'Understand construction methods and materials.', youtube: 'https://www.youtube.com/results?search_query=construction+basics+methods+materials', resources: [
      'https://www.coursera.org/learn/construction-materials',
      'https://www.udemy.com/course/construction-materials-for-beginners/',
      'https://www.coursera.org/learn/construction-materials'
    ] },
    { step: 'Project Planning', description: 'Plan and schedule construction projects.', youtube: 'https://www.youtube.com/results?search_query=construction+project+planning+schedule', resources: [
      'https://www.coursera.org/learn/construction-project-management',
      'https://www.udemy.com/course/construction-project-management-for-beginners/',
      'https://www.coursera.org/learn/construction-project-management'
    ] },
    { step: 'Safety', description: 'Implement safety protocols.', youtube: 'https://www.youtube.com/results?search_query=construction+safety+protocols', resources: [
      'https://www.coursera.org/learn/construction-safety',
      'https://www.udemy.com/course/construction-safety-for-beginners/',
      'https://www.coursera.org/learn/construction-safety'
    ] },
    { step: 'Cost Estimation', description: 'Estimate costs and budgets.', youtube: 'https://www.youtube.com/results?search_query=construction+cost+estimation+budget', resources: [
      'https://www.coursera.org/learn/construction-cost-estimation',
      'https://www.udemy.com/course/construction-cost-estimation-for-beginners/',
      'https://www.coursera.org/learn/construction-cost-estimation'
    ] },
    { step: 'Quality Control', description: 'Ensure quality in construction.', youtube: 'https://www.youtube.com/results?search_query=construction+quality+control', resources: [
      'https://www.coursera.org/learn/construction-quality-control',
      'https://www.udemy.com/course/construction-quality-control-for-beginners/',
      'https://www.coursera.org/learn/construction-quality-control'
    ] }
  ],
  fashion: [
    { step: 'Fashion Design Basics', description: 'Learn about fabrics, colors, and trends.', youtube: 'https://www.youtube.com/results?search_query=fashion+design+basics+fabrics+colors+trends', resources: [
      'https://www.coursera.org/learn/fashion-design-fundamentals',
      'https://www.udemy.com/course/fashion-design-for-beginners/',
      'https://www.coursera.org/learn/fashion-design-fundamentals'
    ] },
    { step: 'Sketching', description: 'Sketch fashion designs.', youtube: 'https://www.youtube.com/results?search_query=fashion+design+sketching', resources: [
      'https://www.coursera.org/learn/fashion-design-sketching',
      'https://www.udemy.com/course/fashion-design-sketching-for-beginners/',
      'https://www.coursera.org/learn/fashion-design-sketching'
    ] },
    { step: 'Pattern Making', description: 'Create patterns for garments.', youtube: 'https://www.youtube.com/results?search_query=fashion+design+pattern+making', resources: [
      'https://www.coursera.org/learn/fashion-design-pattern-making',
      'https://www.udemy.com/course/fashion-design-pattern-making-for-beginners/',
      'https://www.coursera.org/learn/fashion-design-pattern-making'
    ] },
    { step: 'Sewing', description: 'Sew and assemble garments.', youtube: 'https://www.youtube.com/results?search_query=fashion+design+sewing', resources: [
      'https://www.coursera.org/learn/fashion-design-sewing',
      'https://www.udemy.com/course/fashion-design-sewing-for-beginners/',
      'https://www.coursera.org/learn/fashion-design-sewing'
    ] },
    { step: 'Portfolio', description: 'Build a fashion design portfolio.', youtube: 'https://www.youtube.com/results?search_query=fashion+design+portfolio', resources: [
      'https://www.coursera.org/learn/fashion-design-portfolio',
      'https://www.udemy.com/course/fashion-design-portfolio-for-beginners/',
      'https://www.coursera.org/learn/fashion-design-portfolio'
    ] }
  ],
  culinary: [
    { step: 'Culinary Basics', description: 'Learn knife skills, kitchen safety, and basic cooking techniques.', youtube: 'https://www.youtube.com/results?search_query=culinary+basics', resources: [
      'https://www.culinaryschools.org/basic-skills/',
      'https://www.bbcgoodfood.com/howto/guide/25-skills-every-cook-should-know',
      'https://www.masterclass.com/articles/basic-cooking-skills-every-home-chef-should-know'
    ] },
    { step: 'World Cuisines', description: 'Explore different cuisines and their signature dishes.', youtube: 'https://www.youtube.com/results?search_query=world+cuisines', resources: [
      'https://www.tasteatlas.com/',
      'https://www.bbcgoodfood.com/recipes/collection/world-cuisine',
      'https://www.foodnetwork.com/world-cuisine'
    ] },
    { step: 'Baking', description: 'Learn the basics of baking bread, cakes, and pastries.', youtube: 'https://www.youtube.com/results?search_query=baking+basics', resources: [
      'https://www.kingarthurbaking.com/learn/guides/baking-basics',
      'https://www.bbcgoodfood.com/howto/guide/baking-tips',
      'https://www.allrecipes.com/article/baking-tips/'
    ] },
    { step: 'Nutrition', description: 'Understand nutrition and healthy meal planning.', youtube: 'https://www.youtube.com/results?search_query=nutrition+basics', resources: [
      'https://www.eatright.org/food/nutrition',
      'https://www.nutrition.org.uk/healthy-sustainable-diets/',
      'https://www.healthline.com/nutrition/healthy-eating-tips'
    ] }
  ],
  design: [
    { step: 'Design Principles', description: 'Learn the basics of design principles and color theory.', youtube: 'https://www.youtube.com/results?search_query=design+principles', resources: [
      'https://www.interaction-design.org/literature/topics/design-principles',
      'https://www.smashingmagazine.com/guidelines-for-visual-design/',
      'https://www.canva.com/learn/design-elements/'
    ] },
    { step: 'UI/UX Design', description: 'Understand user interface and user experience design.', youtube: 'https://www.youtube.com/results?search_query=ui+ux+design', resources: [
      'https://uxdesign.cc/',
      'https://www.nngroup.com/articles/definition-user-experience/',
      'https://www.smashingmagazine.com/category/uxdesign/'
    ] },
    { step: 'Prototyping', description: 'Learn to create prototypes using tools like Figma or Sketch.', youtube: 'https://www.youtube.com/results?search_query=figma+prototyping', resources: [
      'https://www.figma.com/resources/learn-design/',
      'https://www.sketch.com/docs/',
      'https://www.adobe.com/products/xd/learn/get-started.html'
    ] },
    { step: 'Design Systems', description: 'Understand and use design systems for consistency.', youtube: 'https://www.youtube.com/results?search_query=design+systems', resources: [
      'https://material.io/design',
      'https://www.designsystems.com/',
      'https://uxdesign.cc/design-systems-101-2b1e3a0d7c92'
    ] }
  ],
  data_science: [
    { step: 'Learn Python', description: 'Master Python basics, as it is the primary language for data science.', youtube: 'https://www.youtube.com/results?search_query=python+for+data+science', resources: [
      'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
      'https://www.datacamp.com/courses/intro-to-python-for-data-science',
      'https://www.kaggle.com/learn/python'
    ] },
    { step: 'Statistics & Math', description: 'Understand statistics, probability, and linear algebra.', youtube: 'https://www.youtube.com/results?search_query=statistics+for+data+science', resources: [
      'https://www.khanacademy.org/math/statistics-probability',
      'https://www.coursera.org/learn/statistics',
      'https://www.udacity.com/course/intro-to-statistics--st101'
    ] },
    { step: 'Data Analysis Libraries', description: 'Learn pandas, NumPy, and data manipulation.', youtube: 'https://www.youtube.com/results?search_query=pandas+numpy+data+analysis', resources: [
      'https://pandas.pydata.org/docs/',
      'https://numpy.org/doc/',
      'https://www.datacamp.com/courses/data-manipulation-with-pandas'
    ] },
    { step: 'Data Visualization', description: 'Use matplotlib, seaborn, and other tools to visualize data.', youtube: 'https://www.youtube.com/results?search_query=data+visualization+matplotlib+seaborn', resources: [
      'https://matplotlib.org/stable/contents.html',
      'https://seaborn.pydata.org/',
      'https://www.kaggle.com/learn/data-visualization'
    ] },
    { step: 'Machine Learning', description: 'Apply machine learning with scikit-learn.', youtube: 'https://www.youtube.com/results?search_query=machine+learning+scikit-learn', resources: [
      'https://scikit-learn.org/stable/user_guide.html',
      'https://www.coursera.org/learn/machine-learning',
      'https://www.udemy.com/course/machinelearning/'
    ] }
  ],
  cloud_computing: [
    { step: 'Cloud Basics', description: 'Understand cloud concepts and service models (IaaS, PaaS, SaaS).', youtube: 'https://www.youtube.com/results?search_query=cloud+computing+basics', resources: [
      'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/',
      'https://aws.amazon.com/what-is-cloud-computing/',
      'https://www.coursera.org/learn/cloud-computing-basics'
    ] },
    { step: 'AWS', description: 'Learn core AWS services (EC2, S3, Lambda, IAM).', youtube: 'https://www.youtube.com/results?search_query=aws+cloud+services', resources: [
      'https://aws.amazon.com/getting-started/',
      'https://www.udemy.com/course/aws-certified-cloud-practitioner/',
      'https://docs.aws.amazon.com/'
    ] },
    { step: 'Azure', description: 'Explore Microsoft Azure services and deployment.', youtube: 'https://www.youtube.com/results?search_query=azure+cloud+services', resources: [
      'https://docs.microsoft.com/en-us/azure/',
      'https://www.udemy.com/course/azure-fundamentals/',
      'https://learn.microsoft.com/en-us/training/azure/'
    ] },
    { step: 'GCP', description: 'Get started with Google Cloud Platform.', youtube: 'https://www.youtube.com/results?search_query=google+cloud+platform', resources: [
      'https://cloud.google.com/docs',
      'https://www.udemy.com/course/google-cloud-associate-cloud-engineer/',
      'https://www.coursera.org/learn/gcp-fundamentals'
    ] },
    { step: 'DevOps Tools', description: 'Use Docker, Kubernetes, and CI/CD pipelines in the cloud.', youtube: 'https://www.youtube.com/results?search_query=cloud+devops+docker+kubernetes', resources: [
      'https://www.docker.com/101-tutorial',
      'https://kubernetes.io/docs/tutorials/',
      'https://www.jenkins.io/doc/'
    ] }
  ],
  web3: [
    { step: 'Web3 Basics', description: 'Understand decentralized web and blockchain fundamentals.', youtube: 'https://www.youtube.com/results?search_query=web3+basics', resources: [
      'https://ethereum.org/en/developers/docs/intro-to-web3/',
      'https://www.udemy.com/course/web3js/',
      'https://www.alchemy.com/overviews/web3'
    ] },
    { step: 'Ethereum', description: 'Learn about Ethereum and smart contracts.', youtube: 'https://www.youtube.com/results?search_query=ethereum+smart+contracts', resources: [
      'https://ethereum.org/en/developers/docs/smart-contracts/',
      'https://soliditylang.org/',
      'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/'
    ] },
    { step: 'Solidity', description: 'Write smart contracts in Solidity.', youtube: 'https://www.youtube.com/results?search_query=solidity+smart+contracts', resources: [
      'https://soliditylang.org/',
      'https://cryptozombies.io/',
      'https://www.coursera.org/learn/smart-contracts-ethereum'
    ] },
    { step: 'NFTs & DApps', description: 'Build decentralized apps and NFTs.', youtube: 'https://www.youtube.com/results?search_query=web3+dapp+nft', resources: [
      'https://www.dappuniversity.com/',
      'https://www.udemy.com/course/create-nft-ethereum-blockchain/',
      'https://www.coursera.org/learn/decentralized-applications'
    ] }
  ],
  ar_vr: [
    { step: 'AR/VR Basics', description: 'Learn the fundamentals of Augmented and Virtual Reality.', youtube: 'https://www.youtube.com/results?search_query=ar+vr+basics', resources: [
      'https://www.coursera.org/learn/augmented-reality',
      'https://www.udemy.com/course/virtual-reality/',
      'https://developer.oculus.com/documentation/'
    ] },
    { step: 'Unity', description: 'Develop AR/VR apps with Unity.', youtube: 'https://www.youtube.com/results?search_query=unity+ar+vr', resources: [
      'https://learn.unity.com/',
      'https://www.udemy.com/course/unity-ar-vr/',
      'https://docs.unity3d.com/Manual/UnityManual.html'
    ] },
    { step: 'Unreal Engine', description: 'Explore AR/VR with Unreal Engine.', youtube: 'https://www.youtube.com/results?search_query=unreal+engine+ar+vr', resources: [
      'https://docs.unrealengine.com/',
      'https://www.udemy.com/course/unreal-vr/',
      'https://www.coursera.org/learn/unreal-vr'
    ] },
    { step: 'ARKit & ARCore', description: 'Build AR apps for iOS and Android.', youtube: 'https://www.youtube.com/results?search_query=arkit+arcore', resources: [
      'https://developer.apple.com/augmented-reality/arkit/',
      'https://developers.google.com/ar',
      'https://www.udemy.com/course/arkit-arcore/'
    ] }
  ],
  embedded_systems: [
    { step: 'Embedded Basics', description: 'Understand microcontrollers and embedded programming.', youtube: 'https://www.youtube.com/results?search_query=embedded+systems+basics', resources: [
      'https://www.coursera.org/learn/embedded-systems',
      'https://www.udemy.com/course/embedded-systems/',
      'https://www.arduino.cc/en/Guide/HomePage'
    ] },
    { step: 'Arduino', description: 'Program microcontrollers with Arduino.', youtube: 'https://www.youtube.com/results?search_query=arduino+programming', resources: [
      'https://www.arduino.cc/en/Guide/HomePage',
      'https://www.udemy.com/course/arduino-step-by-step/',
      'https://www.coursera.org/learn/arduino-platform'
    ] },
    { step: 'Raspberry Pi', description: 'Use Raspberry Pi for IoT and embedded projects.', youtube: 'https://www.youtube.com/results?search_query=raspberry+pi+projects', resources: [
      'https://www.raspberrypi.org/documentation/',
      'https://www.udemy.com/course/raspberry-pi/',
      'https://www.coursera.org/learn/raspberry-pi-platform'
    ] },
    { step: 'C/C++ for Embedded', description: 'Write embedded code in C/C++.', youtube: 'https://www.youtube.com/results?search_query=c+c++embedded', resources: [
      'https://www.learn-c.org/',
      'https://www.udemy.com/course/c-programming-for-embedded-systems/',
      'https://www.coursera.org/learn/c-programming'
    ] }
  ],
  data_engineering: [
    { step: 'ETL Basics', description: 'Learn about Extract, Transform, Load (ETL) processes.', youtube: 'https://www.youtube.com/results?search_query=etl+data+engineering', resources: [
      'https://www.coursera.org/learn/data-engineering',
      'https://www.udemy.com/course/data-engineering/',
      'https://www.datacamp.com/courses/etl'
    ] },
    { step: 'Big Data', description: 'Work with Hadoop, Spark, and distributed systems.', youtube: 'https://www.youtube.com/results?search_query=big+data+hadoop+spark', resources: [
      'https://spark.apache.org/docs/latest/',
      'https://hadoop.apache.org/docs/',
      'https://www.udemy.com/course/big-data-hadoop-spark/'
    ] },
    { step: 'Data Warehousing', description: 'Understand data warehousing concepts and tools.', youtube: 'https://www.youtube.com/results?search_query=data+warehousing', resources: [
      'https://www.coursera.org/learn/data-warehousing',
      'https://www.udemy.com/course/data-warehousing/',
      'https://www.snowflake.com/en/data-warehousing/'
    ] },
    { step: 'Data Pipelines', description: 'Build and manage data pipelines.', youtube: 'https://www.youtube.com/results?search_query=data+pipelines', resources: [
      'https://www.coursera.org/learn/data-pipelines',
      'https://www.udemy.com/course/data-pipelines/',
      'https://www.datacamp.com/courses/data-pipelines'
    ] }
  ]
};
// ... rest of your code ...

// --- ROADMAP GENERATION AND RENDERING LOGIC ---
document.addEventListener('DOMContentLoaded', function() {
  // Initialize DOM elements
  const form = document.getElementById('goal-form');
  const input = document.getElementById('goal-input');
  const roadmapSection = document.getElementById('roadmap-section');

  // Simple keyword mapping to roadmap keys
  const KEYWORDS = {
    frontend: ['frontend', 'web', 'html', 'css', 'javascript'],
    backend: ['backend', 'server', 'api', 'node', 'python', 'java', 'php', 'go'],
    devops: ['devops', 'ci', 'cd', 'docker', 'kubernetes', 'cloud'],
    react: ['react'],
    nodejs: ['nodejs', 'node', 'express'],
    python: ['python', 'django', 'flask'],
    ai: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning'],
    devsecops: ['devsecops', 'security', 'secure', 'vulnerability'],
    qa: ['qa', 'quality assurance', 'testing', 'test', 'automation'],
    android: ['android', 'kotlin', 'java android'],
    ios: ['ios', 'swift', 'xcode', 'swiftui'],
    blockchain: ['blockchain', 'smart contract', 'dapp', 'ethereum', 'solidity'],
    'cyber-security': ['cyber-security', 'cybersecurity', 'security', 'networking', 'threat', 'penetration'],
    flutter: ['flutter', 'dart', 'flutter app'],
    go: ['go', 'golang'],
    java: ['java', 'jvm', 'spring'],
    typescript: ['typescript', 'ts'],
    javascript: ['javascript', 'js', 'ecmascript'],
    angular: ['angular', 'ng'],
    vue: ['vue', 'vuejs'],
    postgres: ['postgres', 'postgresql', 'sql'],
    c: ['c', 'c language', 'c programming'],
    data_science: ['data science', 'datascience', 'data scientist', 'data analysis', 'data analytics', 'machine learning', 'ml', 'statistics', 'python data'],
    cloud_computing: ['cloud computing', 'cloud', 'aws', 'azure', 'gcp', 'cloud devops'],
    web3: ['web3', 'ethereum', 'solidity', 'nft', 'dapp', 'decentralized'],
    ar_vr: ['ar', 'vr', 'augmented reality', 'virtual reality', 'unity', 'unreal', 'arkit', 'arcore'],
    embedded_systems: ['embedded', 'embedded systems', 'arduino', 'raspberry pi', 'iot', 'microcontroller'],
    data_engineering: ['data engineering', 'etl', 'big data', 'spark', 'hadoop', 'data warehouse', 'data pipelines']
  };

  function findRoadmapKey(goal) {
    const lower = goal.toLowerCase().trim();
    // 1. Check for exact domain match
    if (ROADMAPS[lower]) return lower;
    // 2. Fallback to keyword matching (whole words only)
    const words = lower.split(/\W+/);
    for (const [key, keywords] of Object.entries(KEYWORDS)) {
      if (keywords.some(word => words.includes(word))) {
        return key;
      }
    }
    return null;
  }

  function renderQuiz(quiz, domainKey) {
    if (!quiz) return '';
    let html = `<div class="quiz"><h2>${domainKey.charAt(0).toUpperCase() + domainKey.slice(1)} Quiz</h2>`;
    quiz.forEach((q, idx) => {
      html += `<div class="quiz-question-block">
        <div class="quiz-question">Q${idx + 1}: ${q.question}</div>
        <div class="quiz-options" data-qidx="${idx}">
          ${q.options.map((opt, oidx) => `<button type="button" class="quiz-option-btn" data-qidx="${idx}" data-oidx="${oidx}">${opt}</button>`).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-feedback-${idx}"></div>
      </div>`;
    });
    html += '</div>';
    return html;
  }

  function getRelatedDomains(goal) {
    const lower = goal.toLowerCase();
    // Score each domain by number of keyword overlaps
    const scores = Object.entries(KEYWORDS).map(([key, keywords]) => {
      let score = 0;
      keywords.forEach(word => {
        if (lower.includes(word)) score++;
      });
      return { key, score };
    });
    // Sort by score descending, filter out zero scores
    const related = scores.filter(s => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
    return related.map(r => r.key);
  }

  // Example section grouping for demonstration
  const SECTION_GROUPS = [
    { name: 'Beginner', range: [0, 1], icon: '🟢' },
    { name: 'Intermediate', range: [2, 3], icon: '🟡' },
    { name: 'Advanced', range: [4, 100], icon: '🔴' }
  ];

  function getStepIcon(step) {
    const s = step.step.toLowerCase();
    if (s.includes('project')) return '💻';
    if (s.includes('deploy') || s.includes('cloud')) return '☁️';
    if (s.includes('test')) return '🧪';
    if (s.includes('database')) return '🗄️';
    if (s.includes('api')) return '🔗';
    if (s.includes('framework')) return '🧩';
    if (s.includes('security')) return '🔒';
    if (s.includes('linux')) return '🐧';
    if (s.includes('version control') || s.includes('git')) return '🔀';
    return '📘';
  }

  function getStepBadge(idx) {
    if (idx === 0) return '<span class="badge required">Required</span>';
    if (idx === 1) return '<span class="badge optional">Optional</span>';
    if (idx >= 4) return '<span class="badge advanced">Advanced</span>';
    return '<span class="badge required">Required</span>';
  }

  function getProgressKey(domain) {
    return `roadmap-progress-${domain}`;
  }

  function loadProgress(domain, steps) {
    try {
      const raw = localStorage.getItem(getProgressKey(domain));
      if (!raw) return Array(steps).fill(false);
      const arr = JSON.parse(raw);
      return Array(steps).fill(false).map((_, i) => !!arr[i]);
    } catch { return Array(steps).fill(false); }
  }

  function saveProgress(domain, arr) {
    localStorage.setItem(getProgressKey(domain), JSON.stringify(arr));
  }

  function renderProgressBar(progressArr) {
    const completed = progressArr.filter(Boolean).length;
    const total = progressArr.length;
    const percent = Math.round((completed / total) * 100);
    return `<div style="margin:18px 0 24px 0;width:100%;"><div style="background:#e0e7ff;border-radius:8px;height:18px;width:100%;overflow:hidden;"><div style="background:#4f8cff;height:100%;width:${percent}%;transition:width 0.3s;"></div></div><div style="font-size:0.97rem;margin-top:4px;text-align:right;color:#2563eb;">${completed} of ${total} steps completed (${percent}%)</div></div>`;
  }

  function getNoteKey(domain, idx) {
    return `roadmap-note-${domain}-${idx}`;
  }
  function loadNote(domain, idx) {
    return localStorage.getItem(getNoteKey(domain, idx)) || '';
  }
  function saveNote(domain, idx, note) {
    localStorage.setItem(getNoteKey(domain, idx), note);
  }

  // Expose functions globally for use in other pages
  window.renderRoadmap = function(roadmap, title, originalGoal, filter = '') {
    lastRoadmap = roadmap; lastTitle = title; lastGoal = originalGoal;
    if (!roadmap) {
      let html = `<div style=\"color:red;\">No roadmap found for your goal. Please try a different keyword.</div>`;
      const related = getRelatedDomains(originalGoal || title);
      if (related.length > 0) {
        html += `<div style='margin-top:16px;'>Did you mean: <strong>${related.map(r => r.replace(/_/g, ' ')).join(', ')}</strong>?</div>`;
      }
      roadmapSection.innerHTML = html;
      return;
    }
    let progressArr = loadProgress(title, roadmap.length);
    let html = `<h2>${title.charAt(0).toUpperCase() + title.slice(1)} Roadmap</h2>`;
    html += renderProgressBar(progressArr);
    SECTION_GROUPS.forEach((section, sidx) => {
      let steps = roadmap.slice(section.range[0], section.range[1] + 1).map((step, idx) => {
        const realIdx = section.range[0] + idx;
        if (filter && !step.step.toLowerCase().includes(filter.toLowerCase()) && !step.description.toLowerCase().includes(filter.toLowerCase())) return '';
        const hasNote = !!loadNote(title, realIdx);
        return `<div class=\"roadmap-step-card\">\n        <div class=\"step-header\">\n          <span class=\"step-icon\">${getStepIcon(step)}</span>\n          <span class=\"step-title\">Step ${realIdx + 1}: ${step.step}</span>\n          ${getStepBadge(realIdx)}\n          <input type=\"checkbox\" class=\"step-checkbox\" data-step=\"${realIdx}\" ${progressArr[realIdx] ? 'checked' : ''} style=\"margin-left:12px;transform:scale(1.2);\" title=\"Mark as complete\" />\n          <button class=\"details-btn\" data-step=\"${realIdx}\" style=\"margin-left:10px;padding:3px 10px;font-size:0.95rem;background:#e0e7ff;color:#2563eb;border:none;border-radius:5px;cursor:pointer;\">Details</button>\n          <button class=\"notes-btn\" data-step=\"${realIdx}\" style=\"margin-left:8px;padding:3px 10px;font-size:0.95rem;background:#fef9c3;color:#b45309;border:none;border-radius:5px;cursor:pointer;\">📝 Notes${hasNote ? ' <span style=\"color:#f59e42;font-size:1.1em;\">•</span>' : ''}</button>\n        </div>\n        <div class=\"step-description\">${step.description}</div>\n        <div class=\"step-resources\">\n          ${step.resources.map((r, i) => `<a class=\"resource-btn\" href=\"${r}\" target=\"_blank\">Resource ${i + 1}</a>`).join('')}\n          <a class=\"resource-btn\" href=\"${step.youtube}\" target=\"_blank\">YouTube</a>\n        </div>\n      </div>`;
      }).join('');
      if (steps.replace(/\s/g, '')) {
        html += `<div class=\"section-block\"><div class=\"section-header\" data-section=\"${sidx}\"><span class=\"section-icon\">${section.icon}</span> <span class=\"section-title\">${section.name}</span> <span class=\"section-toggle\">[–]</span></div><div class=\"section-steps\">${steps}</div></div>`;
      }
    });
    html += `<div style=\"text-align:center;margin-top:32px;\"><a href=\"quiz.html?domain=${title}\" class=\"primary-btn\" style=\"background:linear-gradient(90deg,#ffb74d 60%,#e67c1b 100%);color:#fff;font-size:1.13rem;font-weight:600;border:none;border-radius:8px;padding:16px 32px;cursor:pointer;box-shadow:0 2px 8px #e67c1b22;transition:background 0.2s,box-shadow 0.2s;text-decoration:none;\"><span style=\"margin-right:8px;font-size:1.2em;\">▶️</span>Take Quiz</a></div>`;
    roadmapSection.innerHTML = html;
    // Collapsible logic
    roadmapSection.querySelectorAll('.section-header').forEach(header => {
      header.addEventListener('click', function() {
        const section = header.parentElement;
        const steps = section.querySelector('.section-steps');
        const toggle = header.querySelector('.section-toggle');
        if (steps.style.display === 'none') {
          steps.style.display = '';
          toggle.textContent = '[–]';
        } else {
          steps.style.display = 'none';
          toggle.textContent = '[+]';
        }
      });
    });
    // Progress tracking logic
    roadmapSection.querySelectorAll('.step-checkbox').forEach(cb => {
      cb.addEventListener('change', function() {
        const idx = parseInt(cb.getAttribute('data-step'));
        progressArr[idx] = cb.checked;
        saveProgress(title, progressArr);
        roadmapSection.querySelector('div').outerHTML = renderProgressBar(progressArr);
      });
    });
    // Step details modal logic
    roadmapSection.querySelectorAll('.details-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = parseInt(btn.getAttribute('data-step'));
        const step = roadmap[idx];
        showModal(`Step ${idx + 1}: ${step.step}`, `<div style='margin-bottom:10px;'>${step.description}</div><div><strong>Resources:</strong><ul>${step.resources.map(r => `<li><a href='${r}' target='_blank'>${r}</a></li>`).join('')}</ul><a href='${step.youtube}' target='_blank'>YouTube</a></div>`);
      });
    });
    // Notes modal logic
    roadmapSection.querySelectorAll('.notes-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = parseInt(btn.getAttribute('data-step'));
        const note = loadNote(title, idx);
        showModal(`Notes for Step ${idx + 1}`, `<textarea id='note-area' style='width:100%;height:100px;border-radius:6px;border:1px solid #cfd8dc;padding:8px;font-size:1rem;'>${note.replace(/</g, '&lt;')}</textarea><div style='margin-top:12px;text-align:right;'><button id='save-note-btn' style='background:#4f8cff;color:#fff;border:none;border-radius:5px;padding:7px 18px;font-size:1rem;cursor:pointer;'>Save Note</button></div>`);
        document.getElementById('save-note-btn').onclick = function() {
          const val = document.getElementById('note-area').value;
          saveNote(title, idx, val);
          document.getElementById('modal-container').classList.remove('active');
          renderRoadmap(roadmap, title, originalGoal, filter);
        };
      });
    });
  };

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const goal = input.value.trim();
    if (!goal) return;
    const key = findRoadmapKey(goal);
    renderRoadmap(ROADMAPS[key], key || goal, goal);
    // Show search section after roadmap is generated
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.style.display = 'block';
    }
  });

  // --- UI ENHANCEMENTS ---
  // Dark mode toggle
  const darkModeBtn = document.getElementById('darkModeToggle');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '�� Dark Mode';
  });

  // Search/filter logic
  const searchBar = document.getElementById('search-bar');
  let lastRoadmap = null, lastTitle = null, lastGoal = null;
  if (searchBar) {
    searchBar.addEventListener('input', function() {
      if (lastRoadmap && lastTitle) {
        renderRoadmap(lastRoadmap, lastTitle, lastGoal, searchBar.value);
      }
    });
  }

  // Modal logic
  function showModal(title, content) {
    const modal = document.getElementById('modal-container');
    if (modal) {
      modal.innerHTML = `<div class='modal-content'><span class='close-modal'>&times;</span><h3>${title}</h3><div>${content}</div></div>`;
      modal.classList.add('active');
      modal.querySelector('.close-modal').onclick = () => modal.classList.remove('active');
      modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };
    }
  }

  // Expose necessary functions globally for use in other pages
  window.findRoadmapKey = findRoadmapKey;
  window.showModal = showModal;
  window.loadNote = loadNote;
  window.saveNote = saveNote;
  window.ROADMAPS = ROADMAPS;
  window.KEYWORDS = KEYWORDS;
  window.SECTION_GROUPS = SECTION_GROUPS;
  window.getStepIcon = getStepIcon;
  window.getStepBadge = getStepBadge;
  window.loadProgress = loadProgress;
  window.saveProgress = saveProgress;
  window.renderProgressBar = renderProgressBar;
}
});