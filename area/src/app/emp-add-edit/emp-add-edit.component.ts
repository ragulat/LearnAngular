import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})
export class EmpAddEditComponent  implements OnInit{
  empForm: FormGroup;


  education: string[] =[
    'Active',
    'Suspended',

  ];
  constructor(
    private _fb: FormBuilder, 
    private _empSrevice: EmployeeService, 
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.empForm = this._fb.group({
      OrganizationName : '',
      email:'',
      contactno:'',
      OrganizationType: '',
      LicenseTerm:'',
      LicenseExpiry: '',
      Status: '',
      Action: '',
    
    });

  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empSrevice
        .updateEmployee(this.data.id,this.empForm.value)
        .subscribe({
          next:(val:any) => {
            alert('Employee detail updat!');
            this._dialogRef.close(true);
    
          },
          error: (err: any) => {
            console.error(err);
          },
         });
        
      } else {
        this._empSrevice.addEmployee(this.empForm.value).subscribe({
          next:(val:any) => {
            alert('Employee added successfully');
            this._dialogRef.close(true);
    
          },
          error: (err: any) => {
            console.error(err);
          },
         });

      }
    
    }
  }

}
