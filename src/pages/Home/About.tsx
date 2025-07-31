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
            My name is <b>Suvam Barui<b/>, and I thrive at the intersection of offensive security, automation, and real-world problem solving. I’ve always been drawn to understanding how systems work — and more importantly, how they break. That curiosity, paired with a relentless drive to learn and grow, has shaped me into the cybersecurity professional I am today. I specialize in penetration testing, SOC operations, and security automation, with a focus on identifying inefficiencies and engineering solutions that scale. Whether it's reducing incident response times with custom SOAR workflows or fine-tuning SIEM pipelines for speed and relevance, I aim to solve problems with precision and purpose.
          </p>
          <br />
          <p>
            What drives me isn't just technology - it's curiosity. I'm someone
            who's equally excited to build a secure system as I am to break into
            one. My journey began with a fascination for how software and
            networks communicate, which eventually led me to master both
            offensive and defensive security. I've tackled over 100 Hack The Box
            machines, ranked in the top 1% on TryHackMe, and built a complete
            home SOC lab to simulate real-world incident response scenarios
            using open-source tools.
          </p>
          <br />
          <p>
            My work is rooted in experience. I’ve conducted dozens of hands-on penetration tests using tools like Burp Suite, SQLMap, and ZAP, uncovering high-impact vulnerabilities and delivering actionable remediation strategies. In the SOC, I’ve monitored and analyzed over 100,000 security events, leading real-time threat detection and response efforts using AlienVault, Zeek, and ELK. I’ve built and deployed cloud-based SOC environments from the ground up on AWS - provisioning segmented networks, simulating attacks, and automating detection and enrichment pipelines using Wazuh, Shuffle, and MISP. These projects are not just technical wins - they reflect my commitment to learning fast, solving critical problems, and making security operations more effective and resilient.
          </p>
          <br />
          <p>
            What sets me apart is my mindset. I don’t back down from pressure - I lean into it. My OSCP journey is a testament to that: I failed twice, dissected every weakness in my approach, and rebuilt a process so bulletproof that I passed with confidence on my third attempt. I’ve ranked in the Top 500 globally on Hack The Box, placed in the top 1% on TryHackMe, and worked alongside some of the most talented teams in competitive cybersecurity. But beyond the rankings and certs, what drives me is growth - the kind that’s earned through hard lessons, deep focus, and a refusal to settle.
          </p>
          <br />
          <p>
            Outside of the lab or SOC, I find fulfillment in teaching and mentoring. As a Graduate Teaching Assistant for the “Hacking for Defense” course at RIT, I guided student teams tackling real-world challenges for government agencies like the Department of State and Department of Defense. Watching those students grow - and having a hand in that growth — reinforced my belief in collaboration, clarity, and the impact of shared knowledge. It’s the same ethos I bring to every team I’m part of.

This portfolio is a reflection of who I am: a builder, a breaker, and a relentless learner. Whether I’m reverse engineering malware, tuning detection rules, or mentoring future defenders, my goal is simple - to become so good that even on my worst days, I make a difference. Security isn’t just my career - it’s my craft.
          <p/>
        </div>
      </div>
    </section>
  );
}

export default About;
