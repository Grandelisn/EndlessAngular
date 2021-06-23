import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public listItems: any;

  constructor(private http: HttpClient) { }

  //This function sorts the data from the api call
  //First it sorts the data by step number
  //Then it loops through the data and for each element sorts the versionContent by date
  stepSort(testArr: any){
    let sortedArr = testArr.sort((a: any, b: any) => a.stepNumber - b.stepNumber);
    sortedArr.forEach((element: any) => {
      element.versionContent.sort((a: any, b: any) => b.effectiveDate - a.effectiveDate)
    });
    return sortedArr;
  }
  ngOnInit() {
    this.http.get("https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge").subscribe(res => {
    this.listItems = this.stepSort(res);
    return this.listItems;
    })
  }
}