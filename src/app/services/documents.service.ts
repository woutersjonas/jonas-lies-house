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
        information: { filename: "assets/documenten/renovatie/badkamer/renovatie_badkamer.pdf" },
        showExtraInformation: false,
        extraInformation: [
          { filename: "assets/documenten/renovatie/badkamer/plannen_badkamer.pdf" },
          { filename: "assets/documenten/renovatie/badkamer/renovatie_badkamer_prijzen_desco.pdf" },

        ],
        showQuotes: false,
        quotes: [
          { filename: "assets/documenten/renovatie/badkamer/offertes/tegels_offerte_den_dan.pdf" },
          { filename: "assets/documenten/renovatie/badkamer/offertes/tegels_offerte_gilbo.pdf" },
          { filename: "assets/documenten/renovatie/badkamer/offertes/meubels_offerte_desco.pdf" },
          { filename: "assets/documenten/renovatie/badkamer/offertes/meubels_offerte_stg_met_fouten.pdf" },
          { filename: "assets/documenten/renovatie/badkamer/offertes/renovatie_badkamer_offerte_Vancalsteren.pdf" }
        ]
      },
      {
        title: "Elektriciteit",
        information: { filename: "assets/documenten/renovatie/elektriciteit/renovatie_elektriciteit.pdf" },
        showExtraInformation: false,
        extraInformation: [],
        showQuotes: false,
        quotes: []
      },
      {
        title: "Ramen tuinhuis + poorten",
        information: { filename: "assets/documenten/renovatie/bouw_ramen_tuinhuis.pdf" },
        showExtraInformation: false,
        extraInformation: [],
        showQuotes: false,
        quotes: [
          { filename: "assets/documenten/renovatie/ramen_tuinhuis/bouw_ramen_tuinhuis_offerte_raamSelect.pdf" },
          { filename: "assets/documenten/renovatie/ramen_tuinhuis/bouw_ramen_tuinhuis_offerte_stebo(winsol).pdf" },
          { filename: "assets/documenten/renovatie/poorten_garage/bouw_auto_garagepoorten_offerte_stebo(winsol).pdf" }
        ]
      }
    ]
  }
}
