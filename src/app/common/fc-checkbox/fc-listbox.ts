import { Component, computed, inject, input, model } from "@angular/core";

export type Orientation = 'vertical' | 'horizontal';

@Component({
    selector: 'fc-listbox',
    template: `<ng-content/>`,
    standalone: true,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            border: 1px solid black;
        }
    `
})
export class FCListBox<T> {
    value = model<T>();
    selected = input(false);
    disabled = input(false);
    readonly orientation = model<Orientation>('horizontal');
}

@Component({
    selector: 'fc-option',
    host: {
        'role': 'option',
        '[attr.aria-disabled]': 'isDisabled()',
        '[attr.aria-selected]': 'isSelected()',
        '(click)': 'updateSelected()'
    },
    template: `
        <ng-content />
        @if (isSelected()) {
            <label>✓</label>
        }
    `,
    standalone: true,
    styles: `
        :host {
            display: block;
            border: 1px solid black;
            padding: 10px;
            margin: 10px;
            cursor: pointer;
        }

        :host[aria-disabled="true"] {
            cursor: default;
            border-color: gray;
            color: gray;
        }
    `
})
export class FCOption<T> {
    
    public listbox = inject(FCListBox);

    readonly disabled = input(false);
    value = input.required<T>();

    protected isDisabled = computed(() => this.listbox.disabled() || this.disabled());
    protected isSelected = computed(() => this.listbox.value() === this.value());

    public updateSelected(): void {
        if (!this.isDisabled()) {
            this.listbox.value.set(this.value());
        }
    }

}