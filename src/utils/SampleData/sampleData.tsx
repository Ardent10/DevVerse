// 1. Home Page
interface chipsData {
  key: number | string;
  label: string;
}

export const chipsArray: chipsData[] = [
  { key: 0, label: "HTML" },
  { key: 1, label: "jQuery" },
  { key: 2, label: "CSS" },
  { key: 3, label: "JavaScript" },
  { key: 4, label: "React" },
  { key: 5, label: "Vue.js" },
  { key: 6, label: "NextJs" },
  { key: 7, label: "ThreeJs" },
  { key: 8, label: "Python" },
  { key: 9, label: "Java" },
  { key: 10, label: "Spring Boot" },
  { key: 11, label: "Git" },
  { key: 12, label: "GitHub" },
  { key: 13, label: "ChatGPT" },
  { key: 14, label: "GPT-4" },
  { key: 15, label: "AI" },
];

export const eventsArray = [
  {
    key: 0,
    label: "Google Summer of Code",
    date: "25th March, 2023",
    icon: "/Images/gsoc.webp",
  },
  {
    key: 1,
    label: "LFX Mentorship",
    date: "20th April, 2023",
    icon: "/Images/lfx.png",
  },
  {
    key: 2,
    label: "MLH Fellowship",
    date: "25th June, 2023",
    icon: "/Images/mlh.png",
  },
  {
    key: 3,
    label: "Summer Of Bitcoin",
    date: "10th May, 2023",
    icon: "/Images/sob.png",
  },
  {
    key: 4,
    label: "HacktoberFest",
    date: "01st October, 2023",
    icon: "/Images/hacktoberfest.png",
  },
];

// 2. Post Component

export const postData = [
  {
    headerImg: "/Images/boy.png",
    headerTitle: "Zakariya Khan",
    publishDate: "March 20, 2023",
    postTitle: "Are software engineer job is in danger?",
    postMedia: "/Images/gpt4.png",
    postDescription:
      "ChatGPT-4 \n\n It is unlikely that the software engineer job is in danger in the near future. In fact, according to the US Bureau of Labor Statistics, employment of software developers is projected to grow 22% from 2019 to 2029, which is much faster than the average for all occupations. There are several reasons for this projected growth. First, the demand for software and technology is increasing rapidly as businesses and organizations continue to digitize their operations. \n\n Second, new technologies such as artificial intelligence, machine learning, and blockchain are creating new opportunities for software engineers to develop innovative products and services. Finally, the growth of the Internet of Things (IoT) is creating a demand for software engineers who can develop applications and systems to connect and manage large numbers of devices.\n\n  That being said, there are certain trends and developments that could impact the software engineering profession in the long term.For example, the increasing use of low-code and no-code platforms could potentially reduce the demand for traditional software engineers. Additionally, the rise of automation and artificial intelligence could eventually lead to the development of software that can write and maintain itself, which could potentially impact the need for human software engineers.",
    tags: [
      { key: 1, label: "ChatGPT" },
      { key: 2, label: "GPT-4" },
    ],
  },
  {
    headerImg: "/Images/girl.jpg",
    headerTitle: "Nancy Cole",
    publishDate: "March 25, 2023",
    postTitle: "🔥 Firebase Realtime Database",
    postMedia:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*7hyRM50LJZP5sgEg3a76Xw.png",
    postDescription:
      "The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.",
    tags: [
      { key: 1, label: "Firebase" },
      { key: 2, label: "Firebase RTDS" },
    ],
  },
  {
    headerImg: "/Images/boy1.jpg",
    headerTitle: "Andrew Tate",
    publishDate: "April 01, 2023",
    postTitle: "Short Introduction to Event Loop:",
    postMedia: "/Images/post2.jpg",
    postDescription:
      "The JavaScript event loop is a key part of how JavaScript handles asynchronous code. In JavaScript, asynchronous code is often handled using callbacks, promises, and async/await. When you write asynchronous code, you are essentially telling JavaScript to run certain code at a later time, once some operation (like a network request) has been completed.To handle this asynchronous code, JavaScript uses the event loop. The event loop is a mechanism for executing code in a non-blocking way. It works by maintaining a queue of tasks that need to be executed, and continuously checking that queue for any tasks(ready to execute) The working architecture of the event loop: \n\n 1. When you write asynchronous code, that code is not executed immediately. Instead, it is added to a task queue. \n\n 2. The event loop continuously checks the task queue for any tasks that are ready to be executed. When it finds one, it pulls it off the queue and executes it. \n\n 3. Asynchronous code that uses callbacks, promises,or async/await is executed in a specific way. When a function that contains asynchronous code is called, the synchronous parts of the function are executed immediately. The asynchronous parts are added to the task queue for later.\n\n 4. Once all synchronous code has been executed, the event loop starts processing the tasks in the queue. As each task is executed, any callbacks or promises that were waiting for that task to complete are also executed.\n\n 5. This process continues indefinitely. Asynchronous tasks are added to the queue as necessary, and the event loop continuously checks the queue for any tasks that are ready to be executed.\n\n It's important to note that the event loop is single-threaded, which means that only one task can be executed at a time. This is why it's so important to write efficient, non-blocking code in JavaScript. If you have long-running synchronous code, it can block the event loop.\n\n In summary, the JavaScript event loop is a mechanism for handling asynchronous code. It maintains a queue of tasks that need to be executed and continuously checks that queue for any tasks that are ready to be executed.",
    tags: [
      { key: 1, label: "ChatGPT" },
      { key: 2, label: "GPT-4" },
    ],
  },
];

// 3. Profile Preview Component
export const userProfilePreview = {
  name: "Zakariya Khan",
  avatar: "Images/boy.webp",
  bgImg: "/Images/bgImg.webp",
  bio: "• Aspiring GSoC mentee 2023 • KubeCon22' | • Top Contributor @OpenForce22 | • Open Source Enthusiast | HacktoberFest21'22' | • Ardent Learner & Writer",
  follower: 50,
  following: 20,
  location: "Delhi, India",
  portfolio: "https://zakariya-ardent10.vercel.app/",
  github: "https://github.com/Ardent10",
};
