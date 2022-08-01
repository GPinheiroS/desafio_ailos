import data from "src/data/pessoas.json"
import { Injectable } from '@angular/core';
import { ICooperadorFullData } from 'src/models/interface/CooperadorInterface';

@Injectable({providedIn: 'root'})
export class CooperadorControllerService {

    constructor() {}

    getCooperador(): ICooperadorFullData[]{
        return data;
    }    
}