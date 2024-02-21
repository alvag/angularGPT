import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component( {
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar-menu-item.component.html',
  styleUrl: './sidebar-menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class SidebarMenuItemComponent {
  @Input( { required: true } ) icon!: string;
  @Input( { required: true } ) title!: string;
  @Input( { required: true } ) description!: string;
  @Input( { required: true } ) path!: string;
}
