import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ChartsService } from '../../../service/charts.service';

declare var Chart: any;

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements AfterViewInit {
  // tslint:disable-next-line:whitespace
  public data: any;
  public result: any[];
  constructor(private service: ChartsService) { }
 
  canvas: any;
  ctx: any;
  id: any;
  months: any[] = [];

  ngAfterViewInit() {
    this.service
      .GetDataChart()
      .subscribe((res) => {
        this.data = res;
        this.result = [];
        this.data.sort();

        let current = null;
        let cnt = 0;
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].userId !== current) {
            if (cnt > 0) {
              this.result.push({ 'name': this.data[i].userId, 'count': cnt });
            }
            current = this.data[i].userId;
            cnt = 1;
          } else {
            cnt++;
          }
        }
        if (cnt > 0) {
        }
      this.render()

      });
  }

  render(){
    this.canvas = document.getElementById("myChart");
    this.ctx = this.canvas.getContext("2d");
    let myChart = new Chart(this.ctx, {
      type: "bar",
      data: {
        labels: this.result && this.result.map(item => item.name),
        datasets: [
          {
            label: " ",
            data: this.result && this.result.map(item => item.count),
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(224, 0, 234, 1)",
              " rgba(224, 0, 162, 1)",
              "rgba(67, 79, 162, 1)"
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }
}
