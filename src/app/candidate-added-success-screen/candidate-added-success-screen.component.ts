import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-added-success-screen',
  templateUrl: './candidate-added-success-screen.component.html',
  styleUrls: ['./candidate-added-success-screen.component.css']
})
export class CandidateAddedSuccessScreenComponent implements OnInit{

  constructor(private router: Router){}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/generalLogin']);
  }, 5000);
  }

}
