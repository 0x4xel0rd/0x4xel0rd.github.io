import "./about.css";

function About() {
  return (
    <section id="section-about">
      <h3>About Me</h3>
      <div id="about-details">
        <div id="about-img">
          <img src="" alt="Suvam's personal picture" />
        </div>

        <div id="about-content">
          <p>
            Hi, I'm <b>Suvam Barui</b> - a cybersecurity professional,
            OSCP-certified penetration tester, and lifelong learner with a
            passion for breaking things to understand how they work. I hold
            industry-recognized certifications including OSCP, HTP CPTS, CompTIA
            Security+, and AWS Certified Cloud Practitioner, each reflecting a
            different facet of my expertise - from hands-on exploitation and red
            teaming to cloud fundamentals and defensive security.
          </p>
          <br />
          <p>
            What drives me isn't just technology - it's curiosity. I'm someone
            who's equally excited to build a secure system as I am to break into
            one. My journey began with a fascination for how software and
            networks communicate, which eventually led me to master both
            offensive and defensive security. I've tackled over 70 Hack The Box
            machines, ranked in the top 1% on TryHackMe, and built a complete
            home SOC lab to simulate real-world incident response scenarios
            using open-source tools.
          </p>
          <br />
          <p>
            Professionally, I bring a unique blend of experience - having worked
            as a software developer customizing ERP systems across Asia, and
            later as a Teaching Assistant guiding students through national
            security-focused projects with the Department of State and
            Department of Defense. I graduated with a Master's in Cybersecurity
            from Rochester Institute of Technology, where I focused on
            practical, high-impact security solutions - from malware
            classification with deep learning to secure web server automation
            with Docker and Ansible.
          </p>
          <br />
          <p>
            I'm not just looking for a job - I'm looking for problems worth
            solving, teams that value creativity, and environments that push me
            to grow. This portfolio is more than a showcase of work; it's a
            reflection of who I am, what I value, and the path I'm building in
            the cybersecurity world. Thanks for being here - let's connect.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
