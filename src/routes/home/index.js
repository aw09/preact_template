import { h } from 'preact';
import './style.css';

const Home = () => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <a href="https://preactjs.com">
        <img src="../../assets/preact-logo.svg" alt="Preact Logo" class="h-40 w-40" />
      </a>
      <h1 class="text-3xl font-bold mt-4">Get Started Building PWAs with Preact-CLI</h1>
      <section class="mt-8 space-y-4">
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          link="https://preactjs.com/tutorial/"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, check out our docs for where Preact differs"
          link="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Preact-CLI"
          description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
          link="https://github.com/preactjs/preact-cli#preact-cli--"
        />
      </section>
    </div>
  );
};

const Resource = ({ title, description, link }) => (
  <div class="p-4 bg-white rounded shadow-md">
    <h2 class="text-xl font-semibold">{title}</h2>
    <p class="mt-2">{description}</p>
    <a href={link} class="text-blue-500 hover:underline mt-2 block">Learn more</a>
  </div>
);

export default Home;