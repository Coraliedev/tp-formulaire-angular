import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-carte-visite',
  templateUrl: './formulaire-carte-visite.component.html',
  styleUrls: ['./formulaire-carte-visite.component.css'],
})
export class FormulaireCarteVisiteComponent implements OnInit {
  carteVisites: any[] = [
    {
      nom: 'Acquaert',
      prenom: 'Coralie',
      email: 'coralie.acquaert@gmail.com',
      entreprise: 'm2i',
      telephone: '0600000000',
    },
  ];
  carteVisite: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    entreprise: ['', [Validators.required, Validators.minLength(2)]],
    telephone: ['', [Validators.required, Validators.minLength(10)]],
  });
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  private addCarte(): void {
    this.carteVisites.push(this.carteVisite.value);
    console.log(this.carteVisite.value);

    this.carteVisite.reset();
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.carteVisite.valid) {
      this.addCarte();
    } else {
      console.log('Formulaire invalid');
    }
  }

  ngOnInit(): void {}
}
