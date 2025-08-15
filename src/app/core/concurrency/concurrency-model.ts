import { ModelSignal } from "@angular/core";

export interface ConcurrencyFormModel<T> {
    type?: string;
    value?: ModelSignal<T | undefined>;
    options?: {name: string, value: string}[] | any;
}

type ConcurrencyType<T> = ConcurrencyFormModel<T> | string | undefined | any;

export interface Concurrency {
    concurrency?: ConcurrencyType<string>;
    firstConcurrency: ConcurrencyType<{name: string, value: string}>;
    secondConcurrency: ConcurrencyType<{name: string, value: string}>;
}

export const concurrencies: Concurrency[] = [
    {
        firstConcurrency: 'USD1',
        secondConcurrency: 'Pound1'
    },
    {
        firstConcurrency: 'USD2',
        secondConcurrency: 'Pound2'
    },
    {
        firstConcurrency: 'USD3',
        secondConcurrency: 'Pound3'
    }
];

