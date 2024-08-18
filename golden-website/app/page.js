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

      <div>
        <p>Golden is a social coding event open to female and nonbinary students. We welcome all high school programmers, artists, dreamers, creators to join us for a day of building, exploring, and sharing.
        </p>
        <p>At Golden, you'll have the freedom to create anything you want, learn from your peers, and explore the city. Golden is organized entirely by girls in the Hack Club community, and we want you to help! Join us to craft Golden into the experience you want it to be.
        </p>
      </div>
      <div>
        <br/>
        <br/>
        <h1>
        FAQs
        </h1>
        <ol>
          <li>💻 Hackathon? What's that?</li>
          <li>A hackathon is a social coding event -- you get a day of mentors and workshops, and lots of free food and swag to build anything you want. Even if you've never written a line of code before, we'd love to have you here!
          </li>
          <li>do I need experience?</li>
          <li>no, this is more of a learnathon so we’ll have project tracks</li>
          <li>what is the focus of this hackathon?</li>
          <li>while you’re welcome to make what you’d like, we’ll have a web dev, AI/DS track, and a 3D printing activity</li>
          <li>More questions?</li>
          <li>email us at zenab@hackclub.com</li>
        </ol>
      </div>
    </main>
  );
}
