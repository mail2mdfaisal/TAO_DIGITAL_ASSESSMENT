import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  firstFormGroup: FormGroup = this.fb.group({
    fullName: [''],
    displayName: ['']
  });
  secondFormGroup: FormGroup = this.fb.group({
    workspaceName: [''],
    workspaceUrl: ['']
  });

  //template string
  readonly brand: string = 'Eden';
  readonly logoUrl: string = '../../assets/logo.JPG';
  readonly doneImg: string = '../../assets/check-circle-solid.JPG"';
  readonly welcomeHeader: string = 'Welcome! First things first...';
  readonly welcomeText: string = 'You can aways change them later.';
  readonly fullName: string = 'Full Name';
  readonly displayName: string = 'Display Name';
  readonly create: string = 'Create Workspace';
  readonly setupTitle: string = 'Let`s setup a home for all your work';
  readonly workspaceText: string = 'You can always create another workspace later.';
  readonly workspaceName: string = 'Workspace Name';
  readonly workspaceUrl: string = 'Workspace URL';
  readonly optional: string = '(optional)';
  readonly planTitle: string = 'How are you planning to use Eden?'
  readonly planText: string = 'We`ll stremline your setup accordingly.'
  readonly launchTitle: string = 'Congratulations, Eren!'
  readonly launchText: string = 'You have completed onboarding, you can start Eden!'
  readonly launchBtn: string = 'Launch Eden'
  readonly required: string = 'This field is required'


  readonly workspace = [{ icon: '../../assets/self.JPG', header: 'For myself', text: 'write better. think more clearly. Stay organized' },
  { icon: '../../assets/team.JPG', header: 'With my team', text: 'Wikis, docs, tasks & projects, all in one place' }]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      fullName: ['', Validators.required],
      displayName: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      workspaceName: ['', Validators.required],
      workspaceUrl: ['']
    });
  }

  get f() { return this.firstFormGroup.controls; }
  get f1() { return this.secondFormGroup.controls; }

  onSubmit() {
    if (this.firstFormGroup.invalid)
      return;

  }
  onSubmit1() {
    if (this.secondFormGroup.invalid)
      return;
  }
}
