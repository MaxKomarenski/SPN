import {Component} from "react";

export default class ServerRequests extends Component<{}>{

    async  getCountriesFromApi() {
        try {
            let response = await fetch(
                'http://10.0.2.2:8080/loadCountryList'
            );
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
}