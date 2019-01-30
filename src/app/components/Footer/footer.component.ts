import { Component, OnInit, Output, EventEmitter, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';
import { ProgressbarService } from '../../services/progressbar.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, DoCheck {

  @ViewChild('content') registerModalContent: ElementRef;

  @Output() modalEvent = new EventEmitter<any>();
  closeResult: string;

  isValidate: boolean = false;
  isSubmit: boolean = false;
  progressValue: number;
  nextRoute: boolean = false;
  isDone: boolean = false;

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    // tslint:disable-next-line:max-line-length
    Email: new FormControl('', [Validators.required, Validators.pattern('\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\w+)*(\\.\\w{2,5})+')])
  });


  constructor(private modalService: NgbModal, private router: Router, private shared: SharedServiceService,
    private progress: ProgressbarService, private restService: HttpService) { }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.shared.isNextClicked = false;
  }

  open(payment: any) {
    this.modalService.open(payment, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  continueFn(text) {
    this.shared.isNextClicked = true;
    if (text === 'termsConditions') {
      if (!this.checkFormValidation('continue')) {
        this.openVerticallyCentered(this.registerModalContent);
      }
    } else {
      if (this.registerForm.valid) {
        this.router.navigate(['personal']);
        this.shared.nextClicked = false;
        this.modalService.dismissAll(this.registerModalContent);
        this.isValidate = true;
        this.shared.isNextClicked = false;
        this.shared.registerForm = this.registerForm;
      } else {
      }
    }
  }

  nextFn() {
    this.shared.isNextClicked = true;
    if (this.router.url === '/personal') {
      if (!this.checkFormValidation('next')) {
        this.router.navigate(['personal/employer']);
        this.shared.isNextClicked = false;
      }
    } else if (this.router.url === '/personal/employer') {
      if (!this.checkFormValidation('next')) {
        this.router.navigate(['personal/animal']);
        this.shared.isNextClicked = false;
      }
      this.shared.employerObject = this.shared.childFormValues;
    } else if (this.router.url === '/personal/animal') {
      if (!this.checkFormValidation('next')) {
        this.router.navigate(['personal/vehicle']);
        this.shared.isNextClicked = false;
      }
      this.shared.animalsObject = this.shared.childFormValues;
    } else if (this.router.url === '/personal/vehicle') {
      if (!this.checkFormValidation('next')) {
        this.router.navigate(['personal/background-info']);
        this.shared.isNextClicked = false;
      }
      this.shared.vehiclesObject = this.shared.childFormValues;
    } else if (this.router.url === '/personal/background-info') {
      this.router.navigate(['termsandconditions']);
    } else if (this.router.url === '/termsandconditions') {
      this.router.navigate(['docusign']);
    } else if (this.router.url === '/docusign') {
      this.checkForDocuSign();
    }
    this.saveData();
  }

  backFn() {
    this.shared.isNextClicked = false;
    if (this.router.url === '/personal') {
      this.router.navigate(['tenant']);
    } else if (this.router.url === '/personal/employer') {
      this.router.navigate(['personal']);
    } else if (this.router.url === '/personal/animal') {
      this.router.navigate(['personal/employer']);
    } else if (this.router.url === '/personal/vehicle') {
      this.router.navigate(['personal/animal']);
    } else if (this.router.url === '/personal/background-info') {
      this.router.navigate(['personal/vehicle']);
    } else if (this.router.url === '/termsandconditions') {
      this.router.navigate(['personal/background-info']);
    } else if (this.router.url === '/payment') {
      this.router.navigate(['termsandconditions']);
    } else if (this.router.url === '/paymentSuccess') {
      this.router.navigate(['payment']);
    }
  }
  closeModal(payment) {
    this.modalService.dismissAll(payment);
  }
  submitFn() {
    if (this.isSubmit) {
      if (this.router.url === '/payment') {
        this.isDone = true;
      }
    }
  }
  checkFormValidation(type) {
    if (type === 'next') {
      if (this.shared.personalInfoFormDetails && this.router.url === '/personal') {
        return !this.shared.personalInfoFormDetails.valid;
      } else if (this.shared.childFormValues && this.router.url === '/personal/employer') {
        if (this.shared.childFormValues.controls.employer) {
          return !this.shared.childFormValues.controls.employer.valid;
        }
      } else if (this.shared.childFormValues && this.router.url === '/personal/animal') {
        if (this.shared.childFormValues.controls.animals) {
          return !this.shared.childFormValues.controls.animals.valid;
        }
      } else if (this.shared.childFormValues && this.router.url === '/personal/vehicle') {
        if (this.shared.childFormValues.controls.vehicles) {
          return !this.shared.childFormValues.controls.vehicles.valid;
        }
      } else if (this.shared.termsObject && this.router.url === '/termsandconditions') {
        return !this.shared.termsObject.valid && this.shared.termsObject.get('agree').value === ''
          ? true : !this.shared.termsObject.get('agree').value;
      } else {
        return false;
      }
    }
    if (type === 'continue') {
      if (this.shared.tenantAcceptanceForm) {
        return !this.shared.tenantAcceptanceForm.valid || this.shared.tenantAcceptanceForm.get('accept').value === ''
          ? true : !this.shared.tenantAcceptanceForm.get('accept').value && this.shared.tenantAcceptanceForm.valid;
      }
    }
  }
  saveData() {
    this.shared.finalFormObject = Object.assign({}, this.shared.personalInfoFormDetails.value);
    if (this.shared.employerObject) {
      this.shared.finalFormObject = Object.assign({}, this.shared.finalFormObject, this.shared.employerObject.value);
    }
    if (this.shared.animalsObject) {
      this.shared.finalFormObject = Object.assign({}, this.shared.finalFormObject, this.shared.animalsObject.value);
    }
    if (this.shared.vehiclesObject) {
      this.shared.finalFormObject = Object.assign({}, this.shared.finalFormObject, this.shared.vehiclesObject.value);
    }
    if (this.shared.backgroundInfoValues) {
      this.shared.finalFormObject = Object.assign({}, this.shared.finalFormObject, this.shared.backgroundInfoValues);
    }
  }

  nextRouteFn() {
    this.router.navigate(['paymentSuccess']);
  }
  checkForDocuSign() {
    this.restService.getData('test').subscribe(response => {
      if (response['result']) {
        this.shared.docuCheck = false;
        this.router.navigate(['payment']);
        this.isSubmit = true;
        this.progress.changeInProgressBar$.next();
      } else {
        this.shared.docuCheck = true;
      }
    }, error => {
      this.shared.docuCheck = true;
    });
  }
  ngDoCheck() {
    if (this.router.url === '/tenant') {
      this.isValidate = false;
    } else {
      this.isValidate = true;
    }
    if (this.router.url === '/personal') {
      this.shared.nextClicked = false;
    } else {
      this.shared.nextClicked = true;
    }
    if (this.router.url === '/payment') {
      this.isSubmit = true;
    } else {
      this.isSubmit = false;
    }
    if (this.router.url === '/paymentSuccess') {
      this.isDone = true;
    } else {
      this.isDone = false;
    }
  }

  ngOnInit() {
  }

}
