import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="flex justify-center w-full px-[15rem] items-start">
        {" "}
        <img
          src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64818edb05be9f0de0f0202c_hubql-logo.svg"
          alt=""
        />
        <div className="flex flex-col w-fit px-8">
          <ul>
            <li className="text-white text- font-bold font-sans">FEATURES</li>
            <li>Plan</li>
            <li>Design</li>
            <li>Code</li>
            <li>Review</li>
            <li>Document</li>
            <li>Secure</li>
          </ul>
        </div>
        <div className="flex flex-col w-fit px-8">
          <ul>
            <li className="text-white text-md font-bold font-sans">
              INTEGRATIONS
            </li>
            <li>JSON</li>
            <li>Prisma</li>
            <li>GitHub</li>
            <li>SQL</li>
            <li>Hasura</li>
            <li>GraphQL</li>
            <li>Protobuf</li>
            <li>Notion</li>
          </ul>
        </div>
        <div className="flex flex-col w-fit px-8">
          <ul>
            <li className="text-white text-md font-bold font-sans">
              SOLUTIONS
            </li>
            <li>Data model implementation</li>
            <li>Workflow integration</li>
            <li>Start a new project</li>
            <li>Review AI-written code</li>
            <li>External collaboration</li>
            <li>Team collaboration</li>
            <li>Onboarding</li>
          </ul>
        </div>
        <div className="flex flex-col w-fit px-8">
          <ul>
            <li className="text-white text-md font-bold font-sans">COMPANY</li>
            <li>About</li>
            <li>Contact</li>
            <li>Imprint</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="flex flex-col w-fit px-8">
          <ul>
            <li className="text-white text-md font-bold font-sans">
              RESOURCES
            </li>
            <li>Blog</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
      <p className="mt-20 text-center text-[#c2c2c2] pb-4">
        No Copyright ©{" "}
        <a href="https://github.com/anipr2002/hubql-clone">View Source Code</a>
      </p>
    </section>
  );
};

export default Footer;
