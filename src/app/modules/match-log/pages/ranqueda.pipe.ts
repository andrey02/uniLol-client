import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../../../config/translate.config';
@Pipe({name: 'ranqueada'})
export class RanqueadaPipe implements PipeTransform
{
   
    constructor()
    {

    }
    transform(_tipoNivel: string, ...args: any[]) 
    {
        let ranqueada = _tipoNivel.toLocaleLowerCase().replace(" ", "_"); 
        switch(ranqueada)
        {
            case "gold_i":
            return "gold-i-symbol";
            case "gold_ii":
            return "gold-ii-symbol";
            case "gold_iii":
            return "gold-iii-symbol";
            case "gold_iv":
            return "gold-iv-symbol";
            case "gold_v":
            return "gold-v-symbol";

            case "bronze_i":
            return "bronze-i-symbol";
            case "bronze_ii":
            return "bronze-ii-symbol";
            case "bronze_iii":
            return "bronze-iii-symbol";
            case "bronze_iv":
            return "bronze-iv-symbol";
            case "bronze_v":
            return "bronze-v-symbol";

            case "diamond_i":
            return "diamond-i-symbol";
            case "diamond_ii":
            return "diamond-ii-symbol";
            case "diamond_iii":
            return "diamond-iii-symbol";
            case "diamond_iv":
            return "diamond-iv-symbol";
            case "diamond_v":
            return "diamond-v-symbol";

            case "platinum_i":
            return "platinum-i-symbol";
            case "platinum_ii":
            return "platinum-ii-symbol";
            case "platinum_iii":
            return "platinum-iii-symbol";
            case "platinum_iv":
            return "platinum-iv-symbol";
            case "platinum_v":
            return "platinum-v-symbol";

            case "silver_i":
            return "silver-i-symbol";
            case "silver_ii":
            return "silver-ii-symbol";
            case "silver_iii":
            return "silver-iii-symbol";
            case "silver_iv":
            return "silver-iv-symbol";
            case "silver_v":
            return "silver-v-symbol";
        }
    }
}