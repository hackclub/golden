import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Golden</h1>
        <br/>
        <h3>Dates:</h3>
        <br/>
        <h3>Hack Club Hackathon</h3>
        <br/>
      </div>

      <h1>FAQs</h1>
      <div id="accordionExample">
  <div
    className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingOne">
    <button
        className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        <strong>💻 Hackathon? What's that?</strong>
        
      </button>
    </h2>
    <div
      id="collapseOne"
      className="!visible"
      data-twe-collapse-item
      data-twe-collapse-show
      aria-labelledby="headingOne"
      data-twe-parent="#accordionExample">
      <div className="px-5 py-4">
      A hackathon is a social coding event -- you get a day of mentors and workshops, and lots of free food and swag to build anything you want. Even if you've never written a line of code before, we'd love to have you here!
      </div>
    </div>
  </div>
  <div
    className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingTwo">
      <button
        className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        <strong>Do I need experience?</strong>
     
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="!visible"
      data-twe-collapse-item
      aria-labelledby="headingTwo"
      data-twe-parent="#accordionExample">
      <div className="px-5 py-4">
      No, this is more of a learnathon so we’ll have project tracks.</div>
    </div>
  </div>
  <div
    className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingThree">
      <button
        className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
        <strong>What is the focus of this hackathon?</strong>
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
       
        </span>
      </button>
    </h2>
    <div
      id="collapseThree"
      className="!visible"
      data-twe-collapse-item
      aria-labelledby="headingThree"
      data-twe-parent="#accordionExample">
      <div className="px-5 py-4">
      While you’re welcome to make what you’d like, we’ll have a web dev, AI/DS track, and a 3D printing activity.
      </div>
    </div>
    <div
    className="rounded-b-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="accordion-header mb-0" id="headingFour">
      <button
        className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour">
      <strong>More questions?</strong>
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
      
        </span>
      </button>
    </h2>
    <div
      id="collapseFour"
      className="!visible"
      data-twe-collapse-item
      aria-labelledby="headingFour"
      data-twe-parent="#accordionExample">
      <div className="px-5 py-4">
      Email us at zenab@hackclub.com</div>
    </div>
    </div>
  </div>
</div>



      <br/>
      <br/>
      <div>
        <p>Golden is a social coding event open to female and nonbinary students. We welcome all high school programmers, artists, dreamers, creators to join us for a day of building, exploring, and sharing.
        </p>
        <p>At Golden, you'll have the freedom to create anything you want, learn from your peers, and explore the city. Golden is organized entirely by girls in the Hack Club community, and we want you to help! Join us to craft Golden into the experience you want it to be.
        </p>
      </div>
      <div>
      </div>
    </main>
  );
}
