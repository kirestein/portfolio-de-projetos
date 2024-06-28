import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IKnowledge } from '../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/html.svg',
      alt: 'íncone de conhecimento de html 5'
    },
    {
      src: 'assets/icons/css.svg',
      alt: 'íncone de conhecimento de css 3'
    },
    {
      src: 'assets/icons/js.svg',
      alt: 'íncone de conhecimento de JavaScript'
    },
    {
      src: 'assets/icons/react.svg',
      alt: 'íncone de conhecimento de React'
    },
    {
      src: 'assets/icons/angular.svg',
      alt: 'íncone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/node.svg',
      alt: 'íncone de conhecimento de Node JS'
    },
    {
      src: 'assets/icons/python.svg',
      alt: 'íncone de conhecimento de Python'
    }
  ])
}
