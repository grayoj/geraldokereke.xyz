import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./App.css";
import { FiMail } from "react-icons/fi";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { projects } from "./Projects";
import ListItem from "./ListItem";

function App() {
  const [open, setOpen] = useState(false);
  const handleViewClick = () => {
    console.log("This is clicked");
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <section className="container mx-auto">
          <div className="max-w-lg mx-auto bg-[#35281e] shadow-lg rounded-lg overflow-hidden py-8">
            <div className="flex justify-center">
              <img
                className="rounded-full h-32 w-32 mt-6"
                src="https://i.ibb.co/djfSPm6/1698319907243.jpg"
                alt="Profile"
              />
            </div>
            <div className="text-center mt-3 mx-4">
              <h2 className="text-lg font-semibold text-white uppercase">
                Gerald Maduabuchi
              </h2>
              <p className="text-white">Software Engineer</p>
              <p className="text-white text-sm">
                I am a software engineer exploring types, tensors, and
                distributed systems.
              </p>
              <button
                onClick={() => setOpen(true)}
                className="bg-[#f5f5f0] text-sm my-2 px-3 py-2 rounded-sm"
              >
                View More
              </button>
            </div>
            <div className="flex justify-center my-4">
              <a
                href="https://twitter.com/geraldabuchi"
                className="text-white mx-2 rounded-full p-2"
              >
                <BsTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/gerald-maduabuchi-61bb29233/"
                className="text-white mx-2 rounded-full p-2"
              >
                <BsLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/grayoj"
                className="text-white mx-2 rounded-full p-2"
              >
                <BsGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-white mx-2 rounded-full p-2">
                <BsDiscord className="w-6 h-6" />
              </a>
              <a
                href="mailto:geraldmokereke@gmail.com"
                className="text-white mx-2 rounded-full p-2"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="bg-[#35281e] py-6 px-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          {" "}
                          Checkout the blog{" "}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md text-white hover:text-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-white">
                          I write some articles about what I'm learning and
                          experiencing over{" "}
                          <a href="https://geraldmokereke.xyz">here</a>
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-1 py-6 px-4 sm:px-6">
                      <div className="absolute inset-0 py-6 px-4 sm:px-6">
                        <p className="text-lg font-semibold">My Projects</p>
                        <p className="text-sm">
                          I enjoy building projects that I can use, that people
                          can use. Below are the few projects I've worked on:
                        </p>
                        <div className="container mx-auto py-4">
                          {projects.map((project: Project, index: number) => (
                            <ListItem
                              key={index}
                              title={project.title}
                              description={project.description}
                              languages={project.languages}
                              onViewClick={handleViewClick}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default App;
