import { NgModule } from '@angular/core';
import { UploadComponent } from './upload/upload';
import { SignatureComponent } from './signature/signature';
import { AddsignComponent } from './addsign/addsign';
@NgModule({
	declarations: [UploadComponent,
    SignatureComponent,
    AddsignComponent],
	imports: [],
	exports: [UploadComponent,
    SignatureComponent,
    AddsignComponent]
})
export class ComponentsModule {}
