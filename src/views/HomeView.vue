<template>
  <div id="home">
    <header>
      <div class="sidebar">
        <h1 class="name">Reda Herradi</h1>
        <h2 class="role">Front End Developer @ <a href="https://www.bell.ca/">Bell</a></h2>
        <a class="title-link" href="tel:+212697444476" target="_blank">
          <h2 class="phone">+212-0697444476</h2>
        </a>
        <a class="title-link" href="mailto:herradi.r@gmail.com" target="_blank">
          <h2 class="email">Herradi.r@gmail.com</h2>
        </a>
        <a class="title-link" href="https://www.linkedin.com/in/reda-herradi/" target="_blank">
          <h2 class="linkedin">Linkedin</h2>
        </a>
      </div>
    </header>

    <main>
      <h3>Presentation</h3>

      <p>
        A Qualified graduate in Computer science with a record of hard work
        and achievement both during studies and outside a formal academic
        environment. Presently looking for an opportunity to join a challenging
        workplace. I can work well on my own initiative or as a part of a team.
        <br />
        <br />
      </p>

      <h3>Experience</h3>
      <p>
        Software Engineer @ <a href="https://www.bell.ca/" target="_blank">Bell</a>
      <p class="periods">November 2022 – Today
        <a class="project" href="https://www.noovo.info/" target="_blank">Noovo Info</a>
        &
        <a class="project" href="https://www.noovomoi.ca/" target="_blank">Noovo Moi</a>
      </p>
      <ul>
        <li>I work as a Software Engineer. I am working in collaboration with Bell/Bell Media on multiple websites and
          projects using VueJs, Adobe Experience Manager, Adobe XD and Java.</li>
        <li>The role is helping me learn to cooperate with different parties and different actors, such as Designers, Back
          End and Front End Developers, Project Owners and Managers, and Stakeholders of the projects.</li>
        <li>Development of different features including, user tracking, third party inclusions,
          aggregation of data, design and development of cards, sliders, banners and more.</li>
        <li>Code review of different projects that communicate with each
          other.</li>
        <li>
          Mentoring and guiding new developers in their first experiences, and tutoring them in the technologies used,
          which resulted in more than 3 new solid members for a team.
        </li>
      </ul>
      <p>Skills and Experience: JavaScript / VueJs / Java / AEM / Adobe XD</p>
      <br />
      </p>

      <p>
        Software Engineer @ <a href="https://www.sqli.com/ma-fr" target="_blank">SQLi</a>
      <p class="periods">July 2021 – July 2022 on <a class="project" href="https://ma.buynespresso.com/ma_en/"
          target="_blank">Nestlé/Nespresso Project</a></p>
      <p class="periods">July 2022 – Today on <a class="project" href="https://www.kamera-express.nl/"
          target="_blank">Kamera Express
          Project</a> as Lead Front End</p>
      <ul>
        <li>Software Engineer in NuxtJs / VueJs / Typescript. Working with
          Typescript and VueJs on projects for Tesco and Nestlé/Nespresso.
          Developing my own features in the project, working in tandem
          with Analytics Team, for User Tracking, as well as the Nestlé
          Designer Team for detailing and applying Figma designs.</li>
        <li>The role as Team Lead helped me build an experience in a leading role,
          developing my leadership and planning skills.</li>
        <li>Development of different features including, user tracking,
          aggregation of data, cards, sliders, banners and more.</li>
        <li>Code review of different projects that communicate with each
          other, all in typescript.</li>
      </ul>
      <p>Skills and Experience: JavaScript / NuxtJs / ReactJs / VueJs / Typescript / Figma</p>
      <br />
      </p>

      <p>
        Full Stack Mobile Developer @ <a href="https://apps.apple.com/fr/app/cosmic/id1570332721"
          target="_blank">Cosmic</a>
      <p class="periods">June 2020 – December 2020 (6 months)</p>
      <ul>
        <li>Worked closely with the client on the development of a
          networking app using Django framework, React Native,
          PostgreSQL and AWS.
        </li>
      </ul>
      <p>Skills and Experience: Django / React Native / PostgreSQL / AWS /
        GitFlow
      </p>
      <br />
      </p>

      <h3>Education</h3>
      <p>
        Bachelors in computer science @ <a href="http://www.aui.ma/en/" target="_blank">Al Akhawayn University in
          Ifrane</a> - 2020
      <p>Software Engineering | Competitive Programming | Deep Learning </p>
      <br />
      </p>

      <h3>Personal Interests</h3>
      <p>
      <ul class="personal">
        <li>Professional Tennis Player</li>
        <li>University Volleyball Captain</li>
        <li>Competitive Programming</li>
        <li>Video Games</li>
      </ul>
      </p>

    </main>
  </div>
</template>

<style lang="scss">
.name {
  font-family: "Verdana", Times, serif;
  font-size: 36px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.role {
  font-size: 20px;
}

.phone {
  font-size: 18px;
}

.email {
  font-size: 18px;
}

.linkedin {
  font-size: 18px;
}

a.title-link {
  padding: 2px;
}


main {
  margin-top: 25px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  border-bottom: 1px solid grey;
}

a.project {
  text-decoration: none;
  color: var(--color-second-link);
  transition: 0.4s;
}

@media (hover: hover) {
  a.project:hover {
    background-color: hsla(280, 100%, 37%, 0.2);
  }
}

.periods {
  font-size: 16px;
}

ul.personal {
  columns: 2;
  gap: 15px;
}

@media (min-width: 641px) {
  .name {
    font-family: "Verdana", Times, serif;
    font-size: 72px;
  }
}

@media (min-width: 1024px) {

  header {
    width: 300px;
  }

  .sidebar {
    width: 300px;
    columns: 1;
    position: fixed;
  }
}
</style>
