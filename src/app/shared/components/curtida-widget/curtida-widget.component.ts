import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-curtida-widget',
  imports: [FontAwesomeModule],
  templateUrl: './curtida-widget.component.html',
  styleUrl: './curtida-widget.component.scss',
})
export class CurtidaWidgetComponent implements OnInit {
  @Output() public curtida = new EventEmitter<void>();

  @Input() public numeroLikes = 0;
  @Input() public id: string = null;

  public icones = { faThumbsUp };

  constructor(private service: UniqueIdService) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.service.gerarIDComPrefixo('like');
      // console.log(this.id);
    }
  }

  public darCurtida() {
    this.curtida.emit();
  }
}
