import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';

@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.component.html',
  styleUrls: ['./cancel-appointment.component.css']
})
export class CancelAppointmentComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private milly: MillyBackendService
  ) { }

  public appointment_id: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.appointment_id = params.get('id_appointment')
    })
  }

  handleAction(action: string) {
    console.log(action)
    switch(action) {
    case 'back':
      //this.route.
    break;
    case 'confirm':
      this.milly.deleteReservation(this.appointment_id)
        .subscribe(res => {
          console.log(res)
          alert(res.messages.join(' | '))
          this.router.navigateByUrl('/list_appointments')
        })
    break;
    }
  }

}
