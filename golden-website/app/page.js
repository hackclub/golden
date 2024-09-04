// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-golden-primary">
        <img src="https://cloud-9q9fzn6fi-hack-club-bot.vercel.app/0flag-orpheus-top.png" className="top-0 left-5" width="200" alt="orpheus logo" />
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div>
        {/* <br /> */}
        <h1 className="text-8xl text-golden-secondary text-center font-bold">Golden</h1>
        <h3 className="text-2xl text-center font-semibold">A Hack Club Hackathon</h3><br/>
        <h3 className="text-4xl text-center font-semibold" >September 28th, 2024 <br/> 9:00 am - 4:30 pm</h3>
        <br/>
<a href="https://airtable.com/appucgN7GgruOVlmn/shrumqEWK3tOLXYVP">
     <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Sign Up!
    </button>
</a>
      </div>

   

      <br/>
      <br/>
      <br/>
      <div className="sm:mx-5 md:mx-16 lg:mx-48 text-xl text-center font-medium">
        <p>Golden is a social coding event open to female and nonbinary students. We welcome all high school programmers, artists, dreamers, creators to join us for a day of building, exploring, and sharing.
        </p>
        <p>At Golden, you&apos;ll have the freedom to create anything you want, learn from your peers, and explore the city. Golden is organized entirely by girls in the Hack Club community, and we want you to help! Join us to craft Golden into the experience you want it to be.
        </p>
      </div>
      <br />
      <br />
      <br />

      {/* code credit @brianna: https://github.com/hackclub/halo/blob/main/halo-website/src/pages/index.astro */}
      <div className="flex sm:flex-column md:flex-column lg:flex-row gap-5">
        <img className="rounded-lg sm:max-w-96 lg:w-1/5 object-cover" src="https://cloud-cci0049xc-hack-club-bot.vercel.app/00.jpg" alt="Image at Assemble" />
        <img className="rounded-lg sm:max-w-96 lg:w-1/5 object-cover" src="https://cloud-cci0049xc-hack-club-bot.vercel.app/1alpine.jpeg" alt="Image at Alpine Hackathon Workshop" />
        <img className="rounded-lg sm:max-w-96 lg:w-1/5 object-cover" src="https://cloud-cci0049xc-hack-club-bot.vercel.app/5horizon.png" alt="Image at Horizon Hackathon" />
        <img className="rounded-lg sm:max-w-96 lg:w-1/5 object-cover" src="https://cloud-cci0049xc-hack-club-bot.vercel.app/2epoch.jpg" alt="Image 3" />
        <img className="rounded-lg sm:max-w-96 lg:w-1/5 object-cover" src="https://cloud-cci0049xc-hack-club-bot.vercel.app/6spark.jpg" alt="Image 5" />
      </div>


      <br />
      <br />
      <br />
      <h1 className="text-4xl font-semibold">FAQs</h1>
      <br/>
      <div id="accordionExample">
  <div
    className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingOne">
    <button
        className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        dataTweCollapseInit
        dataTweCollapseCollapsed
        dataTweTarget="#collapseTwo"
        ariaExpanded="false"
        ariaControls="collapseTwo"
        >
        <strong>💻 Hackathon? What&apos;s that?</strong>
        
      </button>
    </h2>
    <div
      id="collapseOne"
      className="!visible"
      dataTweCollapseItem
      dataTweCollapseShow
      ariaLabelledby="headingOne"
      dataTweParent="#accordionExample">
      <div className="px-5 py-4">
      A hackathon is a social coding event—you get a day of mentors and workshops, and lots of free food and swag to build anything you want. Even if you&apos;ve never written a line of code before, we&apos;d love to have you here!
      </div>
    </div>
  </div>
  <div
    className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingTwo">
      <button
        className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        dataTweCollapseInit
        dataTweCollapse-collapsed
        dataTweTarget="#collapseTwo"
        ariaExpanded="false"
        ariaControls="collapseTwo">
        <strong>Do I need experience?</strong>
     
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="!visible"
      dataTweCollapseItem
      ariaTabCledby="headingTwo"
      dataTweParent="#accordionExample">
      <div className="px-5 py-4">
      No, this is more of a learnathon so we&apos;ll have project tracks.</div>
    </div>
  </div>
  <div
    className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingThree">
      <button
        className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        dataTweCollapseInit
        dataTweCollapseCollapsed
        dataTweTarget="#collapseThree"
        ariaExpanded="false"
        ariaControls="collapseThree">
        <strong>What is the focus of this hackathon?</strong>
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
       
        </span>
      </button>
    </h2>
    <div
      id="collapseThree"
      className="!visible"
      dataTweCollapseItem
      ariaTabCledby="headingThree"
      dataTweParent="#accordionExample">
      <div className="px-5 py-4">
      While you&apos;re welcome to make what you&apos;d like, we&apos;ll have a web dev, AI/DS track, and a 3D printing activity.
      </div>
    </div>
    <div
    className="rounded-b-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="accordion-header mb-0" id="headingFour">
      <button
        className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        dataTweCollapseInit
        dataTweCollapse-collapsed
        dataTweTarget="#collapseFour"
        ariaExpanded="false"
        ariaControls="collapseFour">
      <strong>More questions?</strong>
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
      
        </span>
      </button>
    </h2>
    <div
      id="collapseFour"
      className="!visible"
      dataTweCollapseItem
      ariaTabCledby="headingFour"
      dataTweParent="#accordionExample">
      <div className="px-5 py-4">
      Email us at zenab@hackclub.com</div>
    </div>
    </div>
  </div>
</div>
<br />
<br />
<footer>
  <h1 className="text-2xl text-center font-semibold">Made with 💕 by Hack Clubbers</h1>
</footer>
      <div>
      </div>
    </main>
    </div>
  );
}
