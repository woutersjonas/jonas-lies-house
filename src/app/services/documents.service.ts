import { Injectable } from '@angular/core';
import { Documents } from '../interfaces/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentsRenovations: Documents[] = []
  constructor() {
    this.documentsRenovations = [
      {
        title: "Badkamer",
        information: { filename: "assets/documenten/renovatie/renovatie_badkamer.pdf" },
        showQuotes: false,
        quotes: [
          { filename: "assets/documenten/renovatie/renovatie_badkamer_offerte_STG.pdf" },
          { filename: "assets/documenten/renovatie/renovatie_badkamer_offerte_Vancalsteren.pdf" }
        ]
      },
      {
        title: "Elektriciteit",
        information: { filename: "assets/documenten/renovatie/renovatie_elektriciteit.pdf" },
        showQuotes: false,
        quotes: []
      },
      {
        title: "Ramen tuinhuis",
        information: { filename: "assets/documenten/renovatie/bouw_ramen_tuinhuis.pdf" },
        showQuotes: false,
        quotes: [
          { filename: "assets/documenten/renovatie/bouw_ramen_tuinhuis_offerte_raamSelect.pdf" },
          { filename: "assets/documenten/renovatie/bouw_ramen_tuinhuis_offerte_stebo(winsol).pdf" },
          { filename: "assets/documenten/renovatie/bouw_auto_garagepoorten_offerte_stebo(winsol).pdf" }
        ]
      }
    ]
  }
}
