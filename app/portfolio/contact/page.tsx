"use client";
import { useState } from "react";
import {
  EnvelopeIcon,
  BriefcaseIcon,
  LinkIcon,
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  const [openSections, setOpenSections] = useState({
    contacts: false,
    findMeAlsoAt: false,
    cv: false,
  });
  // Step 1: State to store the input value
  const [inputTextName, setInputTextName] = useState("");
  const [inputTextEmail, setInputTextEmail] = useState("");
  const [inputTextMessage, setInputTextMessage] = useState("");
  const today = new Date();
  // const day = today.getDay();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  // const currentDate = month + "/" + date + "/" + year;
  const currentDate = today.toDateString();

  // Step 2: Update state as the user types
  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextName(e.target.value);
  };
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextEmail(e.target.value);
  };
  const handleMessageInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputTextMessage(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row grow h-full">
        <div className="flex flex-col border-r border-lines-1 lg:w-3/12">
          <div className="flex flex-col">
            <button
              className="border-b border-lines-1 py-2 px-4 font-bold flex items-center"
              onClick={() =>
                setOpenSections((prev) => ({
                  ...prev,
                  contacts: !prev.contacts,
                  findMeAlsoAt: false,
                  cv: false,
                }))
              }
            >
              <ChevronRightIcon
                className={`h-4 w-4 inline-block mr-2 transform transition-transform duration-300 ${
                  openSections.contacts ? "rotate-90" : ""
                }`}
              />
              contacts
            </button>
            <div
              className={`gap-2 py-2 px-4 transition-all duration-300 ease-in-out ${
                openSections.contacts ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5" />
                <a href="mailto:yusafsaddiq@gmail.com">&nbsp;Email</a>
              </div>
              <div className="flex items-center">
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                <a
                  href="https://www.linkedin.com/in/yusaf-saddiq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="border-b border-lines-1 py-2 px-4 font-bold flex items-center"
              onClick={() =>
                setOpenSections((prev) => ({
                  ...prev,
                  contacts: false,
                  findMeAlsoAt: !prev.findMeAlsoAt,
                  cv: false,
                }))
              }
            >
              <ChevronRightIcon
                className={`h-4 w-4 inline-block mr-2 transform transition-transform duration-300 ${
                  openSections.findMeAlsoAt ? "rotate-90" : ""
                }`}
              />
              find-me-also-at
            </button>
            <div
              className={`flex flex-col gap-2 py-2 px-4 transition-all duration-300 ease-in-out ${
                openSections.findMeAlsoAt ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center">
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                <a href="#">&nbsp;Instagram</a>
              </div>
              <div className="flex items-center">
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                <a href="#">&nbsp;GitHub</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="border-b border-lines-1 py-2 px-4 font-bold flex items-center"
              onClick={() =>
                setOpenSections((prev) => ({
                  ...prev,
                  contacts: false,
                  findMeAlsoAt: false,
                  cv: !prev.cv,
                }))
              }
            >
              <ChevronRightIcon
                className={`h-4 w-4 inline-block mr-2 transform transition-transform duration-300 ${
                  openSections.cv ? "rotate-90" : ""
                }`}
              />
              cv
            </button>
            <div
              className={`flex flex-col gap-2 py-2 px-4 transition-all duration-300 ease-in-out ${
                openSections.cv ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center">
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                &nbsp;
                <a
                  className="py-1 px-2 bg-accent-1 text-primary-1 text-sm rounded-md"
                  href="#"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-9/12 overflow-auto">
          {/* Form */}
          <div className="input-form flex flex-col p-4 gap-6 lg:w-6/12 items-center justify-start border-r border-lines-1">
            <form
              action="https://formspree.io/f/mblonpyj"
              method="POST"
              className="flex flex-col gap-4"
            >
              <h1 className=" text-2xl font-bold">Contact Form</h1>
              <p className="">
                Please fill out the form below to get in touch with me.
              </p>
              {/* Step 2: Input fields bound to state */}
              <label className="text-left flex flex-col gap-2">
                _name:
                {/* Step 3: Input field bound to state */}
                <input
                  className="rounded-lg bg-primary-3 border-2 border-lines-1"
                  name="name"
                  type="text"
                  value={inputTextName}
                  onChange={handleNameInputChange}
                  placeholder=""
                  required
                />
              </label>

              <label className="text-left flex flex-col gap-2">
                _email:
                {/* Step 3: Input field bound to state */}
                <input
                  className="rounded-lg bg-primary-3 border-2 border-lines-1"
                  type="email"
                  name="email"
                  value={inputTextEmail}
                  onChange={handleEmailInputChange}
                  placeholder=""
                  required
                />
              </label>
              <label className="text-left flex flex-col gap-2">
                _message:
                {/* Step 3: Input field bound to state */}
                <textarea
                  className="rounded-lg bg-primary-3 border-2 border-lines-1"
                  name="message"
                  value={inputTextMessage}
                  onChange={handleMessageInputChange}
                  placeholder=""
                  required
                />
              </label>
              <button
                id="submit-button"
                type="submit"
                className="py-2 px-4 bg-lines-1 text-secondary-4 rounded-lg"
              >
                submit-message
              </button>
            </form>
          </div>
          {/* Code Section */}
          <div className="output flex lg:w-6/12 items-center justify-center">
            {/* Step 4: Display the input text */}
            <div className="border border-lines-1 rounded-xl p-4 bg-primary-1 flex flex-row gap-12 overflow-auto">
              <div className="numbers text-right">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
              </div>
              <div className="code flex flex-col">
                <p className="text-secondary-4 inline">
                  <span className="text-secondary-3">const</span>
                  &nbsp;
                  <span className="text-accent-2">button</span>
                  &nbsp;
                  <span className="text-secondary-1">&#61;</span>
                  &nbsp;
                  <span className="text-secondary-3">
                    document.querySelector
                  </span>
                  &nbsp;
                  <span className="text-secondary-1">&#40;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;&#35;sendBtn&#39;</span>
                  &nbsp;
                  <span className="text-secondary-1">&#41;&#59;</span>
                </p>
                &nbsp;
                <p className="text-secondary-4 inline">
                  <span className="text-secondary-3">const</span>
                  &nbsp;
                  <span className="text-accent-2">message</span>
                  &nbsp;
                  <span className="text-secondary-1">&#61;</span>
                  &nbsp;
                  <span className="text-secondary-1">&#123;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;name&#39;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#58;</span>
                  &nbsp;
                  <span className="text-secondary-1">
                    &#34;{inputTextName}&#34;
                  </span>
                  <span className="text-secondary-3">&#44;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;email&#39;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#58;</span>
                  &nbsp;
                  <span className="text-secondary-1">
                    &#34;{inputTextEmail}&#34;
                  </span>
                  <span className="text-secondary-3">&#44;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;message&#39;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#58;</span>
                  &nbsp;
                  <span className="text-secondary-1">
                    &#34;{inputTextMessage}&#34;
                  </span>
                  <span className="text-secondary-3">&#44;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;date&#39;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#58;</span>
                  &nbsp;
                  <span className="text-secondary-1">
                    &#34;{currentDate}&#34;
                  </span>
                  <br />
                  <span className="text-secondary-1">&#125;</span>
                  <span className="text-secondary-3">&#59;</span>
                </p>
                &nbsp;
                <p className="text-secondary-4 inline">
                  <span className="text-accent-2">button</span>
                  <span className="text-secondary-3">.addEventListener</span>
                  &nbsp;
                  <span className="text-secondary-1">&#40;</span>
                  <span className="text-accent-1">&#39;click&#39;</span>
                  <span className="text-secondary-1">&#41;&#44;</span>
                  &nbsp;
                  <span className="text-secondary-1">&#40;</span>&nbsp;
                  <span className="text-secondary-1">&#41;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#61;&#62;</span>
                  &nbsp;
                  <span className="text-secondary-1">&#123;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-2">form</span>
                  <span className="text-secondary-3">.send</span>
                  &nbsp;
                  <span className="text-secondary-1">&#40;</span>
                  <span className="text-accent-2">message</span>
                  <span className="text-secondary-1">&#41;</span>
                  <span className="text-secondary-3">&#59;</span>
                  <br />
                  <span className="text-secondary-1">&#125;</span>
                  <span className="text-secondary-1">&#41;&#59;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
