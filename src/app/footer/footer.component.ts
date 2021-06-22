import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public listItems: any;

  constructor(private http: HttpClient) { }

  stepSort(testArr: any){
    let sortedArr = testArr.sort((a: any, b: any) => a.stepNumber - b.stepNumber);
    sortedArr.forEach((element: any) => {
      element.versionContent.sort((a: any, b: any) => b.effectiveDate - a.effectiveDate)
    });
    console.log(sortedArr);
    return sortedArr;
  }
  
  ngOnInit() {


    this.http.get("https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge").subscribe(res => {

      this.listItems = this.stepSort(res);
      console.log(res);
      return this.listItems;
    })


  }

}
