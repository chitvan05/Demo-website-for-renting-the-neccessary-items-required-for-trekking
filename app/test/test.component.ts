import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>

<h1>
welcome {{name}}
</h1>
<h2>
{{2+2}}
</h2>
<h2>STYLE</h2>
<h2></h2>


  </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	public name = "STARis";
	public myid = "testid";
	public isdisabled  = false ;

  constructor() { }

  ngOnInit() {
  }

}
