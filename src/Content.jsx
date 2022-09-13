import React from 'react'

export default function Content() {
  return (
    <div className="content">
      <div className="section">
        <h2>About me</h2>
        <p>
          There is nothing quite like the feeling of successfully find the
          resolution to a problem. The rush you feel when you crack an
          especially tricky problem, the sense of satisfaction that stays with
          you whenever you get to see your solution at work. This is often the
          fuel that drives me through life.
        </p>
        <p>
          I love using my curiosity to help me solve problems. I want to know
          more about the problem and then more about potential solutions. Till I
          get enough of the right pieces together to present a solution. Then
          finding the right way to present the solution so that it is understood
          and effectively implimented.
        </p>
        <p>
          When I'm not solving problems for those in my life or learning new
          things. I'm renovating my house, experimenting with home automation,
          3D printing, getting involved in community sports and walking my dogs.
        </p>
      </div>
      <div className="section">
        <a href="https://github.com/thyme-to-code/thyme-is-money">
          <h2>Project: Thyme is Money</h2>
        </a>
        <p>
          My final project at Dev Academy. Designed together with Adam, Nicole,
          and Yuri to provide easy and intuitive time tracking and invoicing
          tool for freelancers.
        </p>
        <p>
          Currently I'm working with the team to release a first version to the
          open source world and put this tool in the hands of freelancers
          everywhere who might need it.
        </p>
      </div>
    </div>
  )
}
