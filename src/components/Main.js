import React from "react";
import {useState} from "react";
import Checkbox from "./Checkbox";

function Main() {
  const [randomQuestion, setRandomQuestion] = useState(10);
  const [seconds, setSeconds] = useState(45);
  const [score, setScore] = useState(80);
  const [toggle, setToggle] = useState(true);
  const [minutes, setMinutes] = useState(30);
  const [attemps, setAttemps] = useState(3);

  function AddQuestion() {
    setRandomQuestion(randomQuestion + 1);
  }

  function subtractQuestion() {
    setRandomQuestion(randomQuestion > 0 ? randomQuestion - 1 : randomQuestion);
  }

  function incrementTime() {
    setSeconds(seconds + 5);
  }

  function decrementTime() {
    setSeconds(seconds > 0 ? seconds - 5 : seconds);
  }

  function addScore() {
    setScore(score + 10);
  }

  function subtractScore() {
    setScore(score > 0 ? score - 10 : score);
  }

  function addMinutes() {
    setMinutes(minutes + 1);
  }

  function subtractMinutes() {
    setMinutes(minutes > 0 ? minutes - 1 : minutes);
  }

  function addAtt() {
    setAttemps(attemps + 1);
  }

  function subtractAtt() {
    setAttemps(attemps > 0 ? attemps - 1 : attemps);
  }

  function ToggleSwitch() {
    setToggle(!toggle);
  }

  function addQuestion() {

    var boxWrapper = document.getElementById("questions-container");
    var children = boxWrapper.children;
    var node = document.getElementById("question");
    var numberOfChildren = boxWrapper.children.length
    
    console.log(numberOfChildren)

    for (let i = numberOfChildren; i <= numberOfChildren; i++) {
     var clone = node.cloneNode(true);
    clone.setAttribute("id", "Question"+i)
     boxWrapper.appendChild(clone);
      console.log(i)
    }

    var elHeight = document.querySelector(".second-container");
    elHeight.style.height = "auto";
  }
      function CloseQ(){


      }
  

  return (
    <>
    
      <div className="head">
        <h2>Edit Training "Working At Height"</h2>
        <p className="cancel">Cancel</p>
        <button type="button" className="btn-orange">
          Update & Save
        </button>
      </div>
      <div className="first-container">
        <div className="child-container-1">
          <div className="boxes">
            <div>
              <label className="label" for="">
                Category
              </label>
              <button className="add-btn">Add new +</button>
              <div className="safety-box">
                <span>
                  <svg
                    className="safety-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_401_192)">
                      <path
                        d="M8.99408 1.092C7.50008 1.092 6.33958 0.546 5.80908 0V7.646H12.1796V0C11.6486 0.546 10.5001 1.092 8.99408 1.092Z"
                        fill="#994308"
                      />
                      <path
                        d="M14.4545 3.979V1.584C14.4545 1.0425 14.1175 0.571 13.637 0.4395L12.0275 0L8.994 7.2945L5.9605 0L4.351 0.4395C3.8705 0.571 3.5335 1.043 3.5335 1.584V3.9785C3.5335 5.81 2.1755 7.2945 0.5 7.2945V16.8125C0.5 17.4155 0.9755 17.905 1.5615 17.905H7.477C8.3145 17.905 8.994 17.1625 8.994 16.247C8.994 17.1625 9.673 17.905 10.511 17.905H16.4265C17.013 17.905 17.4885 17.416 17.4885 16.8125V7.2945C15.8125 7.2945 14.4545 5.81 14.4545 3.979Z"
                        fill="#EB7421"
                      />
                      <path
                        d="M0.5 14.5H8.994V16H0.5V14.5ZM17.488 16H8.994V14.5H17.488V16ZM0.5 11H8.994V12.5H0.5V11ZM17.488 12.5H8.994V11H17.488V12.5Z"
                        fill="#FCFB65"
                      />
                      <path
                        d="M6 11.5V0.095L5.9605 0L4.5 0.399V11.5H6ZM13.5 11.5V0.4025L12.0275 0L12 0.0665V11.5H13.5Z"
                        fill="#FCFB65"
                      />
                      <path
                        d="M8.46289 5.5V17.4975C8.63202 17.3363 8.76638 17.1422 8.8577 16.9272C8.94902 16.7121 8.99537 16.4806 8.99389 16.247C8.99389 16.7365 9.19139 17.1715 9.49989 17.475V5.5H8.46289Z"
                        fill="#994308"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_401_192">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <select className="safety" id="" name="">
                  <option className="box-items" value="Safety">
                    Safety
                  </option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label" for="">
                Topic
              </label>
              <button className="add-topic">Add new +</button>
              <div className="topic-box">
                <div>
                  <span>
                    <img className="blue-icon" src="./images/icon.png" alt="" />
                  </span>
                </div>
                <div>
                  <select className="topic" id="" name="">
                    <option className="box-items" value="VCA">
                      VCA
                    </option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="label" for="">
                Valid For
              </label>

              <div className="valid-box">
                <select className="year" id="" name="">
                  <option className="box-items" value="Valid">
                    1 year
                  </option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="boxes-2">
            <div>
              <label className="label" for="">
                Training
              </label>
              <div className="topic-box-2">
                <div>
                  <svg
                    className="recycle"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.625 1.125H3.5C3.56875 1.125 3.625 1.06875 3.625 1V1.125H8.375V1C8.375 1.06875 8.43125 1.125 8.5 1.125H8.375V2.25H9.5V1C9.5 0.448438 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.448438 2.5 1V2.25H3.625V1.125ZM11.5 2.25H0.5C0.223437 2.25 0 2.47344 0 2.75V3.25C0 3.31875 0.05625 3.375 0.125 3.375H1.06875L1.45469 11.5469C1.47969 12.0797 1.92031 12.5 2.45312 12.5H9.54688C10.0813 12.5 10.5203 12.0812 10.5453 11.5469L10.9312 3.375H11.875C11.9438 3.375 12 3.31875 12 3.25V2.75C12 2.47344 11.7766 2.25 11.5 2.25ZM9.42656 11.375H2.57344L2.19531 3.375H9.80469L9.42656 11.375Z"
                      fill="#ED4C5C"
                    />
                  </svg>

                  <img className="blue-icon-2" src="./images/icon.png" alt="" />
                </div>
                <div className="box-text">Working at height</div>
              </div>
            </div>

            <div>
              <label className="label" for="">
                Assign To
              </label>

              <div className="valid-box-2">
                <select className="internal" id="" name="">
                  <option className="box-items" value="Valid">
                    Internal workers
                  </option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="boxes-3">
            <div>
              <div>
                <label className="label" for="">
                  Departments
                  <span className="optional">Optional</span>
                </label>
                <div className="topic-box-3">
                  <div>
                    <select className="year-3" id="" name="">
                      <option className="box-items" value="VCA">
                        Select departments
                      </option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="label" for="">
                  Functions
                  <span className="optional-2">Optional</span>
                </label>

                <div className="topic-box-3">
                  <select className="year-3" id="" name="">
                    <option className="box-items" value="Valid">
                      Select fonctions
                    </option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="description">
              <div>Description</div>
              <textarea id="textarea" name="" rows="5" cols="33">
                Type here...
              </textarea>
            </div>
          </div>
        </div>
        <div className="upload-files">
          <div className="inner-box">
            <h4 className="img-text">Image</h4>
            <div class="drop-zone" draggable="true">
              <svg
                className="vector-img"
                width="50"
                height="36"
                viewBox="0 0 50 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z"
                  fill="url(#paint0_linear_401_508)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_401_508"
                    x1="25"
                    y1="0"
                    x2="41.1765"
                    y2="45.5882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E7E7E7" />
                    <stop offset="1" stop-color="#848484" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <span class="drop-zone__prompt">
                Drag and Drop you image here <br /> Or
              </span>
              <span class="file-upload">
                <label for="file-input">browse files</label>
                <input id="file-input" type="file" />
              </span>
            </div>
            <p className="footer-text">
              Only JPG, PNG files are allowed. Image must be less than 2 MB
            </p>
          </div>
        </div>

        <div className="container-3">
          <div className="inner-box-3">
            <h4 className="img-text-3">Training file</h4>
            <div class="drop-zone-3">
              <svg
                className="vector-img-3"
                width="50"
                height="36"
                viewBox="0 0 50 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z"
                  fill="url(#paint0_linear_401_508)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_401_508"
                    x1="25"
                    y1="0"
                    x2="41.1765"
                    y2="45.5882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E7E7E7" />
                    <stop offset="1" stop-color="#848484" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <span class="drop-zone__prompt-3">
                Drag and Drop you image here <br /> Or
              </span>
              <span class="file-upload-3">
                <label for="file-input">browse files</label>
                <input id="file-input" type="file" />
              </span>
            </div>
          </div>
          <div className="cancel-box">
            <span className="cancel-text">Completed</span>
            <span className="uploaded-file">workingAtHeight.pdf</span>

            <svg
              className="cancel-btn"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="11" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0005 12.3149L13.5898 14.8099C13.8496 15.0621 14.0186 15.0647 14.2831 14.8099L14.8026 14.3092C15.0571 14.064 15.0744 13.9031 14.8026 13.6412L12.0613 11.0001L14.8028 8.35901C15.0596 8.11078 15.0646 7.94326 14.8028 7.6908L14.2833 7.19034C14.0138 6.93059 13.8473 6.94259 13.5901 7.19034L11.0005 9.68532L8.4112 7.19058C8.15394 6.94282 7.98744 6.93082 7.71793 7.19058L7.19842 7.69103C6.93641 7.9435 6.94116 8.11102 7.19842 8.35925L9.93973 11.0001L7.19842 13.6412C6.92666 13.9031 6.94116 14.064 7.19842 14.3092L7.71768 14.8099C7.97994 15.0647 8.14894 15.0621 8.41095 14.8099L11.0005 12.3149Z"
                fill="#B5B5B5"
              />
            </svg>

            <div className="para">
              <span className="text">
                *Only Video, PDF and SlideShow files are allowed.
              </span>
              <p className="text-centered">
                <span>OR</span>
              </p>
              <span class="media">Media URL</span>
              <input
                className="media-url"
                type="text"
                placeholder="https://youtu.be/1g4hoZx8-o4"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="second-container">
        <h4 className="quiz">Training quiz</h4>
        <p className="header-text">
          Here you can manage the questions by clicking on the “Add Question”
          button and choose from the available types of question. You can add up
          to 100 questions.
        </p>
        <hr />
        <div id="questions-container">
          <div className="inner-container">
            <div className="delete-icon">
              <h3 id="h1">Question 1</h3>
              <span className="close" onClick={CloseQ}><svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.00076 8.47107L9.88473 12.4477C10.2744 12.8497 10.5279 12.8538 10.9246 12.4477L11.7039 11.6496C12.0857 11.2589 12.1115 11.0024 11.7039 10.585L7.59193 6.37552L11.7043 2.16605C12.0894 1.77041 12.0969 1.50341 11.7043 1.10102L10.925 0.303378C10.5207 -0.110632 10.271 -0.0915067 9.88511 0.303378L6.00076 4.27997L2.11679 0.303753C1.73091 -0.0911317 1.48115 -0.110257 1.07689 0.303753L0.297626 1.1014C-0.0953839 1.50378 -0.0882587 1.77079 0.297626 2.16642L4.4096 6.37552L0.297626 10.585C-0.110009 11.0024 -0.0882587 11.2589 0.297626 11.6496L1.07652 12.4477C1.4699 12.8538 1.72341 12.8497 2.11642 12.4477L6.00076 8.47107Z"
                  fill="#C7C7C7"
                />
              </svg></span>
              <h4 className="question-img">Question Image</h4>
              <span>Optional</span>
            </div>
            <div className="qs-container">
              <div>
                <div className="question-box">
                  <p>
                    Dust-filter respirators may be used for continuous
                    protection while silica sand is used as the blasting
                    abrasive.
                  </p>
                </div>
                <div className="true-box">
                  <p>True</p>
                  <label for="one">
                  <input
                   type="radio"
                   name="q1"
                   className="true-answer"
                    />
                  </label>
                  <svg
                    className="upload-icon"
                    width="50"
                    height="36"
                    viewBox="0 0 50 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z"
                      fill="url(#paint0_linear_401_508)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_401_508"
                        x1="25"
                        y1="0"
                        x2="41.1765"
                        y2="45.5882"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E7E7E7" />
                        <stop
                          offset="1"
                          stop-color="#848484"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="true-box">
                <label for="two">
                  <p>False</p>
                  <input
                    type="radio"
                    name="q1"
                    className="true-answer"
                  />
                </label>

                  <svg
                    className="upload-icon"
                    width="50"
                    height="36"
                    viewBox="0 0 50 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z"
                      fill="url(#paint0_linear_401_508)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_401_508"
                        x1="25"
                        y1="0"
                        x2="41.1765"
                        y2="45.5882"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E7E7E7" />
                        <stop
                          offset="1"
                          stop-color="#848484"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="false-box"></div>
              </div>
              <div>
                <div class="drop-zone-4">
                  <svg
                    className="vector-img-4"
                    width="50"
                    height="36"
                    viewBox="0 0 50 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z"
                      fill="url(#paint0_linear_401_508)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_401_508"
                        x1="25"
                        y1="0"
                        x2="41.1765"
                        y2="45.5882"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E7E7E7" />
                        <stop
                          offset="1"
                          stop-color="#848484"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span class="drop-zone__prompt">
                    Drag and Drop you image here <br /> Or
                  </span>
                  <span class="file-upload">
                    <label for="file-input">browse files</label>
                    <input id="file-input" type="file" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-container" id="question">
            <div className="delete-icon">
              <h3>Question 1</h3>
              <span className="close"><svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.00076 8.47107L9.88473 12.4477C10.2744 12.8497 10.5279 12.8538 10.9246 12.4477L11.7039 11.6496C12.0857 11.2589 12.1115 11.0024 11.7039 10.585L7.59193 6.37552L11.7043 2.16605C12.0894 1.77041 12.0969 1.50341 11.7043 1.10102L10.925 0.303378C10.5207 -0.110632 10.271 -0.0915067 9.88511 0.303378L6.00076 4.27997L2.11679 0.303753C1.73091 -0.0911317 1.48115 -0.110257 1.07689 0.303753L0.297626 1.1014C-0.0953839 1.50378 -0.0882587 1.77079 0.297626 2.16642L4.4096 6.37552L0.297626 10.585C-0.110009 11.0024 -0.0882587 11.2589 0.297626 11.6496L1.07652 12.4477C1.4699 12.8538 1.72341 12.8497 2.11642 12.4477L6.00076 8.47107Z"
                  fill="#C7C7C7"
                />
              </svg></span>
              <h4 className="question-img">Question Image</h4>
              <span>Optional</span>
            </div>
            <div className="qs-container">
              <div>
                <div className="question-box">
                  <p>
                    Dust-filter respirators may be used for continuous
                    protection while silica sand is used as the blasting
                    abrasive.
                  </p>
                </div>
                <div className="true-box">
                  <p>True</p>
                  <input
                   type="radio"
                   name="q2"
                   className="true-answer"
                  />
                  <svg
                    className="upload-icon"
                    width="50"
                    height="36"
                    viewBox="0 0 50 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z"
                      fill="url(#paint0_linear_401_508)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_401_508"
                        x1="25"
                        y1="0"
                        x2="41.1765"
                        y2="45.5882"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E7E7E7" />
                        <stop
                          offset="1"
                          stop-color="#848484"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="true-box">
                  <p>False</p>
                  <input
                   type="radio"
                   name="q2"
                   className="true-answer"
                  />
                  <svg
                    className="upload-icon"
                    width="50"
                    height="36"
                    viewBox="0 0 50 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z"
                      fill="url(#paint0_linear_401_508)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_401_508"
                        x1="25"
                        y1="0"
                        x2="41.1765"
                        y2="45.5882"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E7E7E7" />
                        <stop
                          offset="1"
                          stop-color="#848484"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="false-box"></div>
              </div>
              <div>
                <div class="drop-zone-4">
                  <svg
                    className="vector-img-4"
                    width="50"
                    height="36"
                    viewBox="0 0 50 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z"
                      fill="url(#paint0_linear_401_508)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_401_508"
                        x1="25"
                        y1="0"
                        x2="41.1765"
                        y2="45.5882"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E7E7E7" />
                        <stop
                          offset="1"
                          stop-color="#848484"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span class="drop-zone__prompt">
                    Drag and Drop you image here <br /> Or
                  </span>
                  <span class="file-upload">
                    <label for="file-input">browse files</label>
                    <input id="file-input" type="file" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="add_question_div">
          <button onClick={addQuestion} className="add-question" type="button">
            Add Question +
          </button>
        </div>
      </div>

      

      <div className="cards">
        <div className="card">
          <svg
            className="info"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_401_266)">
              <path
                d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.3"
              />
              <path
                d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.2"
              />
            </g>
            <defs>
              <clipPath id="clip0_401_266">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="alignement">
            <div>
              <img src="./images/Dice.png" alt="" />
              <p className="card-title">Random questions</p>
            </div>
            <div className="card-mesures">
              <button onClick={subtractQuestion} type="button">
                -
              </button>
              <div className="counter">{randomQuestion}</div>
              <button onClick={AddQuestion} type="button">
                +
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <svg
            className="info"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_401_266)">
              <path
                d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.3"
              />
              <path
                d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.2"
              />
            </g>
            <defs>
              <clipPath id="clip0_401_266">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="alignement">
            <div>
              <img src="./images/time.png" alt="" />
              <p className="card-title">Time per question</p>
            </div>
            <div className="card-mesures">
              <button onClick={decrementTime} type="button">
                -
              </button>
              <div className="counter">{seconds}s</div>
              <button onClick={incrementTime} type="button">
                +
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <svg
            className="info"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_401_266)">
              <path
                d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.3"
              />
              <path
                d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.2"
              />
            </g>
            <defs>
              <clipPath id="clip0_401_266">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="alignement">
            <div>
              <img src="./images/check.png" alt="" />
              <p className="card-title">Passing score</p>
            </div>
            <div className="card-mesures">
              <button onClick={subtractScore} type="button">
                -
              </button>
              <div className="counter">{score}%</div>
              <button onClick={addScore} type="button">
                +
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <svg
            className="info"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_401_266)">
              <path
                d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.3"
              />
              <path
                d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.2"
              />
            </g>
            <defs>
              <clipPath id="clip0_401_266">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="alignement">
            <div>
              <img src="./images/screen.png" alt="" />
              <p className="card-title">Webcam validation</p>
            </div>
            <div className="card-mesures">
              <label class="switch">
                <input
                  onClick={ToggleSwitch}
                  type="checkbox"
                  checked={toggle}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="card">
          <svg
            className="info"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_401_266)">
              <path
                d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.3"
              />
              <path
                d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.2"
              />
            </g>
            <defs>
              <clipPath id="clip0_401_266">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="alignement">
            <div>
              <img src="./images/stats.png" alt="" />
              <p className="card-title">Time Expected</p>
            </div>
            <div className="card-mesures">
              <button onClick={subtractMinutes} type="button">
                -
              </button>
              <div className="counter">{minutes}min</div>
              <button onClick={addMinutes} type="button">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <svg
            className="info"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_401_266)">
              <path
                d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.3"
              />
              <path
                d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z"
                fill="#D6D6D6"
                stroke="#D6D6D6"
                stroke-width="0.2"
              />
            </g>
            <defs>
              <clipPath id="clip0_401_266">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="alignement">
            <div>
              <img src="./images/refresh.png" alt="" />
              <p className="card-title">Attemps</p>
            </div>
            <div className="card-mesures">
              <button onClick={subtractAtt} type="button">
                -
              </button>
              <div className="counter">{attemps}</div>
              <button onClick={addAtt} type="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown-msg">
        When the countdown is finished, the system will automatically move to
        the next question.
      </div>
    </>
  );
}

export default Main;
