import { Component, EventEmitter, Input, Output } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
    standalone: true,
      imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule]
})
export class UserCardComponent {
    @Input()
  user: any;

  @Output()
  deleteUser = new EventEmitter();
  
  onDeleteUser(uersId: number) {
    this.deleteUser.emit(uersId);
  }
}