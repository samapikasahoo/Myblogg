import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://www.indiatravelblog.com/images/IndiaTravelBlog.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-900">
                The Authentic Indian Travel Blog
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed">
                Planning a vacation in India? Read the true Indian travel blogs
                from the real travelers who have experienced the tourist
                destinations in the country. Follow us to learn more about the
                first-hand experience of vacation stay at various destinations
                in India. Do you like to share your vacation experience? Be a
                guest blogger with us and share your experience about any
                destinations in India. We do accept travel stories from those
                who are interested in exploring places and like to share the
                experience with the world.
              </p>
            </div>
          </div>
        </section>
        <div className="pt-21" style={{paddingTop:"3.3rem"}}><Footer/></div>
      </div>
    </>
  );
};

export default Home;
