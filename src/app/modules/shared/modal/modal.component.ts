import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '@app/services/authentication.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalTitle;
  @Input() modalContent;

  constructor(
    public activeModal: NgbActiveModal,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.activeModal.close();
    this.auth.logout();
  }

}
