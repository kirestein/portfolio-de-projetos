import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../interface/IProjects';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPainelClass } from '../enum/EDialogPainelClass.enum';
import { DialogProjectsComponent } from '../dialogs/dialog-projects/dialog-projects.component';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      description: "",
      links: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      description: "",
      links: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      description: "",
      links: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      description: "",
      links: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      description: "",
      links: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      description: "",
      links: [
        {
          name: "",
          url: ""
        }
      ]
    }
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.PROJECTS
    });
  }
}
