import { Component, OnInit, Input } from "angular2/core";
import { Observable } from "rxjs/Rx";
declare let moment: any;

@Component({
    selector: "ng-timer",
    template: `{{ time }}`,
    inputs: ["startTime", "format"]
})
export class TimerComponent implements OnInit {

    public time: string;

    @Input()
    format: string;

    @Input()
    startTime: number = 1000;

    ngOnInit() {
        Observable
            .timer(this.startTime, 1)
            .subscribe(t => this.time = moment(t).format(this.format));
    }
}
