import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, TextBoxComponent],
  exports: [ButtonComponent, TextBoxComponent]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule
    };
  }
}

