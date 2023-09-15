import { BsCardList } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section
        className=" w-screen h-full flex items-center justify-center flex-col
                    px-[15re] py-[60px] bg-[radial-gradient(at_50%_0%,#202023_0%,transparent_100%)]"
      >
        <div
          className="flex flex-col w-full max-w-[900px] gap-[px]
       justify-center items-center mx-auto md-9"
        >
          <h1 className="font-bold text-6xl my-8 text-center">
            Build software <span className="text-[#03C539]">together</span>
          </h1>
          <p
            className="text-[#c2c2c2] text-xl text-center font-medium mt-0 mb-4 
        leading-[160%]"
          >
            The collaboration platform for software development. Hubql connects
            everyone in the data modeling process so teams can ship better
            software.
          </p>
        </div>

        <div className="flex items-center h-fit w-full justify-center">
          <p
            className="px-8 py-[16px] text-2xl rounded-lg h-fit"
            style={{
              backgroundColor: "#018a27",
              boxShadow: `0 0 5px #018a275e , 0 0 15px #018a275e`,
            }}
          >
            Get started
          </p>
        </div>

        <div className="flex justify-center items-center gap-28 mt-36">
          <div className="h-fit w-[650px] max-w-[573px] border p-1 border-gray-200/20 rounded-lg">
            <img
              src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3ddbbac69920c34850ab2_code-editor-light.svg"
              alt="hero"
            />
            <div className="w-fit py-6 border-t border-gray-200/20 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-medium py-4">
                Turn data models into diagrams
              </h3>
              <p className="text-[#c2c2c2] text-lg font-medium mt-0 mb-4 text-center px-4">
                Hubql automatically converts your data model source code into
                diagrams such as ER diagrams and other visualizations that aid
                you in your software development.
              </p>
            </div>
          </div>

          <div className="h-full w-[573px] flex flex-col justify-center items-center">
            <div className="h-full py-auto">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3d7c268afcbe458016a92_plan-icon.svg"
                alt=""
                className="px-4"
              />
              <h3 className="text-2xl font-medium py-4 px-4 flex">
                Browser code editor
                <img
                  src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3e3d50aeee6b1eea80bd4_chevron-right-highlight.svg"
                  alt=""
                />
              </h3>
              <p className="text-[#c2c2c2] text-lg font-medium mt-0 mb-4 text-left px-4 pb-8">
                Use Hubql's code editor to quickly update your data model right
                in the browser fully integrated with source code providers like
                GitHub.
              </p>
            </div>
            <div className="h-full py-auto">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3d8f0482139b2d675c340_code-icon.svg"
                alt=""
                className="px-4"
              />
              <h3 className="text-2xl font-medium py-4 px-4 flex">
                Update from suggestions
                <img
                  src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3e3d50aeee6b1eea80bd4_chevron-right-highlight.svg"
                  alt=""
                />
              </h3>
              <p className="text-[#c2c2c2] text-lg font-medium mt-0 mb-4 text-left px-4 ">
                Gather feedback from your stakeholders and colleagues with
                comments and suggestions. Apply suggestions to your source code
                and commit to your repository.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[radial-gradient(at_50%_0%,#202023_0%,transparent_100%)]
       flex flex-col items-center pb-28"
      >
        <div
          className="flex w-96 h-[1px] justify-center
        bg-gradient-to-r from-transparent from-0% via-gray-500 via-50% to-transpatent to-90%"
        ></div>
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-center pt-8 pb-4">
            Collaboration features out-of-the-box
          </h2>
          <p className="max-w-[720px] text-center font-thin text-[#c2c2c2]">
            Show off your data model code to your team, get feedback, request
            reviews, and build better software together.
          </p>
          <div className="flex items-center h-fit w-full justify-center py-8">
            <p
              className="px-4 py-2 text-lg rounded-md h-fit"
              style={{
                backgroundColor: "#018a27",
                boxShadow: `0 0 5px #018a275e , 0 0 15px #018a275e`,
              }}
            >
              Get started
            </p>
          </div>
        </div>

        {/* grid */}
        <div className="flex flex-col w-full items-center justify-center px-[15rem] ">
          <div className="flex justify-evenly w-full gap-8 pb-2">
            <div className="w-[33%] h-fit border border-gray-600/90 rounded-xl flex flex-col items-start justify-center">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a4ea7c5fab23fac796ca52_no-config-icon.svg"
                alt=""
                className="px-4 pt-4"
              />
              <h3 className="text-xl font-medium py-4 px-4 ">
                {" "}
                Zero configuration
              </h3>
              <p className="text-[#c2c2c2] text-md font-medium mt-0 mb-4 text-left px-4">
                Start from a template or import your data model file from your
                GitHub repository. Easy one-click start button to get you
                started with Hubql.
              </p>
            </div>

            <div className="w-[33%] h-fit border border-gray-600/90 rounded-xl flex flex-col items-start justify-center">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a4ea7c5fab23fac796ca52_no-config-icon.svg"
                alt=""
                className="px-4 pt-4"
              />
              <h3 className="text-xl font-medium py-4 px-4 ">
                {" "}
                Zero configuration
              </h3>
              <p className="text-[#c2c2c2] text-md font-medium mt-0 mb-4 text-left px-4">
                Start from a template or import your data model file from your
                GitHub repository. Easy one-click start button to get you
                started with Hubql.
              </p>
            </div>

            <div className="w-[33%] h-fit border border-gray-600/90 rounded-xl flex flex-col items-start justify-center">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a4ea7c5fab23fac796ca52_no-config-icon.svg"
                alt=""
                className="px-4 pt-4"
              />
              <h3 className="text-xl font-medium py-4 px-4 ">
                {" "}
                Zero configuration
              </h3>
              <p className="text-[#c2c2c2] text-md font-medium mt-0 mb-4 text-left px-4">
                Start from a template or import your data model file from your
                GitHub repository. Easy one-click start button to get you
                started with Hubql.
              </p>
            </div>
          </div>

          <div className="flex justify-evenly w-full gap-8 py-8">
            <div className="w-[50%] h-fit border border-gray-600/90 rounded-xl flex flex-col items-start justify-center">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a4ea7c5fab23fac796ca52_no-config-icon.svg"
                alt=""
                className="px-4 pt-4"
              />
              <h3 className="text-xl font-medium py-4 px-4 ">
                {" "}
                Zero configuration
              </h3>
              <p className="text-[#c2c2c2] text-md font-medium mt-0 mb-4 text-left px-4">
                Start from a template or import your data model file from your
                GitHub repository. Easy one-click start button to get you
                started with Hubql.
              </p>
            </div>

            <div className="w-[50%] h-fit border border-gray-600/90 rounded-xl flex flex-col items-start justify-center">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a4ea7c5fab23fac796ca52_no-config-icon.svg"
                alt=""
                className="px-4 pt-4"
              />
              <h3 className="text-xl font-medium py-4 px-4 ">
                {" "}
                Zero configuration
              </h3>
              <p className="text-[#c2c2c2] text-md font-medium mt-0 mb-4 text-left px-4">
                Start from a template or import your data model file from your
                GitHub repository. Easy one-click start button to get you
                started with Hubql.
              </p>
            </div>
          </div>

          <div className="flex justify-evenly w-full gap-10 py-2">
            <div className="w-[50%] h-fit border border-gray-600/90 rounded-xl flex flex-col items-start justify-center">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a4ea7c5fab23fac796ca52_no-config-icon.svg"
                alt=""
                className="px-4 pt-4"
              />
              <h3 className="text-xl font-medium py-4 px-4 ">
                {" "}
                Zero configuration
              </h3>
              <p className="text-[#c2c2c2] text-md font-medium mt-0 mb-4 text-left px-4">
                Start from a template or import your data model file from your
                GitHub repository. Easy one-click start button to get you
                started with Hubql.
              </p>
            </div>

            <div className="w-[50%] h-fit border border-gray-600/90 rounded-xl flex flex-col items-start justify-center">
              <img
                src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a4ea7c5fab23fac796ca52_no-config-icon.svg"
                alt=""
                className="px-4 pt-4"
              />
              <h3 className="text-xl font-medium py-4 px-4 ">
                {" "}
                Zero configuration
              </h3>
              <p className="text-[#c2c2c2] text-md font-medium mt-0 mb-4 text-left px-4">
                Start from a template or import your data model file from your
                GitHub repository. Easy one-click start button to get you
                started with Hubql.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[radial-gradient(at_50%_-10%,#202023_0%,transparent_100%)]
       flex flex-col items-center pb-10"
      >
        <div
          className="flex w-96 h-[1px] justify-center
        bg-gradient-to-r from-transparent from-0% via-gray-500 via-50% to-transpatent to-90%"
        ></div>
        <div className="">
          <h2 className=" pt-16 text-4xl font-bold">
            Integrated into your development cycle
          </h2>
          <p className="max-w-[720px] text-center font-thin text-lg text-[#c2c2c2]">
            Plan, design, code, document, iterate your data models.
          </p>
        </div>

        <div className="flex justify-center px-[15rem] py-[5rem]">
          <img
            src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3df0defb4d356b6975d83_collab-asset-light.svg"
            alt=""
          />

          <div className="flex flex-col w-[50%] pl-20">
            <div className="flex w-full p-2 gap-4">
              <div className="w-fit h-fit border border-transparent hover:border-gray-500 p-4 rounded-lg">
                <img
                  src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3d7c268afcbe458016a92_plan-icon.svg"
                  alt=""
                  className="py-2"
                />
                <h3>Plan</h3>
                <p className="w-[200px]">
                  Effortlessly initiate, plan, and onboard with Hubql
                </p>
              </div>
              <div className="w-fit h-fit border border-transparent hover:border-gray-500 p-4 rounded-lg">
                <img
                  src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3d7c268afcbe458016a92_plan-icon.svg"
                  alt=""
                  className="py-2"
                />
                <h3>Plan</h3>
                <p className="w-[200px]">
                  Effortlessly initiate, plan, and onboard with Hubql
                </p>
              </div>
            </div>
            <div className="flex w-full p-2 gap-4">
              <div className="w-fit h-fit border border-transparent hover:border-gray-500 p-4 rounded-lg">
                <img
                  src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3d7c268afcbe458016a92_plan-icon.svg"
                  alt=""
                  className="py-2"
                />
                <h3>Plan</h3>
                <p className="w-[200px]">
                  Effortlessly initiate, plan, and onboard with Hubql
                </p>
              </div>
              <div className="w-fit h-fit border border-transparent hover:border-gray-500 p-4 rounded-lg">
                <img
                  src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64a3d7c268afcbe458016a92_plan-icon.svg"
                  alt=""
                  className="py-2"
                />
                <h3>Plan</h3>
                <p className="w-[200px]">
                  Effortlessly initiate, plan, and onboard with Hubql
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-[1px] bg-gray-500/40"></div>
      </section>
    </>
  );
};

export default Hero;
