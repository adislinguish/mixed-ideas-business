import { Component, computed, effect, input, model, signal } from "@angular/core";

@Component({
    selector: 'fc-checkbox',
    standalone: true,
    styles: `
        :host {
            display: block;
            padding: 10px;
            border: 1px solid ;
            margin-top: 20px;
            margin-right: 10px;
        }
    `,
    template: `
        <label>
            {{label()}}
            <input type="checkbox" 
            (click)="updateAdmin()"
            [checked]="checked()">
        </label>
    `
})
export class FCCheckBoxComponent {
    label = input('');
    checked = model(false);

    updateAdmin() {
        this.checked.set(!this.checked());
    }
}

@Component({
    selector: 'fc-test',
    standalone: true,
    imports: [FCCheckBoxComponent],
    template: `
        <fc-checkbox label="Admin" [(checked)]="isAdmin"/>
        <hr>
        <p>
            {{adminMessage()}} user
        </p>
        <p>
            {{displayText()}}
        </p>
    `
})
export class FCTestCheckbox {
    displayText = signal('');
    isAdmin = signal(false);
    adminMessage = computed(() => this.isAdmin() ? 'Admin' : 'Regular');

    constructor() {
        effect(() => {
            this.displayText.update(s => s += this.isAdmin() ? 'R' : 'A')
        });
    }
}