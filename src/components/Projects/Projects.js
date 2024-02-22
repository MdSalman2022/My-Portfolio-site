import React, { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "./Project.css";
import { animateScroll as scroll } from "react-scroll";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "framer-motion";

const Projects = () => {
  const scrolltop = () => {
    scroll.scrollToTop();
  };

  let [projects, setProjects] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  let projectType = [
    "",
    "ecommerce",
    "blog",
    "portfolio",
    "business",
    "others",
  ];

  useEffect(() => {
    fetch(`https://salman-reactdev.vercel.app/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    if (type === "") {
      setFilterData(projects);
    } else {
      setFilterData(
        projects.filter((project) => project.project_type === type)
      );
    }
  }, [type]);

  console.log(type);
  console.log(filterData);

  if (count > 5) {
    setCount(0);
  } else if (count < 0) {
    setCount(5);
  }

  const handleType = async (n) => {
    await setCount((count) => {
      const newCount = count + n;
      setType(projectType[newCount]);
      return newCount;
    });
  };

  useEffect(() => {
    setType(projectType[count]);
  }, [count]);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  console.log(slidesPerView);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div
      className="lg:py-10 px-5 lg:px-16 container mx-auto"
      id="Projects"
      data-aos="zoom-out"
      data-aos-duration="500"
    >
      <div className="flex lg:flex-row flex-col justify-between gap-2">
        <div className="flex flex-col mb-5">
          <p className="text-3xl text-primary font-bold py-2">//Projects</p>
          <span
            ref={ref}
            className={`transition-all duration-1000 delay-100 ${
              isInView ? "w-48" : "w-0"
            } h-1 bg-primary`}
          ></span>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-3">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setType("")}
              className={`btn-sm rounded-3xl btn-primary transition-all duration-300 border ${
                type !== "" ? "btn-outline" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setType("ecommerce")}
              className={`btn-sm rounded-3xl transition-all duration-300 border btn-primary ${
                type !== "ecommerce" ? "btn-outline" : ""
              }`}
            >
              E-Commerce
            </button>
            <button
              onClick={() => setType("blog")}
              className={`btn-sm rounded-3xl transition-all duration-300 border btn-primary ${
                type !== "blog" ? "btn-outline" : ""
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setType("portfolio")}
              className={`btn-sm rounded-3xl transition-all duration-300 border btn-primary ${
                type !== "portfolio" ? "btn-outline" : ""
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setType("business")}
              className={`btn-sm rounded-3xl transition-all duration-300 border btn-primary ${
                type !== "business" ? "btn-outline" : ""
              }`}
            >
              Business
            </button>
            <button
              onClick={() => setType("others")}
              className={`btn-sm rounded-3xl transition-all duration-300 border btn-primary ${
                type !== "others" ? "btn-outline" : ""
              }`}
            >
              Other's
            </button>
          </div>
          <div className="flex lg:justify-center justify-between gap-3 w-full md:w-32 text-white">
            <button onClick={() => handleType(-1)}>
              <FaArrowLeft
                className="lg:p-5 p-2 text-4xl lg:text-6xl border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-neutral transition-all duration-300"
                disabled
              />
            </button>
            <button onClick={() => handleType(1)}>
              <FaArrowRight className="lg:p-5 p-2 text-4xl lg:text-6xl border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-neutral transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-3 gap-10 py-5 grid-cols-1 justify-items-center" > */}
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper text-white mt-10"
      >
        {filterData &&
          type !== "" &&
          filterData?.map((project, index) => (
            <SwiperSlide key={index} className="pb-10">
              <div className="rounded-xl  w-full  transition-all duration-300 ease-in-out group relative hover:bg-accent  card card-compact bg-base-100 flex flex-row  flex-wrap lg:w-full justify-center  gap-2 shadow-lg  ">
                <figure className="h-full relative">
                  <LazyLoadImage
                    className="object-cover rounded-xl border-2 border-white"
                    src={project.img[0]}
                    height="450px"
                    width="750px"
                    alt="projects"
                  />
                  <div className="absolute shadow-2xl  bg-neutral bg-opacity-80 transition-all duration-300 bottom-0 w-full h-full flex flex-col justify-start items-start  opacity-0 group-hover:h-44 group-hover:opacity-100 ">
                    <div className="flex justify-start text-left">
                      <div className="flex flex-col justify-start items-start gap-4 px-8 py-5">
                        <div className="text-2xl font-semibold">
                          {project?.title}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <div className="badge badge-outline" key={i}>
                              {tech}
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-5">
                          <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500">
                            <a
                              href={project.sitelink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Live Site
                            </a>
                          </button>
                          <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500">
                            <a
                              href={project.codelink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Code Link
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="absolute bottom-5 right-5 ">
                        <Link
                          onClick={scrolltop}
                          to={`/projects/${project._id}`}
                        >
                          <button className="btn text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500">
                            Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        {type === "" &&
          projects?.map((project, index) => (
            <SwiperSlide key={index} className="pb-10">
              <div className="rounded-xl  w-full  transition-all duration-300 ease-in-out group relative hover:bg-accent  card card-compact bg-base-100 flex flex-row  flex-wrap lg:w-full justify-center  gap-2 shadow-lg  ">
                <figure className="h-full relative">
                  <LazyLoadImage
                    className="object-cover rounded-xl border-2 border-white"
                    src={project.img[0]}
                    height="450px"
                    width="750px"
                    alt="projects"
                  />
                  <div className="absolute  shadow-2xl border border-white  bg-neutral bg-opacity-80 transition-all duration-300 bottom-0 w-full h-full flex flex-col justify-start items-start  opacity-0 group-hover:h-44 group-hover:opacity-100 ">
                    <div className="flex justify-start text-left">
                      <div className="flex flex-col justify-start items-start gap-4 px-8 py-5">
                        <div className="text-2xl font-semibold">
                          {project?.title}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <div className="badge badge-outline" key={i}>
                              {tech}
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-5">
                          <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500">
                            <a
                              href={project.sitelink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Live Site
                            </a>
                          </button>
                          <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500">
                            <a
                              href={project.codelink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Code Link
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="absolute bottom-5 right-5 ">
                        <Link
                          onClick={scrolltop}
                          to={`/projects/${project._id}`}
                        >
                          <button className="btn text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500">
                            Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        {type !== "" && filterData.length === 0 && (
          <div className="text-center text-2xl font-semibold h-96 flex flex-col justify-center items-center">
            No Projects Found
          </div>
        )}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default Projects;
