<script setup>
</script>

<template>
  <header class="sidebar">
    <h1 class="name">Reda Herradi</h1>
    <h1 class="role">Front End Developer @ Bell</h1>
    <h1 class="phone">+ 212 (0) 69 74 44 476</h1>
    <h1 class="email">herradi.r@gmail.com</h1>
    <h1 class="linkedin"><a href="https://www.linkedin.com/in/reda-herradi/">Linkedin</a></h1>
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
      Software Engineer @ <a href="https://www.sqli.com/ma-fr">SQLi</a>
    <p class="periods">July 2021 – July 2022 on <a class="project"
        href="https://ma.buynespresso.com/ma_en/">Nestlé/Nespresso Project</a></p>
    <p class="periods">July 2022 – Today on <a class="project" href="https://www.kamera-express.nl/">Kamera Express
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
      Full Stack Mobile Developer @ <a href="">Cosmic</a>
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
      Bachelors in computer science @ <a href="http://www.aui.ma/en/">Al Akhawayn University in Ifrane</a> - 2020
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
</template>

<style scoped>
.sidebar {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name {
  font-family: "Verdana", Times, serif;
  font-size: 72px;
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


h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  border-bottom: 1px solid grey;
}

a.project {
  text-decoration: none;
  color: rgb(142, 0, 189);
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
</style>
