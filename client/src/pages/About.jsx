export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          About Sourav's Blogs
        </h1>

        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Welcome to <span className="font-semibold">Sourav's Blogs</span>!
            This platform is created by Sourav as a personal project to share
            insights, tutorials, and thoughts on technology and software
            development.
          </p>

          <p>
            Here, you'll find high-quality articles covering topics such as web
            development, programming languages, software engineering practices,
            and the latest trends in tech. I am passionate about learning and
            experimenting with new technologies, and aims to provide content
            that is both informative and engaging.
          </p>

          <p>
            We encourage readers to actively engage by leaving comments, asking
            questions, and sharing their thoughts. Building a collaborative
            community is key to learning, and Sourav's Blogs is designed to be a
            space where developers and tech enthusiasts can grow together.
          </p>

          <p className="text-center mt-8 text-gray-500 dark:text-gray-400">
            Thank you for visiting, and happy reading!
          </p>
        </div>
      </div>
    </div>
  );
}
