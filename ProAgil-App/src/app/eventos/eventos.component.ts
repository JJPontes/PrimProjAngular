import { Evento } from './../_models/Evento';
import { EventoService } from './../_services/Evento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  title = 'Eventos';

  _filtroLista = '';

  modoSalvar = 'post';

  eventosFiltrados: Evento[];
  eventos: Evento[];
  evento: Evento;
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImg = false;
  registerForm: FormGroup;
  bodyDeletarEvento = '';
  file: File;
  fileNameToUpdate: string;
  atual: string;

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private localeService: BsLocaleService,
    private toastr: ToastrService
  ) {
    this.localeService.use('pt-br');
  }

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ?
      this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  openModal(template: any) {
    this.registerForm.reset();
    template.show(template);
  }

  ngOnInit() {
    this.getEventos();
    this.validation();
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1);
  }

  alternarImg() {
    this.mostrarImg = !this.mostrarImg;
  }

  validation() {
    this.registerForm = this.fb.group({
      tema: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      local: ['', Validators.required],
      telefone: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
      imgUrl: ['', Validators.required],
      email: ['', Validators.required],
      data: ['', Validators.required],
    });
  }

  editarEvento(evento: Evento, template: any) {
    this.modoSalvar = 'put';
    this.openModal(template);
    this.evento = Object.assign({}, evento);
    this.fileNameToUpdate = evento.imgUrl.toString();
    this.evento.imgUrl = '';
    this.registerForm.patchValue(this.evento);
  }

  novoEvento(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files;
    }
  }

  uploadImagem() {
    if (this.modoSalvar === 'post') {
      const nomeArquivo = this.evento.imgUrl.split('\\', 3);
      this.evento.imgUrl = nomeArquivo[2];

      this.eventoService.postUpload(this.file, nomeArquivo[2])
      .subscribe(
        () => {
          this.atual = new Date().getMilliseconds().toString();
          this.getEventos();
        }
      );
    } else{
      this.evento.imgUrl = this.fileNameToUpdate;
      this.eventoService.postUpload(this.file, this.fileNameToUpdate)
      .subscribe(
        () => {
          this.atual = new Date().getMilliseconds().toString();
          this.getEventos();
        }
      );
    }
  }


  salvarAlteracao(template: any) {
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.evento = Object.assign({}, this.registerForm.value);
        this.uploadImagem();
        this.eventoService.postEvento(this.evento).subscribe(
          (novoEvento: Evento) => {
            template.hide();
            this.getEventos();
            this.toastr.success('Inserido com sucesso!');
          }, error => {
            this.toastr.error(`Erro ao tentar inserir: ${error}!`);
          }
        );
      } else {
        this.evento = Object.assign({ id: this.evento.id }, this.registerForm.value);
        this.uploadImagem();
        this.eventoService.putEvento(this.evento).subscribe(
          () => {
            template.hide();
            this.getEventos();
            this.toastr.success('O evento foi editado com sucesso!');
          }, error => {
            this.toastr.error(`Erro ao Editar: ${error}`);
          }
        );
      }
    }
  }

  excluirEvento(evento: Evento, template: any) {
    this.openModal(template);
    this.evento = evento;
    this.bodyDeletarEvento = `Tem certeza que deseja excluir o Evento: ${evento.tema}, Código: ${evento.id}`;
  }

  confirmeDelete(template: any) {
    this.eventoService.deleteEvento(this.evento.id).subscribe(
      () => {
        console.log(this.evento.id);
        template.hide();
        this.getEventos();
        this.toastr.success('O evento foi excluido com sucesso!');
      }, error => {
        this.toastr.error(`Erro ao tentar deletar: ${error}`);
      }
    );
  }

  getEventos() {
    this.eventoService.getAllEvento().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar eventos: ${error}`);
      });
  }

}


