import { CampeaoDTO } from '../service/timeline.service';

export class DadosPartida
{
    public campeaoDTO:CampeaoDTO;
    public morte:number;
    public abate:number;
    public showDetail :boolean;
    public asistencia:number;
    public goldTotal:number;
    public resultado:string;
    public detail:any;
    public loadingDetail:boolean;
    public duracaoPartida:number;
    public levelCampeao:number;
    public mapa:string;
    public participantId:string;
    public build:Array<{name:string,itemIdApi:string, caminho_imagem:string}>;
    public runas:Array<{name:string, runaIdApi:string, caminho_imagem:string}>;
    public spells:Array<{nome:string, id:string, caminho_imagem:string}>;
    public matchId:string;
    public participants:Array<{
        team:string,  // tipos de time 100 e 200
        campeaoDTO:CampeaoDTO,
        accountId:string,
        participantId:number,
        danoCausado:number,
        regiao:string,
        laneType:string,
        role:string,
        nome:string
    }>

}