import { Component } from '@angular/core';
import { DescriptionComponent } from "./description/description.component";
import { RenovationsComponent } from "./renovations/renovations.component";
import { LeningenEnVerzekeringenComponent } from "./leningen-en-verzekeringen/leningen-en-verzekeringen.component";
import { DocumentenMakelaarComponent } from "./documenten-makelaar/documenten-makelaar.component";
import { PlannenComponent } from "./plannen/plannen.component";
import { WIPComponent } from "../wip/wip.component";

@Component({
  selector: 'app-more-info',
  standalone: true,
  imports: [DescriptionComponent, RenovationsComponent, LeningenEnVerzekeringenComponent, DocumentenMakelaarComponent, PlannenComponent, WIPComponent],
  templateUrl: './more-info.component.html',
  styleUrl: './more-info.component.scss'
})
export class MoreInfoComponent {

}
