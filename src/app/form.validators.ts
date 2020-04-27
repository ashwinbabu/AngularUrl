import { ValidationErrors, AbstractControl } from '@angular/forms';

export class FormValidators {

  static  validUrl(control : AbstractControl) : ValidationErrors | null {
   
    let regex = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");

        if(!((control.value as string).match(regex))){
            return { validUrl : false}
        }
        return null
    }
}