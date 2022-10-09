const articles = [
    {
        name: "learn-react",
        title: "9 things every React.js beginner should know",
        thumbnail: "https://learnwithshikha.com/wp-content/uploads/2020/11/z2xg2bpo.jpg",
        content: [
            `I've been using React.js for about 6 months now. In the grand scheme of things that's not very long at all, but in the ever-churning world of JavaScript frameworks, that just about qualifies you as a bearded elder! I've helped out a few people lately with React starter tips, so I thought it would be a good idea to write some of them up here to share more broadly. These are all either things that I wish I'd known when I started out, or things that really helped me 'get' React.
            I'm going to assume that you know the absolute basics; if the words component, props, or state are unfamiliar to you, then you might want to read the official Getting started or Tutorial pages. I'm also going to use JSX, because it's a much more succinct and expressive syntax for writing components.`,

            `Update, October 2022:
            It's been more than two years since I originally published this blog post. That of course a very long time in software development, and an even longer time in JavaScript. I still agree with a lot of what's written on this page, but definitely not all of it. Partly because the landscape itself has changed in the last couple of years, and partly because I've just changed my mind as I've learned more. I plan to publish a more comprehensive follow-up to this article, but in the short-term I'd like to issue a couple of corrections.
            Firstly, my blanket recommendation of Redux in point #5 is far too heavy-handed. Redux is a great library which solves genuine problems with state management in complex React applications, but it's important that you only use it if you actually have those problems. If you can't articulate why Redux is a good idea for your app, then you should put off using it, otherwise you risk making your application more complex rather than less. In addition, if you're a React beginner, trying to learn both React and Redux at the same time is just too hard. You should learn how to manage state properly with React first, and then learn Redux once you actually need it.
            Secondly, while I still agree with the general approach to testing that I outlined in point #7, Enzyme has since emerged as one of, if not the leading way to test your React applications. This is a topic that deserves its own dedicated blog post, but for now, my general recommendation would be to use Enzyme to write the kinds of component unit tests I describe in this post.
            Those are the two main things I want to add, other than to say that you should always take advice from random internet strangers with an active and sceptical mind, especially when the subject matter has changed a lot since the date of publication.`,
            `1️⃣ It's just a view library`,
            `2️⃣ Keep your components small`,
            `3️⃣ Write functional components`,
            `4️⃣ Write stateless components`,
            `5️⃣ Use Redux.js,`,
            `6️⃣ Always use propTypes`,
            `7️⃣ Use shallow rendering`,
            `8️⃣ Use JSX, ES6, Babel, Webpack, and NPM`,
            `9️⃣ Use the React and Redux dev tools`,
        ],
    },

    {
        name: "learn-node",
        title: "Sure Shot Ways To Improve And Scale Your Node js Performance",
        thumbnail: "https://res.cloudinary.com/practicaldev/image/fetch/s--Lvl1ZNKy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ph7yc1i1vqqgwpxegw5.png",
        content: [
            `Node Js is an open-source, cross-platform web application development platform developed on Google Chrome’s V8 JavaScript engine. It is a server-side that provides multiple JavaScript modules that help develop great web applications, especially in Nodejs.
            Node Js brings various advantages or features in software development, including fast development and negative buffering. It also provides MIT license to applications that are developed with Node Js.       
            Multiple big organizations have used Node Js in their web application development. The list includes eBay, PayPal, Uber, Yahoo, and many others. It proves that Nodejs is a preferred technology for web application development. However, it is required to tune Node Js performance to keep your web application up to date.          
            Therefore, the next part of the blog will provide all the tips to optimize the Nodejs applications.`,
            `🟢 Monitor & Profile Your Application`,
            `It is necessary to measure and monitor the Node Js performance of your existing Node application to have a better overall performance idea.
            Once you are aware of the performance of your application, you can easily optimize your web application to get maximum performance. Below are the few key points product owners can consider in making their web applications highly scalable.`,

            `🟢 Decrease Latency Via Caching`,
            `Caching is one of the common ways of improving the Node Js performance. Caching can be done for both client-side and server-side web applications.`,

            `🟢 Use HTTP / 2`,
            `Usage of HTTP/2 in the Node Js application will provide extra web browsing speed and decrease bandwidth usage. One of the main reasons to use HTTP/2 in your existing web application is to resolve the problem that used to occur in HTTP/1, which includes multiplexing and header compression.`,

            `🟢 Scale In multiple Machines With Load Balancer`,
            `Scaling your existing Node Js web application through various machines is required. It is required for web applications to run independently on multiple machines ( platform or operating systems ).`,

            `🟢 Stateless Authentication`,
            `Stateless authentication on the client-side with the help of JSON Web Token ( JWT ) provides great speed to the application. In this Stateless Authentication procedure, a web token is created whenever the user login into the website. It contains all the required user information, which is sent back to the respective user for authenticating all API requests.`,

            `🟢 Optimize Frontend`,
            `There is a significant requirement to keep your front-end short and simple whenever data is transferred. The data includes images and CSS files, so you should use bundlers to transform complex data into smaller ones.`,
        ],
    },
    {
        name: "my-thoughts-on-learning-react",
        title: "My thoughts on learning ReactJS",
        thumbnail: "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs.jpeg",
        content: [
            `I’m getting tired of reading “It’s just a library not a framework” argument written by fellow experts. So let me give you a fairly straight answer. Yes it is difficult!

            I’m doing my 5th project in React with a leading Research & Advisory company, and currently training three young professionals in React and bunch of other stuff, so I think I know what I’m saying when I say React is difficult.
            
            First of all, you will never use React alone to build anything in your life. Unless you think writing a stupid Todo app is the gold standard in React. When working on a real life application, the knowledge of following tools will constitute development in React.`,

            `1️⃣Redux (or any other equivalent library) for state management. React alone cannot (and should not) be used to manage the state of your application if at all you are developing a scalable solution for real life problems.`,
            `2️⃣Axios/Fetch/Superagent (library for performing API calls). Regardless of what backend technology you may use, you have to learn how to transfer data from backend to frontend and vice-versa.`,
            `3️⃣Webpack/Grunt (to bundle your code). Webpack: When To Use And Why`,
            `It’s a waste of time if you don’t consider above tools when learning React. Combine everything mentioned above with React and you have a full fledged framework.
            
            Now having said that, definitely there is a learning curve for both React and Redux. And it is not just about learning the terminologies. You have to do a lot of pre-thinking before writing a single line of code. And it will mostly revolve around designing and managing the data tree that you are going to have in your application. Trust me when I say this, development in React is a real pain in the ass until you wrap your head around the (React+Redux)’s flow and state management principles and some nasty errors that will make you realize that things may not always work as per the documentation.
            
            Once you get over the mess and find your own pattern of development in React, only then would you be able to enjoy working in React.
            
            I would say, don’t waste your time learning React.js alone. Always start with a tutorial series that covers every single library mentioned above. PluralSight has a fantastic course which covers just that.
            
            And please, don’t end up in the category of those who think developing a Todo app is enough to learn React. It is not! Nobody in the IT industry uses React alone.`
        ],
    },
    {
        name: "learn-mongodb",
        title: "MongoDB vs RDBMS and it’s Advantages",
        thumbnail: "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
        content: [
            `⚫ Why MongoDB?`,
            `In this section, we will discuss the advantages of MongoDB:`,

            `⭕ Rich Object Model`,
            `⭕ Secondary Indexes`,
            `⭕ Replication and high availability`,
            `⭕ Native Aggregation`,
            `⭕ Schema-less Models`,

            `Let us discuss each of these in details.`,
            `🔴Rich Object Model: MongoDB supports a rich and expressive object model.Objects can have properties and objects can be nested in one another(for multiple levels).This model is very “object - oriented” and can easily represent any object structure in your domain.You can also index the property of any object at any level of the hierarchy – this is brilliantly powerful!`,
            `🔴Secondary Indexes: Indexes speed up the queries significantly but they also slow down writes.Secondary indexes are a first - class construct in MongoDB.This makes it easy to index any property of an object stored in MongoDB even if it is nested.This makes it really easy to query from the database based on these secondary indexes.`,
            `🔴Replication and high availability: MongoDB supports a “single master” model.This means you have a master node and a number of slave nodes.In case the master goes down, one of the slaves is elected as master.This process happens automatically but it usually takes time, before the 3.2 release, 10 - 40 seconds were taken but after the release of MongoDB 3.2 and later, failures are detected faster and a new leader elected in under 2 - 10 seconds.The trade - off for multi - master is that the reads are slower and scale less effectively because the client must read from multiple nodes to ensure consistency.During the time of new leader election, your replica set is down and cannot take writes.`,
            `🔴Native Aggregation: MongoDB has a built -in Aggregation framework to run an ETL(Extract, transform and load) pipeline to transform the data stored in the database.This is great for small to medium jobs but as your data processing needs become more complicated the aggregation framework becomes difficult to debug.`,
            `🔴Schema - less Models: MongoDB, allows you to not enforce any schema on your documents.While this was the default in prior versions, in the newer version you have the option to enforce a schema for your documents.Each document in MongoDB can have a different structure and it is up to your application to interpret the data.While this is not relevant to most applications, in some cases the extra flexibility is important.Schema - less models mean that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection’s documents may hold different types of data.`,
            `⚫ Advantages of MongoDB over RDBMS:`,
            `MongoDB is schema-less. It is a document database in which one collection holds different documents. But in RDBMS firstly need to design your tables, data structure, relations first and then only you can start coding.
            There may be the difference between the number of fields, content and size of the document from one to other. But in RDBMS every record must adhere to a  particular predefined schema.
            MongoDB is Horizontally scalable i.e we can add more servers(sharding) but RDBMS is only vertically scalable i.e increasing RAM.
            MongoDB emphasizes on CAP theorem (Consistency, Availability, and Partition tolerance) but RDBMS emphasizes on ACID properties (Atomicity, Consistency, Isolation and Durability).
            MongoDB is best suitable for hierarchical data storage but RDBMS is not suitable for hierarchical data storage.
            MongoDB supports JSON query language along with SQL but RDBMS supports SQL query language only.
            MongoDB is easy to set up, configure and run in comparison to the RDBMS. It’s Java client is also very easy to use.
            MongoDB is almost 100 times faster than traditional database system like RDBMS which is slower in comparison with the NoSQL databases.
            There is no support for complex joins in MongoDB but RDBMS supports complex joins which can be difficult to understand and take too much time to execute.
            It uses internal memory for storing working sets resulting in faster access time.
            MongoDB supports deep query-ability i.e we can perform dynamic queries on documents using the document-based query language that’s nearly as powerful as SQL.
            In MongoDB, Conversion/mapping of application objects to database objects is not needed.`,
        ],
    },
    {
        name: "learn-express",
        title: "Get Started with node.js and Express",
        thumbnail: "https://ourcodeworld.com/public-media/articles/articleocw-57e57b89889ad.png",
        content: [
            `ExpressJS is a web application framework for Node.js that uses the node package manager (npm). ExpressJS is built on top of Connect, which is a web server abstraction layer module. The goal of ExpressJS is to provide a fast and flexible development platform for creating web applications.
            Articles related to Expressjs include tutorials on how to get started with Express, best practices, and common mistakes in using Express apps. Additional topics related to express include Node.JS frameworks, JavaScript frameworks, and job aids for developers.`,
            `🔵 Introduction`,
            `In this blog, we will be going through the basics of node Js and express and will see how we can create a server with the help of Express.`,
            `🔵 Node Js and Express`,
            `NodeJs is an open-source environment that lets you run javascript outside the browser. With the help of node JS, we can create backend services like APIs whereas Express is a free and open-source framework for node JS. Express was created to make APIs and web applications with ease with the help of node js. 
            So let’s get started with setting up the project.`,
            `🔵 Setting up the Project`,
            `To install node JS, you can go to this link and download it. After that, you can run the command`,
            `🔵 Creating a server with Express and Node`,
            `Now create a file app.js and write this code in it and let us understand it.`,

            `The first line is like importing the express module so that we can use its functionalities. Then we call express like a function so that the app object will now have all the functionalities provided by express.

            Next, we create middleware. Now the question arises what is middleware?
            
            Middlewares are basically functions that have access to the request object, response object, and the next function. When we call the next in a middleware, it indicates that execute the next middleware instead of stopping at this middleware only. These middlewares can change the request and response object and can call the next middleware in the stack.
            
            To define a middleware, we use the app.use() function which in turn takes a function as a parameter and there we have a request, response, and next.
            
            In the first middleware we have just set the headers and in the second middleware we are sending the response with the help of send function.
            
            And at last, we call the listen function with the port on which the server will run.
            
            Now let us run our server with this command`,
        ]
    },
];

export default articles;


