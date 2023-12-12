
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class ApiConfiguration {

  // Staging
  baseUrl = 'https://api.akamai.bigcityvoucher.co.in/v2';

  // login 
  login = this.baseUrl + "/login/login"

  //campaign
  //create-campaign
  createCampaign = this.baseUrl + "/hubadmin/create-campaign"
  
}
export interface ApiConfigurationInterface { }