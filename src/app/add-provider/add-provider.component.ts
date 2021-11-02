import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Provider } from '../classes/provider';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-add-provider',
    templateUrl: './add-provider.component.html',
    styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent {
    @Output()
    toggleAdd: EventEmitter<void> = new EventEmitter();
    @Input()
    providers:Provider[];
    form: FormGroup;
    constructor(private providerService: ProviderService) {
        this.form = new FormGroup({
            name: new FormControl(),
            leadTime: new FormControl(),
            email: new FormControl()
        })
    }

    onSubmit() {
        let newProv=new Provider();
        newProv.name=this.form.value.name;
        newProv.leadTime=this.form.value.leadTime;
        newProv.email=this.form.value.email;
        this.providerService.add(newProv);
        this.providers.push(newProv);
    }

}
