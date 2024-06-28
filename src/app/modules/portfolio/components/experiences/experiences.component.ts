import { Component, signal } from '@angular/core';
import { IExperiences } from '../interface/IExperiences.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Pl.',
        p: 'St3 Solutions | Jan 2024 - Present',
      },
      text: 'Desde setembro de 2023, atuo como Desenvolvedor e Tech Lead na St3 Solutions, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, TypeScript, Angular 2+, Angular Material e NgRx, React e Back-end, onde o NodeJs é aplicado em Provas de Conceito, caso necessário. Além disso, minha experiência abrange a integração com Micro Serviços, Docker, GitLab, Jira e Scrum. Atualmente, enfrento o desafio significativo de coordenar o desenvolvimento de uma plataforma chamada Student Wall, alcançando sucesso ao implementar a ferramenta em conformidade com os marcos regulatórios. Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando React, como parte do nosso compromisso com a eficiência e a qualidade do código. Também tenho desenvolvido apps para desktop utilizando TAURIJS.',
    },
    {
      summary: {
        strong: 'Desenvolvedor MuleSoft Pl',
        p: 'Orange Door | Mai 2022 - Jan 2024',
      },
      text: 'Durante meu período na Orange Door de maio de 2022 a janeiro de 2024, atuei como Desenvolvedor Back-End, liderando e desenvolvendo equipes. Minhas responsabilidades no back-end incluíram o uso de MuleSoft para construir APIs RESTs escaláveis em sistemas complexos, alguns dos maiores desafios que tive foi na implementação da API para o sistema Tap On Phone da Cielo, neste projeto pude aprender muito sobre estruturação de uma API REST e também foi uma oportunidade de desenvolver minhas habilidades de liderança.',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Dynamics 365',
        p: 'Nexer | Out 2021 - Mai 2022',
      },
      text: 'Em minha jornada como Desenvolvedor de Dynamics 365, tive a oportunidade de aprender na prática sobre o sistema de ERP. Por meio de projetos cuidadosamente elaborados, explorei as ferramentas de desenvolvimento da liguagem AL do Dynamics, onde pude aprender muito sobre organização de projetos e as cerimônias do sistema ágil. Meu maior desafio foi trabalhar com uma linguagem que dispunha de pouco material e desenvolvedores, mas foi muito bom, pois aprendi muito sobre documentação de linguagem, e também sobre caminhos para encontrar informação. Um dos projetos mais desafiadores que participei, foi o projeto com a Botoclinic, pois precisei ter uma alta curva de aprendizagem considerando que era o único desenvolvedor no projeto.',
    }
  ])
}
